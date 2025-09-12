import type { Metadata } from "next";
import AutoRefresher from "@/app/components/AutoRefresher";
import Home from "@/app/components/FeedBack";
import NewsletterForm from "@/app/components/NewsletterForm";
import ProductsClient from "@/app/components/ProductsClient";
export const revalidate = 900; // ISR every 15 min

export const metadata: Metadata = {
  title: "Cincinnati Open 2025 — Results, Scores, Sinner vs Alcaraz",
  description:
    "Complete coverage of Cincinnati Open 2025: match results, schedule, scores, and updates including Sinner vs Alcaraz. Official ATP sources, images, and videos.",
  alternates: { canonical: "/trends/cincinnati-open-2025" },
  openGraph: {
    title: "Cincinnati Open 2025 — Results & Live Updates",
    description:
      "Match results, scores, highlights, and Sinner vs Alcaraz coverage for Cincinnati Open 2025.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cincinnati Open 2025 — Results & Updates",
    description:
      "Live scores, highlights, Sinner vs Alcaraz, and full coverage of Cincinnati Open 2025.",
  },
};

type LinkItem = { label: string; href: string; note?: string };
type Fact = { label: string; value: string };

async function getData() {
  const trendKeywords = [
    "cincinnati open 2025","jannik sinner","sinner vs alcaraz","alcaraz","alcaraz sinner",
    "cincinnati open results","sinner alcaraz","cincinnati open","sinner alcaraz cincinnati",
    "alcaraz vs sinner","cincinnati open 2025 final","sinner vs alcaraz cincinnati","carlos alcaraz",
    "sinner","cincinnati open 2025 results","cincinnati open scores","jannik sinner vs carlos alcaraz",
    "atp cincinnati","cincinnati open 2025 schedule","tennis","cincinnati tennis","sinner injury"
  ];

  const quickFacts: Fact[] = [
    { label: "Tournament", value: "Cincinnati Open 2025 (ATP Masters 1000)" },
    { label: "Surface", value: "Hard Court" },
    { label: "Location", value: "Cincinnati, Ohio, USA" },
    { label: "Final Match", value: "Jannik Sinner vs Carlos Alcaraz" },
    { label: "Status", value: "Sinner retired due to injury (see official ATP updates)" },
  ];

  const officialSources: LinkItem[] = [
    { label: "ATP Official — Cincinnati Open 2025", href: "https://www.atptour.com/en/tournaments/cincinnati/422/overview" },
    { label: "Tennis Channel — Results & Highlights", href: "https://www.tennischannel.com/tournaments/cincinnati-open" },
    { label: "Cincinnati Open Wikipedia", href: "https://en.wikipedia.org/wiki/2025_Cincinnati_Open" }
  ];

  const heroMedia = {
    image: {
      src: "https://ss-i.thgim.com/public/incoming/2c725/article69949107.ece/alternates/LANDSCAPE_1200/2025-08-18T201016Z_315718109_MT1USATODAY26874646_RTRMADP_3_TENNIS-CINCINNATI-OPEN.JPG",
      alt: "Jannik Sinner at Cincinnati Open 2025",
      credit: "Wikimedia Commons"
    },
    video: {
      src: "https://www.youtube.com/embed/HbteKIxSUBk", // replace with real YouTube highlights
      caption: "Cincinnati Open 2025 Highlights: Sinner vs Alcaraz"
    }
  };

  return { trendKeywords, quickFacts, officialSources, heroMedia };
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
    headline: "Cincinnati Open 2025 — Sinner vs Alcaraz",
    author: { "@type": "Organization", name: "YourSite" },
    datePublished: new Date().toISOString(),
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://yourdomain.com/trends/cincinnati-open-2025" }
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
        <h1 className="text-2xl md:text-3xl font-bold">Cincinnati Open 2025 — Sinner vs Alcaraz</h1>
        <p className="text-gray-600">
          Full coverage: results, scores, schedule, highlights, and key updates from Cincinnati Open 2025.
        </p>
      </header>

      {/* Hero image */}
      <figure className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
        <img src={data.heroMedia.image.src} alt={data.heroMedia.image.alt} className="w-full h-[400px] object-cover" />
        <figcaption className="p-3 text-xs text-gray-500">{data.heroMedia.image.credit}</figcaption>
      </figure>
<div className=" p-6 bg-white dark:bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-gray-600 mb-6">
        Cincinnati Open 2025 – Alcaraz vs Sinner
      </h1>

      <p className="text-gray-700 dark:text-black mb-4">
        The <strong>Cincinnati Open 2025</strong> has been one of the most dramatic tournaments in
        recent years. The spotlight has been on{" "}
        <strong>Jannik Sinner</strong> and <strong>Carlos Alcaraz</strong>, two of the brightest
        stars in tennis today. Their much-anticipated clash in Cincinnati quickly became one of the
        most searched and discussed sporting events worldwide.
      </p>

      <p className="text-gray-700 dark:text-black mb-4">
        Sinner, who had been in top form, unfortunately had to{" "}
        <strong>retire from the match due to injury</strong>, sparking questions and concerns among
        fans about his health and future tournaments. Alcaraz, meanwhile, continued to show his
        strength on hard courts, adding another memorable chapter to the growing{" "}
        <strong>Sinner vs Alcaraz rivalry</strong>.
      </p>

      <h2 className="text-2xl font-semibold text-green-600 mt-6 mb-4">
        Key Highlights
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-black">
        <li>
          <strong>Cincinnati Open 2025 Final:</strong> Alcaraz vs Sinner
        </li>
        <li>
          <strong>Sinner Retires:</strong> Fans shocked as Jannik Sinner withdrew due to injury
        </li>
        <li>
          <strong>ATP Rankings Impact:</strong> The result shakes up the live ATP rankings
        </li>
        <li>
          <strong>Where to Watch:</strong> Matches streamed globally on the Tennis Channel and major
          sports networks
        </li>
        <li>
          <strong>Event Dates:</strong> The Cincinnati Open ran in August 2025, just ahead of the US
          Open
        </li>
      </ul>

      <p className="text-gray-700 dark:text-black mt-6">
        The tournament also brought global attention to the city of <strong>Cincinnati</strong>, as
        fans followed live scores, results, and updates across platforms like{" "}
        <strong>ATP Tour</strong> and <strong>Tennis Channel</strong>.
      </p>

      <p className="text-gray-700 dark:text-black mt-4">
        This year’s edition of the Cincinnati Open has reminded tennis fans why it’s considered one
        of the most important ATP Masters events leading up to the Grand Slam season finale.
      </p>
    </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-6">
          <Section title="Official Sources & Highlights">
            <ul className="list-disc pl-5 space-y-2">
              {data.officialSources.map((l) => (
                <li key={l.href}>
                  <a className="text-blue-600 hover:underline" href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                  {l.note ? <span className="text-gray-500"> — {l.note}</span> : null}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Video Highlights">
            <iframe
              className="w-full h-[400px] rounded-xl shadow-md"
              src={data.heroMedia.video.src}
              title={data.heroMedia.video.caption}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <p className="text-xs text-gray-500 mt-2">{data.heroMedia.video.caption}</p>
          </Section>
        </div>

        <aside className="lg:col-span-1 space-y-6">
          <Section title="Quick Facts">
            <div className="grid grid-cols-1 gap-3">
              {data.quickFacts.map((q) => (
                <div key={q.label} className="rounded-2xl border border-gray-200 p-4 bg-white shadow-sm">
                  <div className="text-sm text-gray-500">{q.label}</div>
                  <div className="text-lg font-medium">{q.value}</div>
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
        </aside>
      </div>
      <footer>
<NewsletterForm/>
      </footer>
    </main>
    <ProductsClient/>
     <Home/>
    </>
  );
}
