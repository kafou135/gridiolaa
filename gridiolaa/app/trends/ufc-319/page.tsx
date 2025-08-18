import type { Metadata } from "next";
import AutoRefresher from "@/app/components/AutoRefresher";
import Home from "./components/page";
export const revalidate = 900; // ISR: re-generate every 15 min

export const metadata: Metadata = {
  title: "UFC 319 Results — Du Plessis vs. Chimaev (Chicago) | Full Card, Winners, How to Watch",
  description:
    "All UFC 319 results and highlights from Chicago’s United Center: Khamzat Chimaev defeats Dricus du Plessis (UD 50-44) to win the middleweight title; Lerone Murphy KO (spinning elbow) vs Aaron Pico; Carlos Prates KO Geoff Neal; Michael Page def. Jared Cannonier (UD); key prelims, start time, PPV info, and rankings outlook.",
  alternates: { canonical: "/trends/ufc-319" },
  openGraph: {
    title: "UFC 319 Results — Du Plessis vs. Chimaev",
    description:
      "Main-event winner, full main card, prelim highlights, start time, PPV details, live updates links, and rankings implications.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "UFC 319 Results — Du Plessis vs. Chimaev",
    description:
      "Chimaev wins middleweight title (UD 50-44). Murphy & Prates land spinning elbow KOs. Full results + where to watch.",
  },
};

type Bout = {
  weight: string;
  fighters: string;
  result: string;
  method: string;
  round: string;
  time?: string;
  notes?: string;
};

type TrendPage = {
  event: string;
  dateISO: string;
  cityVenue: string;
  broadcasterUS: string;
  ppvPriceNote?: string;
  mainCard: Bout[];
  notablePrelims: Bout[];
  quickFacts: { label: string; value: string }[];
  rankingsNotes: string[];
  faqs: { q: string; a: string }[];
  trendKeywords: string[];
  sources: { title: string; url: string }[];
};

