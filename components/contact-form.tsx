"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Card className="p-8 bg-card">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-card-foreground">
            الاسم
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="أدخل اسمك"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-background"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-card-foreground">
            البريد الإلكتروني
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-background"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-card-foreground">
            الرسالة
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="اكتب رسالتك هنا..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="bg-background resize-none"
          />
        </div>

        <Button type="submit" size="lg" className="w-full group">
          <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          إرسال الرسالة
        </Button>
      </form>
    </Card>
  )
}
