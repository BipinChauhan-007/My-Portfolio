"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Wrench, Monitor } from "lucide-react"

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "C++", "Java", "HTML", "CSS", "JavaScript"],
      color: "from-primary-500 to-primary-600",
      bgColor: "from-primary-50 to-primary-100/50",
      borderColor: "border-primary-200",
    },
    {
      title: "Frameworks & Technologies",
      icon: Database,
      skills: ["ReactJS", "Django", "Tailwind CSS", "MongoDB", "SQL", "Boost"],
      color: "from-accent-500 to-accent-600",
      bgColor: "from-accent-50 to-accent-100/50",
      borderColor: "border-accent-200",
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "GitHub", "VS Code", "IntelliJ", "Cisco Packet Tracer", "OpenCV", "Jupyter"],
      color: "from-secondary-500 to-secondary-600",
      bgColor: "from-secondary-50 to-secondary-100/50",
      borderColor: "border-secondary-200",
    },
    {
      title: "Systems & OS",
      icon: Monitor,
      skills: ["Windows", "GCC", "MSVC", "GCP", "STL", "OOP", "Algorithm Optimization"],
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100/50",
      borderColor: "border-purple-200",
    },
  ]

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gradient-to-b from-primary-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-4 transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0 translate-y-10"}`}
          >
            Technical Skills
          </h2>
          <p
            className={`text-lg text-secondary-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}
          >
            A comprehensive toolkit of programming languages, frameworks, and technologies that I use to bring ideas to
            life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`h-full shadow-lg hover:shadow-xl transition-all duration-500 bg-gradient-to-br ${category.bgColor} ${category.borderColor} hover:scale-105 ${isVisible ? "animate-bounce-in" : "opacity-0 scale-75"}`}
              style={{ animationDelay: `${400 + index * 200}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-12 h-12 mx-auto rounded-lg flex items-center justify-center bg-gradient-to-br ${category.color} shadow-md mb-4 animate-float`}
                  style={{ animationDelay: `${600 + index * 200}ms` }}
                >
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg text-secondary-800">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className={`text-xs bg-white/80 text-secondary-700 hover:bg-white transition-all duration-300 hover:scale-105 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
                      style={{ animationDelay: `${800 + index * 200 + skillIndex * 100}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card
            className={`max-w-2xl mx-auto shadow-lg bg-gradient-to-br from-white to-primary-50/50 border-primary-200 transition-all duration-1000 delay-1000 hover:scale-105 ${isVisible ? "animate-scale-in" : "opacity-0 scale-90"}`}
          >
            <CardHeader>
              <CardTitle className="text-xl text-secondary-800">C++ Specialization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-secondary-600 mb-4">Deep expertise in C++ with focus on:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {["STL", "OOP", "Algorithm Optimization", "Parsing", "System Debugging"].map((skill, index) => (
                  <Badge
                    key={index}
                    className={`bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 transition-all duration-300 hover:scale-105 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
                    style={{ animationDelay: `${1200 + index * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
