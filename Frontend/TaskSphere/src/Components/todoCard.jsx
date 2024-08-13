
export function TodoCard({ date, title, time }) {
    return (
        <div >
            <div className="bg-slate-200 hover:scale-105 hover:cursor-pointer hover:bg-slate-300 transition-all ease-in-out  border-2 border-solid border-black w-auto  shrink rounded-md p-2  border-1">
                <div className="flex justify-between m-2 ml-0">
                    <div className="text-xs">{date}</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                    </svg>
                </div>

                <div className="m-4 ml-0">
                    <span className="text-xl font-semibold">{title}</span>
                </div>
                <div className="text-sm">
                    {time}
                </div>
            </div>
        </div>
    )
}
