import { Button } from "@/components/ui/button"
import { Download, ArrowDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-right animate-in fade-in slide-in-from-bottom duration-700">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground font-heading leading-tight">
              مرحباً، أنا
              <span className="text-primary block mt-2">مطورة واجهات أمامية</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              أبني تجارب رقمية متميزة وسهلة الاستخدام باستخدام أحدث التقنيات. متخصص في React و Next.js و TypeScript
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg group">
                <a href="#contact" className="flex items-center gap-2">
                  تواصل معي
                  <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
                <a href="/CV-Aya.pdf" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg group bg-transparent"
                  >
                    <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                    تحميل السيرة الذاتية
                  </Button>
                </a>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative animate-in fade-in slide-in-from-left duration-700 delay-200">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" />
              <img
                src="/professional-developer-illustration.jpg"
                alt="Developer Illustration"
                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
