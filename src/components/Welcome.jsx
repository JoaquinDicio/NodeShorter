export default function Welcome({ setStarted }) {

    return (
        <div className="flex flex-col items-center justify-center pt-20 sm:h-[80vh]">
            <p className='text-white sm:text-3xl text-xl font-bold sm:p-3 w-full pb-3 text-center'>Welcome to NodeShorter</p>
            <p className='text-white text-center pb-10'>The best url shortener powered by Node.js</p>
            <button onClick={() => setStarted(true)} className='hover:bg-blue-900 duration-200 bg-blue-800 text-white rounded p-2 w-[100px]'>Start</button>
        </div>)
}