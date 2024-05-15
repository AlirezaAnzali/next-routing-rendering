import { getAllNews } from "@/lib/news";
import NewsList from "@/components/news-list";

export default function NewsPage() {
  const news = getAllNews();
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