async function getData(): Promise<TrendPage> {
  return {
    event: "UFC 319: Du Plessis vs. Chimaev",
    dateISO: "2025-08-16",
    cityVenue: "United Center — Chicago, Illinois",
    broadcasterUS: "ESPN+ (PPV)",
    ppvPriceNote: "Check ESPN+ for current PPV pricing in your region.",
    mainCard: [
      {
        weight: "Middleweight Title",
        fighters: "Khamzat Chimaev def. Dricus Du Plessis (c)",
        result: "Unanimous Decision (50-44, 50-44, 50-44)",
        method: "Dominant wrestling/ground control",
        round: "5",
        notes: "Chimaev captures UFC middleweight title",
      },
      {
        weight: "Featherweight",
        fighters: "Lerone Murphy def. Aaron Pico",
        result: "KO (spinning back elbow)",
        method: "KO/TKO",
        round: "1",
        time: "3:21",
      },
      {
        weight: "Welterweight",
        fighters: "Carlos Prates def. Geoff Neal",
        result: "KO (spinning back elbow)",
        method: "KO/TKO",
        round: "1",
        time: "4:59",
        notes: "Neal’s first KO loss",
      },
      {
        weight: "Middleweight",
        fighters: "Michael Page def. Jared Cannonier",
        result: "Unanimous Decision",
        method: "Striking, movement; survived late top control",
        round: "3",
      },
      {
        weight: "Flyweight",
        fighters: "Tim Elliott def. Kai Asakura",
        result: "Submission (mounted guillotine)",
        method: "SUB",
        round: "2",
      },
    ],
    notablePrelims: [
      {
        weight: "Women’s Strawweight",
        fighters: "Loopy Godinez def. Jessica Andrade",
        result: "Unanimous Decision (29-28 x3)",
        method: "Decision",
        round: "3",
      },
      {
        weight: "Lightweight",
        fighters: "Drakkar Klose def. Edson Barboza",
        result: "Unanimous Decision",
        method: "Decision",
        round: "3",
      },
      {
        weight: "Middleweight",
        fighters: "Michal Oleksiejczuk def. Gerald Meerschaert",
        result: "TKO",
        method: "KO/TKO",
        round: "2",
      },
      // Add more prelims here as needed
    ],
    quickFacts: [
      { label: "Date", value: "Sat, Aug 16, 2025" },
      { label: "Location", value: "United Center, Chicago" },
      { label: "Main Event", value: "Chimaev UD over Du Plessis (50-44 x3)" },
      { label: "Co-Main", value: "Lerone Murphy KO (spinning elbow) vs Aaron Pico" },
      { label: "Other Highlight", value: "Carlos Prates KO (spinning elbow) vs Geoff Neal" },
      { label: "Broadcast (US)", value: "ESPN+ PPV" },
    ],
    rankingsNotes: [
      "Chimaev becomes UFC Middleweight Champion; shakes up the top of the division.",
      "Lerone Murphy likely earns a title shot discussion at 145 after spectacular KO.",
      "Michael Page inserts himself into the middleweight contendership conversation.",
    ],
    faqs: [
      {
        q: "Who won UFC 319?",
        a: "Khamzat Chimaev defeated Dricus du Plessis via unanimous decision (50-44 x3) to win the UFC middleweight title.",
      },
      {
        q: "Where was UFC 319?",
        a: "United Center in Chicago, Illinois.",
      },
      {
        q: "How to watch UFC 319?",
        a: "In the U.S., via ESPN+ PPV. Check local listings for international broadcasters.",
      },
      {
        q: "What time did the main card start?",
        a: "Typically 10:00 p.m. ET (7:00 p.m. PT). Exact timing varies by region and broadcaster.",
      },
    ],
    trendKeywords: [
      "ufc 319 results","ufc results","chimaev vs ddp","khamzat chimaev vs ddp","ufc middleweight rankings",
      "who won ufc 319","ufc 319 fight card results","ufc tonight","ufc live results","where to watch ufc 319",
      "ufc 319 start time","espn+","dana white","ddp vs khamzat result","lerone murphy record","ufc chicago"
    ],
    sources: [
      { title: "AP: Chimaev wins middleweight belt (UD 50-44)", url: "https://apnews.com/article/6d16af58493da565f8ea5d4553a9aed7" },
      { title: "Reuters: Chimaev beats du Plessis for title", url: "https://www.reuters.com/sports/relentless-chimaev-beats-du-plessis-win-ufc-middleweight-title-2025-08-17/" },
      { title: "UFC.com: Main Card Results", url: "https://www.ufc.com/news/main-card-results-highlights-winner-interviews-ufc-319-du-plessis-vs-chimaev-chicago" },
      { title: "ESPN FightCenter: UFC 319", url: "https://www.espn.com/mma/fightcenter/_/id/600054045/league/ufc" },
      { title: "MMA Fighting: Page def. Cannonier (UD)", url: "https://www.mmafighting.com/ufc/399425/ufc-319-results-michael-venom-page-scores-multiple-knockdowns-survives-late-comeback-to-beat-jared-cannonier" },
      { title: "MMA Fighting: UFC 319 Bonuses", url: "https://www.mmafighting.com/ufc-events-ppv/399634/ufc-319-bonuses-khamzat-chimaev-cashes-in-after-dominating-dricus-du-plessis" },
      { title: "United Center: Event Listing", url: "https://www.unitedcenter.com/events/2025/08/16/ufc-319/" }
    ],
  };
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
    "@type": "NewsArticle",
    headline: "UFC 319 Results — Du Plessis vs. Chimaev",
    datePublished: data.dateISO,
    dateModified: data.dateISO,
    about: ["UFC", "MMA", "Khamzat Chimaev", "Dricus du Plessis"],
    locationCreated: data.cityVenue,
    author: { "@type": "Organization", name: "YourSite" },
  };

  return (
    <>
    <main className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-8">
      <AutoRefresher interval={60000} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold">{data.event}</h1>
        <p className="text-gray-600">
          {new Date(data.dateISO).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })}
          {" · "}
          {data.cityVenue}
          {" · "}
          {data.broadcasterUS}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {["Official results", "Highlights", "Rankings outlook"].map((f) => (
            <Pill key={f}>{f}</Pill>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-6">
          <Section title="Main Card — Results">
            <ul className="space-y-3">
              {data.mainCard.map((b) => (
                <li key={b.fighters} className="rounded-2xl border border-gray-200 p-4 bg-white shadow-sm">
                  <div className="text-xs uppercase tracking-wide text-gray-500">{b.weight}</div>
                  <div className="text-lg font-medium">{b.fighters}</div>
                  <div className="text-sm text-gray-700">
                    {b.result}
                    {b.time ? ` — ${b.time}` : ""} {b.round ? ` (R${b.round})` : ""}
                  </div>
                  {b.notes ? <div className="text-xs text-gray-500 mt-1">{b.notes}</div> : null}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Notable Prelims">
            <ul className="space-y-3">
              {data.notablePrelims.map((b) => (
                <li key={b.fighters} className="rounded-2xl border border-gray-200 p-4 bg-white shadow-sm">
                  <div className="text-xs uppercase tracking-wide text-gray-500">{b.weight}</div>
                  <div className="text-lg font-medium">{b.fighters}</div>
                  <div className="text-sm text-gray-700">
                    {b.result} {b.time ? `— ${b.time}` : ""} {b.round ? `(R${b.round})` : ""}
                  </div>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Rankings & What’s Next">
            <ul className="list-disc pl-5 space-y-2">
              {data.rankingsNotes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </Section>
        </div>

        <aside className="lg:col-span-1 space-y-6">
          <Section title="Quick Facts">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {data.quickFacts.map((q) => (
                <div key={q.label} className="rounded-2xl border border-gray-200 p-4 bg-white shadow-sm">
                  <div className="text-sm text-gray-500">{q.label}</div>
                  <div className="text-lg font-medium">{q.value}</div>
                </div>
              ))}
            </div>
            {data.ppvPriceNote ? <p className="text-xs text-gray-500 mt-2">{data.ppvPriceNote}</p> : null}
          </Section>

          <Section title="FAQs">
            <div className="space-y-3">
              {data.faqs.map((f) => (
                <details key={f.q} className="rounded-2xl border border-gray-200 p-4 bg-white shadow-sm">
                  <summary className="font-medium cursor-pointer">{f.q}</summary>
                  <p className="mt-2 text-sm">{f.a}</p>
                </details>
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

          <Section title="Sources & Live Coverage">
            <ul className="list-disc pl-5 space-y-2">
              {data.sources.map((s) => (
                <li key={s.url}>
                  <a className="text-blue-600 hover:underline" href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </Section>
        </aside>
      </div>

      <footer className="pt-2 text-sm text-gray-500">
        Server-rendered with ISR. Facts reflect latest reporting at build time.
      </footer>
    </main>
    <Home/>
    </>
  );
}
