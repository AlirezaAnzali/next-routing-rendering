"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const isActive = usePathname().startsWith(href);
  return (
    <Link href={href} className={isActive ? "active" : ""}>
      {children}
    </Link>
  );
}
