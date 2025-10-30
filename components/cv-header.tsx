"use client"

import { Card } from "@/components/ui/card"
import { useApp } from "@/contexts/app-context"

export default function CVHeader() {
  const { t } = useApp()

  const mainTechs = ["React", "Shadcn", "TypeScript", "ML","AI", "Node.js","Python"]

  return (
    <Card className="p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
      <div className="space-y-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground font-heading mb-2">{t.header.title}</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">{t.header.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {mainTechs.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  )
}
