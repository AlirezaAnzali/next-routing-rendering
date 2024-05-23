//client-side data fetching

// "use client";

// import { useEffect, useState } from "react";
// import NewsList from "@/components/news-list";

// export default function NewsPage() {
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     async function fetchNews() {
//       setIsLoading(true);
//       const response = await fetch("http://localhost:8080/news");
//       if (!response.ok) {
//         setError("Failed to fetch news");
//         setIsLoading(false);
//       }

//       const data = await response.json();
//       setNews(data);
//       setIsLoading(false);
//     }

//     fetchNews();
//   }, []);

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   let newsContent;

//   if (news && news.length > 0) {
//     newsContent = <NewsList news={news} />;
//   }

//   return (
//     <>
//       <h1>News Page</h1>
//       {newsContent}
//     </>
//   );
// }

//--------------------------------------------------------------

//server-side data fetching

import NewsList from "@/components/news-list";

export default async function NewsPage() {
  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) {
    throw new Error("Failed to fetch news");
  }

  const news = await response.json();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
