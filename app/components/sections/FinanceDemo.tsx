"use client";

import { useState } from "react";
import { 
  Wallet, 
  Compass, 
  Radio, 
  Sparkles, 
  ShieldCheck, 
  AlertTriangle, 
  TrendingUp, 
  ScanText, 
  Camera, 
  UploadCloud, 
  CheckCircle2, 
  Target, 
  Plane, 
  Laptop, 
  Shield, 
  Wifi, 
  Battery, 
  ArrowUpRight, 
  Smartphone, 
  Monitor, 
  Zap, 
  Layers,
  Flame,
  Plus,
  ChevronRight,
  Receipt,
  Clock,
  CircleDot
} from "lucide-react";

export function FinanceDemo() {
  const [viewMode, setViewMode] = useState<"mobile" | "web">("mobile");
  const [activeTab, setActiveTab] = useState<"metas" | "teto" | "scanner" | "rotas" | "radar">("teto");
  const [extraAporte, setExtraAporte] = useState(150);
  const [strategy, setStrategy] = useState<"avalanche" | "snowball">("avalanche");
  const [scannedDoc, setScannedDoc] = useState<"luz" | "cartao" | "holerite">("luz");

  // Metas
  const [selectedGoal, setSelectedGoal] = useState<"viagem" | "notebook" | "reserva">("viagem");
  const [goalMonths, setGoalMonths] = useState(10);

  const goalConfigs = {
    viagem: { name: "Viagem de Férias", total: 5000, icon: Plane, color: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/20" },
    notebook: { name: "Novo Notebook M3", total: 3600, icon: Laptop, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    reserva: { name: "Reserva de Emergência", total: 6000, icon: Shield, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
  };

  const currentGoal = goalConfigs[selectedGoal];
  const aporteMensalMeta = Math.round(currentGoal.total / goalMonths);
  const impactoDiario = (aporteMensalMeta / 30).toFixed(2);

  // Cálculos do Teto Seguro
  const saldoTotal = 1820;
  const contasFuturas = 940;
  const reservaMinima = 300;
  const tetoLivre = saldoTotal - contasFuturas - reservaMinima; // 580
  const diasRestantes = 15;
  const tetoDiario = (tetoLivre / diasRestantes).toFixed(2);

  // Rotas
  const mesesBase = 22;
  const economiaMeses = Math.min(8, Math.round(extraAporte / 25));
  const mesesFinal = mesesBase - economiaMeses;
  const jurosPoupados = extraAporte * 5.2;

  return (
    <section id="finance" className="py-28 border-t border-white/[0.08] bg-[#080B10] relative">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>02 / VORTO CLAREZA FINANCEIRA</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-zinc-100">
              O GPS financeiro <br />
              <span className="text-zinc-500">desenhado para precisão mobile.</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
              Teto seguro diário, projeção de viagens, scanner de comprovantes e rotas matemáticas de quitação 
              em uma interface nativa de baixa fricção.
            </p>
          </div>

          {/* Seletor de Modo (Mobile vs Web) */}
          <div className="flex items-center p-1 bg-black/60 rounded-2xl border border-white/[0.08] font-mono text-xs self-start md:self-auto shadow-inner">
            <button
              type="button"
              onClick={() => setViewMode("mobile")}
              className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                viewMode === "mobile"
                  ? "bg-zinc-800 text-emerald-400 font-semibold border border-white/10 shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>App Mobile</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("web")}
              className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                viewMode === "web"
                  ? "bg-zinc-800 text-emerald-400 font-semibold border border-white/10 shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>Painel Web</span>
            </button>
          </div>
        </div>

        {/* Módulos de Ação */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 p-1.5 bg-[#0E131B] rounded-2xl border border-white/[0.06] font-mono text-xs">
          <button
            type="button"
            onClick={() => setActiveTab("teto")}
            className={`py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === "teto"
                ? "bg-zinc-800 text-zinc-100 font-semibold border border-white/10 shadow-sm"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Wallet className="w-3.5 h-3.5 text-emerald-400" />
            <span>01. Teto Seguro</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("metas")}
            className={`py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === "metas"
                ? "bg-zinc-800 text-zinc-100 font-semibold border border-white/10 shadow-sm"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Target className="w-3.5 h-3.5 text-sky-400" />
            <span>02. Projetos</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("scanner")}
            className={`py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === "scanner"
                ? "bg-zinc-800 text-zinc-100 font-semibold border border-white/10 shadow-sm"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <ScanText className="w-3.5 h-3.5 text-purple-400" />
            <span>03. Scanner</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("rotas")}
            className={`py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === "rotas"
                ? "bg-zinc-800 text-zinc-100 font-semibold border border-white/10 shadow-sm"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>04. Rotas</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("radar")}
            className={`py-2.5 px-3 rounded-xl col-span-2 sm:col-span-1 flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === "radar"
                ? "bg-zinc-800 text-zinc-100 font-semibold border border-white/10 shadow-sm"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Radio className="w-3.5 h-3.5 text-red-400" />
            <span>05. Radar</span>
          </button>
        </div>

        {/* CONTAINER: MOCKUP MOBILE / DASHBOARD WEB */}
        {viewMode === "mobile" ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Lado Esquerdo: Painel de Parâmetros */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-7 rounded-3xl bg-[#0E131B] border border-white/[0.08] space-y-5">
                
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs font-mono text-zinc-400">
                  <span className="text-zinc-200 font-semibold uppercase">CONTROLES DO SIMULADOR</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CircleDot className="w-3 h-3 animate-pulse" /> Sincronizado ao Vivo
                  </span>
                </div>

                {activeTab === "teto" && (
                  <div className="space-y-4 font-mono text-xs">
                    <div className="text-zinc-300 font-semibold">Cálculo do Teto Seguro Diário:</div>
                    <p className="text-zinc-400 leading-relaxed font-sans text-xs">
                      O motor subtrai obrigações fixas (R$ 940) e a reserva emergencial (R$ 300) do saldo atual (R$ 1.820). 
                      O restante (R$ 580) é distribuído igualmente pelos 15 dias do ciclo.
                    </p>
                    <div className="p-3.5 rounded-2xl bg-black/40 border border-emerald-500/20 text-emerald-400 flex justify-between items-center">
                      <span>Teto livre diário:</span>
                      <strong className="text-sm">R$ {tetoDiario}/dia</strong>
                    </div>
                  </div>
                )}

                {activeTab === "metas" && (
                  <div className="space-y-4 font-mono text-xs">
                    <div className="text-zinc-400">SELECIONE O PROJETO:</div>
                    <div className="grid grid-cols-3 gap-2">
                      {(["viagem", "notebook", "reserva"] as const).map((key) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setSelectedGoal(key)}
                          className={`py-2 rounded-xl border text-center transition-all cursor-pointer ${
                            selectedGoal === key
                              ? "bg-zinc-800 text-zinc-100 font-semibold border-white/20"
                              : "bg-black/40 text-zinc-500 border-white/[0.04] hover:text-zinc-300"
                          }`}
                        >
                          {key === "viagem" ? "✈️ Viagem" : key === "notebook" ? "💻 Notebook" : "🛡️ Reserva"}
                        </button>
                      ))}
                    </div>

                    <div className="space-y-2 pt-3 border-t border-white/[0.04]">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Prazo para conclusão:</span>
                        <span className="text-sky-400 font-semibold">{goalMonths} meses</span>
                      </div>
                      <input
                        type="range"
                        min="3"
                        max="24"
                        value={goalMonths}
                        onChange={(e) => setGoalMonths(Number(e.target.value))}
                        className="w-full h-2 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-sky-400"
                      />
                    </div>
                  </div>
                )}

                {activeTab === "scanner" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="text-zinc-400">DOCUMENTO PARA PROCESSAMENTO:</div>
                    <div className="grid grid-cols-3 gap-2">
                      {(["luz", "cartao", "holerite"] as const).map((doc) => (
                        <button
                          key={doc}
                          type="button"
                          onClick={() => setScannedDoc(doc)}
                          className={`py-2 rounded-xl border text-center transition-all cursor-pointer ${
                            scannedDoc === doc
                              ? "bg-zinc-800 text-zinc-100 font-semibold border-white/20"
                              : "bg-black/40 text-zinc-500 border-white/[0.04] hover:text-zinc-300"
                          }`}
                        >
                          {doc === "luz" ? "⚡ Luz" : doc === "cartao" ? "💳 Cartão" : "📄 Holerite"}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "rotas" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Aporte mensal extra:</span>
                      <span className="text-amber-400 font-semibold">+ R$ {extraAporte}/mês</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="500"
                      step="25"
                      value={extraAporte}
                      onChange={(e) => setExtraAporte(Number(e.target.value))}
                      className="w-full h-2 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-amber-400"
                    />
                    <div className="text-[11px] text-zinc-500">
                      Economia calculada: <strong className="text-zinc-300">R$ {Math.round(jurosPoupados)}</strong> em juros evitados.
                    </div>
                  </div>
                )}

                {activeTab === "radar" && (
                  <div className="space-y-2 font-mono text-xs text-zinc-400">
                    <div className="text-red-400 font-semibold flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4" /> Alerta de Risco Antecipado
                    </div>
                    <p className="text-zinc-400 font-sans leading-relaxed text-xs">
                      O radar calcula a velocidade diária de despesas e avisa quando o saldo entrará em risco de ruptura antes do fim do mês.
                    </p>
                  </div>
                )}

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="w-full py-3.5 px-4 rounded-2xl bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                  >
                    <span>Entrar na Lista de Espera do App</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>

            {/* Lado Direito: Chassi Titanium com Display OLED */}
            <div className="lg:col-span-6 flex justify-center py-4">
              
              {/* Moldura Externa com Botões Físicos */}
              <div className="relative">
                {/* Botões Laterais Físicos do Smartphone */}
                <div className="absolute -left-[3px] top-24 w-[3px] h-8 bg-zinc-600 rounded-l-sm" />
                <div className="absolute -left-[3px] top-36 w-[3px] h-12 bg-zinc-600 rounded-l-sm" />
                <div className="absolute -left-[3px] top-52 w-[3px] h-12 bg-zinc-600 rounded-l-sm" />
                <div className="absolute -right-[3px] top-32 w-[3px] h-16 bg-zinc-600 rounded-r-sm" />

                {/* Chassi do Aparelho (Titanium Dark Bezel) */}
                <div className="w-[335px] sm:w-[365px] rounded-[52px] p-[10px] bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] ring-1 ring-white/20">
                  
                  {/* Vidro Interno da Tela */}
                  <div className="w-full rounded-[44px] bg-[#04060A] border border-black/80 overflow-hidden flex flex-col justify-between min-h-[640px] relative font-sans select-none text-zinc-100">
                    
                    {/* Topo do Celular: Dynamic Island & Status Bar */}
                    <div className="pt-3.5 px-6 flex items-center justify-between text-[11px] font-mono text-zinc-400 relative z-30">
                      <span className="font-semibold text-zinc-200">14:58</span>
                      
                      {/* Dynamic Island Interativa */}
                      <div className="h-[22px] px-3 bg-black rounded-full border border-white/[0.08] mx-auto absolute inset-x-0 top-3 w-fit flex items-center gap-2 shadow-inner">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[9px] font-mono text-zinc-400">VORTO / GPS</span>
                      </div>
                      
                      <div className="flex items-center gap-1.5 text-zinc-300">
                        <Wifi className="w-3 h-3" />
                        <Battery className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                    </div>

                    {/* Conteúdo da Tela do App */}
                    <div className="p-5 pt-3 space-y-4 flex-1 flex flex-col justify-start">
                      
                      {/* Header do App Mobile */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="space-y-0.5">
                          <span className="text-[9px] font-mono text-zinc-500 tracking-wider">OLÁ, BRUNO</span>
                          <div className="text-sm font-semibold text-zinc-100 flex items-center gap-1.5">
                            <span>Clareza Financeira</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-[10px] font-mono font-bold text-emerald-400 shadow-inner">
                          VORTO
                        </div>
                      </div>

                      {/* TELA 1: TETO SEGURO DIÁRIO */}
                      {activeTab === "teto" && (
                        <div className="space-y-3 animate-fadeIn">
                          
                          {/* Card Hero com Micro-Gauge */}
                          <div className="p-5 rounded-3xl bg-gradient-to-b from-[#0D151E] to-[#080D14] border border-emerald-500/25 space-y-3 relative overflow-hidden shadow-lg">
                            <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400">
                              <span className="uppercase tracking-wider">SEU TETO SEGURO HOJE</span>
                              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                                LIVRE
                              </span>
                            </div>

                            <div className="flex items-baseline gap-1.5">
                              <span className="text-xs font-mono text-zinc-400">R$</span>
                              <span className="text-4xl font-bold font-mono text-zinc-100 tracking-tight">
                                {tetoDiario}
                              </span>
                              <span className="text-[11px] text-zinc-400 font-mono">/dia</span>
                            </div>

                            {/* Barra de Progresso do Ciclo */}
                            <div className="space-y-1">
                              <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                                <span>Ciclo Atual</span>
                                <span>{diasRestantes} dias restantes</span>
                              </div>
                              <div className="w-full bg-black/60 h-1.5 rounded-full overflow-hidden border border-white/[0.04]">
                                <div className="bg-emerald-400 h-full w-[65%] rounded-full shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                              </div>
                            </div>
                          </div>

                          {/* Breakdown das Contas */}
                          <div className="space-y-1.5 font-mono text-[11px]">
                            <div className="p-2.5 rounded-2xl bg-white/[0.02] border border-white/[0.04] flex justify-between items-center">
                              <span className="text-zinc-400">Saldo em Conta</span>
                              <span className="text-zinc-200 font-medium">R$ {saldoTotal}</span>
                            </div>
                            <div className="p-2.5 rounded-2xl bg-white/[0.02] border border-white/[0.04] flex justify-between items-center">
                              <span className="text-red-400">Contas Fixas Trancadas</span>
                              <span className="text-red-400 font-medium">- R$ {contasFuturas}</span>
                            </div>
                            <div className="p-2.5 rounded-2xl bg-white/[0.02] border border-white/[0.04] flex justify-between items-center">
                              <span className="text-sky-400">Reserva de Emergência</span>
                              <span className="text-sky-400 font-medium">- R$ {reservaMinima}</span>
                            </div>
                          </div>

                          {/* Dica do Copilot */}
                          <div className="p-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/15 text-[10px] text-zinc-300 font-sans flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>Gaste até R$ {tetoDiario} hoje sabendo que o aluguel está 100% protegido.</span>
                          </div>

                        </div>
                      )}

                      {/* TELA 2: PROJETOS & METAS */}
                      {activeTab === "metas" && (
                        <div className="space-y-3 animate-fadeIn">
                          
                          <div className={`p-4 rounded-3xl bg-[#0D151E] border ${currentGoal.border} space-y-3 shadow-lg`}>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className={`w-8 h-8 rounded-xl ${currentGoal.bg} flex items-center justify-center`}>
                                  <currentGoal.icon className={`w-4 h-4 ${currentGoal.color}`} />
                                </div>
                                <div>
                                  <div className="text-xs font-semibold text-zinc-100">{currentGoal.name}</div>
                                  <span className="text-[9px] font-mono text-zinc-500">META PROGRAMADA</span>
                                </div>
                              </div>
                              <span className="text-[10px] font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full border border-sky-500/20">
                                {goalMonths}M
                              </span>
                            </div>

                            <div className="pt-1 flex items-baseline justify-between font-mono">
                              <span className="text-2xl font-bold text-zinc-100">
                                R$ {currentGoal.total.toLocaleString("pt-BR")}
                              </span>
                              <span className="text-xs text-emerald-400 font-semibold">
                                R$ {aporteMensalMeta}/mês
                              </span>
                            </div>

                            <div className="w-full bg-black/60 h-1.5 rounded-full overflow-hidden border border-white/[0.04]">
                              <div className="bg-sky-400 h-full w-[40%] rounded-full shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
                            </div>
                          </div>

                          {/* Impacto no Dia a Dia */}
                          <div className="grid grid-cols-2 gap-2 font-mono">
                            <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.04] space-y-1">
                              <span className="text-[9px] text-zinc-500 block uppercase">ESFORÇO DIÁRIO</span>
                              <span className="text-sm font-semibold text-emerald-400">- R$ {impactoDiario}/dia</span>
                            </div>
                            <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.04] space-y-1">
                              <span className="text-[9px] text-zinc-500 block uppercase">STATUS DA COMPRA</span>
                              <span className="text-sm font-semibold text-zinc-200">100% À Vista</span>
                            </div>
                          </div>

                          <div className="p-3 rounded-2xl bg-sky-500/5 border border-sky-500/20 text-[10px] text-zinc-300 font-sans flex items-center gap-2">
                            <Plane className="w-4 h-4 text-sky-400 shrink-0" />
                            <span>Sem parcelas no cartão de crédito após a viagem.</span>
                          </div>

                        </div>
                      )}

                      {/* TELA 3: SCANNER ON-DEVICE */}
                      {activeTab === "scanner" && (
                        <div className="space-y-3 animate-fadeIn">
                          
                          {/* Viewfinder da Câmera Mock */}
                          <div className="p-4 rounded-3xl bg-[#0D151E] border border-purple-500/30 space-y-3 relative overflow-hidden">
                            
                            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                              <span className="flex items-center gap-1.5 text-purple-400 font-semibold">
                                <ScanText className="w-3.5 h-3.5 animate-pulse" /> OCR ON-DEVICE
                              </span>
                              <span className="text-emerald-400 text-[9px] bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                                PROCESSADO
                              </span>
                            </div>

                            <div>
                              <span className="text-[10px] font-mono text-zinc-500">TIPO DE DOCUMENTO</span>
                              <div className="text-sm font-semibold text-zinc-100 mt-0.5">
                                {scannedDoc === "luz" ? "Conta de Energia Elétrica" : scannedDoc === "cartao" ? "Fatura de Cartão de Crédito" : "Contracheque Mensal"}
                              </div>
                            </div>

                            <div className="pt-2 border-t border-white/[0.06] flex items-baseline justify-between font-mono">
                              <span className="text-2xl font-bold text-emerald-400">
                                {scannedDoc === "luz" ? "R$ 242,50" : scannedDoc === "cartao" ? "R$ 850,00" : "R$ 3.840,00"}
                              </span>
                              <span className="text-[10px] text-zinc-400">
                                {scannedDoc === "luz" ? "Vence 18/09" : scannedDoc === "cartao" ? "Vence 25/09" : "Crédito 5º DU"}
                              </span>
                            </div>
                          </div>

                          <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.04] space-y-1 font-mono text-[10px]">
                            <div className="text-zinc-500 uppercase">AÇÃO AUTOMÁTICA DO SISTEMA:</div>
                            <div className="text-zinc-300">
                              {scannedDoc === "luz" && "✓ Valor adicionado às Contas Fixas e abatido do Teto Livre."}
                              {scannedDoc === "cartao" && "✓ Alocado na rota de quitação sem entrar no rotativo."}
                              {scannedDoc === "holerite" && "✓ Renda de Segurança recalculada para os próximos 30 dias."}
                            </div>
                          </div>

                        </div>
                      )}

                      {/* TELA 4: ROTAS DE QUITAÇÃO */}
                      {activeTab === "rotas" && (
                        <div className="space-y-3 animate-fadeIn">
                          
                          <div className="p-4 rounded-3xl bg-[#0D151E] border border-amber-500/30 space-y-3">
                            <div className="flex items-center justify-between text-[10px] font-mono text-amber-400">
                              <span className="font-semibold">ROTA AVALANCHE ATIVA</span>
                              <span className="bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                                - {economiaMeses} MESES
                              </span>
                            </div>

                            <div>
                              <span className="text-[10px] font-mono text-zinc-500">TEMPO ATÉ A QUITAÇÃO</span>
                              <div className="text-3xl font-bold font-mono text-zinc-100 mt-0.5">
                                {mesesFinal} <span className="text-xs font-normal text-zinc-400">meses</span>
                              </div>
                            </div>

                            <div className="w-full bg-black/60 h-1.5 rounded-full overflow-hidden border border-white/[0.04]">
                              <div className="bg-amber-400 h-full w-[70%] rounded-full shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
                            </div>
                          </div>

                          <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400 flex justify-between items-center">
                            <span>Juros economizados:</span>
                            <strong className="text-sm">R$ {Math.round(jurosPoupados)}</strong>
                          </div>

                        </div>
                      )}

                      {/* TELA 5: RADAR DE ALERTAS */}
                      {activeTab === "radar" && (
                        <div className="space-y-3 animate-fadeIn">
                          
                          <div className="p-4 rounded-3xl bg-red-500/10 border border-red-500/25 space-y-2">
                            <div className="flex items-center justify-between text-[10px] font-mono text-red-400 font-semibold">
                              <span className="flex items-center gap-1.5">
                                <AlertTriangle className="w-3.5 h-3.5" /> RADAR / RISCO EM 9 DIAS
                              </span>
                              <span className="text-[9px] bg-red-500/20 px-2 py-0.5 rounded-full">CRÍTICO</span>
                            </div>
                            <div className="text-xs font-semibold text-zinc-200">
                              Projeção de Déficit no Caixa
                            </div>
                            <p className="text-[11px] text-zinc-300 leading-snug font-sans">
                              Mantendo o ritmo atual, seu saldo fechará com <strong>-R$ 180</strong> antes do próximo recebimento.
                            </p>
                          </div>

                          <div className="p-3 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-[10px] text-zinc-300 font-mono space-y-1">
                            <div className="text-sky-400 font-semibold">SUGESTÃO DO COPILOT:</div>
                            <div>Reduzir R$ 12/dia no teto livre até sexta-feira para reequilibrar o fluxo.</div>
                          </div>

                        </div>
                      )}

                    </div>

                    {/* Barra Inferior Nativa em Vidro Jateado */}
                    <div className="mx-3 mb-2 p-1.5 bg-black/75 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-around text-zinc-500 shadow-2xl z-30">
                      <button 
                        type="button" 
                        onClick={() => setActiveTab("teto")} 
                        className={`p-2 rounded-full transition-all ${activeTab === "teto" ? "bg-zinc-800 text-emerald-400 shadow-inner" : "hover:text-zinc-300"}`}
                      >
                        <Wallet className="w-4 h-4" />
                      </button>
                      <button 
                        type="button" 
                        onClick={() => setActiveTab("metas")} 
                        className={`p-2 rounded-full transition-all ${activeTab === "metas" ? "bg-zinc-800 text-sky-400 shadow-inner" : "hover:text-zinc-300"}`}
                      >
                        <Target className="w-4 h-4" />
                      </button>
                      <button 
                        type="button" 
                        onClick={() => setActiveTab("scanner")} 
                        className={`p-2 rounded-full transition-all ${activeTab === "scanner" ? "bg-zinc-800 text-purple-400 shadow-inner" : "hover:text-zinc-300"}`}
                      >
                        <Camera className="w-4 h-4" />
                      </button>
                      <button 
                        type="button" 
                        onClick={() => setActiveTab("rotas")} 
                        className={`p-2 rounded-full transition-all ${activeTab === "rotas" ? "bg-zinc-800 text-amber-400 shadow-inner" : "hover:text-zinc-300"}`}
                      >
                        <Compass className="w-4 h-4" />
                      </button>
                      <button 
                        type="button" 
                        onClick={() => setActiveTab("radar")} 
                        className={`p-2 rounded-full transition-all ${activeTab === "radar" ? "bg-zinc-800 text-red-400 shadow-inner" : "hover:text-zinc-300"}`}
                      >
                        <Radio className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Home Indicator */}
                    <div className="pb-1.5 pt-0.5 bg-[#04060A] flex justify-center">
                      <div className="w-28 h-1 bg-white/20 rounded-full" />
                    </div>

                  </div>
                </div>
              </div>

            </div>

          </div>
        ) : (
          /* =========================================================
             VISÃO 02: DASHBOARD WEB (EXPANDIDO)
             ========================================================= */
          <div className="rounded-3xl border border-white/[0.08] bg-[#0E131B] p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/[0.06] font-mono text-xs text-zinc-400">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-zinc-200 font-semibold uppercase">VORTO CLAREZA FINANCEIRA / PAINEL WEB</span>
              </div>
              <span className="text-emerald-400">TELEMETRIA ATIVA</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-5 space-y-4">
                <div className="p-6 rounded-2xl bg-black/50 border border-white/[0.04] space-y-3 font-mono">
                  <span className="text-xs text-zinc-500 uppercase">TETO SEGURO DIÁRIO</span>
                  <div className="text-4xl font-bold text-emerald-400">
                    R$ {tetoDiario} <span className="text-xs font-normal text-zinc-400">/dia livre</span>
                  </div>
                  <div className="pt-2 border-t border-white/[0.04] flex justify-between text-xs text-zinc-400">
                    <span>Ciclo:</span>
                    <strong className="text-zinc-200">{diasRestantes} dias restantes</strong>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-black/30 border border-white/[0.04] space-y-2 font-mono text-xs">
                  <div className="flex justify-between text-zinc-400">
                    <span>Saldo Bruto:</span>
                    <span className="text-zinc-200">R$ {saldoTotal}</span>
                  </div>
                  <div className="flex justify-between text-red-400">
                    <span>Contas Fixas:</span>
                    <span>- R$ {contasFuturas}</span>
                  </div>
                  <div className="flex justify-between text-sky-400">
                    <span>Reserva Emergencial:</span>
                    <span>- R$ {reservaMinima}</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 space-y-4">
                {activeTab === "metas" && (
                  <div className="p-6 rounded-2xl bg-black/50 border border-white/[0.04] space-y-5 font-mono">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-xs text-zinc-500 uppercase">META EM PROJEÇÃO</span>
                        <div className="text-lg font-semibold text-zinc-100">{currentGoal.name}</div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-zinc-500 uppercase">TOTAL</span>
                        <div className="text-xl font-bold text-emerald-400">R$ {currentGoal.total.toLocaleString("pt-BR")}</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-zinc-400">
                        <span>Ajustar prazo:</span>
                        <span className="text-sky-400 font-semibold">{goalMonths} meses</span>
                      </div>
                      <input
                        type="range"
                        min="3"
                        max="24"
                        value={goalMonths}
                        onChange={(e) => setGoalMonths(Number(e.target.value))}
                        className="w-full h-2 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-sky-400"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="p-3 rounded-xl bg-black/40 border border-white/[0.04]">
                        <span className="text-[10px] text-zinc-500 block">APORTE MENSAL</span>
                        <span className="text-lg font-bold text-zinc-100">R$ {aporteMensalMeta}/mês</span>
                      </div>
                      <div className="p-3 rounded-xl bg-black/40 border border-white/[0.04]">
                        <span className="text-[10px] text-zinc-500 block">IMPACTO DIÁRIO</span>
                        <span className="text-lg font-bold text-emerald-400">- R$ {impactoDiario}/dia</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "scanner" && (
                  <div className="p-6 rounded-2xl bg-black/50 border border-white/[0.04] space-y-4 font-mono text-xs">
                    <div className="flex justify-between items-center text-zinc-400 pb-2 border-b border-white/[0.04]">
                      <span>DOCUMENTO PROCESSADO</span>
                      <span className="text-emerald-400 flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> OCR LOCAL</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-200 font-semibold">{scannedDoc === "luz" ? "Conta de Luz / Enel" : scannedDoc === "cartao" ? "Fatura de Cartão Nubank" : "Contracheque Mensal"}</span>
                      <span className="text-lg font-bold text-emerald-400">{scannedDoc === "luz" ? "R$ 242,50" : scannedDoc === "cartao" ? "R$ 850,00" : "R$ 3.840,00"}</span>
                    </div>
                  </div>
                )}

                {activeTab === "rotas" && (
                  <div className="p-6 rounded-2xl bg-black/50 border border-white/[0.04] space-y-4 font-mono text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-amber-400 font-semibold">ROTA AVALANCHE</span>
                      <span className="text-zinc-400">Economia: R$ {Math.round(jurosPoupados)}</span>
                    </div>
                    <div className="text-2xl font-bold text-zinc-100">{mesesFinal} meses para quitação total</div>
                  </div>
                )}

                {activeTab === "teto" && (
                  <div className="p-6 rounded-2xl bg-black/50 border border-white/[0.04] space-y-3 font-mono text-xs">
                    <div className="text-emerald-400 font-semibold">PLANEJAMENTO DO CICLO</div>
                    <p className="text-zinc-300 font-sans leading-relaxed text-xs">
                      Mesmo com R$ 1.820 em conta, o limite seguro para hoje é R$ {tetoDiario}. 
                      Nenhuma conta fixa atrasará e sua reserva continuará intacta.
                    </p>
                  </div>
                )}

                {activeTab === "radar" && (
                  <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20 space-y-2 font-mono text-xs">
                    <div className="text-red-400 font-semibold flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" /> RISCO EM 9 DIAS
                    </div>
                    <p className="text-zinc-300 font-sans text-xs">Se o ritmo continuar, o saldo fechará em -R$ 180 antes do próximo recebimento.</p>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-zinc-500">
              <span>* Arquitetura Web & Mobile integradas pelo motor de regras determinísticas.</span>
              <a
                href="#contact"
                className="text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 transition-colors"
              >
                <span>Solicitar acesso antecipado</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
