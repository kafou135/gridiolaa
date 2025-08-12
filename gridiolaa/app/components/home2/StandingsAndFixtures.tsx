"use client"
import { useEffect, useState } from "react";
import Link from "next/link";

interface Article {
  urlToImage?: string;
  title?: string;
  description?: string;
  url: string;
}

export default function TaylorSwiftTrend() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchTrend() {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=Taylor%20Swift%20new%20album&sortBy=publishedAt&apiKey=36da86be9aa44f77a1d7eaa022b5a8b0`
        );
        const data = await res.json();
        setArticles(data.articles || []);
      } catch (err) {
        console.error("Error fetching trend:", err);
      }
    }
    fetchTrend();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#b82c8f" }}>
        Taylor Swift – Latest Album News
      </h1>

      {articles.length === 0 ? (
        <p style={{ textAlign: "center" }}>Loading latest news...</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {articles.map((article, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
              )}
              <div style={{ padding: "15px" }}>
                <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
                  {article.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#555" }}>
                  {article.description}
                </p>
                <Link
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#b82c8f", fontWeight: "bold" }}
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
