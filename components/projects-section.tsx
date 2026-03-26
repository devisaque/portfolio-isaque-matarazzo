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
    <section className="relative px-6 py-20 md:px-12 lg:px-24" id="projects">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Meus <span className="text-[#3261ED]">Projetos</span>
          </h2>
          <p className="max-w-2xl text-gray-400">
            Confira alguns dos projetos que desenvolvi ao longo da minha jornada.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
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
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/[0.05]"
            >
              {/* Project preview area */}
              <div 
                className="relative flex h-48 items-center justify-center overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${project.color}10 0%, transparent 50%)` }}
              >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiLz48cGF0aCBkPSJNMjAgMjBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L2c+PC9zdmc+')] opacity-50" />
                
                <FolderOpen 
                  className="h-16 w-16 transition-transform duration-300 group-hover:scale-110" 
                  style={{ color: project.color }}
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
                    <Github className="h-4 w-4" />
                    Ver no GitHub
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mb-4 text-sm text-gray-400">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="rounded-full px-3 py-1 text-xs font-medium"
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
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/DevIsaque"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-[#3E32ED]/50 bg-[#3E32ED]/10 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-[#3E32ED] hover:bg-[#3E32ED]/20"
          >
            <Github className="h-5 w-5" />
            Ver mais projetos no GitHub
            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
