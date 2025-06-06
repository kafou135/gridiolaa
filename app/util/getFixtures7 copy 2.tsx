import { AllFixtures, Fixture } from "@/types";
import moment from 'moment';

const API_KEY = process.env.API_KEY as string;



const leagues =    [
    {league: 417,yearr:-1,startmonth: '2024-09-01',endmonth: '2025-05-01',country: "Bahrain",name: "EPL"},
    {league: 1109,yearr:-1,startmonth: '2024-05-01',endmonth: '2025-06-01',country: "Bahrain",name: "EPL"},
    {league: 811,yearr:-1,startmonth: '2024-12-01',endmonth: '2025-05-01',country: "Bangladesh",name: "EPL"},
    {league: 398,yearr:0,startmonth: '2024-11-01',endmonth: '2025-06-01',country: "Bangladesh",name: "EPL"},
    {league: 422,yearr:-1,startmonth: '2025-01-01',endmonth: '2025-06-01',country: "Barbados",name: "EPL"},
    {league: 117,yearr:0,startmonth: '2025-03-01',endmonth: '2025-04-01',country: "Belarus",name: "EPL"},
    {league: 118,yearr:-1,startmonth: '2025-04-01',endmonth: '2025-06-01',country: "Belarus",name: "EPL"},
    {league: 486,yearr:-1,startmonth: '2024-05-01',endmonth: '2025-06-01',country: "Belarus",name: "EPL"},
    {league: 116,yearr:0,startmonth: '2025-03-01',endmonth: '2025-12-01',country: "Belarus",name: "EPL"},
    {league: 562,yearr:-1,startmonth: '2025-03-01',endmonth: '2025-12-01',country: "Belarus",name: "EPL"},
    {league: 812,yearr:0,startmonth: '2025-02-01',endmonth: '2025-03-01',country: "Belarus",name: "EPL"},
    {league: 145,yearr:-1,startmonth: '2024-08-01',endmonth: '2025-05-01',country: "Belgium",name: "EPL"},
    {league: 147,yearr:-1,startmonth: '2024-07-01',endmonth: '2025-06-01',country: "Belgium",name: "EPL"},
    {league: 487,yearr:-1,startmonth: '2024-08-01',endmonth: '2025-06-01',country: "Belgium",name: "EPL"},
    {league: 144, yearr:-1, startmonth: '2024-07-01', endmonth: '2025-04-01', country: "Belgium", name: "EPL"},
    {league: 153, yearr:-1, startmonth: '2024-08-01', endmonth: '2025-05-01', country: "Belgium", name: "EPL"},
    {league: 691, yearr:-1, startmonth: '2024-08-01', endmonth: '2025-05-01', country: "Belgium", name: "EPL"},
    {league: 154, yearr:-1, startmonth: '2024-08-01', endmonth: '2025-05-01', country: "Belgium", name: "EPL"},
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
