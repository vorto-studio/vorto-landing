"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Terminal, Radio, Shield, Sparkles, Factory } from "lucide-react";

export function Hero() {
  const [tab, setTab] = useState<"industrial" | "finance" | "labs">("industrial");
  const [clock, setClock] = useState("00:00:00");
  const [tick, setTick] = useState(1);

  useEffect(() => {
    const updateTime = () => setClock(new Date().toTimeString().split(" ")[0]);
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setTick((t) => (t % 3) + 1), 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 bg-grid-tech spotlight-top overflow-hidden">
      <div className="w-full max-w-[1320px] mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Lado Esquerdo: Mensagem Clara */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 font-mono text-xs text-sky-400">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="tracking-wider uppercase">ESTÚDIO DE TECNOLOGIA & SOFTWARE</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-zinc-100 leading-[1.02]">
            Complexidade <br />
            <span className="text-zinc-500 font-light">em</span> clareza.
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed">
            Criamos sistemas fáceis de usar para resolver problemas difíceis. 
            Menos planilhas confusas, menos trabalho manual e mais tempo para o que realmente importa.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#ecosystem"
              className="px-7 py-3.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 text-sm font-semibold inline-flex items-center gap-2.5 transition-all shadow-lg shadow-white/5 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Ver Nossas Soluções</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#method"
              className="px-7 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-white/[0.08] hover:border-white/20 text-sm font-mono text-zinc-300 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Como Trabalhamos
            </a>
          </div>

          <div className="pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-6 font-mono">
            <div>
              <div className="text-zinc-500 text-xs">FOCO</div>
              <div className="text-zinc-200 text-sm font-medium mt-1">Simplicidade Real</div>
            </div>
            <div>
              <div className="text-zinc-500 text-xs">ÁREAS</div>
              <div className="text-zinc-200 text-sm font-medium mt-1">Fábrica, Finanças e Apps</div>
            </div>
            <div>
              <div className="text-zinc-500 text-xs">SISTEMA</div>
              <div className="text-emerald-400 text-sm font-medium mt-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Funcionando Agora
              </div>
            </div>
          </div>
        </div>

        {/* Lado Direito: HUD com Dados Cotidianos */}
        <div className="lg:col-span-5 w-full">
          <div className="relative rounded-3xl border border-white/[0.08] bg-[#0E131B]/95 backdrop-blur-2xl p-6 sm:p-7 shadow-2xl shadow-black/60 space-y-5">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2.5">
                <Terminal className="w-4 h-4 text-sky-400" />
                <span className="text-zinc-100 font-semibold tracking-wider text-xs">SISTEMA EM TEMPO REAL</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400 bg-black/40 px-2.5 py-1 rounded-md border border-white/[0.05]">
                <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>{clock}</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-1.5 p-1.5 bg-black/50 rounded-2xl border border-white/[0.05] text-xs font-mono">
              <button
                type="button"
                onClick={() => setTab("industrial")}
                className={`py-2 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  tab === "industrial"
                    ? "bg-zinc-800 text-zinc-100 font-semibold border border-white/10 shadow-sm"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <Factory className="w-3.5 h-3.5 text-sky-400" /> Fábrica
              </button>
              <button
                type="button"
                onClick={() => setTab("finance")}
                className={`py-2 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  tab === "finance"
                    ? "bg-zinc-800 text-zinc-100 font-semibold border border-white/10 shadow-sm"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <Shield className="w-3.5 h-3.5 text-emerald-400" /> Finanças
              </button>
              <button
                type="button"
                onClick={() => setTab("labs")}
                className={`py-2 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  tab === "labs"
                    ? "bg-zinc-800 text-zinc-100 font-semibold border border-white/10 shadow-sm"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Práticos
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-black/60 border border-white/[0.04] space-y-6 font-mono text-sm min-h-[260px] flex flex-col justify-between">
              {tab === "industrial" && (
                <>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-400">CORTE DE TECIDO / LINHA 02</span>
                      <span className="text-sky-400 font-semibold px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                        PEDIDO #1048{tick}
                      </span>
                    </div>
                    <div className="w-full bg-zinc-900 h-3 rounded-full overflow-hidden border border-white/[0.05]">
                      <div
                        className="bg-sky-500 h-full transition-all duration-700 rounded-full"
                        style={{ width: `${tick * 33}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs pt-4 border-t border-white/[0.06]">
                    <div>
                      <span className="text-zinc-500 text-[11px]">ETIQUETA DO LOTE:</span>
                      <div className="text-zinc-200 font-medium text-sm mt-1">LOTE-83920{tick}</div>
                    </div>
                    <div>
                      <span className="text-zinc-500 text-[11px]">ATUALIZAÇÃO:</span>
                      <div className="text-emerald-400 font-medium text-sm mt-1">Instantânea</div>
                    </div>
                  </div>
                </>
              )}

              {tab === "finance" && (
                <>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-400">PLANO DE QUITAÇÃO DE DÍVIDAS</span>
                      <span className="text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                        -38% EM JUROS
                      </span>
                    </div>
                    <div className="w-full bg-zinc-900 h-3 rounded-full overflow-hidden border border-white/[0.05]">
                      <div className="bg-emerald-500 h-full w-[76%] rounded-full" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs pt-4 border-t border-white/[0.06]">
                    <div>
                      <span className="text-zinc-500 text-[11px]">PRÓXIMO PASSO:</span>
                      <div className="text-zinc-200 font-medium text-sm mt-1">Quitar o cartão mais caro</div>
                    </div>
                    <div>
                      <span className="text-zinc-500 text-[11px]">PRAZO ESTIMADO:</span>
                      <div className="text-zinc-200 font-medium text-sm mt-1">14 meses para zerar</div>
                    </div>
                  </div>
                </>
              )}

              {tab === "labs" && (
                <>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-400">CONTROLE DE ESTOQUE POR VOZ</span>
                      <span className="text-purple-400 font-semibold px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
                        TESTE PRÁTICO
                      </span>
                    </div>
                    <div className="w-full bg-zinc-900 h-3 rounded-full overflow-hidden border border-white/[0.05]">
                      <div className="bg-purple-500 h-full w-[92%] rounded-full" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs pt-4 border-t border-white/[0.06]">
                    <div>
                      <span className="text-zinc-500 text-[11px]">VOCÊ FALA:</span>
                      <div className="text-zinc-200 font-medium text-sm mt-1">"Retirar 5 rolos de linho"</div>
                    </div>
                    <div>
                      <span className="text-zinc-500 text-[11px]">O SISTEMA:</span>
                      <div className="text-emerald-400 font-medium text-sm mt-1">Estoque atualizado!</div>
                    </div>
                  </div>
                </>
              )}

              <div className="text-xs text-zinc-500 flex justify-between items-center pt-3 border-t border-white/[0.04]">
                <span>OBJETIVO:</span>
                <span className="text-sky-400 font-medium">FACILITAR O SEU DIA A DIA</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
