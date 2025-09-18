"use client"; 

import Link from "next/link";
import { usePathname } from "next/navigation"; 

export default function Header() {
  const pathname = usePathname(); 
  const isAuthPage = pathname === "/login" || pathname === "/register";

  return (
    <header className="flex items-center justify-between px-4 md:px-8 lg:px-12 py-4 bg-white border-b border-gray-200">
      <Link href="/" className="font-bold text-sm md:text-xl text-[var(--primary)]">
        Maldev Wedding
      </Link>
      {!isAuthPage && (
        <div className="flex items-center space-x-2 md:space-x-4">
          <Link href="/login" className="px-4 py-2 text-[var(--primary)] border border-[var(--primary)] rounded-full hover:bg-[var(--foreground)] hover:text-white transition-colors text-sm md:text-base">
            Masuk
          </Link>
          <Link href="/register" className="px-4 py-2 text-white bg-[var(--primary)] rounded-full hover:bg-[var(--secondary)] transition-colors text-sm md:text-base">
            Daftar
          </Link>
        </div>
      )}
    </header>
  );
}