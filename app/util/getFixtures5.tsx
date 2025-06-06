//import { AllFixtures, Fixture } from "@/types";
//import moment from 'moment';
//import { Redis } from "@upstash/redis";
//
//const API_KEY = process.env.API_KEY as string;
//
//
//
//const leagues =    [
//    {league: 194, yearr:0, startmonth: '2025-02-01', endmonth: '2025-09-01', name: "EPL"},
//  {league: 834, yearr:0, startmonth: '2025-02-01', endmonth: '2025-09-01', name: "EPL"},
//  {league: 1091, yearr:0, startmonth: '2025-03-01', endmonth: '2025-09-01', name: "EPL"},
//  {league: 648, yearr:0, startmonth: '2025-03-01', endmonth: '2025-10-01', name: "EPL"},
//  {league: 1093, yearr:0, startmonth: '2025-03-01', endmonth: '2025-09-01', name: "EPL"},
//  {league: 195, yearr:0, startmonth: '2025-02-01', endmonth: '2025-09-01', name: "EPL"},
//  {league: 836, yearr:0, startmonth: '2025-02-01', endmonth: '2025-09-01', name: "EPL"},
//  {league: 196, yearr:0, startmonth: '2025-03-01', endmonth: '2025-09-01', name: "EPL"},
//  {league: 1094, yearr:0, startmonth: '2025-03-01', endmonth: '2025-09-01', name: "EPL"},
//  {league: 219, yearr:-1, startmonth: '2024-08-01', endmonth: '2025-06-01', name: "EPL"},
//  {league: 218, yearr:-1, startmonth: '2024-07-01', endmonth: '2025-06-01', name: "EPL"},
//  {league: 218,yearr:-1,startmonth: '2024-08-01',endmonth: '2025-04-01',country: "Austria",name: "EPL"},
//  {league: 220,yearr:-1,startmonth: '2024-07-01',endmonth: '2025-05-01',country: "Austria",name: "EPL"},
//  {league: 484,yearr:-1,startmonth: '2024-08-01',endmonth: '2025-04-01',country: "Austria",name: "EPL"},
//]
//
//async function fetchFixturesByLeague(
//    year: number,
//    league: number,
//    yearr: number
//): Promise<Fixture[]> {
//const nextWeek1 = moment().add(3, 'days').format('YYYY-MM-DD');        const lastWeek1 = moment().add(1, 'days').format('YYYY-MM-DD');   const url = `hhhhhhh?league=${league}&season=${year + yearr}&from=${lastWeek1}&to=${nextWeek1}`;    const options = {
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
// 