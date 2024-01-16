import { useState } from "react"
import axios from "axios"
import NewUrl from "./NewUrl"

export default function UrlShorter() {
    const [url, setUrl] = useState("")
    const [newUrl, setNewUrl] = useState(null)
    const [err, setErr] = useState(false)

    //little validation
    function validate() {
        if (url.trim() == "") {
            setErr(true)
            return false
        }
        else {
            setErr(false)
            return true
        }
    }

    //posting in server
    function shortUrl() {
        try {
            if (!validate()) return null
            axios.post("https://node-shorter.onrender.com/new", { url }).then((res) => setNewUrl(res.data))
        } catch (err) {
            console.log(err)
            setErr('Something went wrong')
        }
    }
    return (
        <div className="flex flex-col justify-center items-center h-[60vh]">
            <h2 className="text-3xl text-white">How it works?</h2>
            <p className="w-full max-w-[500px] pt-2 pb-10 text-center text-white">Just enter a URL and witness the magic of the URL shortener. It will return a new shortened version of the URL.</p>
            <input value={url} onChange={(e) => setUrl(e.target.value)} type="text" placeholder="Enter an URL" className={"p-2 px-4 max-w-96 rounded text-black w-full " + (err && 'border-2 border-red-500')} />
            {newUrl ? <NewUrl newUrl={newUrl} /> : ""}
            <button onClick={shortUrl} className="hover:bg-blue-900 duration-200 bg-blue-800 text-white rounded p-2 w-full mt-5 max-w-96">Short!</button>
        </div>)
}