

import { useRef } from 'react';

export function TypingSection() {
    const descriptionRef = useRef(null);

    const autoResize = () => {
        const textarea = descriptionRef.current;
        textarea.style.height = 'auto'; // Reset the height
        textarea.style.height = `${textarea.scrollHeight}px`; // Set the height based on content
    };

    return (
        <>
            <div className="w-auto h-auto flex flex-col p-4 gap-2 p-2">
                <div className='border border-black rounded-md w-auto h-auto flex flex-col'>
                    <input type="text" placeholder="Title" className="font-bold text-4xl p-4" />
                    <textarea
                        ref={descriptionRef}
                        placeholder="Description"
                        className="font-semibold p-4 h-auto"
                        onInput={autoResize}
                        style={{ minHeight: '50px', overflow: 'hidden', resize: 'none' }} // Adjust styles
                    ></textarea>
                </div>

                <div className='flex gap-2'>
                    <div>
                    
                        <select className='border border-black rounded-sm p-1'>
                            <option value={"toSelect"} selected className='font-semibold'>Select an option</option>
                            <option value={"todo"}>todo</option>
                            <option value={"inProgress"}>In Progress</option>
                            <option value={"completed"}>Completed</option>
                        </select>
                    </div>

                    <div>
                        <button className='border border-black w-auto p-1 rounded-sm font-semibold'>Add todo +</button>
                    </div>
                </div>
            </div>
        </>
    );
}
