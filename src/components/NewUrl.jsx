import { useState } from "react"

export default function NewUrl({ newUrl }) {
    const [copied, setCopied] = useState(false)

    function copyUrl() {
        navigator.clipboard.writeText(newUrl).then(setCopied(true))
        setTimeout(() => {
            setCopied(false)
        }, (5000));
    }

    return (
        <div className="flex items-center pt-5">
            <a href={newUrl} className=" hover:underline text-white pr-5">{newUrl}</a>
            <svg onClick={copyUrl} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-copy cursor-pointer" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
            </svg>
            {copied ?
                <div className="animado absolute w-full left-0 bottom-[30px]">
                    <p className="text-white opacity-60 bg-black mx-auto p-2 rounded-xl w-fit text-center">Copied to clippboard</p>
                </div>
                : null}
        </div>
    )
}