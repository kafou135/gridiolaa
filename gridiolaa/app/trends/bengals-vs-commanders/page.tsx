// app/trends/bengals-vs-commanders/page.tsx
import type { Metadata } from "next";
import AutoRefresher from "@/app/components/AutoRefresher";
import Home from "@/app/components/FeedBack";
import NewsletterForm from "@/app/components/NewsletterForm";
import ProductsClient from "@/app/components/ProductsClient";

export const revalidate = 900; // ISR every 15 min

export const metadata: Metadata = {
  title: "Bengals vs Commanders (2025) — Monday Night Football, Score, Prediction, Stats",
  description:
    "Cincinnati Bengals vs Washington Commanders (2025): live score, predictions, Joe Burrow updates, rosters, depth charts, Monday Night Football schedule & highlights.",
  alternates: { canonical: "/trends/bengals-vs-commanders" },
  openGraph: {
    title: "Bengals vs Commanders (2025) — MNF Score & Highlights",
    description:
      "Cincinnati Bengals vs Washington Commanders matchup: live updates, player stats, depth charts & predictions.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bengals vs Commanders (2025) — MNF Score & Highlights",
    description:
      "Full breakdown: score, predictions, Joe Burrow updates, rosters, and Monday Night Football coverage.",
  },
};

type LinkItem = { label: string; href: string; note?: string };
type Fact = { label: string; value: string };
type SectionNote = string;

async function getData() {
  const trendKeywords = [
    "bengals vs commanders",
    "commanders",
    "bengals",
    "washington commanders",
    "joe burrow",
    "cincinnati bengals",
    "commanders vs bengals",
    "monday night football",
    "bengals game",
    "commanders game",
    "redskins",
    "commanders schedule",
    "bengals vs commanders score",
    "bengals schedule",
    "monday night football tonight",
    "cincinnati bengals vs washington commanders match player stats",
    "bengals depth chart",
    "commanders score",
    "bengals commanders",
    "washington commanders depth chart",
    "bengals vs commanders prediction",
    "mnf",
    "commanders roster",
    "commanders bengals",
    "washington commanders schedule",
    "washington commanders roster",
    "commanders preseason",
  ];

  const quickFacts: Fact[] = [
    { label: "Event", value: "Monday Night Football — Bengals vs Commanders" },
    { label: "Teams", value: "Cincinnati Bengals vs Washington Commanders" },
    { label: "Key Player", value: "Joe Burrow (QB, Bengals)" },
    { label: "Status", value: "Preseason / Regular Season matchup" },
    { label: "Where to Watch", value: "ESPN, NFL Network (check local listings)" },
  ];

  const officialLinks: LinkItem[] = [
    { label: "ESPN — Live Score & Coverage", href: "https://www.espn.com/nfl/" },
    { label: "NFL.com — Bengals Roster", href: "https://www.nfl.com/teams/cincinnati-bengals/roster/" },
    { label: "NFL.com — Commanders Roster", href: "https://www.nfl.com/teams/washington-commanders/roster/" },
    { label: "CBS Sports — MNF Updates", href: "https://www.cbssports.com/nfl/" },
    { label: "Yahoo Sports — NFL Scores", href: "https://sports.yahoo.com/nfl/" },
  ];

  const keyMessages: SectionNote[] = [
    "Joe Burrow leads the Bengals offense, looking sharp in recent practices.",
    "The Commanders are testing new depth chart options in this matchup.",
    "Fans are watching closely for preseason performance and injury updates.",
  ];

  const media = {
    heroImage: {
      src: "/bengals-vs-commanders.webp", // replace with your own safe image
      alt: "Cincinnati Bengals vs Washington Commanders game action.",
      credit: "ESPN Images",
    },
    highlightVideo: {
      src: "https://www.youtube.com/embed/n0NPeUdEA3c", // swap with real highlight clip
      caption: "Game highlights & key plays.",
    },
  };

  return { trendKeywords, quickFacts, officialLinks, keyMessages, media };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
      <div className="text-base leading-relaxed text-gray-700">{children}</div>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-sm px-3 py-1 rounded-full bg-gray-100 border border-gray-200">
      {children}
    </span>
  );
}

export default async function Page() {
  const data = await getData();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "Cincinnati Bengals vs Washington Commanders",
    sport: "American Football",
    about: ["Bengals", "Commanders", "NFL", "Monday Night Football"],
    competitor: [
      { "@type": "SportsTeam", name: "Cincinnati Bengals" },
      { "@type": "SportsTeam", name: "Washington Commanders" },
    ],
  };

  return (
    <>
      <main className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-8">
        <AutoRefresher interval={300000} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <header className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold">
            Bengals vs Commanders — Live Updates & Key Info
          </h1>
          <p className="text-gray-600">
            Cincinnati Bengals face the Washington Commanders in Monday Night Football. Here’s the breakdown: score, rosters, depth charts, predictions & highlights.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["Live score", "Rosters", "Predictions"].map((f) => (
              <Pill key={f}>{f}</Pill>
            ))}
          </div>
        </header>

        {/* Hero image */}
        <figure className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
          <img
            src={data.media.heroImage.src}
            alt={data.media.heroImage.alt}
            className="w-full h-[400px] object-cover"
          />
          <figcaption className="p-3 text-xs text-gray-500">
            {data.media.heroImage.alt} — {data.media.heroImage.credit}
          </figcaption>
        </figure>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Left Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Section title="Official Links & Coverage">
              <ul className="list-disc pl-5 space-y-2">
                {data.officialLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      className="text-blue-600 hover:underline"
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {l.label}
                    </a>
                    {l.note ? (
                      <span className="text-gray-500"> — {l.note}</span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </Section>
            <section className="w-full bg-white shadow-lg p-6 rounded-2xl mb-6">
  <h2 className="text-xl font-bold mb-4">Game Preview</h2>
  <p className="text-gray-800 leading-relaxed">
    The Cincinnati Bengals face the Washington Commanders in an exciting
    Monday Night Football clash. Joe Burrow leads the Bengals’ offense,
    while the Commanders bring a strong defense to the field. Fans around
    the country are anticipating a thrilling matchup that could shape the
    playoff race.
  </p>
</section>
            <Section title="Key Messages (Summary)">
              <ul className="list-disc pl-5 space-y-2">
                {data.keyMessages.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </Section>

            <Section title="Video Highlights">
              <iframe
                className="w-full h-[500px] rounded-xl shadow-md"
                src={data.media.highlightVideo.src}
                title="Bengals vs Commanders Highlights"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <p className="text-xs text-gray-500 mt-2">{data.media.highlightVideo.caption}</p>
            </Section>
          </div>

          {/* Right Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <Section title="Quick Facts">
              <div className="grid grid-cols-1 gap-3">
                {data.quickFacts.map((q) => (
                  <div
                    key={q.label}
                    className="rounded-2xl border border-gray-200 p-4 bg-white shadow-sm"
                  >
                    <div className="text-sm text-gray-500">{q.label}</div>
                    <div className="text-lg font-medium">{q.value}</div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Trend Breakdown Keywords">
              <div className="flex flex-wrap gap-2">
                {data.trendKeywords.map((k) => (
                  <Pill key={k}>{k}</Pill>
                ))}
              </div>
            </Section>
          </aside>
        </div>

        <footer className="pt-2 text-sm text-gray-500">
          Sources: ESPN, NFL.com, CBS Sports, Yahoo Sports. Always check official broadcasters for live coverage.
      <NewsletterForm/>
        </footer>
      </main>
      <ProductsClient/>
      <Home />
    </>
  );
}
