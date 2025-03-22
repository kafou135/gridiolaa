import { Standing } from '@/types';
import 'server-only';
import getStandings from './getStanding';
import moment from 'moment';


export default async function getFixturesByTeamId(id: number): Promise<Standing[]> {
    try {
        const allFixturesByLeague = await getStandings();

        const standingsByTeamId: Standing[] = [];

        for (const league of allFixturesByLeague) {
                if (league.league.id === id ) {
                    standingsByTeamId.push(league);
                }
            
        }

        

        return standingsByTeamId;
    } catch (error) {
        console.error('An Error occurred while fetching fixtures by Team Id: ', error);
        throw error;
    }
}