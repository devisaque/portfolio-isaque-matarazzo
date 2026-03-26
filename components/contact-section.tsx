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
    url: "https://www.linkedin.com/in/isaque-matarazzo-808891349",
    username: "Isaque Matarazzo",
    color: "#3261ED",
    description: "Conecte-se comigo profissionalmente",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/_zaquee",
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
    <section className="relative px-6 py-20 md:px-12 lg:px-24" id="contact">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Vamos <span className="text-[#ED3257]">Conectar</span>?
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Estou sempre aberto a novas oportunidades e conversas interessantes.
            Sinta-se à vontade para entrar em contato!
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
              className="group relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/[0.05]"
            >
              {/* Icon */}
              <div 
                className="flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${link.color}15` }}
              >
                <link.icon className="h-7 w-7" style={{ color: link.color }} />
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="mb-1 font-semibold text-white">{link.name}</h3>
                <p className="mb-2 text-sm text-gray-500">{link.username}</p>
                <p className="text-xs text-gray-600">{link.description}</p>
              </div>

              {/* Hover indicator */}
              <div className="flex items-center gap-1 text-xs text-gray-500 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span>Acessar</span>
                <ExternalLink className="h-3 w-3" />
              </div>

              {/* Glow effect */}
              <div 
                className="absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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
