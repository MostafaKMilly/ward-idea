// components/Header.jsx
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <Link
        href="/"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <Image src={"/logo1-1.png"} alt="Logo" width={120} height={20} />
        <span className="sr-only">Ward Idea</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <NavLink href="/" label="Home" />
        <NavLink href="/about" label="About" />
        <NavLink href="/services" label="Services" />
        <NavLink href="/blog" label="Blog" />
      </nav>
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium hover:underline underline-offset-4"
      prefetch={false}
    >
      {label}
    </Link>
  );
}
