"use client";
import React, { useState, useEffect } from "react";
import {
  Zap,
  CheckCircle,
  Shield,
  ArrowRight,
  Flame,
  Lock,
  AlertTriangle,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Activity,
  Camera,
} from "lucide-react";

// --- TIPAGEM ---
interface Testimonial {
  name: string;
  desc: string;
  time: string;
  img: string;
}

// --- DADOS ---
const testimonials: Testimonial[] = [
  {
    name: "Rafael M.",
    desc: "-12kg",
    time: "90 DIAS",
    img: "https://i.postimg.cc/0rgtCcPb/1Artboard-1-1.png",
  },
  {
    name: "Marcos Lima",
    desc: "-8kg",
    time: "30 DIAS",
    img: "https://i.postimg.cc/GtT7YZwR/1Artboard-1-10.png",
  },
  {
    name: "Carla Souza",
    desc: "-6kg",
    time: "21 DIAS",
    img: "https://i.postimg.cc/SRYT8w0H/1Artboard-1-11.png",
  },
  {
    name: "André Silva",
    desc: "-15kg",
    time: "4 MESES",
    img: "https://i.postimg.cc/W3HYdsK2/1Artboard-1-12.png",
  },
  {
    name: "Juliana Costa",
    desc: "-5kg",
    time: "15 DIAS",
    img: "https://i.postimg.cc/x8NxHWrh/1Artboard-1-13.png",
  },
  {
    name: "Pedro Henrique",
    desc: "Definição",
    time: "60 DIAS",
    img: "https://i.postimg.cc/4dS2YXMG/1Artboard-1-14.png",
  },
  {
    name: "Lucas Fernandes",
    desc: "-10kg",
    time: "3 MESES",
    img: "https://i.postimg.cc/4nC81BsY/1Artboard-1-2.png",
  },
  {
    name: "Mariana Alves",
    desc: "-7kg",
    time: "45 DIAS",
    img: "https://i.postimg.cc/j2ngNG0f/1Artboard-1-3.png",
  },
  {
    name: "Gustavo Rocha",
    desc: "-11kg",
    time: "3 MESES",
    img: "https://i.postimg.cc/0jKWmLRw/1Artboard-1-4.png",
  },
  {
    name: "Fernanda Lima",
    desc: "-4kg",
    time: "20 DIAS",
    img: "https://i.postimg.cc/Kj3qLdS3/1Artboard-1-5.png",
  },
  {
    name: "Rodrigo Santos",
    desc: "-9kg",
    time: "60 DIAS",
    img: "https://i.postimg.cc/kGR18k36/1Artboard-1-6.png",
  },
  {
    name: "Patrícia Gomes",
    desc: "-6kg",
    time: "30 DIAS",
    img: "https://i.postimg.cc/NF2JTWqG/1Artboard-1-7.png",
  },
  {
    name: "Thiago Oliveira",
    desc: "-13kg",
    time: "4 MESES",
    img: "https://i.postimg.cc/cCt9YVyx/1Artboard-1-8.png",
  },
  {
    name: "Camila Martins",
    desc: "-5.5kg",
    time: "25 DIAS",
    img: "https://i.postimg.cc/Kj3qLdSx/1Artboard-1-9.png",
  },
  {
    name: "Bruno Costa",
    desc: "-8.5kg",
    time: "50 DIAS",
    img: "https://i.postimg.cc/cHbkvdjq/AA1Artboard-1.png",
  },
  {
    name: "Aline Ferreira",
    desc: "-4kg",
    time: "15 DIAS",
    img: "https://i.postimg.cc/k4pY27Z3/Untitled-1Artboard-1-1.png",
  },
  {
    name: "Ricardo Mendes",
    desc: "-10kg",
    time: "90 DIAS",
    img: "https://i.postimg.cc/ydbpD7G2/Untitled-1Artboard-1-2.png",
  },
  {
    name: "Beatriz Silva",
    desc: "-7kg",
    time: "40 DIAS",
    img: "https://i.postimg.cc/cHbkvdzp/Untitled-1Artboard-1-3.png",
  },
];

