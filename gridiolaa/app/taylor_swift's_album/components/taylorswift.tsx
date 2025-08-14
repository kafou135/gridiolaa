// app/taylor-swift-trend/page.js
export const metadata = {
  title: "Taylor Swift Drops New Album: The Life of a Showgirl",
  description: "Taylor Swift reveals her 12th studio album with a unique orange and mint-green theme, collaborations, and special physical editions."
};

export default function TaylorSwiftTrend() {
  return (
    <main style={{
      maxWidth: '720px',
      margin: '40px auto',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#e2e7e7ff',
      lineHeight: 1.6,
      padding: '0 20px',
    }}>
      <h1 style={{ fontSize: '2.8rem', color: '#cac4c9ff', marginBottom: '15px' }}>
        🎤 Taylor Swift Drops New Album: <br /> <em>The Life of a Showgirl</em>
      </h1>

      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ fontSize: '1.6rem', color: '#ece6ecff' }}>Announcement Details</h2>
        <p>
          Taylor Swift revealed her 12th studio album, <strong>The Life of a Showgirl</strong>, on August 12, 2025, during a surprise appearance on the <em>New Heights</em> podcast hosted by NFL stars Travis and Jason Kelce.  
          The announcement came at exactly 12:12 a.m. ET, referencing her iconic use of the number 12.
        </p>
        <p>
          Her official website featured a glittering orange countdown, and the Empire State Building was lit up in orange to celebrate the release.
        </p>
      </section>

      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ fontSize: '1.6rem', color: '#ede9eeff' }}>Album Theme & Collaborations</h2>
        <ul>
          <li>Visuals center on a vibrant <strong>orange and mint-green</strong> color palette.</li>
          <li>Physical copies available for preorder include <em>vinyl, cassette, and CD editions</em> with special posters.</li>
          <li>Production rumors include <strong>Max Martin</strong> and <strong>Shellback</strong>.</li>
          <li>A surprise collaboration with singer <strong>Sabrina Carpenter</strong> has fans buzzing.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ fontSize: '1.6rem', color: '#efeef0ff' }}>Release Info</h2>
        <p>
          Preorders are shipping before October 13, 2025. The official album release date is yet to be announced.
        </p>
      </section>

      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ fontSize: '1.6rem', color: '#eae5ebff' }}>Why This Matters</h2>
        <p>
          This album marks a new chapter after Swift’s historic reclaiming of her masters and follows her record-breaking streaming and touring milestones. The unique visual theme and teased collaborations have already sparked massive excitement worldwide.
        </p>
      </section>

      <footer style={{ fontSize: '0.9rem', color: '#666' }}>
        <p>Content based on news reports from August 2025.</p>
      </footer>
    </main>
  );
}
