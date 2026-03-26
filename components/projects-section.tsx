"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, FolderOpen } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Projeto 1",
    description: "Em breve! Um novo projeto incrível está sendo desenvolvido.",
    tags: ["React", "Next.js", "Tailwind"],
    color: "#ED3257",
  },
  {
    id: 2,
    title: "Projeto 2",
    description: "Em breve! Um novo projeto incrível está sendo desenvolvido.",
    tags: ["Python", "Machine Learning"],
    color: "#61F07A",
  },
  {
    id: 3,
    title: "Projeto 3",
    description: "Em breve! Um novo projeto incrível está sendo desenvolvido.",
    tags: ["Java", "Spring Boot"],
    color: "#3261ED",
  },
  {
    id: 4,
    title: "Projeto 4",
    description: "Em breve! Um novo projeto incrível está sendo desenvolvido.",
    tags: ["JavaScript", "Node.js"],
    color: "#3E32ED",
  },
]

export default function ProjectsSection() {
  return (
    <section className="relative px-4 py-16 sm:px-6 md:px-12 md:py-20 lg:px-24" id="projects">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-12"
        >
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Meus <span className="text-[#3261ED]">Projetos</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-400 sm:text-base">
            Confira alguns dos projetos que desenvolvi ao longo da minha jornada.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href="https://github.com/DevIsaque"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/[0.05] sm:rounded-2xl"
            >
              {/* Project preview area */}
              <div 
                className="relative flex h-36 items-center justify-center overflow-hidden sm:h-48"
                style={{ background: `linear-gradient(135deg, ${project.color}10 0%, transparent 50%)` }}
              >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiLz48cGF0aCBkPSJNMjAgMjBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L2c+PC9zdmc+')] opacity-50" />
                
                <FolderOpen 
                  className="h-12 w-12 transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16" 
                  style={{ color: project.color }}
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm">
                    <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                    Ver no GitHub
                    <ExternalLink className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  </div>
                </div>
              </div>

              {/* Project info */}
              <div className="p-4 sm:p-6">
                <h3 className="mb-2 text-lg font-semibold text-white sm:text-xl">{project.title}</h3>
                <p className="mb-4 text-xs text-gray-400 sm:text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="rounded-full px-2 py-0.5 text-[10px] font-medium sm:px-3 sm:py-1 sm:text-xs"
                      style={{ 
                        backgroundColor: `${project.color}15`,
                        color: project.color 
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Border accent */}
              <div 
                className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: project.color }}
              />
            </motion.a>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center sm:mt-12"
        >
          <a
            href="https://github.com/DevIsaque"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-[#3E32ED]/50 bg-[#3E32ED]/10 px-5 py-2.5 text-xs font-medium text-white transition-all duration-300 hover:border-[#3E32ED] hover:bg-[#3E32ED]/20 sm:px-6 sm:py-3 sm:text-sm"
          >
            <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            Ver mais projetos no GitHub
            <ExternalLink className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
