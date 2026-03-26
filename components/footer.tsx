"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Mail, Heart, Code2 } from "lucide-react"

const socialIcons = [
  { icon: Github, url: "https://github.com/DevIsaque", label: "GitHub" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/isaque-matarazzo-808891349", label: "LinkedIn" },
  { icon: Instagram, url: "https://www.instagram.com/_zaquee", label: "Instagram" },
  { icon: Mail, url: "mailto:devmatarazzo@gmail.com", label: "Email" },
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 px-6 py-12 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Logo / Name */}
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-[#3E32ED]" />
            <span className="text-lg font-bold text-white">Isaque Matarazzo</span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socialIcons.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-gray-400 transition-all duration-300 hover:border-[#3E32ED]/50 hover:bg-[#3E32ED]/10 hover:text-[#3E32ED]"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="flex items-center gap-1 text-sm text-gray-500">
            Feito com <Heart className="h-4 w-4 text-[#ED3257]" /> por{" "}
            <span className="text-white">Isaque Matarazzo</span>
          </p>

          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
