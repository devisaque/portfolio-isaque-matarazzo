"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Mail, Heart, Code2 } from "lucide-react"

const socialIcons = [
  { icon: Github, url: "https://github.com/DevIsaque", label: "GitHub" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/isaque-matarazzo-808891349?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn" },
  { icon: Instagram, url: "https://www.instagram.com/_zaquee?igsh=MWduaTV6NDRhM3RndQ==", label: "Instagram" },
  { icon: Mail, url: "mailto:devmatarazzo@gmail.com", label: "Email" },
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 px-4 py-10 sm:px-6 sm:py-12 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-5 sm:gap-6"
        >
          {/* Logo / Name */}
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-[#3E32ED] sm:h-6 sm:w-6" />
            <span className="text-base font-bold text-white sm:text-lg">Isaque Matarazzo</span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {socialIcons.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-gray-400 transition-all duration-300 hover:border-[#3E32ED]/50 hover:bg-[#3E32ED]/10 hover:text-[#3E32ED] sm:h-10 sm:w-10"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="flex items-center gap-1 text-xs text-gray-500 sm:text-sm">
            Feito com <Heart className="h-3 w-3 text-[#ED3257] sm:h-4 sm:w-4" /> por{" "}
            <span className="text-white">Isaque Matarazzo</span>
          </p>

          <p className="text-[10px] text-gray-600 sm:text-xs">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
