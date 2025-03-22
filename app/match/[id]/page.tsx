import getEvents from "@/app/util/getEvents";
import Match from "./components/test";
import getFixtureByFixtureId from "@/app/util/getFixtureByFixtureId";
import getH2H from "@/app/util/getH2H";
import getLineup from "@/app/util/getLineup";
import { Events, Fixture, H2H, Lineups } from "@/types";
import { GetServerSidePropsContext } from "next";

// Define the PageProps type for server-side props
type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: PageProps) {
  // Parse and fetch the fixture data
  const fixtureByFixtureId: Fixture | undefined = await getFixtureByFixtureId(parseInt(params.id));
  
  // Fetch H2H data
  const h2h: H2H[] = await getH2H(
    Number(fixtureByFixtureId?.teams.home.id),
    Number(fixtureByFixtureId?.teams.away.id)
  );
  
  // Fetch lineups
  const lineups: Lineups[] = await getLineup(Number(fixtureByFixtureId?.fixture.id));
  
  // Fetch events
  const events: Events[] = await getEvents(Number(fixtureByFixtureId?.fixture.id));

  return (
    <div>
      <Match fixtureByFixtureId={fixtureByFixtureId} h2h={h2h} lineups={lineups} events={events} />
    </div>
  );
}

// Add server-side props for dynamic page
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params;
  return { props: { params: { id } } };
}
