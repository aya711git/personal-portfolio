import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl: string
  githubUrl: string
  index: number
}

export default function ProjectCard({ title, description, image, tags, liveUrl, githubUrl, index }: ProjectCardProps) {
  return (
    <Card
      className="overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Overlay Buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="sm" variant="secondary" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 ml-2" />
              معاينة
            </a>
          </Button>
          <Button size="sm" variant="outline" className="bg-background/90" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 ml-2" />
              الكود
            </a>
          </Button>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-card-foreground font-heading">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  )
}
