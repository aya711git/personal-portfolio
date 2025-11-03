"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter, Download, Sun, Moon, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useApp } from "@/contexts/app-context"

export default function CVSidebar() {
  const { t, language, setLanguage, theme, setTheme } = useApp()

  const contactInfo = [
    { icon: Mail, label: t.contact.email, value: t.contact.emailValue },
    { icon: Phone, label: t.contact.phone, value: t.contact.phoneValue },
    { icon: MapPin, label: t.contact.location, value: t.contact.locationValue },
    // { icon: Globe, label: t.contact.website, value: t.contact.websiteValue },
  ]

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/aya711git" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/aya-khaled-khuris/" },
    // { icon: Twitter, label: "Twitter", url: "#" },
  ]

  const languagesList = [
    { name: t.languages.arabic, level: language === "ar" ? t.languages.native : t.languages.advanced },
    { name: t.languages.english, level: language === "en" ? t.languages.native : t.languages.advanced },
  ]

  return (
    <div className="space-y-6 lg:sticky lg:top-6 lg:self-start">
      {/* Theme and Language Toggle */}
      <Card className="p-4">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="flex-1"
          >
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
            className="flex-1"
          >
            <Languages className={language === "ar" ? "ml-2 h-4 w-4" : "mr-2 h-4 w-4"} />
            {language === "ar" ? "EN" : "ع"}
          </Button>
        </div>
      </Card>

      {/* Profile Card */}
      <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-2">
        <div className="text-center space-y-4">
          <div className="relative w-32 h-32 mx-auto">
            <img
              src="/aya Hijab Logo.png"
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-lg"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-card" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground font-heading">{t.profile.name}</h1>
            <p className="text-primary font-semibold">{t.profile.title}</p>
            <Badge variant="secondary" className="mt-2">
              {t.profile.available}
            </Badge>
          </div>
          <a href="/Aya_Khuris_CV.pdf" download>
          <Button className="w-full" size="sm">
            <Download className={language === "ar" ? "ml-2 h-4 w-4" : "mr-2 h-4 w-4"} />
            {t.profile.downloadCV}
          </Button>
          </a>
        </div>
      </Card>

      {/* Contact Info */}
      <Card className="p-6">
        <h2 className="text-lg font-bold mb-4 font-heading text-foreground">{t.contact.title}</h2>
        <div className="space-y-3">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-start gap-3 text-sm">
              <item.icon className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-muted-foreground text-xs">{item.label}</p>
                <p className="text-foreground font-medium truncate">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Social Links */}
      <Card className="p-6">
        <h2 className="text-lg font-bold mb-4 font-heading text-foreground">{t.social.title}</h2>
        <div className="flex gap-3 justify-center">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label={item.label}
            >
              <item.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </Card>

      {/* Languages */}
      <Card className="p-6">
        <h2 className="text-lg font-bold mb-4 font-heading text-foreground">{t.languages.title}</h2>
        <div className="space-y-3">
          {languagesList.map((lang, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-foreground font-medium">{lang.name}</span>
              <Badge variant="outline">{lang.level}</Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Interests */}
      <Card className="p-6">
        <h2 className="text-lg font-bold mb-4 font-heading text-foreground">{t.interests.title}</h2>
        <div className="flex flex-wrap gap-2">
          {t.interests.items.map((interest, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {interest}
            </Badge>
          ))}
        </div>
      </Card>
    </div>
  )
}
