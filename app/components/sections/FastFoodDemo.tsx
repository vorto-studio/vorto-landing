"use client";

import { useState } from "react";
import { 
  Flame, 
  MessageSquare, 
  Send, 
  DollarSign, 
  TrendingUp, 
  Package, 
  Truck, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Wifi, 
  Smartphone, 
  Monitor, 
  ArrowUpRight, 
  UserCheck, 
  ShieldCheck, 
  CircleDot, 
  WifiOff,
  Battery,
  Layers,
  Building2,
  ChevronRight,
  PieChart
} from "lucide-react";

export function FastFoodDemo() {
  const [activeView, setActiveView] = useState<"owner_mobile" | "whatsapp_web">("whatsapp_web");
  const [ownerTab, setOwnerTab] = useState<"lucro" | "caixa" | "commodities" | "fornecedores">("lucro");
  const [chatStep, setChatStep] = useState<1 | 2 | 3>(2);

  // Dados do Caixa e DRE do Proprietário
  const faturamentoHoje = 8420.00;
  const cmvInsumos = 2694.00; // 32%
  const taxasCartaoIfood = 757.80; // 9%
  const custosOperacionaisRateio = 1431.40; // 17%
  const lucroLiquidoReal = faturamentoHoje - cmvInsumos - taxasCartaoIfood - custosOperacionaisRateio; // R$ 3.536,80 (42%)

  return (
    <section id="fastfood" className="py-28 border-t border-white/[0.08] bg-[#080B10] relative">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Cabeçalho Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-amber-400 uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5" />
              <span>03 / VORTO FASTFOOD & WHATSAPP</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-zinc-100">
              Pedidos pelo WhatsApp. <br />
              <span className="text-zinc-500">Gestão e lucro real no celular do dono.</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
              O cliente pede no WhatsApp como se falasse com um atendente e o cadastro é feito na hora. 
              Enquanto a cozinha produz, o dono acompanha o caixa, insumos críticos e o lucro líquido em tempo real no app mobile.
            </p>
          </div>

          {/* Seletor de Perspectiva (WhatsApp Web vs App do Dono) */}
          <div className="flex items-center p-1 bg-black/60 rounded-2xl border border-white/[0.08] font-mono text-xs self-start md:self-auto shadow-inner">
            <button
              type="button"
              onClick={() => setActiveView("whatsapp_web")}
              className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                activeView === "whatsapp_web"
                  ? "bg-zinc-800 text-emerald-400 font-semibold border border-white/10 shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp do Cliente</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveView("owner_mobile")}
              className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                activeView === "owner_mobile"
                  ? "bg-zinc-800 text-amber-400 font-semibold border border-white/10 shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>App do Proprietário</span>
            </button>
          </div>
        </div>

        {/* CONTAINER 1: VISÃO DO WHATSAPP COM CADASTRO AUTOMÁTICO */}
        {activeView === "whatsapp_web" ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Lado Esquerdo: Simulador de Conversa do WhatsApp */}
            <div className="lg:col-span-7 rounded-3xl border border-white/[0.08] bg-[#0C1317] overflow-hidden shadow-2xl flex flex-col min-h-[560px]">
              
              {/* Header do WhatsApp */}
              <div className="p-4 bg-[#1F2C34] border-b border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-zinc-100 font-mono text-sm">
                    VF
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-100 flex items-center gap-2">
                      <span>Vorto Burger & Fast</span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-mono">CONTA COMERCIAL</span>
                    </div>
                    <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Atendimento Automático Ativo
                    </span>
                  </div>
                </div>

                {/* Seletor de Etapa da Conversa */}
                <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl font-mono text-[11px]">
                  <button
                    type="button"
                    onClick={() => setChatStep(1)}
                    className={`px-2.5 py-1 rounded-lg ${chatStep === 1 ? "bg-emerald-600 text-white font-semibold" : "text-zinc-400"}`}
                  >
                    1. Pedido
                  </button>
                  <button
                    type="button"
                    onClick={() => setChatStep(2)}
                    className={`px-2.5 py-1 rounded-lg ${chatStep === 2 ? "bg-emerald-600 text-white font-semibold" : "text-zinc-400"}`}
                  >
                    2. Endereço
                  </button>
                  <button
                    type="button"
                    onClick={() => setChatStep(3)}
                    className={`px-2.5 py-1 rounded-lg ${chatStep === 3 ? "bg-emerald-600 text-white font-semibold" : "text-zinc-400"}`}
                  >
                    3. Pago
                  </button>
                </div>
              </div>

              {/* Corpo do Chat com Balões do WhatsApp */}
              <div className="p-6 space-y-4 flex-1 bg-[#0B141A] font-sans text-xs flex flex-col justify-end">
                
                {/* Mensagem do Cliente */}
                <div className="self-end bg-[#005C4B] text-zinc-100 p-3.5 rounded-2xl rounded-tr-none max-w-sm space-y-1 shadow-sm">
                  <p>Boa noite! Quero pedir 2 Smash Bacon com dobro de queijo e sem cebola, por favor.</p>
                  <span className="text-[9px] text-zinc-300 block text-right font-mono">20:14 ✓✓</span>
                </div>

                {/* Resposta do Robô VORTO */}
                <div className="self-start bg-[#202C33] text-zinc-200 p-3.5 rounded-2xl rounded-tl-none max-w-md space-y-2 shadow-sm">
                  <p>Perfeito! Anotei seu pedido: <strong>2x Smash Bacon (com dobro de queijo cheddar e sem cebola)</strong>.</p>
                  <p className="text-zinc-400">Como é sua primeira vez aqui, qual seu <strong>Nome</strong> e <strong>Endereço de Entrega</strong>?</p>
                  <span className="text-[9px] text-zinc-400 block text-right font-mono">20:14</span>
                </div>

                {/* Cliente enviando dados */}
                {chatStep >= 2 && (
                  <div className="self-end bg-[#005C4B] text-zinc-100 p-3.5 rounded-2xl rounded-tr-none max-w-sm space-y-1 shadow-sm animate-fadeIn">
                    <p>Meu nome é <strong>Lucas Ferreira</strong>, entregar na <strong>Rua Castro, 450 - Apto 302 (Meireles)</strong>.</p>
                    <span className="text-[9px] text-zinc-300 block text-right font-mono">20:15 ✓✓</span>
                  </div>
                )}

                {/* Confirmação e Cobrança Pix */}
                {chatStep >= 2 && (
                  <div className="self-start bg-[#202C33] text-zinc-200 p-3.5 rounded-2xl rounded-tl-none max-w-md space-y-2 shadow-sm animate-fadeIn">
                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.06] font-mono text-[11px] space-y-1">
                      <div className="text-emerald-400 font-semibold">✓ PEDIDO #1846 CRIADO NA COZINHA</div>
                      <div className="text-zinc-300">Total: 2x Smash Bacon = <strong>R$ 55,80</strong></div>
                      <div className="text-zinc-400 text-[10px]">Taxa de Entrega: Grátis (Raio de 2km)</div>
                    </div>
                    <p>Chave Pix Copia e Cola gerada abaixo. Assim que pagar, o pedido entra na chapa!</p>
                    <span className="text-[9px] text-zinc-400 block text-right font-mono">20:15</span>
                  </div>
                )}

                {chatStep === 3 && (
                  <div className="self-start bg-[#202C33] text-zinc-200 p-3 rounded-2xl rounded-tl-none max-w-sm space-y-1 border border-emerald-500/30 animate-fadeIn">
                    <span className="text-emerald-400 font-semibold font-mono text-[11px] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Pagamento Pix de R$ 55,80 Confirmado!
                    </span>
                    <p className="text-[11px] text-zinc-300">Seu lanche já está na esteira de corte e montagem. Previsão: 22 minutos.</p>
                  </div>
                )}

              </div>

              {/* Barra de Digitação */}
              <div className="p-3 bg-[#1F2C34] border-t border-white/[0.06] flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Mensagem..."
                  disabled
                  value="Conversa em andamento com o robô VORTO..."
                  className="flex-1 bg-[#2A3942] rounded-xl px-4 py-2 text-xs text-zinc-400 font-mono outline-none"
                />
                <button type="button" className="p-2 rounded-xl bg-emerald-600 text-white">
                  <Send className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Lado Direito: Perfil Capturado Automaticamente no Sistema */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-7 rounded-3xl bg-[#0E131B] border border-emerald-500/30 space-y-5 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] font-mono text-xs">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4" /> CADASTRO AUTOMÁTICO ON-THE-FLY
                  </span>
                  <span className="text-zinc-500">BANCO VORTO</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/[0.04] space-y-0.5">
                    <span className="text-[10px] text-zinc-500">NOME DO CLIENTE:</span>
                    <div className="text-sm font-semibold text-zinc-100">
                      {chatStep >= 2 ? "Lucas Ferreira" : "Identificando..."}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/[0.04] space-y-0.5">
                    <span className="text-[10px] text-zinc-500">WHATSAPP / IDENTIFICADOR:</span>
                    <div className="text-sm font-semibold text-emerald-400">+55 (85) 99842-8812</div>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/[0.04] space-y-0.5">
                    <span className="text-[10px] text-zinc-500">ENDEREÇO DE ENTREGA SALVO:</span>
                    <div className="text-zinc-200">
                      {chatStep >= 2 ? "Rua Castro, 450 - Apto 302, Meireles" : "Aguardando envio..."}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/[0.04] space-y-0.5">
                    <span className="text-[10px] text-zinc-500">PREFERÊNCIAS MEMORIZADAS:</span>
                    <div className="text-amber-300 text-[11px]">
                      {chatStep >= 2 ? "✓ Gosta de dobro de cheddar · Não come cebola" : "Analisando histórico..."}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-zinc-300 font-sans leading-relaxed flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero fricção:</strong> No próximo pedido, o cliente só precisará mandar *"quero o mesmo de sempre"* e o sistema já sabe o que produzir e onde entregar.
                  </span>
                </div>
              </div>

            </div>

          </div>
        ) : (
          /* =========================================================================
             CONTAINER 2: SMARTPHONE EXCLUSIVO DO PROPRIETÁRIO (COMMAND APP)
             ========================================================================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Lado Esquerdo: Controles & Painel de Métricas */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-7 rounded-3xl bg-[#0E131B] border border-white/[0.08] space-y-5">
                
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs font-mono text-zinc-400">
                  <span className="text-zinc-200 font-semibold uppercase">CENTRAL DO PROPRIETÁRIO</span>
                  <span className="text-amber-400 flex items-center gap-1">
                    <CircleDot className="w-3 h-3 animate-pulse" /> Telemetria da Loja
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                  <button
                    type="button"
                    onClick={() => setOwnerTab("lucro")}
                    className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-2.5 cursor-pointer ${
                      ownerTab === "lucro"
                        ? "bg-zinc-800 border-emerald-500/40 text-emerald-400 font-semibold"
                        : "bg-black/30 border-white/[0.04] text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    <TrendingUp className="w-4 h-4" />
                    <span>1. Lucro Real</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOwnerTab("caixa")}
                    className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-2.5 cursor-pointer ${
                      ownerTab === "caixa"
                        ? "bg-zinc-800 border-emerald-500/40 text-emerald-400 font-semibold"
                        : "bg-black/30 border-white/[0.04] text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    <DollarSign className="w-4 h-4" />
                    <span>2. Caixa & Sangria</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOwnerTab("commodities")}
                    className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-2.5 cursor-pointer ${
                      ownerTab === "commodities"
                        ? "bg-zinc-800 border-amber-500/40 text-amber-400 font-semibold"
                        : "bg-black/30 border-white/[0.04] text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    <Package className="w-4 h-4" />
                    <span>3. Insumos/Commodities</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOwnerTab("fornecedores")}
                    className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-2.5 cursor-pointer ${
                      ownerTab === "fornecedores"
                        ? "bg-zinc-800 border-sky-500/40 text-sky-400 font-semibold"
                        : "bg-black/30 border-white/[0.04] text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    <Truck className="w-4 h-4" />
                    <span>4. Fornecedores</span>
                  </button>
                </div>

                {/* Explicação do Módulo Selecionado */}
                <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.04] font-mono text-xs text-zinc-400 space-y-2">
                  {ownerTab === "lucro" && (
                    <p className="font-sans leading-relaxed text-xs">
                      <strong>DRE Automático em Tempo Real:</strong> Faturamento bruto menos o CMV (Custo de Mercadoria Vendida), taxas de cartão/iFood e rateio operacional. Você vê o lucro limpo no bolso a cada minuto.
                    </p>
                  )}
                  {ownerTab === "caixa" && (
                    <p className="font-sans leading-relaxed text-xs">
                      <strong>Controle de Caixa Cego:</strong> Acompanhe as entradas por Pix, dinheiro na gaveta e autorize sangrias de caixa diretamente pelo celular sem precisar estar fisicamente na loja.
                    </p>
                  )}
                  {ownerTab === "commodities" && (
                    <p className="font-sans leading-relaxed text-xs">
                      <strong>Radar de Commodities:</strong> Acompanhe a variação do preço da carne, queijo e óleo de fritura por quilo, com alertas de estoque crítico baseados no ritmo de vendas de hoje.
                    </p>
                  )}
                  {ownerTab === "fornecedores" && (
                    <p className="font-sans leading-relaxed text-xs">
                      <strong>Gestão de Boletos e Pedidos:</strong> Veja os insumos que chegam amanhã cedo e aprove pedidos de compra com os frigoríficos parceiros em 1 toque.
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="w-full py-3.5 px-4 rounded-2xl bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                  >
                    <span>Quero o VORTO FastFood no meu restaurante</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>

            {/* Lado Direito: Chassi Titanium com App Mobile do Dono */}
            <div className="lg:col-span-6 flex justify-center py-4">
              
              <div className="relative">
                {/* Botões Físicos */}
                <div className="absolute -left-[3px] top-24 w-[3px] h-8 bg-zinc-600 rounded-l-sm" />
                <div className="absolute -left-[3px] top-36 w-[3px] h-12 bg-zinc-600 rounded-l-sm" />
                <div className="absolute -left-[3px] top-52 w-[3px] h-12 bg-zinc-600 rounded-l-sm" />
                <div className="absolute -right-[3px] top-32 w-[3px] h-16 bg-zinc-600 rounded-r-sm" />

                {/* Chassi do Smartphone */}
                <div className="w-[335px] sm:w-[365px] rounded-[52px] p-[10px] bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] ring-1 ring-white/20">
                  
                  <div className="w-full rounded-[44px] bg-[#04060A] border border-black/80 overflow-hidden flex flex-col justify-between min-h-[640px] relative font-sans select-none text-zinc-100">
                    
                    {/* Topo: Dynamic Island & Status */}
                    <div className="pt-3.5 px-6 flex items-center justify-between text-[11px] font-mono text-zinc-400 relative z-30">
                      <span className="font-semibold text-zinc-200">20:15</span>
                      
                      <div className="h-[22px] px-3 bg-black rounded-full border border-white/[0.08] mx-auto absolute inset-x-0 top-3 w-fit flex items-center gap-2 shadow-inner">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        <span className="text-[9px] font-mono text-zinc-400">VORTO / PROPRIETÁRIO</span>
                      </div>
                      
                      <div className="flex items-center gap-1.5 text-zinc-300">
                        <Wifi className="w-3 h-3" />
                        <Battery className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                    </div>

                    {/* Conteúdo da Tela do Proprietário */}
                    <div className="p-5 pt-3 space-y-4 flex-1 flex flex-col justify-start">
                      
                      {/* Header do App */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="space-y-0.5">
                          <span className="text-[9px] font-mono text-zinc-500 uppercase">UNIDADE CENTRAL · MEIRELES</span>
                          <div className="text-sm font-semibold text-zinc-100 flex items-center gap-1.5">
                            <span>Vorto Burger Fast</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          </div>
                        </div>
                        <div className="px-2 py-1 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono text-amber-400 font-bold">
                          PROPRIETÁRIO
                        </div>
                      </div>

                      {/* ABA 1: LUCRO REAL & DRE AO VIVO */}
                      {ownerTab === "lucro" && (
                        <div className="space-y-3 animate-fadeIn">
                          
                          {/* Card Hero de Lucro Líquido */}
                          <div className="p-5 rounded-3xl bg-gradient-to-b from-[#0D1814] to-[#060D0A] border border-emerald-500/30 space-y-2 shadow-lg">
                            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">LUCRO LÍQUIDO HOJE (NO BOLSO)</span>
                            <div className="flex items-baseline gap-1">
                              <span className="text-xs font-mono text-zinc-400">R$</span>
                              <span className="text-3xl font-bold font-mono text-emerald-400 tracking-tight">
                                {lucroLiquidoReal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                              </span>
                              <span className="text-[10px] text-emerald-400 font-mono ml-1 font-semibold">(42.0% margem)</span>
                            </div>
                            <span className="text-[10px] text-zinc-400 block font-mono">Faturamento Bruto: R$ {faturamentoHoje.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
                          </div>

                          {/* DRE Simplificado */}
                          <div className="space-y-1.5 font-mono text-[11px]">
                            <div className="p-2.5 rounded-2xl bg-white/[0.02] border border-white/[0.04] flex justify-between">
                              <span className="text-zinc-400">(-) CMV (Insumos Carnes/Pão)</span>
                              <span className="text-red-400">- R$ 2.694,00 (32%)</span>
                            </div>
                            <div className="p-2.5 rounded-2xl bg-white/[0.02] border border-white/[0.04] flex justify-between">
                              <span className="text-zinc-400">(-) Taxas Cartão / iFood</span>
                              <span className="text-red-400">- R$ 757,80 (9%)</span>
                            </div>
                            <div className="p-2.5 rounded-2xl bg-white/[0.02] border border-white/[0.04] flex justify-between">
                              <span className="text-zinc-400">(-) Rateio Equipe/Custos</span>
                              <span className="text-red-400">- R$ 1.431,40 (17%)</span>
                            </div>
                          </div>

                        </div>
                      )}

                      {/* ABA 2: CONTROLE DE CAIXA */}
                      {ownerTab === "caixa" && (
                        <div className="space-y-3 animate-fadeIn">
                          
                          <div className="p-4 rounded-3xl bg-[#0D151E] border border-white/[0.08] space-y-3">
                            <span className="text-[10px] font-mono text-zinc-400 uppercase">DINHEIRO EM GAVETA / CAIXA 01</span>
                            <div className="text-2xl font-bold font-mono text-zinc-100">
                              R$ 1.280,00
                            </div>
                            <div className="flex justify-between text-[10px] font-mono text-zinc-400 pt-1 border-t border-white/[0.04]">
                              <span>Pix Recebidos: R$ 4.820</span>
                              <span>Cartão: R$ 2.320</span>
                            </div>
                          </div>

                          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.04] space-y-2 font-mono text-xs">
                            <div className="flex justify-between items-center">
                              <span className="text-zinc-300 font-semibold">ÚLTIMA SANGRIA:</span>
                              <span className="text-amber-400">R$ 500,00</span>
                            </div>
                            <div className="text-[10px] text-zinc-500">Motivo: Troco para motoboys · Autorizado por você às 19:40</div>
                          </div>

                        </div>
                      )}

                      {/* ABA 3: COMMODITIES & INSUMOS */}
                      {ownerTab === "commodities" && (
                        <div className="space-y-2.5 animate-fadeIn font-mono text-xs">
                          
                          <div className="p-3.5 rounded-2xl bg-[#0D151E] border border-red-500/30 space-y-1.5">
                            <div className="flex justify-between items-center text-[10px]">
                              <span className="text-zinc-400">BLEND CARNE 150G (KG)</span>
                              <span className="text-red-400 font-semibold">ALERTA ESTOQUE</span>
                            </div>
                            <div className="flex justify-between items-baseline">
                              <span className="text-base font-bold text-zinc-100">18.4 kg restantes</span>
                              <span className="text-[11px] text-zinc-400">R$ 38,90/kg</span>
                            </div>
                            <span className="text-[9px] text-red-400/90 block">Suficiente para ~120 burgers (acaba às 22h30).</span>
                          </div>

                          <div className="p-3.5 rounded-2xl bg-[#0D151E] border border-white/[0.06] space-y-1">
                            <div className="flex justify-between text-[10px] text-zinc-400">
                              <span>QUEIJO CHEDDAR FATIADO</span>
                              <span className="text-emerald-400">ESTOQUE OK</span>
                            </div>
                            <div className="text-sm font-semibold text-zinc-200">42 kg · R$ 41,50/kg</div>
                          </div>

                        </div>
                      )}

                      {/* ABA 4: FORNECEDORES */}
                      {ownerTab === "fornecedores" && (
                        <div className="space-y-2.5 animate-fadeIn font-mono text-xs">
                          
                          <div className="p-3.5 rounded-2xl bg-[#0D151E] border border-white/[0.06] space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="font-semibold text-zinc-200">Frigorífico Boi Nobre</span>
                              <span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full">ENTREGA AMANHÃ</span>
                            </div>
                            <div className="text-[11px] text-zinc-400">Pedido: 60kg Blend Angus · R$ 2.334,00</div>
                            <div className="text-[10px] text-zinc-500">Boleto com vencimento em 28/08</div>
                          </div>

                          <div className="p-3.5 rounded-2xl bg-[#0D151E] border border-white/[0.06] space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="font-semibold text-zinc-200">Distribuidora Panetex</span>
                              <span className="text-[9px] bg-sky-500/10 text-sky-400 px-2 py-0.5 rounded-full">AGUARDANDO PEDIDO</span>
                            </div>
                            <div className="text-[11px] text-zinc-400">Pão Brioche Tradicional (400 un)</div>
                          </div>

                        </div>
                      )}

                    </div>

                    {/* Barra Inferior Flutuante do Proprietário */}
                    <div className="mx-3 mb-2 p-1.5 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-around text-zinc-500 shadow-2xl z-30">
                      <button 
                        type="button" 
                        onClick={() => setOwnerTab("lucro")} 
                        className={`p-2 rounded-full transition-all ${ownerTab === "lucro" ? "bg-zinc-800 text-emerald-400 shadow-inner" : "hover:text-zinc-300"}`}
                      >
                        <TrendingUp className="w-4 h-4" />
                      </button>
                      <button 
                        type="button" 
                        onClick={() => setOwnerTab("caixa")} 
                        className={`p-2 rounded-full transition-all ${ownerTab === "caixa" ? "bg-zinc-800 text-emerald-400 shadow-inner" : "hover:text-zinc-300"}`}
                      >
                        <DollarSign className="w-4 h-4" />
                      </button>
                      <button 
                        type="button" 
                        onClick={() => setOwnerTab("commodities")} 
                        className={`p-2 rounded-full transition-all ${ownerTab === "commodities" ? "bg-zinc-800 text-amber-400 shadow-inner" : "hover:text-zinc-300"}`}
                      >
                        <Package className="w-4 h-4" />
                      </button>
                      <button 
                        type="button" 
                        onClick={() => setOwnerTab("fornecedores")} 
                        className={`p-2 rounded-full transition-all ${ownerTab === "fornecedores" ? "bg-zinc-800 text-sky-400 shadow-inner" : "hover:text-zinc-300"}`}
                      >
                        <Truck className="w-4 h-4" />
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
        )}

      </div>
    </section>
  );
}
