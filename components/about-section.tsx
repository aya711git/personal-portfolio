import { Card } from "@/components/ui/card"
import { Code2, Palette, Rocket } from "lucide-react"

export default function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "تطوير نظيف",
      description: "كتابة كود نظيف وقابل للصيانة باستخدام أفضل الممارسات",
    },
    {
      icon: Palette,
      title: "تصميم إبداعي",
      description: "تحويل التصاميم إلى واجهات تفاعلية جميلة",
    },
    {
      icon: Rocket,
      title: "أداء عالي",
      description: "تحسين الأداء وتجربة المستخدم في كل مشروع",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-heading">عني</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-in fade-in slide-in-from-right duration-700">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <img
                src="/aya Hijab Logo.png"
                alt="About Me"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <p className="text-lg text-muted-foreground leading-relaxed">
              مطورة واجهات أمامية شغوف بإنشاء تجارب ويب استثنائية. أمتلك خبرة واسعة في بناء تطبيقات ويب حديثة وسريعة
              الاستجابة باستخدام React و Next.js و TypeScript.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              أؤمن بأهمية التفاصيل الصغيرة وأسعى دائماً لتقديم حلول مبتكرة تجمع بين الجمال والوظائف العملية. أحب التعلم
              المستمر ومواكبة أحدث التقنيات في عالم تطوير الويب.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card"
                >
                  <item.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-card-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
