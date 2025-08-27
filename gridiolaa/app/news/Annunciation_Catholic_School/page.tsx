// app/trends/annunciation-shooting/page.tsx
import type { Metadata } from "next";
import AutoRefresher from "@/app/components/AutoRefresher";
import Home from "@/app/components/FeedBack";
import NewsletterForm from "@/app/components/NewsletterForm";

// Shorter ISR while facts evolve
export const revalidate = 300; // re-generate at most every 5 min

export const metadata: Metadata = {
  title: "Annunciation Catholic School Shooting (Minneapolis, 2025) — Live Coverage, Timeline, Sources",
  description:
    "What we know so far about the Aug. 27, 2025 shooting at Annunciation Catholic School & Church in Minneapolis: live updates, timeline, verified reporting, and official statements.",
  alternates: { canonical: "/news/Annunciation-Catholic-School" },
  openGraph: {
    title: "Annunciation Catholic School (Minneapolis) — What’s Happening Now",
    description:
      "Live coverage, timeline, and credible sources on the shooting reported at Annunciation Catholic School & Church in Minneapolis.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Annunciation Catholic School Shooting — Timeline & Key Sources",
    description:
      "Shooter contained; ongoing investigation. Curated links to official statements and reputable coverage.",
  },
};

// Types
type LinkItem = { label: string; href: string; note?: string };
type Fact = { label: string; value: string };
type SectionNote = string;

async function getData() {
  // Data curated from live reporting linked below; keep copy minimal and cautious.
  const trendKeywords = [
    "Annunciation Catholic School Minneapolis",
    "Annunciation Church shooting",
    "Minneapolis school shooting 2025",
    "Tim Walz statement",
    "shooter contained Minneapolis",
    "ATF FBI Minneapolis church school",
  ];

  const quickFacts: Fact[] = [
    { label: "Date", value: "August 27, 2025 (local)" },
    { label: "Location", value: "Minneapolis, MN — Annunciation Catholic School & Church (south Minneapolis)" },
    { label: "Status (per officials)", value: "Shooter contained; no ongoing active threat, investigation ongoing" },
    { label: "Responders", value: "Minneapolis Police, State Patrol/BCA; federal partners incl. FBI & ATF (per reports)" },
  ];

  // Prioritize diverse, reputable coverage; label what each link offers.
  const liveCoverage: LinkItem[] = [
    { label: "AP News — Shooter ‘contained’; evacuation ongoing", href: "https://apnews.com/article/0fb27d2c911fe63a9f04791b444f298f", note: "Wire update" },
    { label: "ABC News — Shooter contained; suspect believed deceased (sources)", href: "https://abcnews.go.com/US/shooting-reported-catholic-school-minneapolis-governor/story?id=125022493", note: "National desk" },
    { label: "MPR News — Local live report", href: "https://www.mprnews.org/story/2025/08/27/minneapolis-shooting-annunciation-catholic-school-church", note: "Minnesota Public Radio" },
    { label: "Star Tribune — City live updates", href: "https://www.startribune.com/minneapolis-shooting-annunciation-church/601462164", note: "Local paper" },
    { label: "FOX 9 — Live blog / local TV", href: "https://www.fox9.com/news/minneapolis-shooting-church-aug-27-2025", note: "Rolling updates" },
    { label: "CBS Minnesota — Officials react", href: "https://www.cbsnews.com/minnesota/news/shooting-annunciation-church-minneapolis/", note: "Local CBS station" },
    { label: "Politico — Governor says shooting occurred; shooter contained", href: "https://www.politico.com/news/2025/08/27/minnesota-school-shooting-00528556", note: "Context" },
    { label: "The Guardian — Shooter contained; multiple victims reported", href: "https://www.theguardian.com/us-news/2025/aug/27/minneapolis-active-shooter-school", note: "International desk" },
  ];

  const keyMessages: SectionNote[] = [
    "Treat numbers of victims and identities as unconfirmed until officials release them.",
    "Clips on social media may be incomplete; rely on full articles and briefings.",
    "Details can change quickly; check the linked sources for the latest before sharing.",
  ];

  // Simple, neutral outline (avoid speculation)
  const incidentSummary: SectionNote[] = [
    "Morning of Aug. 27: Police responded to reports of gunfire at Annunciation Catholic School & Church in south Minneapolis.",
    "Officials stated the shooter was contained; sources in multiple outlets indicate the suspect may be deceased.",
    "Students and staff were evacuated; significant law enforcement and EMS presence on scene.",
    "State officials (Gov. Tim Walz) and city leaders acknowledged the incident and said state and federal partners are assisting.",
    "Injuries and other specifics remain fluid pending official briefings.",
  ];

  const media = {
    heroImage: {
      src: "/annunciation_placeholder.webp", // neutral city/chapel exterior placeholder
      alt: "Police presence near a church-school campus (illustrative).",
      credit: "Illustrative image — not from scene",
    },
    liveClip: {
      src: "https://www.youtube.com/embed/4sPyXcT0Hp8",
      title: "Local coverage: Parents gather after shooting (YouTube)",
    },
  };

  const faqs: { q: string; a: string }[] = [
    {
      q: "Is there an ongoing threat?",
      a: "Officials said the shooter is contained and there is no active threat to the community; always follow local authority guidance and the latest briefings.",
    },
    {
      q: "Are there confirmed casualties?",
      a: "Outlets report injuries; exact numbers and status should be confirmed via official statements and reputable reporting.",
    },
    {
      q: "What happens next?",
      a: "Expect perimeter security, family reunification, and scheduled briefings by city/state officials; investigations typically involve MPD, BCA/State Patrol, and federal partners.",
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
    headline: "Annunciation Catholic School Shooting (Minneapolis, 2025) — Timeline & Sources",
    about: ["Annunciation Catholic School", "Minneapolis shooting", "Tim Walz"],
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    author: { "@type": "Organization", name: "YourSite" },
  };

  return (
    <>
      <main className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-8">
        <AutoRefresher interval={180000} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <header className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold">Annunciation Catholic School (Minneapolis) — What’s Happening Now</h1>
          <p className="text-gray-600">
            Curated links to official statements and reporting. This page uses server rendering + ISR and refreshes periodically.
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

            <Section title="What We Know So Far (Working Summary)">
              <div className="bg-white p-6 rounded-2xl shadow-md text-gray-900 leading-relaxed space-y-4">
                {data.incidentSummary.map((m) => (
                  <p key={m}>{m}</p>
                ))}
              </div>
            </Section>

            
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
                Tip: When details conflict, prioritize official briefings and follow-up reporting from reputable outlets.
              </p>
            </Section>

            

            <Section title="Key Messages (Summary)">
              <ul className="list-disc pl-5 space-y-2">
                {data.keyMessages.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </Section>

            <Section title="Clips & Background">
              <div className="space-y-4">
                <iframe
                  className="w-full h-[420px] rounded-xl shadow-md"
                  src={data.media.liveClip.src}
                  title={data.media.liveClip.title}
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
          Sources: AP, ABC News, MPR News, Star Tribune, FOX 9, CBS Minnesota, Politico, The Guardian. Always defer to official statements from authorities.
          <NewsletterForm/>
        </footer>
      </main>
      <Home/>
    </>
  );
}
