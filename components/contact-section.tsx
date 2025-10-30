import ContactForm from "@/components/contact-form"
import { Card } from "@/components/ui/card"
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react"

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
    },
    {
      icon: Phone,
      title: "الهاتف",
      value: "+966 XX XXX XXXX",
      href: "tel:+966XXXXXXXXX",
    },
    {
      icon: MapPin,
      title: "الموقع",
      value: "الرياض، المملكة العربية السعودية",
      href: "#",
    },
  ]

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-heading">تواصل معي</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">هل لديك مشروع أو فكرة؟ دعنا نتحدث!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-in fade-in slide-in-from-right duration-700">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 bg-card">
                  <a href={item.href} className="flex items-start gap-4 group">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">تابعني على</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 shadow-md"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
