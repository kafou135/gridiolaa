import type { Metadata } from "next";
import AutoRefresher from "@/app/components/AutoRefresher";
import Home from "./components/page";
// --- ISR config (SSG with revalidate) ---
export const revalidate = 300; // revalidate every 5 minutes

export const metadata: Metadata = {
  title: "Putin–Trump Alaska Summit: What Happened & Why It Matters",
  description:
    "All the key facts, players, timeline, optics, and next steps from the Trump–Putin Alaska summit at Joint Base Elmendorf–Richardson.",
  alternates: { canonical: "/trends/putin-trump-alaska" },
  openGraph: {
    title: "Putin–Trump Alaska Summit: What Happened & Why It Matters",
    description:
      "Key takeaways, attendees, military pageantry, press conference notes, and what’s next (incl. Zelensky visit).",
    type: "article",
  },
};

type Source = { title: string; url: string };
type Person = { name: string; role?: string };
type Aircraft = { name: string; note?: string };

type SummitData = {
  trendLabel: string;
  dateISO: string;
  location: string;
  baseFacts: string[];
  durationHours?: number;
  attendeesUS: Person[];
  attendeesRU: Person[];
  aircraft: Aircraft[];
  outcomes: string[];
  nextSteps: string[];
  notes: string[];
  sources: Source[];
  trendKeywords: string[];
  quickFacts: { label: string; value: string }[];
};

