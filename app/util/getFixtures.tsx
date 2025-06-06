//import { AllFixtures, Fixture } from "@/types";
//import moment from 'moment';
//import { Redis } from "@upstash/redis";
//
//const API_KEY = process.env.API_KEY as string;
//
//
//
//const leagues =    [
//    { league: 2, name: 'EPL' ,yearr:-1, startmonth: '2024-07-01', endmonth: '2025-06-01'},
//     { league: 39, name: 'EPL' ,yearr:-1, startmonth: '2024-08-01', endmonth: '2025-06-01'},
//     { league: 140, name: 'EPL' ,yearr:-1, startmonth: '2024-08-01', endmonth: '2025-06-01'},
//     { league: 135, name: 'EPL' ,yearr:-1, startmonth: '2024-08-01', endmonth: '2025-06-01'},
//     { league: 78, name: 'EPL' ,yearr:-1, startmonth: '2024-08-01', endmonth: '2025-06-01'},
//     { league: 5, name: 'euro' ,yearr:-1, startmonth: '2024-08-01', endmonth: '2025-06-01'},
//     { league: 6, name: 'caf' ,yearr:0, startmonth: '2024-08-01', endmonth: '2025-06-01'},
//]
//
//async function fetchFixturesByLeague(
//    year: number,
//    league: number,
//    yearr: number,
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
//export default async function getFixtures(): Promise<AllFixtures[]> {
//    
//    
//
//    try {
//        const currentTime = moment().format('YYYY-MM-DD')
//        const year = moment().year();
//        const month = moment().month();
//
//        const allFixturesByLeague: AllFixtures[] = [];
//
//
//            for (const league of leagues) {
//            if (currentTime <= league.endmonth) {
//                allFixturesByLeague.push({
//                    name: league.name,
//                    fixtures: await fetchFixturesByLeague(year, league.league,league.yearr),
//                });
//            } else if (currentTime >= league.startmonth) {
//                allFixturesByLeague.push({
//                    name: league.name,
//                    fixtures: await fetchFixturesByLeague(year, league.league,league.yearr),
//                });
//            } else {
//                allFixturesByLeague.push({
//                    name: league.name,
//                    fixtures: await fetchFixturesByLeague(year, league.league,league.yearr),
//                });
//                const existingData = allFixturesByLeague.find((data) => data.name === league.name);
//                if (existingData) {
//                    existingData.fixtures.push(...(await fetchFixturesByLeague(year, league.league,league.yearr)));
//                } else {
//                    allFixturesByLeague.push({
//                        name: league.name,
//                        fixtures: await fetchFixturesByLeague(year, league.league,league.yearr)
//                    });
//                }
//            }
//        }
//
//
//        return allFixturesByLeague;
//    } catch (error) {
//        console.error("An error occured while fetching fixtures: ", error);
//        throw error;
//    }
//}


