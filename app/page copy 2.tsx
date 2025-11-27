"use client";
import React, { useState } from "react";
import {
  Zap,
  CheckCircle,
  Shield,
  ArrowRight,
  Flame,
  Lock,
  Star,
  AlertTriangle,
  Quote,
  Instagram,
  Camera,
  Volume2,
  VolumeX,
} from "lucide-react";

// --- ÍCONES PERSONALIZADOS ---
const R5Logo = () => (
  <div className="w-16 h-16 bg-[#CCFF00] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(204,255,0,0.6)] relative overflow-hidden group transform rotate-3 hover:rotate-0 transition duration-300">
    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition duration-300"></div>
    <span className="text-black font-black text-3xl italic">R5</span>
  </div>
);

const EILogo = () => (
  <div className="w-16 h-16 bg-black border-2 border-[#CCFF00] rounded-2xl flex items-center justify-center shadow-[0_0_15px_rgba(204,255,0,0.2)] relative overflow-hidden group transform -rotate-3 hover:rotate-0 transition duration-300">
    <span className="text-[#CCFF00] font-black text-3xl italic">EI</span>
  </div>
);

export default function LandingPage() {
  const [isMuted, setIsMuted] = useState(true);

  // ID do vídeo
  const videoId = "4xIhtz5hUMM";

  // URL OTIMIZADA PARA AUTOPLAY BACKGROUND
  // autoplay=1: Inicia sozinho
  // mute=1: Obrigatório para autoplay funcionar sem interação
  // controls=0: Remove a barra do YouTube (foco total)
  // loop=1 & playlist=ID: Garante o loop infinito
  // playsinline=1: Impede que vá para tela cheia automático no iOS
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${
    isMuted ? 1 : 0
  }&controls=0&loop=1&playlist=${videoId}&showinfo=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1`;

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-[#CCFF00] selection:text-black">
      {/* --- BACKGROUND FX --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 z-0"></div>
        {/* Luzes Neon de Fundo */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#CCFF00]/10 rounded-full blur-[150px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#CCFF00]/5 rounded-full blur-[120px]"></div>
      </div>

      {/* --- BARRA DE URGÊNCIA --- */}
      <div className="bg-[#CCFF00] text-black font-black text-xs md:text-sm text-center py-2 uppercase tracking-widest sticky top-0 z-50 shadow-[0_0_20px_rgba(204,255,0,0.5)] flex justify-center items-center gap-2 animate-fade-in-down">
        <AlertTriangle size={16} strokeWidth={3} />
        Somente até 28/11 • Vagas Limitadas
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-12 pb-24 flex flex-col items-center">
        {/* --- HEADER --- */}
        <div className="text-center mb-8 relative max-w-4xl mx-auto flex flex-col items-center">
          <div className="mb-4 opacity-80">
            <p className="text-white font-serif italic text-lg tracking-widest">
              Danillo Freitas
            </p>
          </div>

          <h1 className="text-5xl md:text-8xl font-black italic leading-[0.9] mb-6 uppercase tracking-tighter drop-shadow-2xl">
            <span className="text-white">Black Friday</span>{" "}
            <span className="text-[#CCFF00]">R5 +</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-green-400">
              Emagrecimento Inteligente
            </span>
          </h1>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl mb-8 transform -rotate-1 hover:rotate-0 transition duration-300 cursor-default border-l-4 border-l-[#CCFF00]">
            <p className="text-lg md:text-2xl font-bold text-gray-100 uppercase italic">
              "7 dias mudam o corpo.{" "}
              <span className="text-[#CCFF00]">30 dias mudam o hábito.</span>"
            </p>
          </div>

          <p className="text-gray-400 text-sm md:text-base font-medium max-w-2xl mx-auto uppercase tracking-wide mb-8">
            E pela primeira vez, eu uni os dois métodos que mais transformam
            meus pacientes:
          </p>
        </div>

        {/* --- VÍDEO BACKGROUND LOOP --- */}
        <div className="relative w-full max-w-[1000px] aspect-video mb-16 group rounded-2xl overflow-hidden border-2 border-[#CCFF00]/50 shadow-[0_0_60px_rgba(204,255,0,0.2)] bg-black">
          {/* Overlay Transparente (Impede interação direta com iframe) */}
          <div className="absolute inset-0 z-20 bg-transparent"></div>

          {/* Botão de Controle de Som */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="absolute bottom-6 right-6 z-30 bg-black/80 hover:bg-[#CCFF00] hover:text-black text-white border border-white/20 p-3 rounded-full backdrop-blur-md transition duration-300 flex items-center gap-2 group/btn shadow-lg"
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            <span className="text-xs font-bold uppercase pr-2 hidden group-hover/btn:block transition-all whitespace-nowrap">
              {isMuted ? "ATIVAR SOM" : "MUTAR"}
            </span>
          </button>

          {/* Texto de Instrução (Sone quando desmuta) */}
          {isMuted && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none bg-black/60 px-4 py-2 rounded-lg backdrop-blur text-center animate-pulse">
              <p className="text-white font-bold uppercase text-xs tracking-widest flex flex-col items-center gap-1">
                <VolumeX size={24} className="mb-1" />
                Toque para ouvir
              </p>
            </div>
          )}

          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>

          <iframe
            width="100%"
            height="100%"
            src={youtubeUrl}
            title="Video Background"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full scale-[1.35] pointer-events-none" // Zoom leve para remover bordas pretas do YouTube
          ></iframe>
        </div>

        {/* --- CTA 01 --- */}
        <div className="w-full max-w-lg mx-auto mb-24 text-center">
          <button className="w-full bg-[#CCFF00] hover:bg-[#bbe600] text-black font-black text-xl md:text-2xl py-5 rounded-xl shadow-[0_0_40px_rgba(204,255,0,0.4)] transition transform hover:scale-105 uppercase italic flex items-center justify-center gap-3 animate-pulse-slow">
            <span>Quero Minha Vaga VIP</span>
            <ArrowRight size={28} strokeWidth={3} />
          </button>
          <div className="flex justify-center gap-4 mt-4 text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest">
            <span className="flex items-center gap-1">
              <Lock size={10} /> Compra Segura
            </span>
            <span className="flex items-center gap-1">
              <Zap size={10} /> Acesso Imediato
            </span>
          </div>
        </div>

        {/* --- O QUE VOCÊ VAI RECEBER --- */}
        <div className="w-full max-w-6xl relative mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic mb-4">
              O que você vai{" "}
              <span className="text-[#CCFF00] underline decoration-4 decoration-white/20">
                receber hoje:
              </span>
            </h2>
            <p className="text-gray-400 font-medium">
              Você recebe o PDF completo imediatamente após a compra.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 relative">
            {/* Card 1: R5 */}
            <div className="bg-[#0a0a0a] rounded-3xl border border-[#CCFF00]/20 overflow-hidden relative group hover:border-[#CCFF00] transition duration-500">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition">
                <Zap size={100} className="text-[#CCFF00]" />
              </div>

              <div className="p-8 md:p-10 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <R5Logo />
                  <div>
                    <h3 className="text-2xl font-black text-white italic uppercase leading-none">
                      Protocolo de
                      <br />
                      <span className="text-[#CCFF00]">7 Dias</span>
                    </h3>
                  </div>
                </div>

                <div className="bg-[#CCFF00]/10 p-4 rounded-xl mb-8 border-l-4 border-[#CCFF00]">
                  <p className="text-gray-200 text-sm font-bold uppercase leading-relaxed">
                    O método criado para te entregar{" "}
                    <span className="text-[#CCFF00]">IMPACTO IMEDIATO.</span>
                  </p>
                </div>

                <ul className="space-y-4">
                  {[
                    "Até 5kg de retenção eliminados",
                    "Desincha rápido",
                    "Afina o rosto",
                    "Destrava o corpo",
                    "Aumenta a energia",
                    "Eleva a autoestima",
                    "Dá o primeiro resultado visível",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        size={20}
                        className="text-[#CCFF00] shrink-0 mt-0.5"
                        fill="black"
                      />
                      <span className="text-gray-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2: EI */}
            <div className="bg-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden relative group hover:border-white transition duration-500">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition">
                <Shield size={100} className="text-white" />
              </div>

              <div className="p-8 md:p-10 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <EILogo />
                  <div>
                    <h3 className="text-2xl font-black text-white italic uppercase leading-none">
                      Emagrecimento
                      <br />
                      Inteligente{" "}
                      <span className="text-sm bg-white text-black px-2 py-0.5 rounded ml-2 not-italic align-middle">
                        30 DIAS
                      </span>
                    </h3>
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-xl mb-8 border-l-4 border-white">
                  <p className="text-gray-200 text-sm font-bold uppercase leading-relaxed">
                    O que mantém o seu resultado de forma{" "}
                    <span className="text-white">LEVE E INTELIGENTE.</span>
                  </p>
                </div>

                <ul className="space-y-4">
                  {[
                    "Estratégia 80/20 real",
                    "Comer de tudo com consciência",
                    "Zero extremismo",
                    "Constância sem sofrimento",
                    "Alimentação prática",
                    "Liberdade com resultado",
                    "Construção de hábito sólido",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        size={20}
                        className="text-white shrink-0 mt-0.5"
                        fill="black"
                      />
                      <span className="text-gray-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* --- PROVA SOCIAL (RESULTADOS REAIS) --- */}
        <div className="w-full max-w-6xl mx-auto mb-24 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic mb-2">
              Resultados <span className="text-[#CCFF00]">Reais</span>
            </h2>
            <div className="w-24 h-1 bg-[#CCFF00] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carla Souza",
                kg: "-4.5kg",
                time: "7 DIAS",
                text: "Eu não acreditava que era possível desinchar tanto em uma semana. O Protocolo R5 salvou meu vestido de casamento!",
                image:
                  "https://cdn.pixabay.com/photo/2021/01/04/06/20/woman-5886645_1280.jpg",
              },
              {
                name: "Marcos Lima",
                kg: "-8kg",
                time: "30 DIAS",
                text: "O método EI mudou minha relação com a comida. Parei de brigar com a balança e aprendi a comer sem neura.",
                image:
                  "https://cdn.pixabay.com/photo/2016/11/29/06/08/woman-1867715_1280.jpg",
              },
              {
                name: "Ana Clara",
                kg: "-6kg",
                time: "21 DIAS",
                text: "A combinação do R5 para dar o start e o EI para manter foi perfeita. Minha autoestima voltou!",
                image:
                  "https://cdn.pixabay.com/photo/2017/08/06/12/04/people-2592247_1280.jpg",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-[#CCFF00]/50 transition group"
              >
                {/* Imagem de Resultado */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt="Resultado"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 right-4 bg-[#CCFF00] text-black text-xs font-black px-2 py-1 rounded uppercase shadow-lg">
                    Antes / Depois
                  </div>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-4 pt-12">
                    <div className="flex items-center gap-2">
                      <span className="bg-white/20 text-white text-xs font-bold px-2 py-1 rounded uppercase backdrop-blur-md border border-white/10">
                        {item.time}
                      </span>
                      <span className="text-[#CCFF00] text-lg font-black uppercase">
                        {item.kg} OFF
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        size={14}
                        className="text-[#CCFF00] fill-[#CCFF00]"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm mb-4 italic leading-relaxed relative">
                    <Quote
                      size={20}
                      className="absolute -top-2 -left-2 text-white/10 transform -scale-x-100"
                    />
                    "{item.text}"
                  </p>
                  <p className="text-white font-bold text-sm border-t border-white/10 pt-4">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- POR QUE OS DOIS JUNTOS? --- */}
        <div className="w-full max-w-5xl mx-auto mb-24">
          <div className="bg-gradient-to-br from-[#111] to-black border border-[#333] rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>

            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic mb-8 relative z-10">
              Por que os <span className="text-[#CCFF00]">dois juntos?</span>
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10 relative z-10">
              <div className="bg-[#CCFF00] text-black font-black text-lg px-6 py-3 rounded-full transform -rotate-1 shadow-[0_0_20px_rgba(204,255,0,0.4)] border-2 border-[#CCFF00]">
                PORQUE UM ATIVA.
              </div>
              <div className="text-4xl font-black text-white hidden md:block">
                +
              </div>
              <div className="bg-black text-white border-2 border-white font-black text-lg px-6 py-3 rounded-full transform rotate-1 shadow-lg">
                E O OUTRO SUSTENTA.
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12 relative z-10 text-left">
              <div className="bg-white/5 p-8 rounded-2xl border-l-4 border-[#CCFF00] hover:bg-white/10 transition">
                <h4 className="font-black text-[#CCFF00] mb-2 uppercase text-xl flex items-center gap-2">
                  <Zap size={20} /> O Protocolo R5
                </h4>
                <p className="text-gray-300 text-base">
                  Destrava o seu corpo e mostra o primeiro resultado visível.
                </p>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl border-l-4 border-white hover:bg-white/10 transition">
                <h4 className="font-black text-white mb-2 uppercase text-xl flex items-center gap-2">
                  <Shield size={20} /> O Método EI
                </h4>
                <p className="text-gray-300 text-base">
                  Mantém, aprofunda e cria a constância necessária.
                </p>
              </div>
            </div>

            <div className="inline-block bg-[#CCFF00]/10 border border-[#CCFF00]/30 backdrop-blur-md px-8 py-4 rounded-full">
              <p className="text-[#CCFF00] font-bold text-xs md:text-base uppercase tracking-widest relative z-10 flex items-center gap-2">
                <CheckCircle size={18} />
                Essa é a jornada completa de quem quer emagrecer de verdade.
              </p>
            </div>
          </div>
        </div>

        {/* --- OFERTA VIP (PREÇOS) --- */}
        <div className="w-full max-w-4xl mx-auto mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-r from-[#CCFF00]/20 to-green-500/20 blur-3xl rounded-full opacity-50"></div>

          <div className="bg-[#050505] border-2 border-[#CCFF00] rounded-3xl p-8 md:p-12 relative z-10 text-center shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#CCFF00] text-black font-black text-sm px-6 py-2 rounded-full uppercase tracking-widest shadow-lg whitespace-nowrap animate-bounce">
              Oferta VIP Black Friday • 50% OFF
            </div>

            <h3 className="text-2xl font-bold text-gray-400 uppercase tracking-widest mb-8 mt-6">
              Valores Oficiais
            </h3>

            <div className="flex justify-center items-center gap-8 mb-8 opacity-50 grayscale transition hover:grayscale-0 hover:opacity-80">
              <div className="text-center">
                <p className="text-sm font-bold text-white">R5</p>
                <p className="text-2xl font-black line-through text-red-500 decoration-white">
                  R$ 67
                </p>
              </div>
              <div className="text-xl font-bold text-white">+</div>
              <div className="text-center">
                <p className="text-sm font-bold text-white">EI</p>
                <p className="text-2xl font-black line-through text-red-500 decoration-white">
                  R$ 247
                </p>
              </div>
            </div>

            <div className="text-center mb-8 opacity-50">
              <p className="text-sm font-bold text-gray-400">
                TOTAL:{" "}
                <span className="line-through decoration-red-500 decoration-2">
                  R$ 314,00
                </span>
              </p>
            </div>

            <div className="w-full h-px bg-white/10 mb-8"></div>

            <div className="mb-6">
              <p className="text-gray-300 text-sm uppercase font-bold tracking-widest mb-2">
                Combo R5 + EI por apenas:
              </p>
              <div className="flex items-center justify-center gap-2 text-[#CCFF00]">
                <span className="text-3xl font-bold mb-6">R$</span>
                <span className="text-8xl md:text-[10rem] font-black italic tracking-tighter drop-shadow-[0_0_30px_rgba(204,255,0,0.3)] leading-none">
                  157
                </span>
              </div>
            </div>

            <button className="w-full bg-[#CCFF00] hover:bg-[#bbe600] text-black font-black text-2xl md:text-3xl py-6 rounded-xl shadow-[0_0_40px_rgba(204,255,0,0.5)] transition transform hover:scale-105 uppercase italic mb-8 animate-pulse-slow flex items-center justify-center gap-4">
              COMPRE AGORA <ArrowRight size={32} strokeWidth={4} />
            </button>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest">
              <span className="flex items-center gap-1">
                <CheckCircle size={12} className="text-[#CCFF00]" /> Acesso
                Imediato
              </span>
              <span className="flex items-center gap-1">
                <Star size={12} className="text-[#CCFF00]" /> Garantia de
                Qualidade
              </span>
              <span className="flex items-center gap-1">
                <Flame size={12} className="text-[#CCFF00]" /> Promoção Limitada
              </span>
            </div>
          </div>
        </div>

        {/* --- GALERIA DO PROFISSIONAL --- */}
        <div className="w-full max-w-6xl mx-auto mb-24">
          <div className="flex items-center gap-3 mb-8 px-4">
            <Camera className="text-[#CCFF00]" size={28} />
            <h2 className="text-3xl font-black text-white uppercase italic">
              Quem é <span className="text-[#CCFF00]">Danillo Freitas?</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px] md:h-[400px]">
            {/* Foto Principal Grande */}
            <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl border border-white/10">
              <img
                src="https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700 grayscale group-hover:grayscale-0"
                alt="Danillo Freitas Treinando"
              />
              <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent w-full">
                <p className="text-[#CCFF00] font-black text-xl uppercase italic">
                  Especialista em Resultado
                </p>
                <p className="text-gray-300 text-sm">
                  Nutrição Esportiva de Alta Performance
                </p>
              </div>
            </div>

            {/* Foto Menor 1 */}
            <div className="relative group overflow-hidden rounded-2xl border border-white/10">
              <img
                src="https://cdn.pixabay.com/photo/2020/05/25/07/35/gym-5216934_1280.jpg"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-80 group-hover:opacity-100"
                alt="Atendimento"
              />
            </div>

            {/* Foto Menor 2 */}
            <div className="relative group overflow-hidden rounded-2xl border border-white/10">
              <img
                src="https://cdn.pixabay.com/photo/2018/06/27/07/45/student-3500990_1280.jpg"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-80 group-hover:opacity-100"
                alt="Palestra"
              />
            </div>

            {/* Card de Estatística */}
            <div className="col-span-2 relative group overflow-hidden rounded-2xl bg-[#111] flex flex-col justify-center items-center p-6 border border-[#CCFF00]/20 hover:border-[#CCFF00] transition">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Zap size={80} />
              </div>
              <h3 className="text-5xl font-black text-white italic mb-2">
                +5.000
              </h3>
              <p className="text-gray-400 text-sm uppercase tracking-widest text-center font-bold">
                Vidas Transformadas com o Método
              </p>
            </div>
          </div>
        </div>

        {/* --- FOOTER PERFIL --- */}
        <div className="border-t border-white/10 w-full max-w-4xl pt-10 flex flex-col md:flex-row items-center gap-6 justify-center md:justify-start">
          <div className="relative group cursor-pointer">
            <div className="w-24 h-24 rounded-full p-[3px] bg-gradient-to-br from-[#CCFF00] to-green-600 group-hover:scale-105 transition">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866572_1280.jpg"
                className="w-full h-full rounded-full border-4 border-black object-cover grayscale group-hover:grayscale-0 transition duration-500"
                alt="Danillo Freitas Avatar"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-black text-[#CCFF00] p-1.5 rounded-full border border-[#CCFF00]">
              <CheckCircle size={16} fill="black" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold text-2xl italic">
              Danillo Freitas
            </h4>
            <p className="text-gray-400 text-sm">
              Nutrição Esportiva •{" "}
              <span className="text-[#CCFF00] font-bold">Grupo R5 VIP</span>
            </p>
          </div>
          <div className="md:ml-auto text-center md:text-right">
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-[#CCFF00] font-bold text-sm px-6 py-3 rounded-full flex items-center gap-2 transition group">
              <Instagram
                size={16}
                className="group-hover:scale-110 transition"
              />{" "}
              @DANILLOFREITAS
            </button>
            <p className="text-[9px] text-gray-600 mt-2 uppercase tracking-widest">
              © Black Friday 2025 • Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
