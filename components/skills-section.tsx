"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Palette, Database, Wrench } from "lucide-react"
import { useApp } from "@/contexts/app-context"

export default function SkillsSection() {
  const { t } = useApp()

  const skillCategories = [
    {
      title: t.skills.categories.frontend,
      icon: Code2,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      skills: t.skills.items.frontend,
    },
    {
      title: t.skills.categories.ai,
      icon: Database,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      skills: t.skills.items.ai,
    },
    {
      title: t.skills.categories.tools,
      icon: Wrench,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      skills: t.skills.items.tools,
    },
    {
      title: t.skills.categories.soft,
      icon: Palette,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      skills: t.skills.items.soft,
    },
  ]

  return (
    <Card className="p-8">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Code2 className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground font-heading">{t.skills.title}</h2>
            <div className="w-16 h-1 bg-primary rounded-full mt-1" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border-2 border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg ${category.bgColor} flex items-center justify-center`}>
                  <category.icon className={`h-5 w-5 ${category.color}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {skill.level}%
                      </Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full ${category.bgColor} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
