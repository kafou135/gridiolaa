'use client'

import { AllFixtures, Fixture, Standing } from "@/types";
import Image from "next/image";
import moment from "moment";
export default function StandingsAndFixtures({
    match
}: {
    match: Fixture[]
}) {
    const currentTime = moment().format("YYYY-MM-DD");
   
    return (
        <div>
            {currentTime>'2025-02-11' ? (<h1>hii</h1>): (<h1>hohohoh</h1>)}
            <div className="w-1/3 flex flex-col justify-center items-center text-center">
                <img
                    src={match[0]?.teams.home.logo}
                    alt="HomeLogo"
                    width={70}
                    height={70}
                />
                {match[0]?.teams?.home?.name}
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center h-full">
                <div className="h-1/3 text-xs text-center">
                <h1>{currentTime}</h1>
                </div>
                <div className="h-1/3 text-center">vs</div>
                <div className="h-1/3"></div>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center text-center">
                <img
                    src={match[0]?.teams?.away?.logo}
                    alt="HomeLogo"
                    width={70}
                    height={70}
                />
                {match[0]?.teams?.away?.name}
            </div>
        </div>
    )
}