"use client";
import React, { useState } from "react";
import {
  Play,
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
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // ID do vídeo
  const videoId = "4xIhtz5hUMM";

  // CONFIGURAÇÃO DO VÍDEO:
  // autoplay=1: Inicia ao carregar o iframe
  // mute=0: Tenta iniciar COM som (funciona porque o usuário clicou antes)
  // controls=1: PERMITE pausar e controlar o volume
  // loop=1 & playlist=ID: Garante o loop ao final
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&loop=1&playlist=${videoId}&showinfo=0&modestbranding=1&rel=0&playsinline=1`;

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
      <div className="bg-[#CCFF00] text-black font-black text-xs md:text-sm text-center py-2 uppercase tracking-widest sticky top-0 z-50 shadow-[0_0_20px_rgba(204,255,0,0.5)] flex justify-center items-center gap-2">
        <AlertTriangle size={16} strokeWidth={3} />
        Somente até 28/11 • Vagas Limitadas
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-12 pb-24 flex flex-col items-center">
        {/* --- HEADER --- */}
        <div className="text-center mb-12 relative max-w-4xl mx-auto flex flex-col items-center">
          <div className="mb-6 opacity-80">
            <p className="text-white font-serif italic text-lg tracking-widest">
              Danillo Freitas
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-black italic leading-[0.9] mb-6 uppercase tracking-tighter drop-shadow-2xl">
            <span className="text-white">Black Friday</span>{" "}
            <span className="text-[#CCFF00]">R5 +</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-green-400">
              Emagrecimento Inteligente
            </span>
          </h1>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl mb-8 transform -rotate-1">
            <p className="text-lg md:text-2xl font-bold text-gray-100 uppercase italic">
              "7 dias mudam o corpo.{" "}
              <span className="text-[#CCFF00] border-b-4 border-[#CCFF00]">
                30 dias mudam o hábito.
              </span>
              "
            </p>
          </div>

          <p className="text-gray-400 text-sm md:text-base font-medium max-w-2xl mx-auto uppercase tracking-wide">
            E pela primeira vez, eu uni os dois métodos que mais transformam
            meus pacientes:
          </p>
        </div>

        {/* --- VÍDEO CINEMATOGRÁFICO --- */}
        <div className="relative w-full max-w-[900px] aspect-video mb-16 group">
          {/* Moldura Neon */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#CCFF00] to-green-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>

          <div className="relative z-10 w-full h-full bg-black rounded-xl overflow-hidden border-2 border-[#CCFF00]/30 shadow-2xl">
            {!isVideoPlaying ? (
              // CAPA DO VÍDEO (THUMBNAIL)
              <div
                className="w-full h-full relative cursor-pointer"
                onClick={() => setIsVideoPlaying(true)}
              >
                <img
                  src="https://img.youtube.com/vi/4xIhtz5hUMM/maxresdefault.jpg"
                  alt="Danillo Freitas Video Thumbnail"
                  className="w-full h-full object-cover opacity-60 scale-105 group-hover:scale-100 transition duration-1000 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>

                {/* Botão Play Neon Pulsante */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 md:w-28 md:h-28 relative flex items-center justify-center">
                    <div className="absolute inset-0 border-4 border-[#CCFF00]/40 rounded-full animate-ping"></div>
                    <div className="absolute inset-2 border-2 border-white/20 rounded-full animate-[spin_4s_linear_infinite_reverse]"></div>
                    <div className="w-16 h-16 bg-[#CCFF00] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(204,255,0,0.8)] hover:scale-110 transition duration-300">
                      <Play className="ml-1 text-black fill-black" size={32} />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-8 w-full text-center">
                  <p className="text-white font-bold uppercase tracking-widest text-sm animate-pulse">
                    Clique para assistir com áudio 🔊
                  </p>
                </div>
              </div>
            ) : (
              // PLAYER DO YOUTUBE (Carrega ao clicar)
              <iframe
                width="100%"
                height="100%"
                src={youtubeUrl}
                title="Danillo Freitas Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            )}
          </div>
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

        {/* --- NOVO: DEPOIMENTOS (PROVA SOCIAL) --- */}
        <div className="w-full max-w-6xl mx-auto mb-24 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white uppercase italic mb-2">
              Resultados <span className="text-[#CCFF00]">Reais</span>
            </h2>
            <div className="w-20 h-1 bg-[#CCFF00] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Carla Souza",
                result: "-4.5kg em 7 dias",
                text: "Eu não acreditava que era possível desinchar tanto em uma semana. O Protocolo R5 salvou meu vestido de casamento!",
                img: "https://cdn.pixabay.com/photo/2017/09/21/19/06/woman-2773007_1280.jpg",
              },
              {
                name: "Marcos Lima",
                result: "Mais energia e foco",
                text: "O método EI mudou minha relação com a comida. Parei de brigar com a balança e aprendi a comer.",
                img: "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
              },
              {
                name: "Ana Clara",
                result: "-8kg no total",
                text: "Já tinha tentado de tudo. A combinação do R5 para dar o start e o EI para manter foi perfeita.",
                img: "https://cdn.pixabay.com/photo/2018/01/01/01/56/yoga-3053488_1280.jpg",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-[#CCFF00]/30 transition group"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={14}
                      className="text-[#CCFF00] fill-[#CCFF00]"
                    />
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-6 italic relative z-10">
                  <Quote
                    size={24}
                    className="absolute -top-2 -left-2 text-white/10 -z-10 transform -scale-x-100"
                  />
                  "{item.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#CCFF00]"
                  />
                  <div>
                    <p className="font-bold text-white text-sm">{item.name}</p>
                    <p className="text-[#CCFF00] text-xs font-bold uppercase">
                      {item.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- NOVO: GALERIA DO PROFISSIONAL --- */}
        <div className="w-full max-w-6xl mx-auto mb-24">
          <div className="flex items-center gap-2 mb-8 px-4">
            <Camera className="text-[#CCFF00]" size={24} />
            <h2 className="text-2xl font-black text-white uppercase italic">
              Quem é <span className="text-[#CCFF00]">Danillo Freitas?</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px] md:h-[300px]">
            <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl">
              <img
                src="https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700 grayscale group-hover:grayscale-0"
                alt="Treino"
              />
              <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
                <p className="text-white font-bold text-lg">Especialista</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/22/22/24/adult-1850925_1280.jpg"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                alt="Consulta"
              />
            </div>
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_1280.jpg"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                alt="Resultado"
              />
            </div>
            <div className="col-span-2 relative group overflow-hidden rounded-2xl bg-[#111] flex flex-col justify-center items-center p-6 border border-[#CCFF00]/20">
              <h3 className="text-3xl font-black text-white italic">+5.000</h3>
              <p className="text-gray-400 text-sm uppercase tracking-widest text-center">
                Vidas Transformadas
              </p>
            </div>
          </div>
        </div>

        {/* --- POR QUE OS DOIS JUNTOS? --- */}
        <div className="w-full max-w-5xl mx-auto mb-24">
          <div className="bg-gradient-to-br from-[#111] to-black border border-[#333] rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden">
            {/* Fundo abstrato */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>

            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic mb-4 relative z-10">
              Por que os <span className="text-[#CCFF00]">dois juntos?</span>
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 relative z-10">
              <div className="bg-[#CCFF00] text-black font-black text-lg px-6 py-2 rounded-full transform -rotate-1">
                UM ATIVA.
              </div>
              <div className="text-2xl font-bold text-white">+</div>
              <div className="bg-white text-black font-black text-lg px-6 py-2 rounded-full transform rotate-1">
                O OUTRO SUSTENTA.
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10 relative z-10 text-left">
              <div className="bg-white/5 p-6 rounded-xl border-l-4 border-[#CCFF00]">
                <h4 className="font-bold text-[#CCFF00] mb-2 uppercase">
                  O Protocolo R5
                </h4>
                <p className="text-gray-300 text-sm">
                  Destrava o seu corpo e mostra o primeiro resultado visível em
                  tempo recorde.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border-l-4 border-white">
                <h4 className="font-bold text-white mb-2 uppercase">
                  O Método EI
                </h4>
                <p className="text-gray-300 text-sm">
                  Mantém o resultado, aprofunda a estratégia e cria a constância
                  necessária.
                </p>
              </div>
            </div>

            <p className="text-white font-bold text-sm md:text-lg uppercase tracking-widest relative z-10">
              {">"}
              {">"} Essa é a jornada completa de quem quer emagrecer de verdade.
            </p>
          </div>
        </div>

        {/* --- OFERTA VIP (PREÇOS) --- */}
        <div className="w-full max-w-4xl mx-auto mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-r from-[#CCFF00]/20 to-green-500/20 blur-3xl rounded-full opacity-50"></div>

          <div className="bg-[#050505] border-2 border-[#CCFF00] rounded-3xl p-8 md:p-12 relative z-10 text-center shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#CCFF00] text-black font-black text-sm px-6 py-2 rounded-full uppercase tracking-widest shadow-lg whitespace-nowrap animate-bounce">
              Oferta VIP Black Friday • 50% OFF
            </div>

            <h3 className="text-2xl font-bold text-gray-400 uppercase tracking-widest mb-8 mt-4">
              Valores Oficiais
            </h3>

            <div className="flex justify-center items-center gap-8 mb-8 opacity-50 grayscale">
              <div className="text-center">
                <p className="text-sm font-bold">R5</p>
                <p className="text-2xl font-black line-through text-red-500 decoration-white">
                  R$ 67
                </p>
              </div>
              <div className="text-xl font-bold text-white">+</div>
              <div className="text-center">
                <p className="text-sm font-bold">EI</p>
                <p className="text-2xl font-black line-through text-red-500 decoration-white">
                  R$ 247
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-white/10 mb-8"></div>

            <div className="mb-2">
              <p className="text-gray-300 text-sm uppercase font-bold tracking-widest mb-2">
                Combo R5 + EI por apenas:
              </p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl text-gray-400 font-bold mb-4">
                  R$
                </span>
                <span className="text-7xl md:text-9xl font-black text-white italic tracking-tighter">
                  157
                </span>
              </div>
            </div>

            <button className="w-full bg-[#CCFF00] hover:bg-[#bbe600] text-black font-black text-2xl py-6 rounded-xl shadow-[0_0_30px_rgba(204,255,0,0.5)] transition transform hover:scale-105 uppercase italic mb-6 animate-pulse-slow">
              COMPRE AGORA!
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

        {/* --- FOOTER PERFIL --- */}
        <div className="border-t border-white/10 w-full max-w-4xl pt-10 flex flex-col md:flex-row items-center gap-6 justify-center md:justify-start">
          <div className="relative group cursor-pointer">
            <div className="w-24 h-24 rounded-full p-[3px] bg-gradient-to-br from-[#CCFF00] to-green-600 group-hover:scale-105 transition">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866572_1280.jpg"
                className="w-full h-full rounded-full border-4 border-black object-cover grayscale group-hover:grayscale-0 transition duration-500"
                alt="Danillo Freitas"
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
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-[#CCFF00] font-bold text-sm px-6 py-3 rounded-full flex items-center gap-2 transition">
              <Instagram size={16} /> @DANILLOFREITAS
            </button>
            <p className="text-[9px] text-gray-600 mt-2 uppercase tracking-widest">
              © Black Friday 2025 • Danillo Freitas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
