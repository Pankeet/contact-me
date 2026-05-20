"use client";

import { ReactElement  } from "react";

export default function CardElement({Icon,text,description} : Readonly<{text:string,Icon: ReactElement ,description:string}>){
    return (
        <div className="flex items-center w-full gap-3 p-3 border rounded-xl shadow-white/15 z-10 hover:scale-115 transition-all duration-300">
            {Icon}
            <div className="min-w-0">
                <div>
                    <span className="lg:text-xs text-lg font-semibold">{text}</span>
                </div>
                <div>
                    <span className="lg:text-xs text-xl font-normal wrap-break-word">{description}</span>
                </div>
            </div>
        </div>
    )
}