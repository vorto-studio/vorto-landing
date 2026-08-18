"use client";

import { Activity, Cpu, ShieldCheck, Zap } from "lucide-react";

export function Method() {
  const steps = [
    {
      num: "01",
      title: "Ouvir e Entender",
      subtitle: "Descobrimos a dor real.",
      desc: "Analisamos o que está travando o seu dia a dia antes de começar a programar.",
    },
    {
      num: "02",
      title: "Desenhar o Simples",
      subtitle: "Criamos a melhor rota.",
      desc: "Desenhamos telas limpas que qualquer pessoa consegue usar sem precisar de treinamento longo.",
    },
    {
      num: "03",
      title: "Construir com Qualidade",
      subtitle: "Código rápido e seguro.",
      desc: "Desenvolvemos o sistema para funcionar de forma leve, sem travamentos nem lentidão.",
    },
    {
      num: "04",
      title: "Acompanhar no Uso",
      subtitle: "Melhoria constante.",
      desc: "Acompanhamos como as pessoas usam para deixar tudo cada vez mais rápido e direto.",
    },
  ];

  const principles = [
    {
      title: "Fácil de Usar",
      icon: Activity,
      desc: "O sistema resolve a parte difícil por trás para que a tela seja simples para você.",
    },
    {
      title: "Informação Correta",
      icon: Cpu,
      desc: "Números e dados confiáveis para você tomar decisões sem ter dúvidas.",
    },
    {
      title: "Nunca Travar",
      icon: ShieldCheck,
      desc: "Sistemas estáveis e seguros que continuam funcionando quando você mais precisa.",
    },
    {
      title: "Menos Esforço Manual",
      icon: Zap,
      desc: "Se uma tarefa é repetitiva, deixamos que o computador faça sozinho por você.",
    },
  ];

  return (
    <section id="method" className="py-28 border-t border-white/[0.08] bg-[#080B10] relative">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 space-y-16">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-wider">
            <span>04 / COMO TRABALHAMOS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-zinc-100 leading-tight">
            Antes de programar, <br />
            <span className="text-zinc-500">entendemos a sua necessidade real.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-3xl bg-[#0E131B] border border-white/[0.08] space-y-4 relative"
            >
              <div className="font-mono text-2xl font-semibold text-sky-400">
                {step.num}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-100">{step.title}</h3>
                <div className="text-xs font-mono text-zinc-400 mt-0.5">{step.subtitle}</div>
              </div>
              <p className="text-xs text-zinc-500 font-sans leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-6 pt-6">
          <div className="font-mono text-xs text-zinc-400 tracking-wider">
            O QUE NUNCA ABRIMOS MÃO
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-black/40 border border-white/[0.04] space-y-3"
                >
                  <Icon className="w-5 h-5 text-sky-400" />
                  <h4 className="text-base font-semibold text-zinc-100">{item.title}</h4>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
