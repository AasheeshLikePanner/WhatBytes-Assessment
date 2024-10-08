import Image from "next/image";
import profile from '@/public/static/images/image.png';
import logo from '@/public/static/images/logo.png'


export default function Header() {
    return (
        <div className="selection:bg-black selection:text-white w-full h-24 bg-white border-b-2 flex">
            <div className="w-1/2 h-full flex px-10 py-3 items-center">
                <h1 className="font-bold text-4xl transition-transform duration-500 hover:scale-105">
                    WhatBytes
                </h1>
            </div>
            <div className="w-1/2 h-full items-center flex justify-end px-10">
                <button className="min-w h-12 bg-white outline-2 rounded-lg outline outline-gray-300 p-2 font-bold flex items-center justify-center gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100">
                    <Image
                        src={profile}
                        alt="Profile Icon"
                        className="rounded-full w-8 h-8 outline-1 outline transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                    <h1 className="transition-transform duration-300 ease-in-out hover:text-blue-400">
                        Aasheesh Rathour
                    </h1>
                </button>
            </div>
        </div>
    );
}
