//import { AllFixtures, Fixture } from "@/types";
//import moment from 'moment';
//import { Redis } from "@upstash/redis";
//
//const API_KEY = process.env.API_KEY as string;
//
//// Redis setup
//const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL3;
//const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN3;
//
//if (!REDIS_URL || !REDIS_TOKEN) {
//  throw new Error("🚨 Redis environment variables are missing.");
//}
//
//const redis = new Redis({
//  url: REDIS_URL,
//  token: REDIS_TOKEN,
//});
//
//const leagues =    [
//    {league: 61,yearr:-1,startmonth: '2024-08-01',endmonth: '2025-06-01',country: "France",name: "EPL"},
//  //  {league: 311,yearr: 0,startmonth: '2024-08-01',endmonth: '2025-05-01',name: "EPL"},
//  //  {league: 512,yearr: 0,startmonth: '2024-09-01',endmonth: '2025-05-01',name: "EPL"},
//  //  {league: 513,yearr: 0,startmonth: '2024-09-01',endmonth: '2025-05-01',name: "EPL"},
//  //  {league: 978,yearr: 0,startmonth: '2024-05-01',endmonth: '2025-06-01',name: "EPL"},
//  //  {league: 707,yearr: 0,startmonth: '2024-09-01',endmonth: '2025-05-01',name: "EPL"},
//  //  {league: 708,yearr: -1,startmonth: '2024-12-01',endmonth: '2025-01-01',name: "EPL"},
//  //  {league: 310,yearr: 0,startmonth: '2024-08-01',endmonth: '2025-06-01',name: "EPL"},
//  //  {league: 514,yearr: 0,startmonth: '2024-12-01',endmonth: '2025-04-01',name: "EPL"},
//  //  {league: 186,yearr: 0,startmonth: '2024-09-01',endmonth: '2025-06-01',name: "EPL"},
//  //  {league: 187, yearr:-1, startmonth: '2024-09-01', endmonth: '2025-06-01', name: "EPL"},
//  //{league: 516, yearr:0, startmonth: '2025-01-01', endmonth: '2025-02-01', name: "EPL"},
//  //{league: 515, yearr:-1, startmonth: '2024-09-01', endmonth: '2025-06-01', name: "EPL"},
//    
//   
//]
//
//async function fetchFixturesByLeague(
//    year: number,
//    league: number,
//    yearr: number
//): Promise<Fixture[]> {        const currentTimeFormat = moment().format('YYYY-MM-DD');
//
//    const url = `hhhhhhh?league=${league}&season=${year + yearr}&from=${currentTimeFormat}&to=${currentTimeFormat}`;
//    const options = {
//        method: 'GET',
//        headers: {
//            'X-RapidAPI-Key': API_KEY,
//        },
//        next: {
//            revalidate: 1 * 1 * 15,
//        },
//    };
//
//    try {
//        const response = await fetch(url, options);
//        const data = await response.json();
//        return data.response ?? [];
//    } catch (err) {
//        console.log(`Error fetching ${league} fixtures in year ${year}: ${err}`);
//        return [];
//    }
//}
 