//import { AllFixtures, Fixture } from "@/types";
//import moment from 'moment';
//import { Redis } from "@upstash/redis";
//
//const API_KEY = process.env.API_KEY as string;
//
//
//
//const leagues =    [
//    {league: 521, yearr:0, startmonth: '2025-03-01', endmonth: '2025-05-01', country: "Brazil", name: "EPL"},
//    {league: 522, yearr:0, startmonth: '2025-01-01', endmonth: '2025-04-01', country: "Brazil", name: "EPL"},
//    {league: 1134, yearr:-1, startmonth: '2024-08-01', endmonth: '2025-10-01', country: "Brazil", name: "EPL"},
//    {league: 602, yearr:0, startmonth: '2025-01-01', endmonth: '2025-04-01', country: "Brazil", name: "EPL"},
//    {league: 613, yearr:0, startmonth: '2025-04-01', endmonth: '2025-07-01', country: "Brazil", name: "EPL"},
//    {league: 1073, yearr:0, startmonth: '2025-03-01', endmonth: '2025-07-01', country: "Brazil", name: "EPL"},
//    {league: 741, yearr:-1, startmonth: '2024-09-01', endmonth: '2025-12-01', country: "Brazil", name: "EPL"},
//    {league: 1128, yearr:-1, startmonth: '2024-07-01', endmonth: '2025-10-01', country: "Brazil", name: "EPL"},
//    {league: 74, yearr: 0, startmonth: '2025-03-01', endmonth: '2025-07-01', country: "Brazil", name: "EPL"},
//    {league: 610, yearr: 0, startmonth: '2025-01-01', endmonth: '2025-04-01', country: "Brazil", name: "EPL"},
//    {league: 1141, yearr: 0, startmonth: '2024-08-01', endmonth: '2025-11-01', country: "Brazil", name: "EPL"},
//    {league: 1100, yearr: 0, startmonth: '2024-05-01', endmonth: '2025-08-01', country: "Brazil", name: "EPL"},
//    {league: 611, yearr: 0, startmonth: '2025-01-01', endmonth: '2025-04-01', country: "Brazil", name: "EPL"},
//    {league: 1147, yearr: 0, startmonth: '2024-09-01', endmonth: '2025-12-01', country: "Brazil", name: "EPL"},
//    {league: 624, yearr: 0, startmonth: '2025-01-01', endmonth: '2025-04-01', country: "Brazil", name: "EPL"},
//    {league: 625, yearr: -1, startmonth: '2024-09-01', endmonth: '2025-01-01', country: "Brazil", name: "EPL"},
//]
//
//async function fetchFixturesByLeague(
//    year: number,
//    league: number,
//    yearr: number
//): Promise<Fixture[]> {
//const nextWeek1 = moment().add(3, 'days').format('YYYY-MM-DD');        const lastWeek1 = moment().add(1, 'days').format('YYYY-MM-DD');    const url = `hhhhhhh?league=${league}&season=${year + yearr}&from=${lastWeek1}&to=${nextWeek1}`;    const options = {
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