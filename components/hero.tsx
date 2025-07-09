"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Code, Mail, Phone, MapPin, User } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)

  const roles = ["Computer Science & Engineering Student", "IoT Enthusiast", "Full Stack Developer", "AI/ML Enthusiast"]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 via-primary-50/30 to-accent-50/20 pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div
            className={`flex justify-center mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative group">
              {/* Fallback background circle */}
              <div
                className={`w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 border-4 border-white shadow-xl transition-all duration-500 ${
                  imageLoaded && !imageError ? "opacity-0" : "opacity-100"
                } flex items-center justify-center`}
              >
                <User className="h-16 w-16 md:h-20 md:w-20 text-primary-400" />
              </div>

              {/* Actual image */}
              <img
                src="/images/bipin.jpg"
                alt="Bipin Bihari Chauhan - Professional Photo"
                className={`absolute inset-0 w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-xl transition-all duration-500 group-hover:scale-105 ${
                  imageLoaded && !imageError ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  setImageError(true)
                  setImageLoaded(false)
                }}
              />

              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500/10 to-accent-500/10"></div>
            </div>
          </div>

          <div className="space-y-4">
            <h1
              className={`text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ animationDelay: "200ms" }}
            >
              Bipin Bihari Chauhan
            </h1>

            <div className="h-16 md:h-20 flex items-center justify-center">
              <h2
                className={`text-xl md:text-2xl text-secondary-700 font-medium transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ animationDelay: "400ms" }}
              >
                <span className="inline-block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
                  {roles[currentRole]}
                </span>
                <span className="animate-blink border-r-2 border-primary-600 ml-1"></span>
              </h2>
            </div>

            <p
              className={`text-lg text-secondary-600 max-w-2xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ animationDelay: "600ms" }}
            >
              Passionate about creating innovative solutions through IoT, AI, and web technologies. Currently pursuing
              B.Tech in CSE with specialization in Internet of Things.
            </p>
          </div>

          <div
            className={`flex flex-wrap justify-center gap-4 text-sm text-secondary-600 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ animationDelay: "800ms" }}
          >
            <a
              href="tel:+918957955020"
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-neutral-200 cursor-pointer hover:bg-white"
            >
              <Phone className="h-4 w-4 text-primary-600" />
              <span>+91-8957955020</span>
            </a>
            <a
              href="mailto:bipinbiharichauhan67@gmail.com"
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-neutral-200 cursor-pointer hover:bg-white"
            >
              <Mail className="h-4 w-4 text-accent-600" />
              <span>bipinbiharichauhan67@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-neutral-200">
              <MapPin className="h-4 w-4 text-success-600" />
              <span>Maunath Bhanjan, UP</span>
            </div>
          </div>

          <div
            className={`flex justify-center space-x-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            style={{ animationDelay: "1000ms" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <a href="https://github.com/BipinChauhan-007" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-200 text-primary-700 hover:bg-primary-50 bg-white hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <a
                href="https://www.linkedin.com/in/bipin-bihari-chauhan-958345266"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-accent-200 text-accent-700 hover:bg-accent-50 bg-white hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <a href="https://leetcode.com/u/Bipin_BIHARI_Chauhan/" target="_blank" rel="noopener noreferrer">
                <Code className="mr-2 h-5 w-5" />
                LeetCode
              </a>
            </Button>
          </div>

          <div
            className={`flex justify-center space-x-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            style={{ animationDelay: "1200ms" }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-secondary-300 text-secondary-700 hover:bg-secondary-50 bg-white hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
