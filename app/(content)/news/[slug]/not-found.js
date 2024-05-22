import Link from "next/link";
export default function NewsNotFoundPage() {
  return (
    <div id="error">
      <h1>News Not Found!</h1>
      <p>Unfortunately, we couldn't find the news you were looking for.</p>
      <Link href="/news">Go Back to News</Link>
    </div>
  );
}
