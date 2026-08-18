"use client";

import { ArrowUpRight, Factory, Wallet, Sparkles, Flame, Activity } from "lucide-react";

export function Ecosystem() {
  return (
    <section id="ecosystem" className="py-28 border-t border-white/[0.08] bg-[#080B10] relative">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-wider">
              <span>02 / O QUE CRIAMOS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-zinc-100">
              Quatro verticais. <br />
              <span className="text-zinc-500">O mesmo compromisso com o simples.</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-zinc-400 max-w-xs">
            Produtos especializados operando sob a mesma arquitetura de precisão e baixa latência.
          </p>
        </div>

        {/* Bento Grid com 4 Verticais */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: FastFood OS (Col 6) */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-[#0E131B] border border-white/[0.08] hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-8 group shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/[0.06] font-mono text-[10px] text-amber-400 uppercase">
                  <Flame className="w-3 h-3" />
                  <span>VORTO FASTFOOD OS</span>
                </div>
                <span className="text-xs font-mono text-zinc-500">FOOD SERVICE</span>
              </div>

              <h3 className="text-2xl font-medium text-zinc-100">
                A cozinha não para no rush.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                PDV ultrarrápido, KDS com semáforo de tempo, esteira unificada e operação 100% offline mesmo se o Wi-Fi cair.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#fastfood"
                className="inline-flex items-center gap-2 text-xs font-mono text-zinc-300 group-hover:text-amber-400 transition-colors"
              >
                <span>Ver simulação da cozinha</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Vorto Industrial (Col 6) */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-[#0E131B] border border-white/[0.08] hover:border-sky-500/40 transition-all flex flex-col justify-between space-y-8 group shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/[0.06] font-mono text-[10px] text-sky-400 uppercase">
                  <Factory className="w-3 h-3" />
                  <span>VORTO INDUSTRIAL</span>
                </div>
                <span className="text-xs font-mono text-zinc-500">B2B OPERATIONS</span>
              </div>

              <h3 className="text-2xl font-medium text-zinc-100">
                Sua fábrica na palma da mão.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                PCP integrado, ordens de corte, telemetria em tempo real e rastreabilidade total do chão de fábrica até a entrega.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#industrial"
                className="inline-flex items-center gap-2 text-xs font-mono text-zinc-300 group-hover:text-sky-400 transition-colors"
              >
                <span>Ver chão de fábrica ao vivo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Clareza Financeira (Col 6) */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-[#0E131B] border border-white/[0.08] hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-8 group shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/[0.06] font-mono text-[10px] text-emerald-400 uppercase">
                  <Wallet className="w-3 h-3" />
                  <span>CLAREZA FINANCEIRA</span>
                </div>
                <span className="text-xs font-mono text-zinc-500">MOBILE GPS</span>
              </div>

              <h3 className="text-2xl font-medium text-zinc-100">
                Teto seguro diário & metas.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                Scanner de contas por foto, rotas matemáticas de quitação e planejamento de viagens sem juros abusivos.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#finance"
                className="inline-flex items-center gap-2 text-xs font-mono text-zinc-300 group-hover:text-emerald-400 transition-colors"
              >
                <span>Conhecer o GPS financeiro</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 4: Vorto Labs (Col 6) */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-[#0E131B] border border-white/[0.08] hover:border-purple-500/40 transition-all flex flex-col justify-between space-y-8 group shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/[0.06] font-mono text-[10px] text-purple-400 uppercase">
                  <Sparkles className="w-3 h-3" />
                  <span>VORTO LABS</span>
                </div>
                <span className="text-xs font-mono text-zinc-500">MICRO-APPS</span>
              </div>

              <h3 className="text-2xl font-medium text-zinc-100">
                Ferramentas práticas de R$ 9,90.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                ZapProposta (orçamentos em 60s), VoiceStock (estoque por voz) e ReciboScan MEI para autônomos.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#labs"
                className="inline-flex items-center gap-2 text-xs font-mono text-zinc-300 group-hover:text-purple-400 transition-colors"
              >
                <span>Explorar micro-aplicativos</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
