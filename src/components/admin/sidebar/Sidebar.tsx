import Link from "next/link";

export default function Sidebar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/dashboard/journal">Journal</Link>
          <ul>
            <li>
              <Link href="/dashboard/journal/categories">Categories</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
