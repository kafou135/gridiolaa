//import { AllFixtures, Fixture } from "@/types";
//import moment from 'moment';
//
//const API_KEY = process.env.API_KEY as string;
//
//
//
//const leagues =    [
//    {league: 416,yearr: -1,startmonth: '2024-08-01',endmonth: '2025-04-01',country: "Belize",name: "EPL"},
//   // {league: 415,yearr: 0,startmonth: '2024-09-01',endmonth: '2025-07-01',country: "Benin",name: "EPL"},
//   // {league: 414,yearr: 0,startmonth: '2024-09-01',endmonth: '2025-05-01',country: "Bermuda",name: "EPL"},
//   // {league: 1031,yearr: 0,startmonth: '2024-05-01',endmonth: '2025-11-01',country: "Bhutan",name: "EPL"},
//   // {league: 413,yearr: 0,startmonth: '2025-02-01',endmonth: '2025-04-01',country: "Bhutan",name: "EPL"},
//   // {league: 964,yearr: 0,startmonth: '2025-02-01',endmonth: '2026-01-01',country: "Bolivia",name: "EPL"},
//   // {league: 710,yearr: -1,startmonth: '2024-08-01',endmonth: '2025-01-01',country: "Bolivia",name: "EPL"},
//   // {league: 344,yearr: 0,startmonth: '2025-02-01',endmonth: '2026-01-01',country: "Bolivia",name: "EPL"},
//   // {league: 1172,yearr: 0,startmonth: '2025-02-01',endmonth: '2025-04-01',country: "Bolivia",name: "EPL"},
//   // {league: 316,yearr: 0,startmonth: '2024-08-01',endmonth: '2025-07-01',country: "Bosnia",name: "EPL"},
//   // {league: 317, yearr:-1, startmonth: '2024-08-01', endmonth: '2025-07-01', country: "Bosnia", name: "EPL"},
//   // {league: 314, yearr:-1, startmonth: '2024-10-01', endmonth: '2025-04-01', country: "Bosnia", name: "EPL"},
//   // {league: 315, yearr:-1, startmonth: '2024-08-01', endmonth: '2025-04-01', country: "Bosnia", name: "EPL"},
//   // {league: 412, yearr:-1, startmonth: '2024-09-01', endmonth: '2025-06-01', country: "Botswana", name: "EPL"},
//   // {league: 520, yearr:0, startmonth: '2025-01-01', endmonth: '2025-04-01', country: "Brazil", name: "EPL"},
//   // {league: 77, yearr:0, startmonth: '2025-01-01', endmonth: '2025-04-01', country: "Brazil", name: "EPL"},
//   // {league: 1146, yearr:-1, startmonth: '2024-09-01', endmonth: '2025-12-01', country: "Brazil", name: "EPL"},
//   // {league: 1110, yearr:-1, startmonth: '2024-05-01', endmonth: '2025-09-01', country: "Brazil", name: "EPL"},
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
//
//export default async function getFixtures(): Promise<AllFixtures[]> {
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
//
//