import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";
import { notFound } from "next/navigation";

export default function FilteredNewsPage({ params }) {
  const newsYear = params.year;
  const newsByYear = getNewsForYear(newsYear);
  return <NewsList news={newsByYear} />;
}