async function getSummitData(): Promise<SummitData> {
  // All strings are safe to render server-side. Update links freely.
  return {
    trendLabel: "Putin–Trump Alaska Summit",
    dateISO: "2025-08-15",
    location: "Joint Base Elmendorf–Richardson (JBER), Anchorage, Alaska",
    baseFacts: [
      "High-stakes meeting focused on Russia’s war in Ukraine",
      "Red-carpet arrival and choreographed military pageantry",
      "Joint remarks billed as a press conference (no questions taken)",
    ],
    durationHours: 2.5,
    attendeesUS: [
      { name: "Donald J. Trump", role: "President of the United States" },
      { name: "Marco Rubio", role: "Secretary of State" },
      { name: "Steve Witkoff", role: "Special Envoy (Middle East)" },
      { name: "Mike Dunleavy", role: "Governor of Alaska (greeting on arrival)" },
      { name: "Lisa Murkowski", role: "U.S. Senator (R-AK, greeted on arrival)" },
      { name: "Dan Sullivan", role: "U.S. Senator (R-AK, greeted on arrival)" },
    ],
    attendeesRU: [
      { name: "Vladimir Putin", role: "President of Russia" },
      { name: "Sergey Lavrov", role: "Foreign Minister" },
      { name: "Yury Ushakov", role: "Foreign Policy Aide" },
      // (Reported) additional econ/security officials traveled with the delegation
    ],
    aircraft: [
      { name: "B-2 Spirit", note: "Stealth bomber flyover on arrival" },
      { name: "F-35 Lightning II", note: "Four jets from Eielson AFB" },
      { name: "F-22 Raptor", note: "JBER-based fighters staged near red carpet" },
    ],
    outcomes: [
      "No ceasefire agreement or battlefield concessions announced",
      "Both sides called talks 'constructive', but maximalist positions unchanged",
      "Optics favored Putin internationally without immediate sanctions relief",
    ],
    nextSteps: [
      "Ukrainian President Volodymyr Zelenskyy to meet Trump in Washington on Monday",
      "Potential future three-way talks that include Ukraine explicitly",
      "European leaders reiterate: Russia cannot veto Ukraine’s EU/NATO path",
    ],
    notes: [
      "Setting choice underscored U.S.–Russia geography and Cold War symbolism",
      "Media & analysts highlighted optics vs. substance debate",
      "(Reported) Putin quipped 'Next time in Moscow' as event closed",
    ],
    sources: [
      // Core outcome / live coverage
      { title: "CBS News live updates (no ceasefire)", url: "https://www.cbsnews.com/live-updates/trump-putin-meeting-alaska-ukraine/" },
      { title: "ABC News live (Zelenskyy to DC Monday)", url: "https://abcnews.go.com/Politics/live-updates/trump-putin-meeting-summit-alaska/?id=124656413" },
      { title: "Al Jazeera recap: no deal", url: "https://www.aljazeera.com/news/2025/8/16/trump-putin-end-short-summit-without-ceasefire-deal-in-ukraine" },
      { title: "WSJ analysis: optics, no breakthrough", url: "https://www.wsj.com/world/russia/trump-putin-summit-ends-without-breakthrough-7406d667" },
      { title: "Atlantic Council expert reactions", url: "https://www.atlanticcouncil.org/blogs/new-atlanticist/experts-react/trump-and-putin-just-left-alaska-without-a-deal-russias-war-on-ukraine/" },

      // Pageantry / aircraft specifics
      { title: "ABC: B-2 flyover + four F-35s", url: "https://abcnews.go.com/Politics/b-2-bombers-trump-putin-meeting/story?id=124684641" },
      { title: "CBS: F-35s from Eielson + B-2 from Whiteman", url: "https://www.cbsnews.com/live-updates/trump-putin-meeting-alaska-ukraine/" },
      { title: "Axios: F-22s lined the red carpet", url: "https://www.axios.com/2025/08/15/trump-putin-alaska-f22-b2" },

      // Attendees / greetings
      { title: "ABC: Who’s in the meeting (Witkoff, Rubio; Lavrov, Ushakov)", url: "https://abcnews.go.com/Politics/who-is-in-meeting-with-trump-putin-alaska-summit/story?id=124689596" },
      { title: "CBS: Murkowski/Sullivan/Dunleavy greeted on arrival", url: "https://www.cbsnews.com/live-updates/trump-putin-meeting-alaska-ukraine/" },

      // Local & base context
      { title: "JBER official site", url: "https://www.jber.jb.mil/" },

      // Color / quotes
      { title: "CBS: Transcript-style recap; no Q&A", url: "https://www.cbsnews.com/news/transcript-of-what-putin-trump-said-in-alaska/" },
    ],
    trendKeywords: [
      "putin trump alaska summit",
      "vladimir putin",
      "putin trump",
      "b2 bomber",
      "trump and putin",
      "how tall is trump",
      "ukraine",
      "alaska summit",
      "putin and trump meeting",
      "trump",
      "ukraine news",
      "ukraine war",
      "donald trump",
      "president trump putin meeting",
      "trump putin summit",
      "trump meeting with putin",
      "steve witkoff",
      "huffington post",
      "russia",
      "trump and putin meeting in alaska",
      "trump putin press conference",
      "trump putin alaska",
      "putin and trump",
      "magadan",
      "marco rubio",
      "trump news",
      "how old is donald trump",
      "elmendorf air force base",
      "trump news today",
      "trump putin meeting alaska",
      "sean hannity",
      "f35",
      "nbc news",
      "witkoff",
      "trump putin live",
      "foxnews",
      "trump putin meeting live",
      "cspan",
      "elmendorf-richardson military base",
      "united states",
      "russia alaska",
      "press conference",
      "elmendorf afb"
    ],
    quickFacts: [
      { label: "Date", value: "Aug 15, 2025 (local)" },
      { label: "Location", value: "Joint Base Elmendorf–Richardson, Anchorage" },
      { label: "Focus", value: "War in Ukraine; ceasefire framework" },
      { label: "Outcome", value: "No ceasefire or concessions announced" },
      { label: "Pageantry", value: "B-2 flyover; F-35 & F-22 on display" },
      { label: "Next", value: "Zelenskyy to DC on Monday" },
      { label: "Trump age", value: "79 (born June 14, 1946)" },
      { label: "Trump height (reported)", value: "6 ft 3 in" },
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
  const data = await getSummitData();

  // JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Putin–Trump Alaska Summit: What Happened & Why It Matters",
    datePublished: data.dateISO,
    dateModified: data.dateISO,
    about: ["Russia", "United States", "Ukraine", "Alaska summit"],
    locationCreated: data.location,
    author: { "@type": "Organization", name: "YourSite" },
  };

  return (
    <>
    <main className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-8">
      {/* safe client refresher (1s) */}
      <AutoRefresher interval={1000} />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold">{data.trendLabel}</h1>
        <p className="text-gray-600">
          {new Date(data.dateISO).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
          {" · "}
          {data.location}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {data.baseFacts.map((f, i) => (
            <Pill key={i}>{f}</Pill>
          ))}
        </div>
      </header>

      {/* Quick facts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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

      <Section title="Key Takeaways">
        <ul className="list-disc pl-5 space-y-2">
          {data.outcomes.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      </Section>

      <Section title="Who Was in the Room">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">United States</h3>
            <ul className="space-y-1">
              {data.attendeesUS.map((p) => (
                <li key={p.name}>
                  <span className="font-medium">{p.name}</span>
                  {p.role ? <span className="text-gray-600"> — {p.role}</span> : null}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Russia</h3>
            <ul className="space-y-1">
              {data.attendeesRU.map((p) => (
                <li key={p.name}>
                  <span className="font-medium">{p.name}</span>
                  {p.role ? <span className="text-gray-600"> — {p.role}</span> : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Optics & Military Pageantry">
        <ul className="list-disc pl-5 space-y-2">
          {data.aircraft.map((a) => (
            <li key={a.name}>
              <span className="font-medium">{a.name}</span>
              {a.note ? <span className="text-gray-700"> — {a.note}</span> : null}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="What’s Next">
        <ul className="list-disc pl-5 space-y-2">
          {data.nextSteps.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </Section>

      <Section title="Notes & Color">
        <ul className="list-disc pl-5 space-y-2">
          {data.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </Section>

      <Section title="Trend Breakdown Keywords">
        <div className="flex flex-wrap gap-2">
          {data.trendKeywords.map((k) => (
            <Pill key={k}>{k}</Pill>
          ))}
        </div>
      </Section>

      <Section title="Further Reading & Live Coverage">
        <ul className="list-disc pl-5 space-y-2">
          {data.sources.map((s) => (
            <li key={s.url}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <footer className="pt-2 text-sm text-gray-500">
        Built with Next.js App Router. Server-rendered with incremental static regeneration.
      </footer>
    </main>
    <Home/>
    </>
  );
}
