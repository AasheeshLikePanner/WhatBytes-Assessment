"use client";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import PieChartComp from "@/components/PieChatr/PieChart";

export default function RightSide({ questions }: any) {
  const [progressValues, setProgressValues] = useState({
    htmlTools: 0,
    tags: 0,
    tables: 0,
  });

  // Update the chart data based on the questions prop
  const chartData = [
    { browser: "Correct", visitors: questions, fill: "hsl(224.3, 76.3%, 48%)" },
    { browser: "Wrong", visitors: 15 - questions, fill: "hsl(213.1, 93.9%, 67.8%)" },
  ];

  useEffect(() => {
    console.log("Questions prop updated:", questions);
    const randomizeProgress = (baseValue: number) => {
        // Generate a random offset between -10 and +10
        const randomOffset = Math.floor(Math.random() * 21) - 10; // range from -10 to 10
        const newValue = Math.min(Math.max(baseValue + randomOffset, 0), 100); // ensure the value is between 0 and 100
        return newValue;
      };
    // Update progress values based on the questions prop
    setProgressValues({
        htmlTools: randomizeProgress(Math.floor((questions / 15) * 100)),
        tags: randomizeProgress(Math.floor((questions / 15) * 100)),
        tables: randomizeProgress(Math.floor((questions / 15) * 100)),
      });
     
  }, [questions]); // Depend on questions prop

  return (
    <div className="selection:bg-black selection:text-white w-1/2 h-full animate-fadeIn gap-6">
      <div className="outline outline-1 outline-gray-200 p-10 rounded-lg transition-transform transform hover:scale-105 duration-300 ease-in-out">
        <h1 className="font-bold text-xl">Syllabus Wise Analysis</h1>

        <div className="mt-10 text-xl font-semibold text-gray-600">
          <h1>HTML Tools, Forms, History</h1>
          <div className="mt-5 flex items-center justify-center gap-5">
            <Progress value={progressValues.htmlTools} className="bg-blue-600 transition-all duration-700" />
            <h1 className="text-blue-500 text-xl">{progressValues.htmlTools}%</h1>
          </div>
        </div>

        <div className="mt-10 text-xl font-semibold text-gray-600">
          <h1>Tags & References in HTML</h1>
          <div className="mt-5 flex items-center justify-center gap-5">
            <Progress value={progressValues.tags} className="bg-orange-600 transition-all duration-700" />
            <h1 className="text-orange-500 text-xl">{progressValues.tags}%</h1>
          </div>
        </div>

        <div className="mt-10 text-xl font-semibold text-gray-600">
          <h1>Tables & CSS Basics</h1>
          <div className="mt-5 flex items-center justify-center gap-5">
            <Progress value={progressValues.tables} className="bg-green-600 transition-all duration-700" />
            <h1 className="text-green-500 text-xl">{progressValues.tables}%</h1>
          </div>
        </div>
      </div>
      <div className="mt-5 outline outline-1 outline-gray-200 p-10 rounded-lg transition-transform transform hover:scale-105 duration-300 ease-in-out">
        <div className="flex w-full flex-row">
          <div className="w-1/2 items-end">
            <h1 className="font-bold text-xl">Question Analysis</h1>
          </div>
          <div className="w-1/2 flex items-center justify-end">
            <h1 className="text-xl text-blue-600 font-bold">{questions}/15</h1>
          </div>
        </div>
        <p className="mt-5 text-gray-500 text-lg font-semibold">
          <span className="text-gray-600 text-xl font-bold">You Score {questions} questions correct out of 15.</span> However, it still needs some improvements.
        </p>
        <div className="mt-8">
          <PieChartComp chartData={chartData} />
        </div>
      </div>
    </div>
  );
}
