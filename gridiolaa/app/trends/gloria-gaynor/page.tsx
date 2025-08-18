// app/trends/gloria-gaynor/page.tsx
import type { Metadata } from "next";
import { Suspense } from "react";
import AutoRefresher from "@/app/trends/gloria-gaynor/components/AutoRefresher";
import Home from "./components/page";
// ---------- Page metadata ----------
export const metadata: Metadata = {
  title: "Gloria Gaynor & the 2025 Kennedy Center Honors — Trend Brief",
  description:
    "Everything about the 'Gloria Gaynor' trend: 2025 Kennedy Center Honorees (Gloria Gaynor, George Strait, Sylvester Stallone, KISS, Michael Crawford), dates, Trump’s role, FAQs, and quick links.",
  openGraph: {
    title: "Gloria Gaynor & the 2025 Kennedy Center Honors — Trend Brief",
    description:
      "Fast facts, honorees, key dates, controversies, and FAQs about the 2025 Kennedy Center Honors.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gloria Gaynor & the 2025 Kennedy Center Honors — Trend Brief",
    description:
      "Fast facts, honorees, key dates, controversies, and FAQs about the 2025 Kennedy Center Honors.",
  },
};

// Revalidate every hour (ISR)
export const revalidate = 3600;

// ---------- Data (snapshot) ----------
type Link = { label: string; href: string };
type Person = {
  name: string;
  role: string;
  note?: string;
  links?: Link[];
};

const honorees: Person[] = [
  {
    name: "Gloria Gaynor",
    role: "Singer, 'I Will Survive'",
    links: [
      { label: "CBS coverage (segment)", href: "https://www.cbsnews.com/news/trump-kennedy-center-announce-honorees/" },
    ],
  },
  {
    name: "George Strait",
    role: "Country music icon",
  },
  {
    name: "Sylvester Stallone",
    role: "Actor, filmmaker ('Rocky', 'Rambo')",
  },
  {
    name: "KISS",
    role: "Rock band",
    note: "Gene Simmons (bass/co-lead vocals), Paul Stanley (guitar/co-lead vocals), Ace Frehley (guitar), Peter Criss (drums).",
    links: [
      { label: "Entertainment Weekly write-up", href: "https://ew.com/kiss-honored-kennedy-center-after-slamming-trump-11791601" },
    ],
  },
  {
    name: "Michael Crawford",
    role: "Actor/singer ('The Phantom of the Opera')",
    links: [
      { label: "Wikipedia bio", href: "https://en.wikipedia.org/wiki/Michael_Crawford" },
    ],
  },
];

const quickFacts = {
  edition: "48th Kennedy Center Honors (2025)",
  galaDate: "Sunday, December 7, 2025 (Washington, D.C.)",
  broadcast: "Airs later on CBS; streams on Paramount+ (per Kennedy Center)",
  institution: "The John F. Kennedy Center for the Performing Arts",
  notes: [
    "‘Honorees’ are the official recipients; the institution typically doesn’t publish a public ‘nominees’ list.",
    "Donald Trump announced the 2025 honorees and said he would host the gala; his involvement has sparked commentary and criticism.",
  ],
  links: [
    { label: "Kennedy Center 48th Honors page", href: "https://www.kennedy-center.org/whats-on/honors/" },
    { label: "Kennedy Center press note (date/broadcast)", href: "https://www.kennedy-center.org/news-room/press-release-landing-page/48th-annual-kennedy-center-honors/" },
    { label: "AP News report", href: "https://apnews.com/article/trump-kennedy-center-honorees-6c553c800ba334ad1ea47858b3dc271c" },
    { label: "TIME recap", href: "https://time.com/7309301/trump-kennedy-center-honors-kiss-sylvester-stallone-george-strait/" },
    { label: "CBS segment", href: "https://www.cbsnews.com/news/trump-kennedy-center-announce-honorees/" },
  ] as Link[],
};

const relatedQueries = [
  "gloria gaynor",
  "kennedy center honors 2025",
  "kennedy center honors",
  "george strait",
  "sylvester stallone",
  "kennedy center honorees",
  "kennedy center honorees 2025",
  "kiss",
  "gene simmons",
  "donald trump kennedy center honors",
  "gloria gaynor trump",
  "kennedy center nominees",
  "the kennedy center",
  "kennedy center nominees 2025",
  "who is michael crawford",
  "kiss band",
  "kennedy honors 2025",
  "trump kennedy center",
];

// ---------- Client: auto-refresh every second ----------
<Suspense fallback={null}>
  <AutoRefresher interval={1000} />
</Suspense>


