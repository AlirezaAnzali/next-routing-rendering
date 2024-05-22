import Link from "next/link";
export default function NotFoundPage() {
  return (
    <div id="error">
      <h1>404 - Page Not Found!</h1>
      <p>We couldn't find the page you were looking for.</p>
      <Link href="/">Go Home</Link>
    </div>
  );
}
