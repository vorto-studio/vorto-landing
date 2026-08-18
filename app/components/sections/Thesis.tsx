"use client";

import { Factory, Wallet, Sparkles } from "lucide-react";

export function Thesis() {
  return (
    <section id="thesis" className="py-28 border-t border-white/[0.08] relative bg-[#090D13]">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 space-y-16">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-wider">
            <span>01 / NOSSA VISÃO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-zinc-100 leading-tight">
            As coisas não precisam <br />
            <span className="text-zinc-500">ser tão complicadas.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans pt-2">
            Papéis espalhados, informações desencontradas e tarefas chatas que se repetem todo dia tomam tempo e causam estresse. 
            Nosso trabalho é criar ferramentas diretas que colocam tudo em ordem, de forma rápida e sem enrolação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#0E131B] border border-white/[0.08] font-mono text-xs">
          <div className="space-y-2 p-4 rounded-xl bg-black/40 border border-white/[0.04]">
            <span className="text-zinc-500 text-[10px]">01. O PROBLEMA</span>
            <div className="text-zinc-100 font-semibold text-sm">Bagunça e Atraso</div>
            <p className="text-[11px] text-zinc-400 leading-snug font-sans">
              Contas desorganizadas, papéis na fábrica e tarefas repetitivas.
            </p>
          </div>

          <div className="space-y-2 p-4 rounded-xl bg-black/40 border border-white/[0.04]">
            <span className="text-sky-400 text-[10px]">02. NOSSA AÇÃO</span>
            <div className="text-zinc-100 font-semibold text-sm">Organização</div>
            <p className="text-[11px] text-zinc-400 leading-snug font-sans">
              Telas simples que mostram a situação real na hora.
            </p>
          </div>

          <div className="space-y-2 p-4 rounded-xl bg-black/40 border border-white/[0.04]">
            <span className="text-sky-300 text-[10px]">03. O DIA A DIA</span>
            <div className="text-zinc-100 font-semibold text-sm">Controle Total</div>
            <p className="text-[11px] text-zinc-400 leading-snug font-sans">
              Avisos em tempo real e passos claros sobre o que fazer.
            </p>
          </div>

          <div className="space-y-2 p-4 rounded-xl bg-black/40 border border-white/[0.04] border-l-2 border-l-emerald-400">
            <span className="text-emerald-400 text-[10px]">04. RESULTADO</span>
            <div className="text-zinc-100 font-semibold text-sm">Mais Tempo Livre</div>
            <p className="text-[11px] text-zinc-400 leading-snug font-sans">
              Decisões mais rápidas com menos esforço e sem dor de cabeça.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-[#0E131B] border border-white/[0.08] space-y-3">
            <div className="w-8 h-8 rounded-lg bg-black/50 border border-white/[0.06] flex items-center justify-center text-sky-400">
              <Factory className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-zinc-100">Na Fábrica</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Acabe com anotações em pranchetas. Acompanhe a produção de cada peça ao vivo, do corte à entrega.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0E131B] border border-white/[0.08] space-y-3">
            <div className="w-8 h-8 rounded-lg bg-black/50 border border-white/[0.06] flex items-center justify-center text-emerald-400">
              <Wallet className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-zinc-100 No Dinheiro">No Bolso</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Chega de desespero com juros. Um plano passo a passo e sem julgamentos para quitar dívidas e respirar aliviado.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0E131B] border border-white/[0.08] space-y-3">
            <div className="w-8 h-8 rounded-lg bg-black/50 border border-white/[0.06] flex items-center justify-center text-purple-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-zinc-100">Na Rotina</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Ferramentas rápidas e comandos de voz para resolver tarefas chatas em segundos, sem perder tempo digitando.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
