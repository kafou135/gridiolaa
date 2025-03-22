import getEvents from "@/app/util/getEvents";
import Match from "./components/test";
import getFixtureByFixtureId from "@/app/util/getFixtureByFixtureId";
import getH2H from "@/app/util/getH2H";
import getLineup from "@/app/util/getLineup";
import { Events, Fixture, H2H, Lineups } from "@/types";

// Define the PageProps type for dynamic route params
type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: PageProps) {
  const fixtureByFixtureId: Fixture | undefined = await getFixtureByFixtureId(parseInt(params.id));
  
  if (!fixtureByFixtureId) {
    return <div>Fixture not found</div>;
  }

  const h2h: H2H[] = await getH2H(
    Number(fixtureByFixtureId?.teams.home.id),
    Number(fixtureByFixtureId?.teams.away.id)
  );
  
  const lineups: Lineups[] = await getLineup(Number(fixtureByFixtureId?.fixture.id));
  
  const events: Events[] = await getEvents(Number(fixtureByFixtureId?.fixture.id));

  return (
    <div>
      <Match fixtureByFixtureId={fixtureByFixtureId} h2h={h2h} lineups={lineups} events={events} />
    </div>
  );
}
