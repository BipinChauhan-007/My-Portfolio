"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Github, Linkedin, Code } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "achievements", label: "Achievements" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ]

  const socialLinks = [
    {
      href: "https://github.com/BipinChauhan-007",
      label: "GitHub",
      icon: Github,
    },
    {
      href: "https://www.linkedin.com/in/bipin-bihari-chauhan-958345266",
      label: "LinkedIn",
      icon: Linkedin,
    },
    {
      href: "https://leetcode.com/u/Bipin_BIHARI_Chauhan/",
      label: "LeetCode",
      icon: Code,
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-neutral-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent">
            Bipin Bihari Chauhan
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary-600 ${
                  activeSection === item.id ? "text-primary-600 border-b-2 border-primary-600" : "text-secondary-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-4 ml-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-600 hover:text-primary-600 transition-colors duration-300 p-2 rounded-full hover:bg-primary-50"
                title={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-primary-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-slide-down">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-2 px-4 text-sm font-medium transition-colors duration-300 hover:text-primary-600 hover:bg-primary-50 rounded-lg ${
                    activeSection === item.id ? "text-primary-600 bg-primary-50" : "text-secondary-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Social Links */}
            <div className="flex justify-center space-x-6 pt-4 border-t border-neutral-200">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-600 hover:text-primary-600 transition-colors duration-300 p-2 rounded-full hover:bg-primary-50"
                  title={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
