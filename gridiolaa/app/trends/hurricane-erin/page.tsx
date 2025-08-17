import type { Metadata } from "next";
import AutoRefresher from "@/app/components/AutoRefresher";

export const revalidate = 900; // ISR every 15 min

export const metadata: Metadata = {
  title: "Hurricane Erin (2025) — Tracker, Path, Impact, How to Prepare",
  description:
    "Live sources, official trackers, current status, projected path and impacts for Hurricane Erin (2025): NHC advisories, Weather.com maps, ABC/CBS updates, FAQs, and preparedness tips.",
  alternates: { canonical: "/trends/hurricane-erin" },
  openGraph: {
    title: "Hurricane Erin (2025) — Tracker & Updates",
    description:
      "NHC advisories, path cone, wind probabilities, and trusted news/live maps for Hurricane Erin.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hurricane Erin (2025) — Tracker & Updates",
    description:
      "All key info in one place: NHC, Weather.com, ABC/CBS trackers, maps, and FAQs.",
  },
};

type LinkItem = { label: string; href: string; note?: string };
type Fact = { label: string; value: string };
type SectionNote = string;

async function getData() {
  // Data is curated from live sources linked below; keep copy minimal and push users to official trackers.
  const trendKeywords = [
    "hurricane erin", "hurricane erin 2025", "hurricane", "weather",
    "puerto rico hurricane", "hurricane erin path tracker", "when is hurricane erin supposed to hit",
    "national hurricane center", "where is hurricane erin now", "erin hurricane tracker",
    "noaa hurricane", "turks and caicos", "hurricane erin update", "hurricane center",
    "hurricane erin puerto rico", "erin projected path", "weather.com", "huricane erin",
    "puerto rico weather", "hurricane erin noaa", "path of hurricane erin 2025", "noaa",
    "local weather", "category 5 hurricane", "hurricane categories", "hurricane season 2025",
    "cat 5 hurricane", "hurricanes"
  ];

  const quickFacts: Fact[] = [
    { label: "Basin / Season", value: "Atlantic — 2025 Hurricane Season" },
    { label: "Storm Name / ID", value: "Hurricane Erin — AL05 (2025)" },
    { label: "Status (latest)", value: "Major hurricane; see NHC for current category and position" },
    { label: "Primary Risks", value: "Hurricane-force winds, life-threatening surf/rip currents, heavy rain & flash flooding" },
    { label: "Official Guidance", value: "Follow NHC advisories and local emergency management" },
  ];

  const officialTrackers: LinkItem[] = [
    { label: "NHC — Public Advisory (live)", href: "https://www.nhc.noaa.gov/text/refresh/MIATCPAT5%2Bshtml/151446.shtml", note: "Official position, watches/warnings" },
    { label: "NHC — Forecast/Advisory", href: "https://www.nhc.noaa.gov/text/refresh/MIATCMAT5%2Bshtml/170839.shtml", note: "Track & intensity guidance" },
    { label: "NHC — Cone & Wind Probabilities", href: "https://www.nhc.noaa.gov/graphics_at5.shtml?start=", note: "Cone, key messages & wind speed probs" },
    { label: "Weather.com — Erin Maps & Spaghetti Models", href: "https://weather.com/storms/hurricane/news/2025-08-15-hurricane-erin-maps-tracker-spaghetti-models-forecast" },
    { label: "ABC News — Live Tracker", href: "https://abcnews.go.com/US/hurricane-erin-tracker-atlantic-hurricane-season/story?id=124676732" },
    { label: "CBS News — Track & Path", href: "https://www.cbsnews.com/news/hurricane-erin-track-path/" },
    { label: "PBS — Live Map", href: "https://www.pbs.org/newshour/world/live-map-track-the-path-of-tropical-storm-erin" },
    { label: "NHC — Advisory Archive", href: "https://www.nhc.noaa.gov/archive/2025/ERIN.shtml", note: "Past advisories & discussions" },
  ];

  const keyMessages: SectionNote[] = [
    "For exact, current status (category, location, watches/warnings), use the NHC links above.",
    "Large swells and dangerous rip currents can affect areas far from the center; heed local surf warnings.",
    "Flash flooding and mudslides are possible in mountainous terrain with heavy rain bands.",
  ];

  const preparedness: SectionNote[] = [
    "Know your local evacuation zones and routes; follow instructions from local officials.",
    "Prepare a 3–7 day kit: water, nonperishables, meds, chargers, batteries, important documents.",
    "If under a watch or warning, secure outdoor items, charge devices, and avoid flooded roads.",
  ];

  // Media (public/CC sources to embed)
  const media = {
    // Public domain satellite still (NOAA/GOES via Wikimedia)
    heroImage: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Erin_2025-08-16_1840Z.jpg",
      alt: "Hurricane Erin to the north of the Leeward Islands on Aug 16, 2025 (NOAA/GOES-19).",
      credit: "NOAA/GOES-19 via Wikimedia Commons",
    },
    // Animated loop (GIF) — can be heavy; we still provide it for visual context.
    loopGif: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/2025_CIMSS_05L_Erin_visible_infrared_satellite_loop.gif",
      alt: "Visible/IR satellite loop of Erin (CIMSS/NOAA).",
      credit: "CIMSS/NOAA via Wikimedia Commons",
    },
    // WebM explainer/clip from CIRA/NOAA (also on Commons)
    webmVideo: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Erin_2025-08-11_2038Z_Forms_as_Tropical_Storm_Near_the_Cabo_Verde_Islands_(CIRA).webm",
      caption: "CIRA/NOAA clip: Erin forms near Cabo Verde Islands (Aug 11, 2025).",
      credit: "CSU/CIRA & NOAA via Wikimedia Commons",
    },
  };

  return { trendKeywords, quickFacts, officialTrackers, keyMessages, preparedness, media };
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
    headline: "Hurricane Erin (2025) — Tracker, Path, Impact",
    about: ["Hurricane Erin", "NHC", "NOAA", "Atlantic hurricane season"],
    author: { "@type": "Organization", name: "YourSite" },
  };

  return (
    <main className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-8">
      <AutoRefresher interval={300000} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold">Hurricane Erin (2025) — Live Trackers & Key Info</h1>
        <p className="text-gray-600">
          Official NHC advisories, reliable maps, impacts, and preparedness. This page uses server rendering + ISR; refreshes periodically for links and media.
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {["Official trackers", "Path & impacts", "Preparedness"].map((f) => (
            <Pill key={f}>{f}</Pill>
          ))}
        </div>
      </header>

      {/* Hero image */}
      <figure className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
        <img
          src={data.media.heroImage.src}
          alt={data.media.heroImage.alt}
          className="w-full h-[400px] w-full object-cover"
        />
        <figcaption className="p-3 text-xs text-gray-500">
          {data.media.heroImage.alt} — {data.media.heroImage.credit}
        </figcaption>
      </figure>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-6">
          <Section title="Official Trackers & Live Coverage">
            <ul className="list-disc pl-5 space-y-2">
              {data.officialTrackers.map((l) => (
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
              Always defer to the latest NHC advisory and your local meteorological service.
            </p>
          </Section>

          {/* Videos */}
          <Section title="Videos">
            <div className="space-y-4">
              <iframe
  className="w-full h-[500px] rounded-xl shadow-md"
  src="https://www.youtube.com/embed/KfLaAdEDQD4"
  title="Hurricane Erin Update"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>


              <figure className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
                <img src={data.media.loopGif.src} alt={data.media.loopGif.alt} className="w-full h-auto" />
                <figcaption className="p-3 text-xs text-gray-500">
                  {data.media.loopGif.alt} — {data.media.loopGif.credit}
                </figcaption>
              </figure>
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

          <Section title="Trend Breakdown Keywords">
            <div className="flex flex-wrap gap-2">
              {data.trendKeywords.map((k) => (
                <Pill key={k}>{k}</Pill>
              ))}
            </div>
          </Section>

          <Section title="Preparedness (Basics)">
            <ul className="list-disc pl-5 space-y-2">
              {data.preparedness.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Section>
        </aside>
      </div>

      <footer className="pt-2 text-sm text-gray-500">
        Sources: NHC/NOAA, Weather.com, ABC/CBS, PBS. Always follow official guidance.
      </footer>
    </main>
  );
}
