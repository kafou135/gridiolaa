import type { Metadata } from "next";
import AutoRefresher from "@/app/components/AutoRefresher";
import Home from "@/app/components/FeedBack";
import NewsletterForm from "@/app/components/NewsletterForm";

// Incremental Static Regeneration — refresh server-rendered HTML every 15 minutes
export const revalidate = 900;

export const metadata: Metadata = {
  title: "NY Thruway Tour Bus Crash (Aug 22, 2025) — What We Know & Official Updates",
  description:
    "Live links to reliable reporting and official updates on the Aug 22, 2025 New York State Thruway tour bus crash near Pembroke: AP, ABC/CBS, Spectrum Local News, WKBW, Governor's statements, closures, FAQs, and safety notes.",
  alternates: { canonical: "/news/Tour_Bus_Crash" },
  openGraph: {
    title: "NY Thruway Tour Bus Crash — Live Updates & Sources",
    description:
      "Multiple fatalities and many injured after a tour bus returning from Niagara Falls overturned near Pembroke, NY. Links to AP, ABC/CBS, Spectrum Local News, and official statements.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "NY Thruway Tour Bus Crash — Live Updates & Sources",
    description:
      "All key info in one place: AP, ABC/CBS, Spectrum Local News, WKBW, closures, and safety notes.",
  },
};

// ---------------- Types ----------------
type LinkItem = { label: string; href: string; note?: string };
type Fact = { label: string; value: string };
type SectionNote = string;

// ---------------- Data (curated from live sources; copy kept minimal) ----------------
async function getData() {
  // Search/SEO helper keywords to help your page rank and to guide users’ intent
  const trendKeywords = [
    "New York Thruway crash",
    "I-90 crash Pembroke",
    "tour bus crash New York",
    "Niagara Falls to NYC bus crash",
    "NY State Police crash update",
    "Genesee County bus rollover",
    "New York highway closed crash",
    "Pembroke NY crash today",
    "multiple fatalities bus crash",
    "children among victims New York crash"
  ];

  const quickFacts: Fact[] = [
    { label: "Date", value: "Friday, Aug 22, 2025" },
    { label: "Location", value: "I‑90 (New York State Thruway) near Pembroke, NY (Genesee County)" },
    { label: "Vehicle/Occupants", value: "Tour bus ~50–52 aboard returning from Niagara Falls to NYC" },
    { label: "Status (developing)", value: "Multiple fatalities (incl. children) & many injuries; investigation ongoing" },
    { label: "Traffic", value: "Eastbound I‑90 closures between Exit 49 (Depew) and Exit 48A (Pembroke) — per local reports" },
    { label: "Official Guidance", value: "Follow New York State Police & Thruway Authority; avoid speculation" },
  ];

  const officialReports: LinkItem[] = [
    { label: "AP News — Rolling updates / report", href: "https://apnews.com/article/tour-bus-crash-new-york-4ceb29e05e1fc31d969e08162c265cf9", note: "Wire report from AP" },
    { label: "ABC News — National desk", href: "https://abcnews.go.com/US/new-york-thruway-tour-bus-crash/story?id=124890417", note: "At least 4 fatalities reported by law enforcement sources" },
    { label: "CBS News — Upstate NY highway crash", href: "https://www.cbsnews.com/news/tour-bus-crash-upstate-new-york-thruway-highway/", note: "Multiple fatalities; rescue response" },
    { label: "Spectrum Local News — Genesee County", href: "https://spectrumlocalnews.com/nc/coastal/news/2025/08/22/tour-bus-crash-shuts-down-eastbound-i-90-thruway-in-genesee-county", note: "Closures between Exit 49 & 48A" },
    { label: "WKBW Buffalo — Local coverage", href: "https://www.wkbw.com/news/local-news/all-i-90-lanes-closed-in-pembroke-after-crash-involving-bus", note: "Gov. Hochul statement; local impacts" },
    { label: "Governor Kathy Hochul — Statement (X)", href: "https://x.com/GovKathyHochul/status/1958944974000582887", note: "Coordinating with NYSP & local officials" },
    { label: "The Guardian — National/intl recap", href: "https://www.theguardian.com/us-news/2025/aug/22/new-york-bus-crash-niagara-falls", note: "Context & early details" },
    { label: "People — Summary", href: "https://people.com/multiple-dead-injured-tour-bus-carrying-52-crashes-11796184" },
    { label: "CNN — Breaking report", href: "https://www.cnn.com/2025/08/22/us/new-york-state-thruway-crash" },
  ];

  const keyMessages: SectionNote[] = [
    "This page aggregates links only; defer to New York State Police and official statements for definitive updates.",
    "Avoid speculation about causes until investigators release findings.",
    "Seat belt use on motorcoaches varies; early reports mention ejections — always use restraints when available.",
    "Expect rolling traffic closures/detours; check the Thruway Authority before traveling in the Buffalo/Genesee County area.",
  ];

  const preparedness: SectionNote[] = [
    "If you’re in the area, yield to emergency vehicles and avoid rubbernecking delays.",
    "Keep emergency numbers and medical information handy when traveling long distances by coach.",
    "Report credible information to authorities; do not share photos of victims.",
  ];

  // Media (public/CC sources to embed) — neutral imagery related to the Thruway & local news video
  const media = {
    heroImage: {
      src: "/TourBus.jpg",
      alt: "New York State Thruway near Pembroke, NY (service area under construction, 2022).",
      credit: "Andre Carrotflower via Wikimedia Commons (CC BY-SA 4.0)",
    },
    youtube: {
      // News clip about the crash; swap ID if you prefer a different outlet
      id: "gyt5mSTf0Z0",
      title: "Tour bus crash coverage (Upstate NY)",
    },
  };

  return { trendKeywords, quickFacts, officialReports, keyMessages, preparedness, media };
}

