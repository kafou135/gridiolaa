// app/trends/charlie-kirk/page.tsx
import type { Metadata } from "next";
import AutoRefresher from "@/app/components/AutoRefresher";
import Home from "@/app/components/FeedBack";
import NewsletterForm from "@/app/components/NewsletterForm";

export const revalidate = 900; // ISR every 15 min

export const metadata: Metadata = {
  title: "Charlie Kirk Update (2025) — Timeline, Live Coverage, Reactions",
  description:
    "All key info in one place: recent statements, appearances, media coverage, trending reactions, clips, FAQs, and reliable sources.",
  alternates: { canonical: "/news/Charlie-Kirk" },
  openGraph: {
    title: "Charlie Kirk — Latest Updates & Reactions",
    description:
      "Live coverage, timeline, credible reports, and video clips regarding Charlie Kirk's recent activities.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charlie Kirk — Timeline & Key Sources",
    description:
      "Everything gathered: what happened, statements, live updates, and trustworthy links.",
  },
};

type LinkItem = { label: string; href: string; note?: string };
type Fact = { label: string; value: string };
type SectionNote = string;

async function getData() {
  const trendKeywords = [
    "Charlie Kirk", "Turning Point USA", "political commentary", "recent speech",
    "media coverage", "public statements", "news clips", "Twitter reactions",
    "conservative news", "hot topics", "latest updates", "Charlie Kirk video"
  ];

  const quickFacts: Fact[] = [
    { label: "Date", value: "September 11, 2025 (hours ago)" },
    { label: "Location", value: "Various media appearances & social platforms" },
    { label: "Primary Individual", value: "Charlie Kirk" },
    { label: "Current Snapshot", value: "Statements circulating online; trending reactions on social media" },
    { label: "Context", value: "Recent public statements or events; coverage by multiple outlets" },
  ];

  const liveCoverage: LinkItem[] = [
    { label: "Fox News — Charlie Kirk latest statement", href: "https://www.foxnews.com/politics/charlie-kirk-recent-speech", note: "Official coverage of recent speech" },
    { label: "CNN — Reactions to Charlie Kirk", href: "https://www.cnn.com/2025/09/11/politics/charlie-kirk-reactions/index.html", note: "Media reactions and analysis" },
    { label: "Turning Point USA — Social update", href: "https://www.tpusa.com/news/charlie-kirk-live", note: "Direct organization update" },
    { label: "Twitter trending reactions", href: "https://twitter.com/search?q=Charlie+Kirk", note: "Crowd-sourced reactions" },
    { label: "YouTube clips", href: "https://www.youtube.com/results?search_query=charlie+kirk+latest", note: "Video coverage & speeches" },
  ];

  const keyMessages: SectionNote[] = [
    "Check linked reports for full context before forming opinions.",
    "Reactions on social media may reflect diverse perspectives.",
    "Official statements may be updated; follow reputable sources for accuracy.",
  ];

  const incidentSummary: SectionNote[] = [
    "Recent public speech by Charlie Kirk generated significant attention.",
    "Media outlets have covered the statements with varying analysis.",
    "Social media responses and trending topics highlight engagement and debate.",
    "Direct statements from Turning Point USA provide organizational context.",
    "Updates continue to emerge as videos and statements circulate online.",
  ];

  const media = {
    heroImage: {
      src: "/charlie-kirk.avif",
      alt: "Charlie Kirk speaking at an event (illustrative).",
      credit: "Unsplash (illustrative image; not from event)",
    },
   
  };

  const faqs: { q: string; a: string }[] = [
    { q: "Is there an official follow-up?", a: "Updates may come via Turning Point USA or major media outlets. Check links above for latest statements." },
    { q: "Where can I watch Charlie Kirk's latest speech?", a: "Videos are available on social platforms, YouTube, and news outlets as cited in live coverage." },
    { q: "What are reactions from the public?", a: "Social media and news analysis show diverse opinions; rely on multiple sources for perspective." },
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
    <span className="text-sm px-3 py-1 rounded-full bg-gray-100 border border-gray-200">{children}</span>
  );
}

export default async function Page() {
  const data = await getData();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Charlie Kirk Update (2025) — Timeline & Reactions",
    about: ["Charlie Kirk", "Turning Point USA", "Political commentary"],
    datePublished: "2025-09-11T00:30:00+01:00",
    dateModified: new Date().toISOString().slice(0, 10),
    author: { "@type": "Organization", name: "YourSite" },
  };

  return (
    <>
      <main className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-8">
        <AutoRefresher interval={300000} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <header className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold">Charlie Kirk — Latest Updates</h1>
          <p className="text-gray-600">
            Curated links to reporting, statements, and context. This page uses server rendering + ISR and refreshes periodically.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {['Live coverage', 'Timeline', 'Clips & context', 'FAQs'].map((f) => (<Pill key={f}>{f}</Pill>))}
          </div>
        </header>

        <figure className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
          <img src={data.media.heroImage.src} alt={data.media.heroImage.alt} className="w-full h-[400px] object-cover" />
          <figcaption className="p-3 text-xs text-gray-500">{data.media.heroImage.alt} — {data.media.heroImage.credit}</figcaption>
        </figure>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 space-y-6">
            <Section title="Live Coverage & Primary Sources">
              <ul className="list-disc pl-5 space-y-2">
                {data.liveCoverage.map((l) => (
                  <li key={l.href}>
                    <a className="text-blue-600 hover:underline" href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
                    {l.note ? <span className="text-gray-500"> — {l.note}</span> : null}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Charlie Kirk Shooting — What We Know So Far">
<div className="bg-white p-6 rounded-2xl shadow-md text-gray-900 leading-relaxed space-y-4">
<p>Charlie Kirk, founder of Turning Point USA, was fatally shot while speaking at Utah Valley University. Witnesses described chaos as people fled the campus following the shooting.</p>
<p>The FBI and local authorities are actively investigating the incident. Initial reports of a suspect in custody were later corrected; that individual faced obstruction of justice charges instead.</p>
<p>Prominent figures, including President Trump and Gov. Spencer Cox, publicly condemned the shooting and mourned Kirk's death. Flags have been ordered to half-staff in his honor.</p>
<p>Videos from attendees and rooftop vantage points provide graphic accounts. For accurate details, follow reporting from verified news outlets.</p>
</div>
</Section>

            <Section title="Key Messages (Summary)">
              <ul className="list-disc pl-5 space-y-2">{data.keyMessages.map((m) => (<li key={m}>{m}</li>))}</ul>
            </Section>

            <Section title="What We Know (Working Timeline)">
              <ul className="list-disc pl-5 space-y-2">{data.incidentSummary.map((m) => (<li key={m}>{m}</li>))}</ul>
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
              <div className="flex flex-wrap gap-2">{data.trendKeywords.map((k) => (<Pill key={k}>{k}</Pill>))}</div>
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
          Sources: Fox News, CNN, Turning Point USA, Twitter, YouTube. Always defer to official statements from those involved.
          <NewsletterForm />
        </footer>
      </main>
      <Home />
    </>
  );
}
