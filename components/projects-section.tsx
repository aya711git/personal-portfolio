"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FolderGit2, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useApp } from "@/contexts/app-context"
import Image from "next/image";


export default function ProjectsSection() {
  const { t, language } = useApp()

  return (
    <Card className="p-8">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
            <FolderGit2 className="h-5 w-5 text-secondary-foreground" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground font-heading">{t.projects.title}</h2>
            <div className="w-16 h-1 bg-secondary rounded-full mt-1" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.projects.items.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-2 pb-4">
                  {/* <Button size="sm" variant="secondary">
                    <ExternalLink className={language === "ar" ? "ml-2 h-4 w-4" : "mr-2 h-4 w-4"} />
                    {t.projects.viewDemo}
                  </Button> */}
                    <a
                      href={project.codeUrl}   
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                  <Button size="sm" variant="outline">
                    <Github className={language === "ar" ? "ml-2 h-4 w-4" : "mr-2 h-4 w-4"} />
                    {t.projects.viewCode}
                  </Button>
                    </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
