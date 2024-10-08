"use client"
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
import { useState } from "react";

export default function RightPannel(){
    const [questions, setQuestions] = useState(10);


    return(
        <div className="h-full w-5/6 p-14  gap-10 flex-col">
            <div className="flex-col w-full">
                <h1 className="font-semibold text-xl mb-3">Skill Test</h1>
            </div>
            <div className="flex gap-10">
                <LeftSide questions={questions} setQuestions={setQuestions}/>
                <RightSide questions={questions}/>
            </div>
        </div>
    )
}