'use client'

import { Fixture } from "@/types"
import moment from 'moment';
import Image from "next/image";
import Link from "next/link";
import LocalTime from "../LocalTime";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const API_KEY = process.env.API_KEY as string;

type PageProps = {
    match: Fixture,
}

export default function FixtureItem({ match }: PageProps) {
    const router = useRouter();
    const [elapsedTime, setElapsedTime] = useState(match?.fixture?.status?.elapsed);

    useEffect(() => {
        if (["1H", "2H"].includes(match?.fixture?.status?.short)) {
            const interval = setInterval(() => {
                setElapsedTime(prevTime => prevTime + 1);
            }, 60000); // Updates every minute to reflect real match time

            return () => clearInterval(interval);
        }
    }, [match?.fixture?.status?.short]);
    
    useEffect(() => {
        const interval = setInterval(() => {
          router.refresh(); // Refresh the page every second
        }, 60000); // 1000ms = 1 second
    
        return () => clearInterval(interval); // Cleanup interval on unmount
      }, [router]);

    return (
        <Link
            href={`/match1/${match?.fixture?.id}nm${match?.league?.name}seas${match?.league?.season}lid${match?.league?.id}`}
            key={match?.fixture?.id}
            className={`flex w-full p-3 bm-0 justify-between items-center h-24 hover:bg-red-800/50 rounded-md shadow-md`}
        >
            <div className="flex flex-col items-center w-3/12 text-sm">
                        <img src={match?.teams?.home?.logo} alt="HomeLogo" width={50} height={50}  />
                        <div>{match?.teams?.home?.name}</div>
                    </div>

                    <div className="flex flex-col items-center w-6/12 text-xs md:text-sm">
                                <LocalTime fixture={match} />
                <div className="my-1 text-xl font-semibold">
                    {match?.fixture?.status?.short === "NS" ? (
                        <span className="text-lg text-white">vs</span>
                    ) : match?.fixture?.status?.short === "FT" ? (
                        <span className="text-white">{match.goals.home} - {match.goals.away}</span>
                    ) :  match?.fixture?.status?.short === "PEN" ? (
<span className="text-white">
    {match.teams.home.winner === true 
        ? `${match.goals.home + 1} - ${match.goals.away}` 
        : `${match.goals.home} - ${match.goals.away + 1}`}
</span>
                    ) : match?.fixture?.status?.short === "P" ? (
                        <div>
                        <span className="text-red-600">{match.goals.home} - {match.goals.away}</span>
                        <span className="text-red-600 text-xl">PENALTIES</span>
                        </div>
                    ) :  match?.fixture?.status?.short === "AET" ? (
                        <span className="text-white">{match.goals.home} - {match.goals.away}</span>
                    ) :match?.fixture?.status?.short === "PEN" ? (
                        <span className="text-white">{match.goals.home} - {match.goals.away}</span>
                    ): match?.fixture?.status?.short === "FT" ? (
                        <span className="text-white">{match.goals.home} - {match.goals.away}</span>
                    ) : (
                        <span className="text-red-700">{match?.goals?.home} - {match?.goals?.away}</span>
                    )}
                </div>
                {match?.fixture?.status?.short === "FT" && (
                    <div className="text-sm text-gray-500">Match Finished</div>
                )}
                {match?.fixture?.status?.short === "AET" && (
                    <div className="text-sm text-gray-500">Match Finished</div>
                )}
                {match?.fixture?.status?.short === "PEN" && (
                    <div className="text-sm text-gray-500">After Penalties</div>
                )}
                {match?.fixture?.status?.long === "Halftime" && (
                    <div className="text-xs text-red-600">{match.fixture.status.long}</div>
                )}
                {match?.fixture?.status?.short === "SUSP" && (
                    <div className="text-xs text-red-600">{match.fixture.status.long}</div>
                )}
                {match?.fixture?.status?.short === "INT" && (
                    <div className="text-xs text-red-600">{match.fixture.status.long}</div>
                )}
                {match?.fixture?.status?.short === "CANC" && (
                    <div className="text-xs text-red-600">{match.fixture.status.long}</div>
                )}
                {match?.fixture?.status?.short === "ABD" && (
                    <div className="text-xs text-red-600">{match.fixture.status.long}</div>
                )}
                {match?.fixture?.status?.short === "BT" && (
                    <div className="text-sm text-red-600">Break Time</div>
                )}
                {["1H"].includes(match?.fixture?.status?.short) && (
    <div className="text-xs text-red-600">
        {match?.fixture?.status?.elapsed >= 45 ? `45+${match?.fixture?.status?.elapsed - 44}` : match?.fixture?.status?.elapsed}
        <span className="inline-block animate-ping">′</span>
    </div>
)}
                {["2H"].includes(match?.fixture?.status?.short) && (
    <div className="text-xs text-red-600">
        {match?.fixture?.status?.elapsed >= 90 ? `90+${match?.fixture?.status?.elapsed - 89}` : match?.fixture?.status?.elapsed}
        <span className="inline-block animate-ping">′</span>
    </div>
)}
                {["ET"].includes(match?.fixture?.status?.short) && (
    <div className="text-xs text-red-600">
        {match?.fixture?.status?.elapsed+1}
        <span className="inline-block animate-ping">′</span>
    </div>
)}

                {match?.fixture?.status?.short === "NS" && (
                    <div className="text-xs text-gray-500">{match.fixture.venue.name}, {match.fixture.venue.city}</div>
                )}
            </div>

            <div className="flex flex-col items-center w-3/12 text-sm">
                        <img src={match?.teams?.away?.logo} alt="AwayLogo" width={50} height={50}  />
                        <div>{match?.teams?.away?.name}</div>
                    </div>
        </Link>
        
    );
}
