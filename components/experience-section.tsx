"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"
import { useApp } from "@/contexts/app-context"

export default function ExperienceSection() {
  const { t } = useApp()

  const technologies = [
    ["React", "Next.js", "TypeScript", "Tailwind CSS", "Java","Quarkus","ISO20022","Shadcn"],//وينت
    ["Python", "JavaScript", "CSS3", "HTML5", "Arduino","Jupyter","ERD"],//العلوم والتكنولوجيا
    ["Networking", "NMS", "Ticketing system", "TCP/IP", "DHCP", "DNS"],//سبأفون
    ["Oracle Apex", "Oracle Support", "MobaXterm،", "Flexcube"], //اليمن والكويت الاسلامي
    ["ERP", "Workcube"], //وايتك
  ]

  return (
    <Card className="p-8">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Briefcase className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground font-heading">{t.experience.title}</h2>
            <div className="w-16 h-1 bg-primary rounded-full mt-1" />
          </div>
        </div>

        <div className="space-y-6">
          {t.experience.jobs.map((exp, index) => (
            <div key={index} className="relative pr-6 border-r-2 border-primary/20 last:border-r-0">
              <div className="absolute -right-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-primary font-semibold">{exp.company}</p>
                  <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </span>
                    <span>• {exp.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">▪</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* ✅ شرط لحماية الكود من الخطأ */}
                <div className="flex flex-wrap gap-2">
                  {(technologies[index] || []).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
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