// ---------------- UI helpers ----------------
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

// ---------------- Page ----------------
export default async function Page() {
  const data = await getData();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "NY Thruway Tour Bus Crash (Aug 22, 2025) — What We Know",
    about: [
      "New York State Thruway",
      "I-90",
      "Pembroke, NY",
      "tour bus crash",
      "Niagara Falls to NYC"
    ],
    datePublished: "2025-08-22",
    author: { "@type": "Organization", name: "YourSite" },
  };

  return (
    <>
      <main className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-8">
        {/* Auto refresher to keep the page fresh without client reloads */}
        <AutoRefresher interval={300000} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <header className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold">NY Thruway Tour Bus Crash (Aug 22, 2025) — Reliable Links & Key Info</h1>
          <p className="text-gray-600">
            Multiple fatalities and many injured reported after a tour bus returning from Niagara Falls overturned near Pembroke, NY. This server-rendered page aggregates
            reliable reporting and official statements; it refreshes periodically.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["Official updates", "Road closures", "Context"].map((f) => (
              <Pill key={f}>{f}</Pill>
            ))}
          </div>
        </header>

        {/* Hero image (neutral/public/CC) */}
        <figure className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
          <img
            src={data.media.heroImage.src}
            alt={data.media.heroImage.alt}
            className="w-full h-[360px] object-cover"
            loading="lazy"
          />
          <figcaption className="p-3 text-xs text-gray-500">
            {data.media.heroImage.alt} — {data.media.heroImage.credit}
          </figcaption>
        </figure>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 space-y-6">
            <Section title=" Niagara Falls Tour Bus Crash — August 22, 2025">
                <div className="bg-white p-6 rounded-2xl shadow-md text-gray-900 leading-relaxed space-y-4">
  <p>
    A tour bus carrying about 50 passengers from Niagara Falls to New York City crashed into a ditch and rolled over on Interstate 90 near Pembroke, New York on Friday. Multiple fatalities were reported, and dozens of people were injured.
  </p>
  <p>
    Authorities indicated that many passengers were not wearing seat belts, and some were ejected from the bus, which suffered significant damage. Officials confirmed that at least one child was among the fatalities.
  </p>
  <p>
    Translators have been sent to assist investigators, as many passengers were of Indian, Chinese, or Filipino descent. Emergency responders, including helicopters and ambulances, were deployed to the scene.
  </p>
  <p>
    Around 30 victims were taken to local hospitals, with injuries ranging from minor to critical. Erie County Medical Center received 24 patients, and the University of Rochester-Golisano Children’s Hospital treated six, including critically injured children.
  </p>
  <p>
    The exact cause of the crash is still under investigation. Officials noted that the bus lost control on the median but did not collide with any other vehicles. Authorities continue to gather information and assist those affected.
  </p>
  <p className="text-sm text-gray-500">
    Sources: CNN, AP, ABC News, Spectrum Local News
  </p>
</div>

            </Section>
            <Section title="Official Reports & Live Coverage">
              <ul className="list-disc pl-5 space-y-2">
                {data.officialReports.map((l) => (
                  <li key={l.href}>
                    <a className="text-blue-600 hover:underline" href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label}
                    </a>
                    {l.note ? <span className="text-gray-500"> — {l.note}</span> : null}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Key Messages (Summary)">
              <ul className="list-disc pl-5 space-y-2">
                {data.keyMessages.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 mt-2">
                Always defer to the latest statements from New York State Police and local authorities.
              </p>
            </Section>

            {/* Video */}
            <Section title="On‑Scene Coverage (Video)">
              <div className="space-y-4">
                <iframe
                  className="w-full h-[480px] rounded-xl shadow-md"
                  src={`https://www.youtube.com/embed/${data.media.youtube.id}`}
                  title={data.media.youtube.title}
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

            <Section title="Search/Trend Keywords">
              <div className="flex flex-wrap gap-2">
                {data.trendKeywords.map((k) => (
                  <Pill key={k}>{k}</Pill>
                ))}
              </div>
            </Section>

            <Section title="Safety/Travel Notes">
              <ul className="list-disc pl-5 space-y-2">
                {data.preparedness.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Section>
          </aside>
        </div>

        <footer className="pt-2 text-sm text-gray-500">
          Sources linked above: AP, ABC/CBS, Spectrum Local News, WKBW, Governor's office. This page does not replace official guidance.
      <NewsletterForm/>
        </footer>
      </main>
      {/* Keep your site's global components */}
      <Home />
    </>
  );
}
