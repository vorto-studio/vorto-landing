"use client";

import { useState } from "react";
import { Sparkles, Mic, FileText, Receipt, ArrowUpRight, Clock, Smartphone } from "lucide-react";

export function LabsDemo() {
  const apps = [
    {
      id: "LAB / 001",
      name: "ZapProposta",
      tagline: "Orçamento profissional em 60 segundos no WhatsApp.",
      category: "PROPOSTAS & VENDAS",
      target: "Eletricistas, marceneiros, instaladores e prestadores de serviços",
      price: "R$ 9,90/mês",
      annualNote: "ou R$ 89/ano",
      icon: FileText,
      accentColor: "text-sky-400",
      borderColor: "hover:border-sky-500/40",
      bgBadge: "bg-sky-500/10 text-sky-400 border-sky-500/20",
      steps: [
        "Preencha o cliente e o serviço",
        "Gera um PDF limpo com chave Pix",
        "Envia direto para o WhatsApp do cliente"
      ],
      result: "Propostas fechadas mais rápido sem parecer amador."
    },
    {
      id: "LAB / 002",
      name: "VoiceStock",
      tagline: "Atualize o estoque falando, com as mãos ocupadas.",
      category: "ESTOQUE POR VOZ",
      target: "Oficinas mecânicas, marcenarias e comércios com balcão",
      price: "R$ 19,90/mês",
      annualNote: "ou R$ 179/ano",
      icon: Mic,
      accentColor: "text-purple-400",
      borderColor: "hover:border-purple-500/40",
      bgBadge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      steps: [
        "Toque no microfone no celular",
        "Fale: 'Baixar 3 rolamentos 6204'",
        "O app confirma e debita na hora"
      ],
      result: "Zero tempo digitando tabelas no final do expediente."
    },
    {
      id: "LAB / 003",
      name: "ReciboScan MEI",
      tagline: "Guarde e organize notas fiscais com uma foto.",
      category: "ORGANIZAÇÃO FISCAL",
      target: "Microempreendedores individuais e autônomos",
      price: "R$ 14,90/mês",
      annualNote: "ou R$ 139/ano",
      icon: Receipt,
      accentColor: "text-emerald-400",
      borderColor: "hover:border-emerald-500/40",
      bgBadge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      steps: [
        "Tire foto do cupom ou nota de papel",
        "O app lê o valor, a data e a categoria",
        "Relatório pronto para a declaração anual"
      ],
      result: "Fim das notas fiscais perdidas em gavetas."
    },
  ];

  return (
    <section id="labs" className="py-28 border-t border-white/[0.08] bg-[#090D13] relative">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Cabeçalho Editorial do Labs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-purple-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>03 / VORTO LABS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-zinc-100">
              Ferramentas diretas <br />
              <span className="text-zinc-500">para o dia a dia no celular.</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
              No Vorto Labs, criamos ferramentas práticas por preços acessíveis a qualquer autônomo. 
              Você resolve a tarefa em até 3 toques na tela, sem complexidade nem mensalidades abusivas.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 bg-white/[0.03] px-3.5 py-1.5 rounded-full border border-white/[0.06]">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>LANÇAMENTO PREVISTO / 2026</span>
          </div>
        </div>

        {/* Grid de Cards dos 3 Apps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {apps.map((app) => {
            const Icon = app.icon;
            return (
              <div
                key={app.id}
                className={`p-7 sm:p-8 rounded-3xl bg-[#0E131B] border border-white/[0.08] ${app.borderColor} transition-all duration-300 flex flex-col justify-between space-y-8 group shadow-xl`}
              >
                {/* Topo do Card */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-zinc-500">{app.id}</span>
                    <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold tracking-wide">
                      EM DESENVOLVIMENTO
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-black/60 border border-white/[0.08] flex items-center justify-center text-zinc-100 group-hover:scale-105 transition-transform">
                      <Icon className={`w-6 h-6 ${app.accentColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-100">{app.name}</h3>
                      <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                        {app.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-300 font-medium leading-snug">
                    "{app.tagline}"
                  </p>

                  <div className="text-xs text-zinc-400 font-sans leading-relaxed pt-1">
                    <strong className="text-zinc-300 font-medium">Ideal para:</strong> {app.target}.
                  </div>

                  {/* Fluxo em 3 Passos */}
                  <div className="p-4 rounded-2xl bg-black/50 border border-white/[0.04] space-y-2.5 font-mono text-xs">
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                      <Smartphone className="w-3 h-3" /> FLUXO EM 3 TOQUES
                    </div>
                    {app.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-zinc-300">
                        <span className={`font-semibold ${app.accentColor}`}>{idx + 1}.</span>
                        <span className="leading-tight">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Base do Card com Preço Popular e Ação */}
                <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                  <div className="flex items-baseline justify-between font-mono">
                    <div>
                      <span className="text-[11px] text-zinc-500 block">PLANO ACESSÍVEL:</span>
                      <span className="text-xs text-zinc-500">{app.annualNote}</span>
                    </div>
                    <span className="text-lg font-semibold text-emerald-400">{app.price}</span>
                  </div>

                  <a
                    href="#contact"
                    className="w-full py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 text-xs font-mono text-zinc-200 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Entrar na Lista de Espera</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-100" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Rodapé da Seção Labs */}
        <div className="p-6 rounded-2xl bg-[#0E131B]/60 border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Preços justos projetados para caber no bolso de qualquer profissional autônomo.</span>
          </div>
          <span className="text-zinc-500">Lançamento gradual em 2026</span>
        </div>

      </div>
    </section>
  );
}
