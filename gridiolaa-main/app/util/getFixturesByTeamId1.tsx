import { Fixture } from '@/types';
import 'server-only';

const API_KEY = process.env.API_KEY as string;
const leagues =    [
  { league: 2, name: 'EPL' ,yearr:-1, startmonth: '2024-07-01', endmonth: '2025-06-01'},
   { league: 39, name: 'EPL' ,yearr:-1, startmonth: '2024-08-01', endmonth: '2025-06-01'},
   { league: 140, name: 'EPL' ,yearr:-1, startmonth: '2024-08-01', endmonth: '2025-06-01'},
   { league: 135, name: 'EPL' ,yearr:-1, startmonth: '2024-08-01', endmonth: '2025-06-01'},
   { league: 78, name: 'EPL' ,yearr:-1, startmonth: '2024-08-01', endmonth: '2025-06-01'},
   { league: 5, name: 'euro' ,yearr:-1, startmonth: '2024-08-01', endmonth: '2025-06-01'},
   { league: 6, name: 'caf' ,yearr:0, startmonth: '2024-08-01', endmonth: '2025-06-01'},
]


export default async function getFixtureByTeamId(teamid: number,teamName:string,) {
    const seasons = [2024, 2025, 2026];
    for (const season of seasons)  {const response = await fetch(`https://v3.football.api-sports.io/fixtures?team=${teamid}&season=${season}`, {
      method: 'GET',
      headers: {
        'x-apisports-key': API_KEY,
        'x-rapidapi-host': 'v3.football.api-sports.io', // optional, may not be required anymore
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch fixture with ID ${70}`);
    }
    const data = await response.json();
    const fixture = data.response; // or data.response for the array
  
    return fixture;
  }
  
  
  };
  
