// app/trends/raja-jackson/page.tsx
import type { Metadata } from "next";
import AutoRefresher from "@/app/components/AutoRefresher";
import Home from "@/app/components/FeedBack";
import NewsletterForm from "@/app/components/NewsletterForm";

export const revalidate = 900; // ISR every 15 min

export const metadata: Metadata = {
  title: "Raja Jackson Incident (2025) — Timeline, Live Coverage, Reactions",
  description:
    "All key info in one place: what happened at Knokx Pro (Los Angeles), Syko Stu’s condition, reactions from Rampage Jackson & media, clips, FAQs, and reliable sources.",
  alternates: { canonical: "/news/Raja-Jackson" },
  openGraph: {
    title: "Raja Jackson Incident — What’s Happening Now",
    description:
      "Live coverage, timeline, credible reports, and video clips about the Raja Jackson–Syko Stu incident.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raja Jackson Incident — Timeline & Key Sources",
    description:
      "Everything gathered: what happened, statements, live updates, and trustworthy links.",
  },
};

type LinkItem = { label: string; href: string; note?: string };
type Fact = { label: string; value: string };
type SectionNote = string;

async function getData() {
  // Data curated from live sources linked below; keep copy minimal and defer specifics to originals.
  const trendKeywords = [
    "Raja Jackson", "Rampage Jackson son", "Syko Stu", "Stuart Smith",
    "Knokx Pro Wrestling", "Kick stream incident", "Los Angeles wrestling incident",
    "Raja Jackson update", "Raja Jackson video", "Rampage statement",
    "MMA news", "pro wrestling news", "off-script incident"
  ];

  const quickFacts: Fact[] = [
    { label: "Date", value: "August 24, 2025 (local)" },
    { label: "Location", value: "Los Angeles, CA — Knokx Pro Wrestling event" },
    { label: "Primary Individuals", value: "Raja Jackson; Stuart “Syko Stu” Smith" },
    { label: "Current Snapshot", value: "Viral clip; media coverage; statements and health updates via reports" },
    { label: "Context", value: "Altercation during/after show sequence; details under review per multiple outlets" },
  ];

  // Prioritize diverse, reputable coverage; label what each link offers.
  const liveCoverage: LinkItem[] = [
    { label: "PEOPLE — What happened & Rampage’s statement", href: "https://people.com/rampage-jackson-son-raja-attack-wrestler-syko-stu-11796499", note: "Clear summary + injury status per reports" },
    { label: "CBS Sports — Timeline & reactions", href: "https://www.cbssports.com/mma/news/rampage-jackson-deeply-concerned-after-son-rajas-frightening-multi-strike-assault-on-wrestler-syko-stu/", note: "Sports desk overview" },
    { label: "talkSPORT — Rampage Jackson’s statement", href: "https://talksport.com/mma/3497721/rampage-jackson-statement-son-raja-wrestling/", note: "Quotes & background" },
    { label: "Yahoo/Sports — Industry reactions", href: "https://ca.sports.yahoo.com/news/wwe-star-pro-wrestling-pundits-132618813.html", note: "Wrestling community response" },
    { label: "Reddit r/martialarts thread (viewer context)", href: "https://www.reddit.com/r/martialarts/comments/1mym3ye/raja_jackson_rampage_jacksons_son_almost_kills_a/", note: "Crowd-sourced context (unofficial)" },
  ];

  const keyMessages: SectionNote[] = [
    "For precise details (injuries, investigations, event coordination), default to the linked reporting and official statements.",
    "Clips circulating on social media may omit context; rely on full articles and verified updates.",
    "Health status and any legal/disciplinary outcomes can evolve; re-check sources periodically.",
  ];

  // Simple outline users can skim; keep neutral and non-speculative.
  const incidentSummary: SectionNote[] = [
    "Pre-match: A prior exchange reportedly occurred involving a canned drink at the venue entrance.",
    "In-ring: During a later match, Raja entered the ring, executed a slam, and delivered multiple strikes.",
    "Aftermath: The wrestler known as Syko Stu was hospitalized; multiple outlets report he is receiving care.",
    "Statements: Rampage Jackson issued an apology/statement, citing poor judgment and concern for both parties.",
    "Coverage: Major sports/entertainment outlets and community forums are tracking the situation.",
  ];

  // Embeds/clips (note: availability can change).
  const media = {
    heroImage: {
      src: "/raja_jackson.webp", // neutral arena shot placeholder
      alt: "Pro wrestling ring under spotlights (illustrative).",
      credit: "Unsplash (illustrative image; not from event)",
    },
    youtubeRecap: {
      src: "https://www.youtube.com/embed/UCNKrK8SiLM",
      title: "Raja Jackson Incident — Recap & Reactions",
    },
    
  };

  // Light FAQ for readers
  const faqs: { q: string; a: string }[] = [
    {
      q: "Is there an official investigation or charges?",
      a: "Check the linked articles for the most recent updates. Outcomes, if any, will be reported by local authorities and reliable outlets.",
    },
    {
      q: "Is there verified medical status for Syko Stu?",
      a: "Media reports indicate hospitalization and treatment; defer to official family or promotion updates via credible outlets.",
    },
    {
      q: "Was any of it scripted?",
      a: "Reports suggest a planned show element escalated off-script. Details remain subject to statements from those involved.",
    },
  ];

  return { trendKeywords, quickFacts, liveCoverage, keyMessages, incidentSummary, media, faqs };
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
    headline: "Raja Jackson Incident (2025) — Timeline & Reactions",
    about: ["Raja Jackson", "Rampage Jackson", "Syko Stu", "Knokx Pro Wrestling"],
    datePublished: "2025-08-24T14:00:00+01:00",
    dateModified: new Date().toISOString().slice(0, 10),
    author: { "@type": "Organization", name: "YourSite" },
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
          <h1 className="text-2xl md:text-3xl font-bold">Raja Jackson Incident — What’s Happening Now</h1>
          <p className="text-gray-600">
            Curated links to reporting, statements, and context. This page uses server rendering + ISR and refreshes periodically.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["Live coverage", "Timeline", "Clips & context", "FAQs"].map((f) => (
              <Pill key={f}>{f}</Pill>
            ))}
          </div>
        </header>

        {/* Hero image (illustrative) */}
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
          <div className="lg:col-span-2 space-y-6">
            <Section title="Live Coverage & Primary Sources">
              <ul className="list-disc pl-5 space-y-2">
                {data.liveCoverage.map((l) => (
                  <li key={l.href}>
                    <a className="text-blue-600 hover:underline" href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label}
                    </a>
                    {l.note ? <span className="text-gray-500"> — {l.note}</span> : null}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 mt-2">
                Tip: When details conflict, prioritize official statements and follow-up reporting from reputable outlets.
              </p>
            </Section>
            <Section title="Raja Jackson Incident — What We Know So Fa">
<div className="bg-white p-6 rounded-2xl shadow-md text-gray-900 leading-relaxed space-y-4">
  <p>
    At a recent Knokx Pro Wrestling event in Los Angeles, Raja Jackson — son of former UFC champion
    Quinton “Rampage” Jackson — became involved in an incident with independent wrestler Stuart
    “Syko Stu” Smith. Video circulating online shows Raja entering the ring, performing a slam, and
    delivering multiple strikes.
  </p>

  <p>
    Smith was reportedly hospitalized afterward and is said to be receiving medical care. Rampage
    Jackson later released a statement expressing concern and regret, calling it poor judgment and
    emphasizing his hope for Smith’s recovery.
  </p>

  <p>
    Media outlets including <em>People</em>, <em>CBS Sports</em>, and <em>talkSPORT</em> are covering the
    situation, while clips are spreading rapidly across social platforms. Some wrestling and MMA
    commentators note that elements of the incident may have started as a show segment but escalated
    beyond the script.
  </p>

  <p>
    As of now, updates continue to emerge regarding Smith’s condition, community reactions, and any
    possible follow-up actions from promoters or authorities. For the latest, rely on official
    statements and established news outlets.
  </p>
</div>

            </Section>

            <Section title="Key Messages (Summary)">
              <ul className="list-disc pl-5 space-y-2">
                {data.keyMessages.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </Section>

            <Section title="What We Know (Working Timeline)">
              <ul className="list-disc pl-5 space-y-2">
                {data.incidentSummary.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </Section>

            {/* Videos / Clips */}
            <Section title="Videos & Background">
              <div className="space-y-4">
                <iframe
                  className="w-full h-[420px] rounded-xl shadow-md"
                  src={data.media.youtubeRecap.src}
                  title={data.media.youtubeRecap.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
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
            </Section>

            <Section title="Search Trend Keywords">
              <div className="flex flex-wrap gap-2">
                {data.trendKeywords.map((k) => (
                  <Pill key={k}>{k}</Pill>
                ))}
              </div>
            </Section>

            <Section title="FAQs">
              <div className="space-y-3">
                {data.faqs.map((f) => (
                  <details key={f.q} className="rounded-xl border border-gray-200 bg-white p-4">
                    <summary className="font-medium cursor-pointer">{f.q}</summary>
                    <p className="pt-2 text-gray-700">{f.a}</p>
                  </details>
                ))}
              </div>
            </Section>
          </aside>
        </div>

        <footer className="pt-2 text-sm text-gray-500">
          Sources: PEOPLE, CBS Sports, talkSPORT, Yahoo/Sports, Reddit (unofficial). Always defer to official statements from those involved.
          <NewsletterForm/>
        </footer>
      </main>
      <Home/>
    </>
  );
}