// ---------- Components ----------
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl shadow-md p-5 bg-white border border-gray-200 ${className}`}>
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-semibold tracking-tight mb-3">{children}</h2>;
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="underline decoration-dotted hover:decoration-solid hover:opacity-80" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Gloria Gaynor & the 2025 Kennedy Center Honors — Trend Brief",
    datePublished: new Date().toISOString(),
    about: honorees.map((h) => ({ "@type": "Person", name: h.name })),
    keywords: relatedQueries.join(", "),
    publisher: { "@type": "Organization", name: "Trend Brief" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

// ---------- Page ----------
export default async function Page() {
  const generatedAt = new Date().toISOString();

  return (
    <>
    <main className="mx-auto max-w-5xl px-5 py-8 text-gray-900">
      <Suspense fallback={null}>
        <AutoRefresher />
      </Suspense>
      <JsonLd />

      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Gloria Gaynor & the 2025 Kennedy Center Honors — Trend Brief</h1>
        <p className="text-sm mt-2 opacity-80">
          Static snapshot (ISR). Last generated: <time dateTime={generatedAt}>{new Date(generatedAt).toLocaleString()}</time>
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-5">
        {/* Left column: Quick Facts */}
        <Card className="md:col-span-1">
          <SectionTitle>Quick facts</SectionTitle>
          <ul className="space-y-2 text-sm">
            <li><strong>Edition:</strong> {quickFacts.edition}</li>
            <li><strong>Gala date:</strong> {quickFacts.galaDate}</li>
            <li><strong>Broadcast:</strong> {quickFacts.broadcast}</li>
            <li><strong>Institution:</strong> {quickFacts.institution}</li>
          </ul>
          <div className="mt-4">
            <SectionTitle>Official links</SectionTitle>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {quickFacts.links.map((l) => (
                <li key={l.href}>
                  <ExternalLink href={l.href}>{l.label}</ExternalLink>
                </li>
              ))}
            </ul>
          </div>
        </Card>

        {/* Middle column: Honorees */}
        <Card className="md:col-span-1">
          <SectionTitle>2025 honorees</SectionTitle>
          <ul className="space-y-3">
            {honorees.map((h) => (
              <li key={h.name}>
                <div className="font-medium">{h.name}</div>
                <div className="text-sm opacity-80">{h.role}</div>
                {h.note && <div className="text-xs mt-1 opacity-70">{h.note}</div>}
                {h.links && h.links.length > 0 && (
                  <ul className="mt-1 flex flex-wrap gap-2 text-xs">
                    {h.links.map((l) => (
                      <li key={l.href}>
                        <ExternalLink href={l.href}>{l.label}</ExternalLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </Card>

        {/* Right column: Trend/Context */}
        <Card className="md:col-span-1">
          <SectionTitle>Why it’s trending</SectionTitle>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              Gloria Gaynor is among the <em>2025 Kennedy Center Honorees</em>, alongside George Strait, Sylvester Stallone, KISS, and Michael Crawford.
            </li>
            <li>
              Donald Trump announced the honorees and said he will host the gala, prompting coverage and commentary.
            </li>
            <li>
              Discussion points include the meaning of “honorees” (official recipients) vs. “nominees” (generally not published), and Gaynor’s cultural impact (“I Will Survive”).
            </li>
          </ul>
        </Card>
      </div>

      {/* FAQs / Explainers */}
      <div className="mt-6 grid md:grid-cols-2 gap-5">
        <Card>
          <SectionTitle>What are the Kennedy Center Honors?</SectionTitle>
          <p className="text-sm">
            An annual lifetime-achievement recognition by the Kennedy Center celebrating contributions to American culture through the performing arts.
          </p>
        </Card>
        <Card>
          <SectionTitle>Who is Michael Crawford?</SectionTitle>
          <p className="text-sm">
            English actor/singer famed for originating the title role in <em>The Phantom of the Opera</em> (Tony & Olivier winner). See{" "}
            <ExternalLink href="https://en.wikipedia.org/wiki/Michael_Crawford">his bio</ExternalLink>.
          </p>
        </Card>
      </div>

      {/* Related queries */}
      <Card className="mt-6">
        <SectionTitle>Related searches</SectionTitle>
        <div className="flex flex-wrap gap-2">
          {relatedQueries.map((q) => (
            <span
              key={q}
              className="text-xs bg-gray-100 px-2 py-1 rounded-full border border-gray-200"
              title={q}
              aria-label={q}
            >
              {q}
            </span>
          ))}
        </div>
      </Card>

      <footer className="mt-8 text-xs opacity-70">
        <p>
          Sources linked above. This page is informational and not affiliated with the Kennedy Center.
        </p>
      </footer>
    </main>
    <Home/>
    </>
  );
}
