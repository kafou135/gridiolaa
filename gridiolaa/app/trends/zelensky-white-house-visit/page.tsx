import { Metadata } from "next";
import Image from "next/image";
import AutoRefresher from "@/app/components/AutoRefresher";
import Home from "@/app/components/FeedBack";
import NewsletterForm from "@/app/components/NewsletterForm";

export const revalidate = 900; // ISR every 15 min

export const metadata: Metadata = {
  title: "President Zelensky's Visit to the White House — Context & Reactions",
  description:
    "Explore the background, symbolism, and public reactions to President Zelensky's visit to the White House, as captured in the viral Reddit post.",
  alternates: { canonical: "/trends/zelensky-white-house-visit" },
  openGraph: {
    title: "President Zelensky's Visit to the White House — Context & Reactions",
    description:
      "Dive into the details of President Zelensky's visit to the White House, including the symbolism of his attire and the opulent setting, and the public's response.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "President Zelensky's Visit to the White House — Context & Reactions",
    description:
      "An in-depth look at President Zelensky's visit to the White House, the symbolism behind his attire, and the public's reactions.",
  },
};

type SectionNote = string;
type LinkItem = { label: string; href: string };

async function getData() {
  const context: SectionNote[] = [
    "President Zelensky's visit to the White House was a significant diplomatic event, symbolizing the strengthening of ties between Ukraine and the United States.",
    "The choice of attire — an all-black suit — contrasted with the opulent gold decor of the White House, sparking discussions about symbolism and appropriateness.",
    "Public reactions were mixed, with some praising Zelensky's appearance and others criticizing the lavish setting.",
  ];

  const extraText: SectionNote[] = [
    "President Zelensky’s visit drew attention not only for its diplomatic importance but also for the visual contrast between his attire and the golden surroundings. Many commentators highlighted how this emphasized his focus on diplomacy amidst an extravagant setting."
  ];

  const trendKeywords: string[] = [
    "Zelensky White House", "Reddit viral post", "President Zelensky", "US-Ukraine relations",
    "diplomacy", "White House gold decor", "political symbolism", "Ukraine news"
  ];

  const otherPages: LinkItem[] = [
    { label: "Hurricane Erin Tracker", href: "/trends/hurricane-erin" },
    { label: "Bengals vs Commanders — Game Preview", href: "/trends/bengals-vs-commanders" },
    { label: "UFC 319 Results", href: "/trends/ufc-319-results" },
  ];

  const quickFacts: LinkItem[] = [
    { label: "Event", href: "https://www.reddit.com/r/pics/comments/1mtxcgb/president_zelensky_standing_out_amongst_the_gold/" },
    { label: "Location", href: "https://www.whitehouse.gov/" },
    { label: "Date", href: "#" },
  ];

  const media = {
    heroImage: {
      src: "/zelensky-gold.webp",
      alt: "President Zelensky standing in the White House",
      credit: "Photo by [Photographer's Name]",
    },
    video: {
      src: "https://www.youtube.com/embed/4JXrWXk-26c",
      title: "Zelensky White House Visit Highlights"
    }
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
          <h1 className="text-2xl md:text-3xl font-bold">President Zelensky's Visit to the White House</h1>
          <p className="text-gray-600">
            An exploration of the symbolism, context, and public reactions to President Zelensky's visit to the White House, as captured in the viral Reddit post.
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
            <Section title="Context & Symbolism">
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

            <Section title="Public Reactions">
              <p className="text-base leading-relaxed text-gray-700">
                The public's response to the visit was varied. Some individuals praised President Zelensky's appearance and the diplomatic significance of the visit, while others criticized the opulence of the White House setting. The Reddit discussions reflect these mixed sentiments.
              </p>
            </Section>

            {/* Video */}
            <Section title="Video Highlights">
              <iframe
                className="w-full h-[500px] rounded-xl shadow-md"
                src={data.media.video.src}
                title={data.media.video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <Section title="Quick Facts">
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-3">
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
          Sources: Reddit, White House, Public Media. Always refer to official sources for verification.
<NewsletterForm/>
        </footer>
      </main>
      <Home />
    </>
  );
}
