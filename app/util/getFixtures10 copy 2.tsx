import { AllFixtures, Fixture } from "@/types";
import moment from 'moment';
import { Redis } from "@upstash/redis";

const API_KEY = process.env.API_KEY as string;



const leagues =    [
    {league: 521, yearr:0, startmonth: '2025-03-01', endmonth: '2025-05-01', country: "Brazil", name: "EPL"},
    {league: 522, yearr:0, startmonth: '2025-01-01', endmonth: '2025-04-01', country: "Brazil", name: "EPL"},
    {league: 1134, yearr:-1, startmonth: '2024-08-01', endmonth: '2025-10-01', country: "Brazil", name: "EPL"},
    {league: 602, yearr:0, startmonth: '2025-01-01', endmonth: '2025-04-01', country: "Brazil", name: "EPL"},
    {league: 613, yearr:0, startmonth: '2025-04-01', endmonth: '2025-07-01', country: "Brazil", name: "EPL"},
    {league: 1073, yearr:0, startmonth: '2025-03-01', endmonth: '2025-07-01', country: "Brazil", name: "EPL"},
    {league: 741, yearr:-1, startmonth: '2024-09-01', endmonth: '2025-12-01', country: "Brazil", name: "EPL"},
    {league: 1128, yearr:-1, startmonth: '2024-07-01', endmonth: '2025-10-01', country: "Brazil", name: "EPL"},
    {league: 74, yearr: 0, startmonth: '2025-03-01', endmonth: '2025-07-01', country: "Brazil", name: "EPL"},
    {league: 610, yearr: 0, startmonth: '2025-01-01', endmonth: '2025-04-01', country: "Brazil", name: "EPL"},
    {league: 1141, yearr: 0, startmonth: '2024-08-01', endmonth: '2025-11-01', country: "Brazil", name: "EPL"},
    {league: 1100, yearr: 0, startmonth: '2024-05-01', endmonth: '2025-08-01', country: "Brazil", name: "EPL"},
    {league: 611, yearr: 0, startmonth: '2025-01-01', endmonth: '2025-04-01', country: "Brazil", name: "EPL"},
    {league: 1147, yearr: 0, startmonth: '2024-09-01', endmonth: '2025-12-01', country: "Brazil", name: "EPL"},
    {league: 624, yearr: 0, startmonth: '2025-01-01', endmonth: '2025-04-01', country: "Brazil", name: "EPL"},
    {league: 625, yearr: -1, startmonth: '2024-09-01', endmonth: '2025-01-01', country: "Brazil", name: "EPL"},
]


export default async function getFixtures(): Promise<AllFixtures[]> {
   const currentTimeFormat = moment().format('YYYY-MM-DD');
  const year = moment().year();
const fetches = leagues.map(async (league) => {const nextWeek1 = moment().subtract(1, 'days').format('YYYY-MM-DD');        const lastWeek1 = moment().subtract(7, 'days').format('YYYY-MM-DD');  
    const url = `https://v3.football.api-sports.io/fixtures?league=${league.league}&season=${year + league.yearr}&from=${currentTimeFormat}&to=${currentTimeFormat}`;
    const options = {
      
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY,
       },
       
     };
    const res = await fetch(url, options);
    const data = await res.json();
    return data.response ?? [];
  });
  const allResponses = await Promise.all(fetches);
  return allResponses.flat();       
   

}
