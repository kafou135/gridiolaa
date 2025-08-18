import TaylorSwiftTrendContent from "./components/home2/StandingsAndFixtures";
import Home from "./components/FeedBack";
export const metadata = {
  title: "Taylor Swift Drops New Album: The Life of a Showgirl",
  description: "Taylor Swift reveals her 12th studio album with a unique orange and mint-green theme, collaborations, and special physical editions."
};

export default function Page() {
  return( 
    <>
  <TaylorSwiftTrendContent />
  <Home/>
  </>);
}
