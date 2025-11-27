"use client";
import React, { useState, useEffect } from "react";
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// --- DADOS DEPOIMENTOS (CARROSSEL) ---
const testimonials = [
  {
    name: "Carla Souza",
    desc: "-4.5kg em 7 dias",
    text: "Eu não acreditava que era possível desinchar tanto em uma semana. O Protocolo R5 salvou meu vestido de casamento! Me sinto outra mulher.",
    img: "https://cdn.pixabay.com/photo/2021/01/04/06/20/woman-5886645_1280.jpg",
  },
  {
    name: "Marcos Lima",
    desc: "-8kg em 30 dias",
    text: "Parei de brigar com a balança. O método EI mudou minha relação com a comida. Hoje como de tudo e continuo emagrecendo.",
    img: "https://cdn.pixabay.com/photo/2016/11/29/06/08/woman-1867715_1280.jpg",
  },
  {
    name: "Ana Clara",
    desc: "Autoestima recuperada",
    text: "Já tinha tentado de tudo. A combinação do R5 para dar o start e o EI para manter foi perfeita. Minha autoestima voltou!",
    img: "https://cdn.pixabay.com/photo/2017/08/06/12/04/people-2592247_1280.jpg",
  },
];
// --- ÍCONES PERSONALIZADOS ---
const R5Icon = () => (
  <div className="w-14 h-14 bg-[#CCFF00] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(204,255,0,0.4)] relative overflow-hidden group">
    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition duration-300"></div>
    <Zap className="text-black w-8 h-8 fill-black relative z-10" />
  </div>
);

const EIIcon = () => (
  <div className="w-14 h-14 bg-black border border-[#CCFF00]/30 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden group">
    <div className="absolute inset-0 bg-[#CCFF00] opacity-0 group-hover:opacity-10 transition duration-300"></div>
    <Shield className="text-[#CCFF00] w-8 h-8 relative z-10" />
  </div>
);

