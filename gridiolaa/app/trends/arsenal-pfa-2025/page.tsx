import { Metadata } from "next";
import Image from "next/image";
import AutoRefresher from "@/app/components/AutoRefresher";
import Home from "@/app/components/FeedBack";
import NewsletterForm from "@/app/components/NewsletterForm";

export const revalidate = 900; // ISR every 15 min

export const metadata: Metadata = {
  title: "Arsenal at the 2025 PFA Awards — Players & Reactions",
  description:
    "Explore Arsenal Women's presence at the 2025 PFA Awards, including standout players, context, and fan reactions from the Reddit discussion.",
  alternates: { canonical: "/trends/arsenal-pfa-2025" },
  openGraph: {
    title: "Arsenal at the 2025 PFA Awards — Players & Reactions",
    description:
      "A deep dive into Arsenal Women's representation at the 2025 PFA Awards, the players in contention, and the reactions from the fan community.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arsenal at the 2025 PFA Awards — Players & Reactions",
    description:
      "Arsenal Women's stars at the 2025 PFA Awards, their impact this season, and the buzz among supporters.",
  },
};

type SectionNote = string;
type LinkItem = { label: string; href: string };

async function getData() {
  const context: SectionNote[] = [
    "The 2025 PFA Awards have recognized several Arsenal Women’s players for their outstanding performances this season.",
    "Key figures like [Player Name] have been shortlisted, underlining Arsenal’s dominance in domestic and European competitions.",
    "This reflects the continued growth of the women’s game and Arsenal’s place at the heart of it."
  ];

  const extraText: SectionNote[] = [
    "Arsenal’s representation at the 2025 PFA Awards is a testament to the team’s consistency and the players’ influence on and off the pitch. Many fans see this as validation of the club’s commitment to women’s football."
  ];

  const trendKeywords: string[] = [
    "Arsenal Women PFA Awards 2025", "Reddit ArsenalWFC", "Arsenal WFC", "Player of the Year",
    "Arsenal Women news", "PFA Awards 2025", "Arsenal FC Women", "Women’s Super League"
  ];

 const otherPages: LinkItem[] = [
    { label: "Hurricane Erin Tracker", href: "/trends/hurricane-erin" },
    { label: "Bengals vs Commanders — Game Preview", href: "/trends/bengals-vs-commanders" },
    { label: "UFC 319 Results", href: "/trends/ufc-319-results" },
  ];

  const quickFacts: LinkItem[] = [
    { label: "Reddit Thread", href: "https://www.reddit.com/r/ArsenalWFC/comments/1muqnhg/the_arsenal_at_the_2025_pfa_awards/" },
    { label: "Official PFA", href: "https://www.thepfa.com/" },
    { label: "Date", href: "#" },
  ];

  const media = {
    heroImage: {
      src: "/bukayosaka.avif",
      alt: "Arsenal Women celebrating a win",
      credit: "Photo by [Photographer's Name]",
    },
    
  };

  return { context, extraText, trendKeywords, otherPages, quickFacts, media };
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

  return (
    <>
      <main className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-8">
        <AutoRefresher interval={300000} />

        <header className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold">Arsenal at the 2025 PFA Awards</h1>
          <p className="text-gray-600">
            An overview of Arsenal Women’s players nominated for the 2025 PFA Awards, their performances this season, and the fan reactions captured on Reddit.
          </p>
        </header>

        {/* Hero image */}
        <figure className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
          <Image
            src={data.media.heroImage.src}
            alt={data.media.heroImage.alt}
            width={1200}
            height={800}
            className="w-full h-[600px] object-cover"
          />
          <figcaption className="p-3 text-xs text-gray-500">
            {data.media.heroImage.alt} — {data.media.heroImage.credit}
          </figcaption>
        </figure>

        {/* Grid layout: main content + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            <Section title="Context & Significance">
              <ul className="list-disc pl-5 space-y-2">
                {data.context.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </Section>

            {/* Extra Text with White Background */}
            <section className="w-full bg-white shadow-lg p-6 rounded-2xl mt-6">
              {data.extraText.map((p, idx) => (
                <p key={idx} className="text-gray-800 leading-relaxed">{p}</p>
              ))}
            </section>

            <Section title="Fan Reactions">
              <p className="text-base leading-relaxed text-gray-700">
                Reactions on Reddit highlight both pride in Arsenal’s strong representation and debates over which players were most deserving. Many fans noted the symbolic importance of Arsenal Women dominating the shortlist.
              </p>
            </Section>

            
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <Section title="Quick Facts">
              <div className="grid grid-cols-1 gap-3">
                {data.quickFacts.map((q) => (
                  <div key={q.label} className="rounded-2xl border border-gray-200 p-4 bg-white shadow-sm">
                    <a href={q.href} className="text-blue-600 hover:underline">{q.label}</a>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Trend Keywords">
              <div className="flex flex-wrap gap-2">
                {data.trendKeywords.map((k) => (
                  <Pill key={k}>{k}</Pill>
                ))}
              </div>
            </Section>

            <Section title="Other Pages">
              <div className="grid grid-cols-1 gap-2">
                {data.otherPages.map((page) => (
                  <a key={page.href} href={page.href} className="block text-blue-600 hover:underline bg-white rounded-2xl p-3 shadow-sm">
                    {page.label}
                  </a>
                ))}
              </div>
            </Section>
          </aside>
        </div>

        <footer className="pt-2 text-sm text-gray-500">
          Sources: Reddit, The PFA, Arsenal FC, Public Media.
        </footer>
      </main>
<NewsletterForm/>
      <Home />
    </>
  );
}
