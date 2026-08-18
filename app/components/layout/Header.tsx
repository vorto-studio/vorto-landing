"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "../ui/Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#080B10]/90 backdrop-blur-xl border-b border-white/[0.08] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 flex items-center justify-between">
        <Link href="/" className="transition-opacity hover:opacity-90">
          <Logo size={32} />
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono text-zinc-400">
          <Link href="#fastfood" className="hover:text-zinc-100 transition-colors">
            01. Fast-Food
          </Link>
          <Link href="#industrial" className="hover:text-zinc-100 transition-colors">
            02. Fábrica
          </Link>
          <Link href="#finance" className="hover:text-zinc-100 transition-colors">
            03. Finanças
          </Link>
          <Link href="#labs" className="hover:text-zinc-100 transition-colors">
            04. Labs
          </Link>
          <Link href="#method" className="hover:text-zinc-100 transition-colors">
            05. Método
          </Link>
        </nav>

        {/* Botão de Ação */}
        <div className="hidden md:flex items-center">
          <a
            href="#ecosystem"
            className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] hover:border-sky-500/40 text-xs font-mono text-zinc-200 inline-flex items-center gap-2 transition-all shadow-inner"
          >
            <span>Explorar Hub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
          </a>
        </div>

        {/* Botão Mobile */}
        <button
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden p-2 rounded-lg text-zinc-400 border border-white/[0.08]"
        >
          {mobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileMenu && (
        <div className="md:hidden bg-[#0D1117] border-b border-white/[0.08] px-6 py-4 space-y-3 font-mono text-xs text-zinc-400">
          <Link href="#fastfood" onClick={() => setMobileMenu(false)} className="block py-1">01. Fast-Food</Link>
          <Link href="#industrial" onClick={() => setMobileMenu(false)} className="block py-1">02. Fábrica</Link>
          <Link href="#finance" onClick={() => setMobileMenu(false)} className="block py-1">03. Finanças</Link>
          <Link href="#labs" onClick={() => setMobileMenu(false)} className="block py-1">04. Labs</Link>
          <Link href="#method" onClick={() => setMobileMenu(false)} className="block py-1">05. Método</Link>
        </div>
      )}
    </header>
  );
}
