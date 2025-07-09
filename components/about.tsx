"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, Award } from "lucide-react"

export function About() {
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

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent mb-4 transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0 translate-y-10"}`}
          >
            About Me
          </h2>
          <p
            className={`text-lg text-secondary-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}
          >
            I'm a passionate Computer Science and Engineering student specializing in Internet of Things (IoT). With a
            strong foundation in programming and emerging technologies, I love building innovative solutions that bridge
            the gap between hardware and software.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="text-center space-y-6">
              <h3
                className={`text-2xl font-semibold text-secondary-800 transition-all duration-1000 delay-400 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
              >
                My Journey
              </h3>
              <div
                className={`space-y-4 text-secondary-600 max-w-3xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}
              >
                <p className="leading-relaxed">
                  Currently pursuing my B.Tech in Computer Science and Engineering with a specialization in IoT at Noida
                  Institute of Engineering and Technology. I have hands-on experience in developing full-stack
                  applications, IoT systems, and AI-powered solutions.
                </p>
                <p className="leading-relaxed">
                  My passion lies in creating technology that makes a real-world impact, from healthcare monitoring
                  systems to intelligent voice assistants. I'm always eager to learn new technologies and take on
                  challenging projects.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card
                className={`border border-primary-200 shadow-lg hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-white to-primary-50/50 hover:scale-105 animate-subtle-glow ${isVisible ? "animate-fade-in-left" : "opacity-0 -translate-x-10"}`}
                style={{ animationDelay: "800ms" }}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg w-fit mx-auto mb-4 shadow-md animate-float"
                    style={{ animationDelay: "1000ms" }}
                  >
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2 text-secondary-800">Education</h4>
                  <p className="text-sm text-secondary-600">B.Tech in CSE (IoT)</p>
                  <p className="text-sm text-secondary-600">NIET, Greater Noida</p>
                  <p className="text-sm text-primary-600 font-medium">CGPA: 7.4/10</p>
                </CardContent>
              </Card>

              <Card
                className={`border border-accent-200 shadow-lg hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-white to-accent-50/50 hover:scale-105 ${isVisible ? "animate-fade-in" : "opacity-0 translate-y-10"}`}
                style={{ animationDelay: "1000ms" }}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className="p-3 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg w-fit mx-auto mb-4 shadow-md"
                    style={{ animationDelay: "1200ms" }}
                  >
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2 text-secondary-800">Duration</h4>
                  <p className="text-sm text-secondary-600">November 2022</p>
                  <p className="text-sm text-secondary-600">May 2026</p>
                </CardContent>
              </Card>

              <Card
                className={`border border-success-200 shadow-lg hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-white to-success-50/50 hover:scale-105 ${isVisible ? "animate-fade-in-right" : "opacity-0 translate-x-10"}`}
                style={{ animationDelay: "1200ms" }}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className="p-3 bg-gradient-to-br from-success-500 to-success-600 rounded-lg w-fit mx-auto mb-4 shadow-md"
                    style={{ animationDelay: "1400ms" }}
                  >
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2 text-secondary-800">Focus Areas</h4>
                  <p className="text-sm text-secondary-600">IoT, AI/ML</p>
                  <p className="text-sm text-secondary-600">Full Stack Development</p>
                  <p className="text-sm text-secondary-600">Embedded Systems</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
