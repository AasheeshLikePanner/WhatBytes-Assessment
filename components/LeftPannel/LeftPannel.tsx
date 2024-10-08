"use client"
import { useState } from "react"
import { Analytics01Icon, Award04Icon, File02Icon  } from "hugeicons-react"

export default function LeftPannel() {
    const [index, setIndex] = useState(1);
    const [colour, setColour] = useState(["#000000", "#60A5FA", "#000000"]);

    const handleClick = (ind: number) => {
        if (ind === 0) {
            setIndex(0);
            setColour(["#60A5FA", "#000000", "#000000"]);
        } else if (ind === 1) {
            setIndex(1);
            setColour(["#000000", "#60A5FA", "#000000"]);
        } else {
            setIndex(2);
            setColour(["#000000", "#000000", "#60A5FA"]);
        }
    };

    return (
        <div className={`selection:bg-black selection:text-white h-full w-1/6 flex-col flex py-20 text-gray-600 font-bold text-xl border-e-2`}>
            <div
                className={`cursor-pointer flex gap-3 h-20 items-center justify-start w-3/4 px-6
                    rounded-r-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-50 hover:text-blue-400 ${index === 0 ? 'bg-gray-100 text-blue-500' : ''}`}
                onClick={() => handleClick(0)}>
                <Analytics01Icon size={24} color={colour[0]} />
                <h1 className="text-start">Dashboard</h1>
            </div>
            <div
                className={`cursor-pointer flex gap-3 h-20 items-center justify-start w-3/4 px-6
                    rounded-r-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-50 hover:text-blue-400 ${index === 1 ? 'bg-gray-100 text-blue-500' : ''}`}
                onClick={() => handleClick(1)}>
                <Award04Icon size={24} color={colour[1]} />
                <h1 className="text-start">Skill Test</h1>
            </div>
            <div
                className={`cursor-pointer flex gap-3 h-20 items-center justify-start w-3/4 px-6
                    rounded-r-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-50 hover:text-blue-400 ${index === 2 ? 'bg-gray-100 text-blue-500' : ''}`}
                onClick={() => handleClick(2)}>
                <File02Icon size={24} color={colour[2]} />
                <h1 className="text-start">Internship</h1>
            </div>
        </div>
    );
}