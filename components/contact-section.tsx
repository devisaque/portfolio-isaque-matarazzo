"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Mail, ExternalLink } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/DevIsaque",
    username: "@DevIsaque",
    color: "#ED3257",
    description: "Confira meus repositórios e projetos",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/isaque-matarazzo-808891349?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    username: "Isaque Matarazzo",
    color: "#3261ED",
    description: "Conecte-se comigo profissionalmente",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/_zaquee?igsh=MWduaTV6NDRhM3RndQ==",
    username: "@_zaquee",
    color: "#3E32ED",
    description: "Acompanhe meu dia a dia",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:devmatarazzo@gmail.com",
    username: "devmatarazzo@gmail.com",
    color: "#61F07A",
    description: "Entre em contato por email",
  },
]

export default function ContactSection() {
  return (
    <section className="relative px-4 py-16 sm:px-6 md:px-12 md:py-20 lg:px-24" id="contact">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-12"
        >
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Vamos <span className="text-[#ED3257]">Conectar</span>?
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-400 sm:text-base">
            Estou sempre aberto a novas oportunidades e conversas interessantes.
            Sinta-se à vontade para entrar em contato!
          </p>
        </motion.div>

        <div className="grid gap-3 grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/[0.05] sm:gap-4 sm:rounded-2xl sm:p-6"
            >
              {/* Icon */}
              <div 
                className="flex h-10 w-10 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-xl"
                style={{ backgroundColor: `${link.color}15` }}
              >
                <link.icon className="h-5 w-5 sm:h-7 sm:w-7" style={{ color: link.color }} />
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="mb-1 text-sm font-semibold text-white sm:text-base">{link.name}</h3>
                <p className="mb-1 text-[10px] text-gray-500 sm:mb-2 sm:text-sm truncate max-w-full">{link.username}</p>
                <p className="hidden text-xs text-gray-600 sm:block">{link.description}</p>
              </div>

              {/* Hover indicator */}
              <div className="flex items-center gap-1 text-[10px] text-gray-500 opacity-0 transition-all duration-300 group-hover:opacity-100 sm:text-xs">
                <span>Acessar</span>
                <ExternalLink className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
              </div>

              {/* Glow effect */}
              <div 
                className="absolute inset-0 -z-10 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:rounded-2xl"
                style={{ boxShadow: `0 0 60px ${link.color}15` }}
              />

              {/* Top border accent */}
              <div 
                className="absolute left-1/2 top-0 h-0.5 w-0 -translate-x-1/2 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: link.color }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
