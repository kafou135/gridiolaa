import { AllFixtures, Fixture, Standing } from '@/types';
import StandingsAndFixtures from './components/home/StandingsAndFixtures';
import getplayers from './util/getFixtures';
import getPlayers from './util/getFixtures';

export const revalidate = 60;

export default async function Home() {
  const result = await getPlayers();

  // Check if we got the expiry message or actual fixtures
  

  const filteredFixtures: Fixture[] = result;

  return (
    <div className="flex flex-col w-full justify-center items-center md:p-10">
      <StandingsAndFixtures match={filteredFixtures} />
    </div>
  );
}
