"use client"

import { motion } from "framer-motion"
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiPython, 
  SiReact, 
  SiFigma 
} from "react-icons/si"
import { FaJava } from "react-icons/fa"

const skills = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26", level: 90 },
  { name: "CSS", icon: SiCss3, color: "#1572B6", level: 85 },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 80 },
  { name: "Java", icon: FaJava, color: "#007396", level: 75 },
  { name: "Python", icon: SiPython, color: "#3776AB", level: 70 },
  { name: "React", icon: SiReact, color: "#61DAFB", level: 75 },
  { name: "Figma", icon: SiFigma, color: "#F24E1E", level: 80 },
]

export default function SkillsSection() {
  return (
    <section className="relative px-6 py-20 md:px-12 lg:px-24" id="skills">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Minhas <span className="text-[#61F07A]">Experiências</span>
          </h2>
          <p className="max-w-2xl text-gray-400">
            Tecnologias e ferramentas que utilizo para transformar ideias em realidade.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex min-w-[140px] flex-1 flex-col items-center justify-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/[0.05] md:min-w-[160px]"
            >
              <div 
                className="flex h-16 w-16 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${skill.color}15` }}
              >
                <skill.icon className="h-8 w-8" style={{ color: skill.color }} />
              </div>
              <span className="text-sm font-medium text-white">{skill.name}</span>
              
              {/* Skill level bar */}
              <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
              
              {/* Hover glow effect */}
              <div 
                className="absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ boxShadow: `0 0 40px ${skill.color}20` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
