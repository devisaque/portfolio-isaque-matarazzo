"use client"

import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative px-4 py-16 sm:px-6 md:px-12 md:py-20 lg:px-24">
      <div className="mx-auto max-w-6xl">
        {/* Header badge - centralizado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#3E32ED]/50 bg-[#3E32ED]/10 px-4 py-1.5 text-xs sm:text-sm text-[#3E32ED]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#61F07A]" />
            Disponível para projetos
          </span>
        </motion.div>

        {/* Introduction text - centralizado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl text-balance">
            Olá, eu sou{" "}
            <span className="bg-gradient-to-r from-[#ED3257] via-[#3E32ED] to-[#3261ED] bg-clip-text text-transparent">
              Isaque Matarazzo
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl text-pretty">
            Sou um <span className="text-[#61F07A]">desenvolvedor apaixonado por tecnologia</span>, 
            sempre em busca de transformar ideias em soluções digitais inovadoras. 
            Minha jornada na programação começou pela curiosidade e se tornou uma verdadeira paixão. 
            Acredito que a tecnologia tem o poder de <span className="text-[#3261ED]">mudar o mundo</span>, 
            e quero fazer parte dessa revolução criando experiências digitais que impactam positivamente a vida das pessoas.
          </p>
        </motion.div>

        {/* Personal info cards in flexbox - centralizado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          <InfoCard label="Nome" value="Isaque Matarazzo" color="#ED3257" />
          <InfoCard label="Idade" value="19 anos" color="#61F07A" />
          <InfoCard label="Curso" value="Ciências da Computação" color="#3261ED" />
          <InfoCard label="Semestre" value="Terceiro" color="#3E32ED" />
          <InfoCard label="Faculdade" value="Unip Sorocaba" color="#ED3257" />
        </motion.div>
      </div>
    </section>
  )
}

function InfoCard({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.05] p-3 sm:p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08] w-[calc(50%-0.375rem)] sm:w-auto sm:min-w-[140px]"
      style={{ 
        borderLeftColor: color, 
        borderLeftWidth: '3px',
        boxShadow: `0 0 20px ${color}15, inset 0 0 20px ${color}05`
      }}
    >
      <p className="text-[10px] sm:text-xs font-medium uppercase tracking-wider" style={{ color }}>{label}</p>
      <p className="mt-1 text-sm sm:text-lg font-semibold text-white">{value}</p>
      <div 
        className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(circle at center, ${color}20 0%, transparent 70%)` }}
      />
    </div>
  )
}
