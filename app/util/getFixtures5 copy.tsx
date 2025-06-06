//port { AllFixtures, Fixture } from "@/types";
//port moment from 'moment';
//port { Redis } from "@upstash/redis";
//
//nst API_KEY = process.env.API_KEY as string;
//
//
//
//nst leagues =    [
//  {league: 194, yearr:0, startmonth: '2025-02-01', endmonth: '2025-09-01', name: "EPL"},
/// {league: 834, yearr:0, startmonth: '2025-02-01', endmonth: '2025-09-01', name: "EPL"},
/// {league: 1091, yearr:0, startmonth: '2025-03-01', endmonth: '2025-09-01', name: "EPL"},
/// {league: 648, yearr:0, startmonth: '2025-03-01', endmonth: '2025-10-01', name: "EPL"},
/// {league: 1093, yearr:0, startmonth: '2025-03-01', endmonth: '2025-09-01', name: "EPL"},
/// {league: 195, yearr:0, startmonth: '2025-02-01', endmonth: '2025-09-01', name: "EPL"},
/// {league: 836, yearr:0, startmonth: '2025-02-01', endmonth: '2025-09-01', name: "EPL"},
/// {league: 196, yearr:0, startmonth: '2025-03-01', endmonth: '2025-09-01', name: "EPL"},
/// {league: 1094, yearr:0, startmonth: '2025-03-01', endmonth: '2025-09-01', name: "EPL"},
/// {league: 219, yearr:-1, startmonth: '2024-08-01', endmonth: '2025-06-01', name: "EPL"},
/// {league: 218, yearr:-1, startmonth: '2024-07-01', endmonth: '2025-06-01', name: "EPL"},
/// {league: 218,yearr:-1,startmonth: '2024-08-01',endmonth: '2025-04-01',country: "Austria",name: "EPL"},
/// {league: 220,yearr:-1,startmonth: '2024-07-01',endmonth: '2025-05-01',country: "Austria",name: "EPL"},
/// {league: 484,yearr:-1,startmonth: '2024-08-01',endmonth: '2025-04-01',country: "Austria",name: "EPL"},
//
//
//ync function fetchFixturesByLeague(
//  year: number,
//  league: number,
//  yearr: number
// Promise<Fixture[]> {        const currentTimeFormat = moment().format('YYYY-MM-DD');
//
//  const url = `hhhhhhh?league=${league}&season=${year + yearr}&from=${currentTimeFormat}&to=${currentTimeFormat}`;
//  const options = {
//      method: 'GET',
//      headers: {
//          'X-RapidAPI-Key': API_KEY,
//      },
//      next: {
//          revalidate: 1 * 1 * 15,
//      },
//  };
//
//  try {
//      const response = await fetch(url, options);
//      const data = await response.json();
//      return data.response ?? [];
//  } catch (err) {
//      console.log(`Error fetching ${league} fixtures in year ${year}: ${err}`);
//      return [];
//  }
//
//
//port default async function getFixtures(): Promise<AllFixtures[]> {
//  
//
//  try {
//      const currentTime = moment().format('YYYY-MM-DD')
//      const year = moment().year();
//      const month = moment().month();
//
//      const allFixturesByLeague: AllFixtures[] = [];
//
//
//          for (const league of leagues) {
//          if (currentTime <= league.endmonth) {
//              allFixturesByLeague.push({
//                  name: league.name,
//                  fixtures: await fetchFixturesByLeague(year, league.league,league.yearr),
//              });
//          } else if (currentTime >= league.startmonth) {
//              allFixturesByLeague.push({
//                  name: league.name,
//                  fixtures: await fetchFixturesByLeague(year, league.league,league.yearr),
//              });
//          } else {
//              allFixturesByLeague.push({
//                  name: league.name,
//                  fixtures: await fetchFixturesByLeague(year, league.league,league.yearr),
//              });
//              const existingData = allFixturesByLeague.find((data) => data.name === league.name);
//              if (existingData) {
//                  existingData.fixtures.push(...(await fetchFixturesByLeague(year, league.league,league.yearr)));
//              } else {
//                  allFixturesByLeague.push({
//                      name: league.name,
//                      fixtures: await fetchFixturesByLeague(year, league.league,league.yearr)
//                  });
//              }
//          }
//      }
//
//
//      return allFixturesByLeague;
//  } catch (error) {
//      console.error("An error occured while fetching fixtures: ", error);
//      throw error;
//  }
//
//
//