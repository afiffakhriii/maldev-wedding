import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 md:px-8 lg:px-12 py-4 bg-white border-b border-gray-200">
      <Link href="/" className="font-bold text-lg md:text-xl text-[var(--primary)]">
        Maldev Wedding
      </Link>
      <div className="flex items-center space-x-2 md:space-x-4">
        <Link href="#" className="hidden md:block px-4 py-2 text-[var(--primary)] border border-[var(--primry)] rounded-full hover:bg-[var(--foreground)] hover:text-white transition-colors text-sm md:text-base">
          Masuk
        </Link>
        <Link href="#" className="px-4 py-2 text-white bg-[var(--primary)] rounded-full hover:bg-[var(--secondary)] transition-colors text-sm md:text-base">
          Daftar
        </Link>
      </div>
    </header>
  );
}