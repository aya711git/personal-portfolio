export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">© {currentYear} جميع الحقوق محفوظة</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
              الرئيسية
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              عني
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
              المشاريع
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              تواصل
            </a>
          </div>

          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              صُنع بـ <span className="text-red-500">❤️</span> باستخدام Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