// --- IMAGENS DE FUNDO (Background Dinâmico) ---
const backgroundImages: string[] = [
  "https://i.postimg.cc/m2LQfYqq/danillo-Freitas.jpg",
  "https://i.postimg.cc/ncFvb456/danillo-Freitas.jpg",
  "https://i.postimg.cc/HsYQDwR1/danillo-Freitas.jpg",
  "https://i.postimg.cc/Qx8pGQwr/danillo-Freitas.jpg",
  "https://i.postimg.cc/hPD9WL6B/danillo-Freitas.jpg",
  "https://i.postimg.cc/NfdRgyqP/danillo-Freitas.jpg",
  "https://i.postimg.cc/280nzqRJ/danillo-Freitas.jpg",
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

export default function App() {
  const [isMuted, setIsMuted] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  // Estados para Swipe (Toque)
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);

  // Controle do Background Automático (Tempo)
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Funções de navegação (definidas antes do useEffect que as usa)
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);

  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  // Carrossel Depoimentos Automático
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(timer);
  }, [currentSlide]); // Dependência necessária para o reset do timer funcionar ao trocar slide manualmente

  // Lógica de Swipe corrigida com Tipagem
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  const getSlideStyles = (index: number) => {
    if (index === currentSlide) {
      // Card Central
      return "z-20 scale-100 opacity-100 translate-x-0 brightness-110 shadow-[0_20px_60px_-10px_rgba(204,255,0,0.3)] border-[#CCFF00]";
    }

    const prevIndex =
      (currentSlide - 1 + testimonials.length) % testimonials.length;
    const nextIndex = (currentSlide + 1) % testimonials.length;

    // Cards Laterais
    if (index === prevIndex) {
      return "z-10 scale-[0.85] opacity-50 -translate-x-[70%] md:-translate-x-[120%] brightness-50 border-transparent grayscale rotate-y-12";
    }
    if (index === nextIndex) {
      return "z-10 scale-[0.85] opacity-50 translate-x-[70%] md:translate-x-[120%] brightness-50 border-transparent grayscale -rotate-y-12";
    }
    return "hidden";
  };

  // CONFIGURAÇÃO DO VÍDEO
  const videoId = "64oUdi5kpZg";
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${
    isMuted ? 1 : 0
  }&controls=0&loop=1&playlist=${videoId}&showinfo=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1`;

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-[#CCFF00] selection:text-black">
      {/* --- BACKGROUND DINÂMICO --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 z-20 mix-blend-overlay"></div>
        {backgroundImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Background ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
              index === bgIndex ? "opacity-40" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/50 to-[#050505] z-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#CCFF00]/10 rounded-full blur-[150px] z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#CCFF00]/5 rounded-full blur-[120px] z-10"></div>
      </div>

      <div className="bg-[#CCFF00] text-black font-black text-xs md:text-sm text-center py-2 uppercase tracking-widest sticky top-0 z-50 shadow-[0_0_20px_rgba(204,255,0,0.5)] flex justify-center items-center gap-2 animate-fade-in-down">
        <AlertTriangle size={16} strokeWidth={3} />
        Somente até 28/11 • Vagas Limitadas
      </div>

      {/* --- NAV BAR --- */}
      <div className="absolute top-10 left-0 w-full z-40 px-4 md:px-8 flex justify-between items-start">
        <div className="flex flex-col">
          <h2 className="text-2xl md:text-3xl font-black italic tracking-tighter text-white leading-none drop-shadow-lg">
            DANILLO<span className="text-[#CCFF00]">FREITAS</span>
          </h2>
          <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-[0.3em] mt-1 ml-0.5 border-l-2 border-[#CCFF00] pl-2 shadow-black">
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

      <div className="relative z-30 container mx-auto px-4 pt-24 pb-24 flex flex-col items-center">
        {/* --- HERO HEADER --- */}
        <div className="text-center mb-10 relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#CCFF00] text-black text-[11px] font-black uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(204,255,0,0.3)] animate-pulse">
            <AlertTriangle size={12} strokeWidth={3} />
            Oferta Exclusiva Black Friday
          </div>

          <h1 className="text-4xl md:text-7xl font-black italic leading-none mb-6 tracking-tight uppercase drop-shadow-2xl">
            Black Friday R5 + <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-[#99cc00] drop-shadow-[0_0_10px_rgba(204,255,0,0.3)]">
              Emagrecimento Inteligente
            </span>
          </h1>

          <p className="text-xl md:text-2xl font-bold text-gray-200 mb-8 max-w-3xl mx-auto border-l-4 border-[#CCFF00] pl-4 md:border-none md:pl-0 drop-shadow-md">
            &quot;7 dias mudam o corpo,{" "}
            <span className="text-[#CCFF00]">30 dias mudam o hábito.</span>
            &quot;
          </p>

          <p className="text-gray-300 text-sm md:text-base font-medium max-w-2xl mx-auto mb-8 drop-shadow-md">
            E pela primeira vez, eu uni os dois métodos que mais transformam
            meus pacientes em uma única oferta imperdível.
          </p>
        </div>

        {/* --- VÍDEO "HIGH PERFORMANCE" --- */}
        <div className="relative w-full max-w-[900px] aspect-video mb-16 group">
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
            <div className="hidden lg:flex absolute top-[20%] left-[-10%] w-[60%] h-[2px] bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent transform -rotate-[15deg] opacity-60 blur-[1px]"></div>
            <div className="hidden lg:flex absolute bottom-[20%] right-[-10%] w-[60%] h-[2px] bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent transform -rotate-[15deg] opacity-60 blur-[1px]"></div>
          </div>

          <div className="relative z-10 w-full h-full bg-black rounded-2xl overflow-hidden border border-[#333] shadow-[0_0_60px_rgba(204,255,0,0.15)] group-hover:border-[#CCFF00]/50 transition duration-500">
            <div className="absolute inset-0 z-20 bg-transparent"></div>

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
          <p className="text-gray-400 text-xs mt-4 font-medium uppercase tracking-wider flex justify-center items-center gap-2 drop-shadow-md">
            <Lock size={12} /> Acesso Imediato ao PDF após compra
          </p>
        </div>

        {/* --- SEÇÃO "O QUE VOCÊ VAI RECEBER" (CARDS GRID) --- */}
        <div className="w-full max-w-6xl relative mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase italic drop-shadow-lg">
              O que você vai{" "}
              <span className="text-[#CCFF00]">receber hoje:</span>
            </h2>
            <div className="w-20 h-1 bg-[#CCFF00] mx-auto mt-4 rounded-full shadow-[0_0_10px_#CCFF00]"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 relative">
            {/* Conector Central (Desktop) */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-black border border-[#CCFF00] text-[#CCFF00] w-12 h-12 rounded-full items-center justify-center font-black text-xl shadow-[0_0_20px_rgba(204,255,0,0.5)]">
              +
            </div>

            {/* Card 1: R5 (Protocolo de 7 Dias) */}
            <div className="bg-[#111]/90 backdrop-blur-sm rounded-2xl p-1 border border-white/10 hover:border-[#CCFF00]/50 transition duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

              <div className="bg-[#0a0a0a]/90 h-full rounded-xl p-8 relative z-10">
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
            <div className="bg-[#111]/90 backdrop-blur-sm rounded-2xl p-1 border border-white/10 hover:border-[#CCFF00]/50 transition duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-bl from-[#CCFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

              <div className="bg-[#0a0a0a]/90 h-full rounded-xl p-8 relative z-10">
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

        {/* --- CARROSSEL VERTICAL (PARA ARTES 1080x1350) --- */}
        <div className="w-full max-w-7xl mx-auto mb-24 px-0 md:px-4 overflow-hidden">
          <div className="text-center mb-10 px-4">
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase italic drop-shadow-lg">
              Resultados <span className="text-[#CCFF00]">Comprovados</span>
            </h2>
            <p className="text-gray-400 text-xs mt-2">
              Deslize para ver as transformações
            </p>
          </div>

          <div
            className="relative h-[650px] md:h-[700px] flex items-center justify-center perspective-1000"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {testimonials.map((item, index) => {
              const styleClass = getSlideStyles(index);
              return (
                <div
                  key={index}
                  className={`absolute top-0 w-[90%] md:w-[450px] h-[90%] md:h-[600px] transition-all duration-700 ease-in-out rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a] ${styleClass}`}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Container da Imagem Vertical (Preenche tudo) */}
                  <div className="w-full h-full relative">
                    <img
                      src={item.img}
                      alt="Resultado"
                      className="w-full h-full object-cover"
                    />

                    {/* Gradiente sutil na base */}
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                  </div>
                </div>
              );
            })}

            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-1/4 top-1/2 -translate-y-1/2 z-30 bg-black/50 text-white p-3 rounded-full border border-[#CCFF00]/30 hover:bg-[#CCFF00] hover:text-black transition shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-1/4 top-1/2 -translate-y-1/2 z-30 bg-black/50 text-white p-3 rounded-full border border-[#CCFF00]/30 hover:bg-[#CCFF00] hover:text-black transition shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide
                      ? "w-8 bg-[#CCFF00]"
                      : "w-2 bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* --- POR QUE OS DOIS JUNTOS? (POP-OUT CARD) --- */}
        <div className="w-full max-w-7xl mx-auto relative mt-20 mb-48 px-4">
          {/* CONTAINER PRETO */}
          <div className="bg-[#111] border border-white/10 rounded-[3rem] relative overflow-visible shadow-2xl">
            {/* Background com Textura */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 rounded-[3rem]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent rounded-[3rem]"></div>

            <div className="flex flex-col lg:flex-row items-center relative ">
              {/* LADO ESQUERDO: TEXTO */}
              <div className="lg:w-3/5 p-8 md:p-16 lg:py-20 lg:pl-20 z-1">
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic mb-8 leading-none">
                  A{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-white">
                    Fusão
                  </span>{" "}
                  <br />
                  Perfeita.
                </h2>

                <div className="space-y-10 max-w-xl z-15">
                  <div className="flex gap-5">
                    <div className="bg-[#CCFF00] text-black p-3 h-fit rounded-xl shadow-[0_0_20px_#CCFF00]">
                      <Zap size={24} fill="black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white uppercase italic mb-2">
                        R5: O Ativador
                      </h3>
                      <p className="text-gray-400 font-medium leading-relaxed">
                        Acelera seu metabolismo e provoca o{" "}
                        <strong className="text-white">
                          efeito desinchaço
                        </strong>{" "}
                        em apenas 7 dias.
                      </p>
                    </div>
                  </div>

                  <div className="w-full h-px bg-white/10"></div>

                  <div className="flex gap-5 ">
                    <div className="bg-white text-black p-3 h-fit rounded-xl">
                      <Shield size={24} fill="black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white uppercase italic mb-2">
                        EI: A Estratégia
                      </h3>
                      <p className="text-gray-400 font-medium leading-relaxed">
                        Ensina você a manter o peso perdido comendo o que gosta,
                        garantindo{" "}
                        <strong className="text-white">
                          resultado definitivo
                        </strong>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* LADO DIREITO: IMAGEM "SAINDO" DO CARD */}
              <div className="w-full lg:w-2/5 relative h-[500px] lg:h-auto flex justify-center lg:block">
                {/* HOLOFOTE ATRÁS DO PNG */}
                <div className="absolute top-1/2 left-1/2 lg:left-auto lg:right-20 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[300px] h-[300px] bg-[#CCFF00] blur-[120px] opacity-20 rounded-full pointer-events-none"></div>

                <img
                  src="https://i.postimg.cc/bNm1zGfp/FOTO-DANILLO-PNG.png"
                  alt="Danillo Freitas"
                  className="relative  scale-168 w-auto h-auto max-h-[500px] lg:max-h-[600px] xl:max-h-[700px] object-contain object-bottom drop-shadow-2xl mb-[-2px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* --- OFERTA VIP (PREÇOS) --- */}
        <div className="w-full max-w-3xl mx-auto mb-24 relative">
          <div className="bg-[#050505]/95 backdrop-blur border-2 border-[#CCFF00] rounded-3xl p-8 md:p-10 relative z-10 text-center shadow-[0_0_50px_rgba(204,255,0,0.1)]">
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

        {/* --- GALERIA DO PROFISSIONAL (MASONRY AUTO-ADAPT) --- */}
        <div className="w-full max-w-6xl mx-auto mb-20">
          <div className="flex items-center gap-3 mb-8 px-4">
            <Camera className="text-[#CCFF00]" size={24} />
            <h2 className="text-2xl font-black text-white uppercase italic drop-shadow-lg">
              Quem é <span className="text-[#CCFF00]">Danillo Freitas?</span>
            </h2>
          </div>

          {/* MASONRY LAYOUT */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {/* Imagem 1 */}
            <div className="break-inside-avoid relative group overflow-hidden rounded-2xl border border-white/10 mb-4">
              <img
                src="https://i.postimg.cc/ncFvb456/danillo-Freitas.jpg"
                className="w-full h-auto object-cover group-hover:scale-105 transition duration-700 grayscale group-hover:grayscale-0"
                alt="Performance"
              />
              <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
                <p className="text-[#CCFF00] font-black text-sm uppercase italic">
                  Performance
                </p>
              </div>
            </div>

            {/* Imagem 2 */}
            <div className="break-inside-avoid relative group overflow-hidden rounded-2xl border border-white/10 mb-4">
              <img
                src="https://i.postimg.cc/W3HYdsK2/1Artboard_1_12.png"
                className="w-full h-auto object-cover group-hover:scale-105 transition duration-700 opacity-80 group-hover:opacity-100"
                alt="Atendimento"
              />
            </div>

            {/* Card Stats */}
            <div className="break-inside-avoid relative group overflow-hidden rounded-2xl bg-[#111] flex flex-col justify-center items-center p-8 border border-[#CCFF00]/20 hover:border-[#CCFF00]/50 transition mb-4">
              <h3 className="text-4xl font-black text-white italic">+5.000</h3>
              <p className="text-gray-400 text-xs uppercase tracking-widest text-center mt-2">
                Vidas Transformadas
              </p>
            </div>

            {/* Imagem 3 */}
            <div className="break-inside-avoid relative group overflow-hidden rounded-2xl border border-white/10 mb-4">
              <img
                src="https://i.postimg.cc/HsYQDwR1/danillo-Freitas.jpg"
                className="w-full h-auto object-cover group-hover:scale-105 transition duration-700 opacity-80 group-hover:opacity-100"
                alt="Foco"
              />
              <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
                <p className="text-[#CCFF00] font-black text-sm uppercase italic">
                  Foco
                </p>
              </div>
            </div>

            {/* Imagem 4 */}
            <div className="break-inside-avoid relative group overflow-hidden rounded-2xl border border-white/10 mb-4">
              <img
                src="https://i.postimg.cc/hPD9WL6B/danilloFreitas.jpg"
                className="w-full h-auto object-cover group-hover:scale-105 transition duration-700 opacity-80 group-hover:opacity-100"
                alt="Palestra"
              />
              <div className="absolute top-2 right-2 bg-black/50 p-1 rounded-full backdrop-blur-sm">
                <Maximize2 size={14} className="text-white/80" />
              </div>
            </div>

            {/* Imagem 5 */}
            <div className="break-inside-avoid relative group overflow-hidden rounded-2xl border border-white/10 mb-4">
              <img
                src="https://i.postimg.cc/Qx8pGQwr/danilloFreitas.jpg"
                className="w-full h-auto object-cover group-hover:scale-105 transition duration-700 opacity-80 group-hover:opacity-100"
                alt="Estilo de Vida"
              />
            </div>

            {/* Imagem 6 */}
            <div className="break-inside-avoid relative group overflow-hidden rounded-2xl border border-white/10 mb-4">
              <img
                src="https://i.postimg.cc/280nzqRJ/danilloFreitas.jpg"
                className="w-full h-auto object-cover group-hover:scale-105 transition duration-700 opacity-80 group-hover:opacity-100"
                alt="Detalhe"
              />
            </div>

            {/* Imagem 7 */}
            <div className="break-inside-avoid relative group overflow-hidden rounded-2xl border border-white/10 mb-4">
              <img
                src="https://i.postimg.cc/ncFvb456/danilloFreitas.jpg"
                className="w-full h-auto object-cover group-hover:scale-105 transition duration-700 opacity-80 group-hover:opacity-100"
                alt="Equipe"
              />
              <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
                <p className="text-[#CCFF00] font-black text-sm uppercase italic">
                  Comunidade
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- FOOTER PERFIL --- */}
        <div className="border-t border-white/10 w-full max-w-4xl pt-10 flex flex-col md:flex-row items-center gap-6 justify-center md:justify-start">
          <div className="relative">
            <div className="w-20 h-20 rounded-full p-[2px] bg-gradient-to-br from-[#CCFF00] to-[#88aa00]">
              <img
                src="https://i.postimg.cc/J4pj1yCr/danillo_foto_2.png"
                className="object-top w-full h-full rounded-full border-2 border-black object-cover grayscale "
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
            <a
              href="https://www.instagram.com/danillofreitasoficial/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CCFF00] font-bold text-sm hover:underline flex items-center justify-center md:justify-end gap-1"
            >
              LINK NA BIO DO INSTAGRAM <ArrowRight size={14} />
            </a>
            <p className="text-[10px] text-gray-600 mt-1 uppercase tracking-widest">
              © Black Friday 2025
            </p>
          </div>
        </div>
      </div>

      {/* CSS para animação da barra de progresso */}
      <style>{`
        @keyframes progress {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}
