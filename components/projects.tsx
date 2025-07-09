"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Mic, Heart, DotIcon as Dam, Activity } from "lucide-react"

export function Projects() {
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

  const projects = [
    {
      title: "YOGA FIT - AI-Powered Yoga Assistant",
      description:
        "An intelligent yoga assistant that uses AI and computer vision to analyze yoga poses in real-time. Provides personalized feedback, pose correction, and progress tracking using advanced pose detection algorithms.",
      technologies: ["Python", "OpenCV", "AI/ML", "TensorFlow", "MediaPipe", "Flask"],
      icon: Activity,
      githubLink: "https://github.com/BipinChauhan-007/Excercise",
      demoLink: "https://github.com/BipinChauhan-007/Excercise",
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      title: "LLM-Based Voice Assistant with LLaVA",
      description:
        "Created a voice assistant integrating LLaVA with speech-to-text and vision input capabilities. Implemented multimodal inference using LLMs and contextual conversation handling.",
      technologies: ["Python", "LangChain", "LLaVA", "OpenAI"],
      icon: Mic,
      githubLink: "https://github.com/BipinChauhan-007/LLM-POWERED-VOICE-ASSITANT-FOR-MULTIMODEL-DATA",
      demoLink: "https://zesty-praline-c499b7.netlify.app/",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      title: "Healthcare Monitoring System",
      description:
        "Built IoT system to monitor heart rate, oxygen level, and temperature using real-time cloud sync. Included emergency notification system for abnormal readings and health analytics.",
      technologies: ["ESP32", "Firebase", "Biomedical Sensors", "IoT"],
      icon: Heart,
      githubLink: "https://github.com/BipinChauhan-007/healthcare_monitoring_System",
      demoLink: "https://health-monitoring-system.netlify.app/",
      color: "bg-red-500/10 text-red-600",
    },
    {
      title: "IoT-Based Dam Monitoring System",
      description:
        "Developed a real-time monitoring system using IoT sensors for water level and structural health tracking in dams. Enabled predictive analytics and alerts via cloud dashboards.",
      technologies: ["C++", "NodeMCU", "Sensors", "Cloud"],
      icon: Dam,
      githubLink: "#",
      demoLink: "#",
      color: "bg-green-500/10 text-green-600",
    },
  ]

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0 translate-y-10"}`}
          >
            Featured Projects
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}
          >
            A showcase of my technical projects that demonstrate my skills in IoT, AI, and full-stack development. Each
            project solves real-world problems with innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`h-full flex flex-col hover:shadow-lg transition-all duration-500 hover:scale-105 ${isVisible ? "animate-bounce-in" : "opacity-0 scale-75"}`}
              style={{ animationDelay: `${400 + index * 200}ms` }}
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${project.color} mb-4 animate-float`}
                  style={{ animationDelay: `${600 + index * 200}ms` }}
                >
                  <project.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className={`text-xs transition-all duration-300 hover:scale-105 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
                        style={{ animationDelay: `${800 + index * 200 + techIndex * 100}ms` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button asChild size="sm" className="flex-1 transition-all duration-300 hover:scale-105">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent transition-all duration-300 hover:scale-105"
                  >
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
