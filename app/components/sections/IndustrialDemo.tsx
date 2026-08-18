"use client";

import { useState, useEffect } from "react";
import { Factory, Radio, ArrowUpRight, CheckCircle2, RefreshCw } from "lucide-react";

export function IndustrialDemo() {
  const [orders, setOrders] = useState([
    { id: "10482", stage: "CORTE", progress: 92, status: "EM ANDAMENTO", tag: "LOTE-839201" },
    { id: "10483", stage: "COSTURA", progress: 64, status: "EM ANDAMENTO", tag: "LOTE-839202" },
    { id: "10484", stage: "ACABAMENTO", progress: 41, status: "NA FILA", tag: "LOTE-839203" },
    { id: "10485", stage: "EMBALAGEM", progress: 15, status: "NA FILA", tag: "LOTE-839204" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrders((prev) =>
        prev.map((order) => {
          const nextProgress = order.progress >= 100 ? 10 : order.progress + 4;
          return {
            ...order,
            progress: nextProgress,
            status: nextProgress > 80 ? "FINALIZANDO" : "EM ANDAMENTO",
          };
        })
      );
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="industrial" className="py-28 border-t border-white/[0.08] bg-[#090D13] relative">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-wider">
              <Factory className="w-3.5 h-3.5" />
              <span>01 / VORTO INDUSTRIAL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-zinc-100">
              Acompanhe a sua fábrica <br />
              <span className="text-zinc-500">em tempo real.</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
              Chega de perder tempo procurando onde está cada pedido. Conectamos o corte, a montagem
              e a embalagem em uma tela única e fácil de entender.
            </p>
          </div>

          <a
            href="#contact"
            className="px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] hover:border-sky-500/40 text-xs font-mono text-zinc-200 inline-flex items-center gap-2 transition-all self-start md:self-auto"
          >
            <span>Falar sobre minha fábrica</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
          </a>
        </div>

        <div className="rounded-3xl border border-white/[0.08] bg-[#0E131B] p-6 sm:p-8 space-y-6 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.06] font-mono text-xs">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-emerald-400">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                <span className="font-semibold tracking-wider">PAINEL AO VIVO</span>
              </div>
              <span className="text-zinc-500 hidden sm:inline">|</span>
              <span className="text-zinc-400">RESPOSTA: <strong className="text-zinc-200">Instantânea</strong></span>
            </div>

            <div className="flex items-center gap-4 text-zinc-400">
              <span>MÁQUINAS: <strong className="text-zinc-200">08 TRABALHANDO</strong></span>
              <span>PEDIDOS EM DIA: <strong className="text-sky-400">128</strong></span>
            </div>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <div className="hidden sm:grid grid-cols-12 text-zinc-500 px-4 pb-1 text-[11px]">
              <span className="col-span-3">NÚMERO DO PEDIDO</span>
              <span className="col-span-3">ETAPA ATUAL</span>
              <span className="col-span-4">ANDAMENTO</span>
              <span className="col-span-2 text-right">SITUAÇÃO</span>
            </div>

            {orders.map((order) => (
              <div
                key={order.id}
                className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-0 items-center p-4 rounded-xl bg-black/40 border border-white/[0.04] hover:border-white/[0.12] transition-colors"
              >
                <div className="sm:col-span-3 flex items-center gap-2">
                  <span className="text-zinc-200 font-semibold">PEDIDO #{order.id}</span>
                  <span className="text-[10px] text-zinc-500 bg-white/[0.03] px-2 py-0.5 rounded">
                    {order.tag}
                  </span>
                </div>

                <div className="sm:col-span-3 text-zinc-400">
                  <span className="text-sky-400">●</span> {order.stage}
                </div>

                <div className="sm:col-span-4 pr-4">
                  <div className="flex justify-between text-[11px] mb-1.5">
                    <span className="text-zinc-500">PROGRESSO</span>
                    <span className="text-zinc-300 font-semibold">{order.progress}%</span>
                  </div>
                  <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden border border-white/[0.05]">
                    <div
                      className="bg-sky-500 h-full rounded-full transition-all duration-700"
                      style={{ width: `${order.progress}%` }}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 text-left sm:text-right">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                    <CheckCircle2 className="w-3 h-3" /> {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-zinc-500">
            <span className="flex items-center gap-2">
              <RefreshCw className="w-3 h-3 animate-spin" /> Informações atualizadas a cada segundo
            </span>
            <span className="text-zinc-400">Tudo rastreado por código QR</span>
          </div>
        </div>
      </div>
    </section>
  );
}