export default function LandingPage() {
  const [isMuted, setIsMuted] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carrossel Automático
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Troca a cada 5 segundos
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  // CONFIGURAÇÃO DO VÍDEO (Autoplay + Loop + Sem Controles)
  const videoId = "4xIhtz5hUMM";
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${
    isMuted ? 1 : 0
  }&controls=0&loop=1&playlist=${videoId}&showinfo=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1`;

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-[#CCFF00] selection:text-black">
      {/* --- BACKGROUND DINÂMICO (Estilo Anterior) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 z-0"></div>
        <img
          src="https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-luminosity grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/90 to-[#050505] z-10"></div>

        {/* Feixes de Luz Neon */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#CCFF00]/5 rounded-full blur-[150px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#CCFF00]/5 rounded-full blur-[120px] z-0"></div>
      </div>
      <div className="bg-[#CCFF00] text-black font-black text-xs md:text-sm text-center py-2 uppercase tracking-widest sticky top-0 z-50 shadow-[0_0_20px_rgba(204,255,0,0.5)] flex justify-center items-center gap-2 animate-fade-in-down">
        <AlertTriangle size={16} strokeWidth={3} />
        Somente até 28/11 • Vagas Limitadas
      </div>

      {/* --- NAV BAR --- */}
      <div className="absolute top-10 left-0 w-full z-40 px-4 md:px-8 flex justify-between items-start">
        <div className="flex flex-col">
          <h2 className="text-2xl md:text-3xl font-black italic tracking-tighter text-white leading-none">
            DANILLO<span className="text-[#CCFF00]">FREITAS</span>
          </h2>
          <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-[0.3em] mt-1 ml-0.5 border-l-2 border-[#CCFF00] pl-2">
            Nutrição Esportiva
          </p>
        </div>

        <div className="hidden md:flex items-center gap-4 text-xs font-bold text-[#CCFF00] uppercase tracking-widest bg-black/50 px-4 py-2 rounded-full border border-[#CCFF00]/20 backdrop-blur-md">
          <span className="flex items-center gap-2">
            <Lock size={12} /> Vagas Limitadas
          </span>
          <span className="w-1 h-1 bg-[#CCFF00] rounded-full"></span>
          <span className="flex items-center gap-2">
            <Flame size={12} /> Black Friday
          </span>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-24 flex flex-col items-center">
        {/* --- HERO HEADER --- */}
        <div className="text-center mb-10 relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#CCFF00] text-black text-[11px] font-black uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(204,255,0,0.3)] animate-pulse">
            <AlertTriangle size={12} strokeWidth={3} />
            Oferta Exclusiva Black Friday
          </div>

          <h1 className="text-4xl md:text-7xl font-black italic leading-none mb-6 tracking-tight uppercase">
            Black Friday R5 + <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-[#99cc00]">
              Emagrecimento Inteligente
            </span>
          </h1>

          <p className="text-xl md:text-2xl font-bold text-gray-200 mb-8 max-w-3xl mx-auto border-l-4 border-[#CCFF00] pl-4 md:border-none md:pl-0">
            "7 dias mudam o corpo,{" "}
            <span className="text-[#CCFF00]">30 dias mudam o hábito.</span>"
          </p>

          <p className="text-gray-400 text-sm md:text-base font-medium max-w-2xl mx-auto mb-8">
            E pela primeira vez, eu uni os dois métodos que mais transformam
            meus pacientes em uma única oferta imperdível.
          </p>
        </div>

        {/* --- VÍDEO "HIGH PERFORMANCE" (Conceito Anterior) --- */}
        <div className="relative w-full max-w-[900px] aspect-video mb-16 group">
          {/* Speed Lines (Conceito que você gostou) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
            <div className="hidden lg:flex absolute top-[20%] left-[-10%] w-[60%] h-[2px] bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent transform -rotate-[15deg] opacity-60 blur-[1px]"></div>
            <div className="hidden lg:flex absolute bottom-[20%] right-[-10%] w-[60%] h-[2px] bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent transform -rotate-[15deg] opacity-60 blur-[1px]"></div>
          </div>

          {/* Container do Vídeo */}
          <div className="relative z-10 w-full h-full bg-black rounded-2xl overflow-hidden border border-[#333] shadow-[0_0_60px_rgba(204,255,0,0.15)] group-hover:border-[#CCFF00]/50 transition duration-500">
            {/* Overlay Invisível (Bloqueia cliques no YouTube) */}
            <div className="absolute inset-0 z-20 bg-transparent"></div>

            {/* Botão de Som */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="absolute bottom-6 right-6 z-30 bg-black/80 text-white border border-white/20 p-3 rounded-full backdrop-blur-md hover:scale-110 transition active:scale-95 group/btn"
            >
              {isMuted ? (
                <VolumeX size={20} className="text-gray-400" />
              ) : (
                <Volume2 size={20} className="text-[#CCFF00]" />
              )}
              <span className="absolute right-full mr-2 bg-black/80 text-xs font-bold px-2 py-1 rounded text-white opacity-0 group-hover/btn:opacity-100 transition whitespace-nowrap pointer-events-none">
                {isMuted ? "Ativar Som" : "Mudo"}
              </span>
            </button>

            {/* Instrução de Som (Desaparece ao desmutar) */}
            {isMuted && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none bg-black/60 px-4 py-2 rounded-lg backdrop-blur text-center animate-pulse border border-[#CCFF00]/30">
                <p className="text-[#CCFF00] font-bold uppercase text-[10px] tracking-widest">
                  TOQUE PARA OUVIR
                </p>
              </div>
            )}

            <iframe
              width="100%"
              height="100%"
              src={youtubeUrl}
              title="Video Background"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full scale-[1.35] pointer-events-none"
            ></iframe>
          </div>
        </div>

        {/* --- CTA PRINCIPAL --- */}
        <div className="w-full max-w-md mx-auto mb-20 text-center">
          <button className="w-full bg-[#CCFF00] hover:bg-[#b3e600] text-black font-black text-lg py-4 rounded-xl shadow-[0_0_30px_rgba(204,255,0,0.4)] transition transform hover:scale-105 uppercase tracking-wide flex items-center justify-center gap-2 group">
            <span>Quero Minha Vaga no Grupo VIP</span>
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition"
            />
          </button>
          <p className="text-gray-500 text-xs mt-4 font-medium uppercase tracking-wider flex justify-center items-center gap-2">
            <Lock size={12} /> Acesso Imediato ao PDF após compra
          </p>
        </div>

        {/* --- SEÇÃO "O QUE VOCÊ VAI RECEBER" (CARDS GRID) --- */}
        <div className="w-full max-w-6xl relative mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase italic">
              O que você vai{" "}
              <span className="text-[#CCFF00]">receber hoje:</span>
            </h2>
            <div className="w-20 h-1 bg-[#CCFF00] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 relative">
            {/* Conector Central (Desktop) */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-black border border-[#CCFF00] text-[#CCFF00] w-12 h-12 rounded-full items-center justify-center font-black text-xl shadow-[0_0_20px_rgba(204,255,0,0.5)]">
              +
            </div>

            {/* Card 1: R5 (Protocolo de 7 Dias) */}
            <div className="bg-[#111] rounded-2xl p-1 border border-white/10 hover:border-[#CCFF00]/50 transition duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

              <div className="bg-[#0a0a0a] h-full rounded-xl p-8 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <R5Icon />
                  <div>
                    <span className="text-xs font-black text-[#CCFF00] bg-[#CCFF00]/10 px-2 py-1 rounded uppercase">
                      Fase 01
                    </span>
                    <h3 className="text-xl font-bold text-white uppercase italic">
                      Protocolo R5
                    </h3>
                  </div>
                </div>

                <p className="text-gray-300 text-sm font-bold mb-6 border-l-2 border-[#CCFF00] pl-3">
                  O método criado para te entregar{" "}
                  <span className="text-white">IMPACTO IMEDIATO:</span>
                </p>

                <ul className="space-y-3">
                  {[
                    "Até 5kg de retenção eliminados",
                    "Desincha rápido",
                    "Afina o rosto",
                    "Destrava o corpo",
                    "Eleva a autoestima",
                    "Dá o primeiro resultado visível",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-gray-400"
                    >
                      <CheckCircle
                        size={16}
                        className="text-[#CCFF00] shrink-0 mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2: Emagrecimento Inteligente (30 Dias) */}
            <div className="bg-[#111] rounded-2xl p-1 border border-white/10 hover:border-[#CCFF00]/50 transition duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-bl from-[#CCFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

              <div className="bg-[#0a0a0a] h-full rounded-xl p-8 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <EIIcon />
                  <div>
                    <span className="text-xs font-black text-white bg-gray-800 px-2 py-1 rounded uppercase">
                      Fase 02
                    </span>
                    <h3 className="text-xl font-bold text-white uppercase italic">
                      Método EI (30 Dias)
                    </h3>
                  </div>
                </div>

                <p className="text-gray-300 text-sm font-bold mb-6 border-l-2 border-gray-600 pl-3">
                  O que mantém o seu resultado de forma{" "}
                  <span className="text-white">LEVE E INTELIGENTE:</span>
                </p>

                <ul className="space-y-3">
                  {[
                    "Estratégia 80/20 real",
                    "Comer de tudo com consciência",
                    "Zero extremismo",
                    "Constância sem sofrimento",
                    "Alimentação prática",
                    "Construção de hábito sólido",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-gray-400"
                    >
                      <Shield
                        size={16}
                        className="text-white shrink-0 mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* --- RESULTADOS REAIS (CARROSSEL MOBILE FRIENDLY) --- */}
        <div className="w-full max-w-4xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase italic">
              Resultados <span className="text-[#CCFF00]">Reais</span>
            </h2>
          </div>

          {/* Container Carrossel */}
          <div className="relative bg-[#111] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="relative h-[500px] md:h-[400px]">
              {/* Slide Atual */}
              <div className="absolute inset-0 flex flex-col md:flex-row transition-all duration-500">
                {/* Imagem do Slide */}
                <div className="h-1/2 md:h-full md:w-1/2 relative">
                  <img
                    src={testimonials[currentSlide].img}
                    alt="Antes e Depois"
                    className="w-full h-full object-cover grayscale contrast-125"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#111] to-transparent p-4">
                    <div className="inline-block bg-[#CCFF00] text-black font-black text-xs px-2 py-1 rounded uppercase shadow-lg">
                      {testimonials[currentSlide].desc}
                    </div>
                  </div>
                </div>

                {/* Texto do Slide */}
                <div className="h-1/2 md:h-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center bg-[#111] relative">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        size={16}
                        className="text-[#CCFF00] fill-[#CCFF00]"
                      />
                    ))}
                  </div>

                  <div className="mb-6 relative">
                    <Quote
                      size={24}
                      className="text-white/10 absolute -top-3 -left-2 transform -scale-x-100"
                    />
                    <p className="text-gray-300 text-sm md:text-base italic leading-relaxed relative z-10">
                      "{testimonials[currentSlide].text}"
                    </p>
                  </div>

                  <div>
                    <p className="text-white font-bold uppercase">
                      {testimonials[currentSlide].name}
                    </p>
                    <p className="text-[#CCFF00] text-xs font-bold uppercase tracking-widest mt-1">
                      Aluno Verificado
                    </p>
                  </div>
                </div>
              </div>

              {/* Botões de Navegação */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-black/50 hover:bg-[#CCFF00] hover:text-black text-white p-2 rounded-full backdrop-blur-sm transition border border-white/10 z-20"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-black/50 hover:bg-[#CCFF00] hover:text-black text-white p-2 rounded-full backdrop-blur-sm transition border border-white/10 z-20"
              >
                <ChevronRight size={24} />
              </button>

              {/* Indicadores (Dots) */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 md:left-3/4">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === idx ? "bg-[#CCFF00] w-6" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* --- POR QUE OS DOIS JUNTOS? (COM FOTO DO PROFISSIONAL) --- */}
        <div className="w-full max-w-6xl mx-auto mb-24">
          <div className="bg-[#111] border border-[#333] rounded-[2.5rem] overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5"></div>

            <div className="flex flex-col lg:flex-row">
              {/* Coluna Imagem (Mobile: Topo, Desktop: Esquerda) */}
              <div className="lg:w-2/5 relative h-[400px] lg:h-auto">
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black via-transparent to-transparent z-10 opacity-80"></div>
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866572_1280.jpg"
                  alt="Danillo Freitas"
                  className="w-full h-full object-cover object-top lg:object-center grayscale contrast-125"
                />
                <div className="absolute bottom-4 left-4 z-20 lg:hidden">
                  <p className="text-[#CCFF00] font-black text-xl italic">
                    Danillo Freitas
                  </p>
                </div>
              </div>

              {/* Coluna Texto */}
              <div className="lg:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10 bg-gradient-to-b from-transparent to-black lg:to-transparent">
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic mb-8 leading-none">
                  Por que os{" "}
                  <span className="text-[#CCFF00] inline-block border-b-4 border-[#CCFF00]">
                    dois juntos?
                  </span>
                </h2>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#CCFF00] text-black p-3 rounded-full mt-1 shadow-[0_0_20px_rgba(204,255,0,0.3)]">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h4 className="text-[#CCFF00] font-black text-lg uppercase mb-1">
                        Porque um ativa.
                      </h4>
                      <p className="text-gray-400 text-sm md:text-base">
                        O <strong className="text-white">R5</strong> destrava o
                        seu corpo e mostra o primeiro resultado visível em tempo
                        recorde.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white text-black p-3 rounded-full mt-1 shadow-lg">
                      <Shield size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-black text-lg uppercase mb-1">
                        E o outro sustenta.
                      </h4>
                      <p className="text-gray-400 text-sm md:text-base">
                        O <strong className="text-white">EI</strong> mantém o
                        resultado, aprofunda a estratégia e cria a constância
                        necessária.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#CCFF00]/10 border border-[#CCFF00]/30 p-4 rounded-xl">
                  <p className="text-[#CCFF00] font-bold text-xs md:text-sm uppercase tracking-widest flex items-center gap-2">
                    <CheckCircle size={16} />
                    {">>>"} A jornada completa de quem quer emagrecer de
                    verdade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* --- OFERTA VIP (PREÇOS) --- */}
        <div className="w-full max-w-3xl mx-auto mb-24 relative">
          <div className="bg-[#050505] border-2 border-[#CCFF00] rounded-3xl p-8 md:p-10 relative z-10 text-center shadow-[0_0_50px_rgba(204,255,0,0.1)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#CCFF00] text-black font-black text-xs md:text-sm px-6 py-2 rounded-full uppercase tracking-widest shadow-lg whitespace-nowrap">
              Oferta VIP Black Friday • 50% OFF
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-400 uppercase tracking-widest mb-8 mt-4">
              Valores Oficiais
            </h3>

            <div className="flex justify-center items-center gap-8 mb-8 opacity-50 grayscale">
              <div className="text-center">
                <p className="text-sm font-bold">R5</p>
                <p className="text-xl md:text-2xl font-black line-through text-red-500 decoration-white">
                  R$ 67
                </p>
              </div>
              <div className="text-xl font-bold text-white">+</div>
              <div className="text-center">
                <p className="text-sm font-bold">EI</p>
                <p className="text-xl md:text-2xl font-black line-through text-red-500 decoration-white">
                  R$ 247
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-white/10 mb-8"></div>

            <div className="mb-6">
              <p className="text-gray-300 text-xs uppercase font-bold tracking-widest mb-2">
                Combo R5 + EI por apenas:
              </p>
              <div className="flex items-center justify-center gap-2 text-white">
                <span className="text-2xl font-bold mb-4 text-gray-500">
                  R$
                </span>
                <span className="text-8xl md:text-9xl font-black italic tracking-tighter text-[#CCFF00]">
                  157
                </span>
              </div>
            </div>

            <button className="w-full bg-[#CCFF00] hover:bg-[#bbe600] text-black font-black text-xl py-5 rounded-xl shadow-lg transition transform hover:scale-105 uppercase italic mb-6 flex items-center justify-center gap-3 animate-pulse-slow">
              COMPRE AGORA <ArrowRight size={24} strokeWidth={3} />
            </button>

            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
              Somente até 28/11 • Vagas Limitadas
            </p>
          </div>
        </div>

        {/* --- GALERIA DO PROFISSIONAL --- */}
        <div className="w-full max-w-6xl mx-auto mb-20">
          <div className="flex items-center gap-3 mb-8 px-4">
            <Camera className="text-[#CCFF00]" size={24} />
            <h2 className="text-2xl font-black text-white uppercase italic">
              Quem é <span className="text-[#CCFF00]">Danillo Freitas?</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px] md:h-[300px]">
            <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl border border-white/10">
              <img
                src="https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700 grayscale group-hover:grayscale-0"
                alt="Treino"
              />
              <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
                <p className="text-[#CCFF00] font-black text-lg uppercase italic">
                  Especialista
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl border border-white/10">
              <img
                src="https://cdn.pixabay.com/photo/2020/05/25/07/35/gym-5216934_1280.jpg"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-80 group-hover:opacity-100"
                alt="Atendimento"
              />
            </div>
            <div className="relative group overflow-hidden rounded-2xl border border-white/10">
              <img
                src="https://cdn.pixabay.com/photo/2018/06/27/07/45/student-3500990_1280.jpg"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-80 group-hover:opacity-100"
                alt="Palestra"
              />
            </div>
            <div className="col-span-2 relative group overflow-hidden rounded-2xl bg-[#111] flex flex-col justify-center items-center p-6 border border-[#CCFF00]/20">
              <h3 className="text-3xl font-black text-white italic">+5.000</h3>
              <p className="text-gray-400 text-xs uppercase tracking-widest text-center">
                Vidas Transformadas
              </p>
            </div>
          </div>
        </div>

        {/* --- FOOTER PERFIL --- */}
        <div className="border-t border-white/10 w-full max-w-4xl pt-10 flex flex-col md:flex-row items-center gap-6 justify-center md:justify-start">
          <div className="relative">
            <div className="w-20 h-20 rounded-full p-[2px] bg-gradient-to-br from-[#CCFF00] to-[#88aa00]">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866572_1280.jpg"
                className="w-full h-full rounded-full border-2 border-black object-cover grayscale"
                alt="Danillo Freitas"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-black text-[#CCFF00] p-1.5 rounded-full border border-[#CCFF00]">
              <CheckCircle size={14} />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold text-xl">Danillo Freitas</h4>
            <p className="text-gray-500 text-sm">
              Nutrição Esportiva •{" "}
              <span className="text-[#CCFF00]">Especialista em Resultado</span>
            </p>
          </div>
          <div className="md:ml-auto text-center md:text-right">
            <button className="text-[#CCFF00] font-bold text-sm hover:underline flex items-center justify-center md:justify-end gap-1">
              LINK NA BIO DO INSTAGRAM <ArrowRight size={14} />
            </button>
            <p className="text-[10px] text-gray-600 mt-1 uppercase tracking-widest">
              © Black Friday 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
