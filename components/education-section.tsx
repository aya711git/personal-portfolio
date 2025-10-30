"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"
import { useApp } from "@/contexts/app-context"
import React, { useState } from "react";


export default function EducationSection() {
  const { t } = useApp()

  return (
    <Card className="p-8">
      <div className="space-y-8">


        {/* Education */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-secondary-foreground" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground font-heading">{t.education.title}</h2>
              <div className="w-16 h-1 bg-secondary rounded-full mt-1" />
            </div>
          </div>

          {/* Loop through education items */}
          <div className="space-y-8">
            {t.education.items?.map((item, index) => (
              <div key={index} className="pr-6 border-r-2 border-secondary/20 relative">
                <div className="absolute -right-[9px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-background" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">{item.degree}</h3>
                  <p className="text-secondary-foreground font-semibold">{item.institution}</p>
                  <p className="text-sm text-muted-foreground">{item.period}</p>
                  {(item as any).gpa && (
                    <Badge variant="secondary" className="mt-2">
                      {(item as any).gpa}
                    </Badge>
                  )}
                  <p className="text-muted-foreground leading-relaxed pt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Certifications */}
        <Certifications t={t} />

      </div>
    </Card>
  )
}

// Certifications component moved outside
type CertificationItem = {
  name: string;
  issuer: string;
  year: string | number;
};

type TType = {
  certifications: {
    title: string;
    items: CertificationItem[];
  };
};

function Certifications({ t }: { t: TType }) {
  const [showAll, setShowAll] = useState(false);

  // نعرض أول 4 شهادات إذا showAll false
  const displayedItems = showAll ? t.certifications.items : t.certifications.items.slice(0, 4);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Award className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground font-heading">{t.certifications.title}</h2>
          <div className="w-16 h-1 bg-primary rounded-full mt-1" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {displayedItems.map(function(cert, index) {
          return (
            <div
              key={index}
              className="p-4 rounded-lg border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md"
            >
              <h3 className="font-bold text-foreground mb-1">{cert.name}</h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              <Badge variant="outline" className="mt-2 text-xs">
                {cert.year}
              </Badge>
            </div>
          );
        })}
      </div>

      {t.certifications.items.length > 4 && (
        <button
          onClick={function() { setShowAll(!showAll); }}
          className="mt-4 text-primary font-semibold hover:underline"
        >
          {showAll ? "إخفاء" : "إظهار المزيد"}
        </button>
      )}
    </div>
  );
}
