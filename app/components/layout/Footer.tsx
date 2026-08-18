"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "../ui/Logo";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/[0.08] bg-[#05070A] relative pt-28 pb-16">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 space-y-24">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="font-mono text-xs text-sky-400 tracking-wider uppercase">
            NOSSO PROPÓSITO
          </div>
          <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-zinc-100 leading-tight">
            O que podemos tornar <br />
            <span className="text-zinc-500">mais simples hoje?</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto font-sans">
            É a pergunta que fazemos antes de criar cada produto, tela ou botão.
          </p>

          <div className="pt-4">
            <a
              href="mailto:contato@vorto.studio"
              className="px-8 py-4 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 text-sm font-semibold inline-flex items-center gap-2 transition-all shadow-lg hover:scale-105"
            >
              <span>Conversar com a gente</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-16 border-t border-white/[0.06] grid grid-cols-1 md:grid-cols-12 gap-12 font-mono text-xs">
          <div className="md:col-span-6 space-y-4">
            <Logo size={30} />
            <p className="text-zinc-500 max-w-sm font-sans text-xs">
              Estúdio de software focado em transformar problemas complicados em ferramentas simples de operar.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <span className="text-zinc-300 font-semibold">SOLUÇÕES</span>
            <div className="flex flex-col space-y-2 text-zinc-500">
              <Link href="#industrial" className="hover:text-zinc-300 transition-colors">Vorto na Fábrica</Link>
              <Link href="#finance" className="hover:text-zinc-300 transition-colors">Clareza nas Contas</Link>
              <Link href="#labs" className="hover:text-zinc-300 transition-colors">Ferramentas Práticas</Link>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <span className="text-zinc-300 font-semibold">SOBRE NÓS</span>
            <div className="flex flex-col space-y-2 text-zinc-500">
              <Link href="#method" className="hover:text-zinc-300 transition-colors">Como Trabalhamos</Link>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-600">
          <span>&copy; 2026 VORTO. Todos os direitos reservados.</span>
          <span>TRANSFORMANDO COMPLEXIDADE EM CLAREZA.</span>
        </div>
      </div>
    </footer>
  );
}
