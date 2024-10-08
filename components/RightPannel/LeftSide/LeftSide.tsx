"use client"
import Image from "next/image"
import html from "@/public/static/images/html.png"
import { ChampionIcon, CheckmarkBadge03Icon, AnalyticsUpIcon, File02Icon } from "hugeicons-react";
import { useState } from "react";
import Graph from "@/components/Graph/Graph";
import { useForm } from "react-hook-form"; 
import UpdateDataForm from "@/components/FormComp/FormComp";

export default function LeftSide({questions, setQuestions}: any){
    const [rank, setRank] = useState(1);
    const [percentile, setPercentile] = useState(80);
    const {register, handleSubmit:any} = useForm();
    const [isFormOpen, setFormOpen] = useState(false)

    const initialChartData = [
        { score: 0, students: 0},
        { score: 25, students: 3},
        { score: 50, students: 10 },
        { score: 75, students: 5},
        { score: 100, students: 3},
    ]
    
    const [chartData, setChartData] = useState(initialChartData);

    const handleUpdate = (newData: any) => {
        const existingEntry = chartData.find((data) => data.score === newData.score);
    
        let updatedData;
    
        if (existingEntry) {
            updatedData = chartData.map((data) => {
                if (data.score === newData.score) {
                    return { ...data, students: data.students + 1 };
                }
                return data;
            });
        } else {
            updatedData = [
                ...chartData,
                { score: newData.score, students: 1 }
            ];
        }
        updatedData.sort((a, b) => a.score - b.score);

        setChartData(updatedData);
        setFormOpen(false);
        setRank(newData.rank);
        setPercentile(newData.score);
        setQuestions(newData.currentScore);
    };
    
    const handleFormPage = () => {
        setFormOpen(true)
    }

    return(
        <div className="selection:bg-black selection:text-white w-1/2 h-full animate-fadeIn">
            {
                isFormOpen && 
                <div className="z-10 fixed items-start flex justify-center w-1/2 h-screen">
                    <UpdateDataForm onSubmit={handleUpdate}/>
                </div>
            }
            <div className="w-full outline outline-1 outline-gray-200 p-3 rounded-lg flex items-center gap-3 py-5 transition-transform transform hover:scale-105 duration-300 ease-in-out">
                <Image src={html} alt="html" className="w-16 transition-transform transform hover:scale-110 duration-300 ease-in-out" />
                <div className="flex-grow">
                    <h1 className="font-bold">Hyper Text Markup Language</h1>
                    <p className="font-semibold text-gray-700">
                        Questions: {} | Duration: {} | Submitted on 07 Oct 2024
                    </p>
                </div>
                <button onClick={handleFormPage} className="relative p-3 bg-blue-600 text-white rounded-xl w-32 
                    transition-all duration-300 ease-in-out hover:bg-blue-700 
                    hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 
                    focus:outline-none active:scale-95 active:bg-blue-800">

                    Update

                    <span className="absolute inset-0 w-full h-full bg-blue-500 rounded-xl opacity-0
                        transition duration-500 ease-out transform scale-50 hover:opacity-30 
                        hover:scale-100"></span>
                </button>
            </div>

            <div className="w-full outline outline-1 outline-gray-200 p-4 rounded-lg flex flex-col gap-3 py-6 mt-5 animate-fadeInSlow hover:scale-105 duration-300 ease-in-out">

                <h1 className="font-bold text-xl">Quick Statistics</h1>

                <div className="flex">

                    <div className="w-1/3 border-e-2 items-center flex justify-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
                        <div className="mr-4 outline-1 outline rounded-full p-2 transition-colors hover:bg-gray-200 duration-300 ease-in-out">
                            <ChampionIcon size={30} className="bg-white mt-3 transition-transform transform hover:scale-110 duration-300 ease-in-out"/>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">{rank}</h1>
                            <p className="text-gray-600">YOUR RANK</p>
                        </div>
                    </div>

                    <div className="w-1/3 border-e-2 items-center flex justify-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
                        <div className="mr-2 outline-1 outline rounded-full p-2 transition-colors hover:bg-gray-200 duration-300 ease-in-out">
                            <File02Icon size={30} className="bg-white mt-3 transition-transform transform hover:scale-110 duration-300 ease-in-out"/>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">{percentile}%</h1>
                            <p className="text-gray-600">PERCENTILE</p>
                        </div>
                    </div>

                    <div className="w-1/3 items-center flex justify-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
                        <div className="mr-4 outline-1 outline rounded-full p-2 transition-colors hover:bg-gray-200 duration-300 ease-in-out">
                            <CheckmarkBadge03Icon size={30} className="bg-white mt-3 transition-transform transform hover:scale-110 duration-300 ease-in-out"/>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">{questions}/15</h1>
                            <p className="text-gray-600">CORRECT ANSWER</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full outline outline-1 outline-gray-200 p-4 rounded-lg flex flex-col gap-3 py-6 mt-5 animate-fadeInSlow hover:scale-105 duration-300 ease-in-out">
                <h1 className="font-bold text-xl">
                   Comparison Graph 
                </h1>
                <div className="flex">
                    <p className="text-gray-600 text-lg mt-2"><span className="text-xl font-bold text-gray-600">You Scored 30% percentile </span> which is lower than the 
                    average 72% percentile of all the engineers who took this assessment</p>
                    <AnalyticsUpIcon size={70} className="mr-4"/>
                </div>
                <Graph props={chartData}/>
            </div>
        </div>
    )
}
