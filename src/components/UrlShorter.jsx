import { useEffect, useState } from "react"
import axios from "axios"
import NewUrl from "./NewUrl"

export default function UrlShorter() {
    const [url, setUrl] = useState("")
    const [newUrl, setNewUrl] = useState(null)
    const [err, setErr] = useState(false)
    const [loading, setLoading] = useState(false)

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
    async function shortUrl() {
        try {
            if (!validate()) return null
            setLoading(true)
            await axios.post("https://node-shorter.onrender.com/new", { url }).then((res) => setNewUrl(res.data))

        } catch (err) {
            console.log(err)
            setErr('Something went wrong')
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="flex flex-col justify-center items-center h-[60vh]">
            <h2 className="text-3xl text-white">How it works?</h2>
            <p className="w-full max-w-[500px] pt-2 pb-10 text-center text-white">Just enter a URL and witness the magic of the URL shortener. It will return a new shortened version of the URL.</p>
            <input value={url} onChange={(e) => setUrl(e.target.value)} type="text" placeholder="Enter an URL" className={"p-2 px-4 max-w-96 rounded text-black w-full " + (err && 'border-2 border-red-500')} />
            {newUrl ? <NewUrl newUrl={newUrl} /> : ""}
            <button onClick={shortUrl} className="hover:bg-blue-900 duration-200 bg-blue-800 text-white rounded p-2 w-full mt-5 max-w-96 flex items-center justify-center">Short!{loading && <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" fill="currentColor" className="animate-spin bi bi-alexa" viewBox="0 0 16 16">
                <path d="M7.996 0A8 8 0 0 0 0 8a8 8 0 0 0 6.93 7.93v-1.613a1.06 1.06 0 0 0-.717-1.008A5.6 5.6 0 0 1 2.4 7.865 5.58 5.58 0 0 1 8.054 2.4a5.6 5.6 0 0 1 5.535 5.81l-.002.046-.012.192-.005.061a5 5 0 0 1-.033.284l-.01.068c-.685 4.516-6.564 7.054-6.596 7.068A7.998 7.998 0 0 0 15.992 8 8 8 0 0 0 7.996.001Z" />
            </svg>}</button>
        </div>)
}