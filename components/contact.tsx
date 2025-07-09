"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Code, Send, CheckCircle, AlertCircle } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    const formData = new FormData(e.currentTarget)
    const result = await submitContactForm(formData)

    setSubmitStatus({
      type: result.success ? "success" : "error",
      message: result.message,
    })

    if (result.success) {
      // Reset form on success
      e.currentTarget.reset()
    }

    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-accent-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about
            technology. Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-secondary-800">Let's Connect</h3>
              <p className="text-secondary-600 mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear
                from you. Here are the best ways to reach me:
              </p>
            </div>

            <div className="space-y-4">
              <Card className="border-primary-100 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-primary-50/50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg shadow-md">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-800">Email</h4>
                      <p className="text-secondary-600">bipinbiharichauhan67@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent-100 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-accent-50/50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg shadow-md">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-800">Phone</h4>
                      <p className="text-secondary-600">+91-8957955020</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-secondary-200 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-secondary-50/50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-gradient-to-br from-secondary-600 to-secondary-700 rounded-lg shadow-md">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-800">Location</h4>
                      <p className="text-secondary-600">Maunath Bhanjan, Uttar Pradesh, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-secondary-800">Follow Me</h4>
              <div className="flex space-x-4">
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="border-primary-200 hover:bg-primary-50 bg-transparent"
                >
                  <a href="https://github.com/BipinChauhan-007" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="border-primary-200 hover:bg-primary-50 bg-transparent"
                >
                  <a
                    href="https://www.linkedin.com/in/bipin-bihari-chauhan-958345266"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="border-accent-200 hover:bg-accent-50 bg-transparent"
                >
                  <a href="https://leetcode.com/u/Bipin_BIHARI_Chauhan/" target="_blank" rel="noopener noreferrer">
                    <Code className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl border-primary-100 bg-gradient-to-br from-white to-primary-50/30">
            <CardHeader>
              <CardTitle className="text-secondary-800">Send Me a Message</CardTitle>
              <CardDescription className="text-secondary-600">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-secondary-700">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      disabled={isSubmitting}
                      className="border-primary-200 focus:border-primary-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-secondary-700">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      disabled={isSubmitting}
                      className="border-primary-200 focus:border-primary-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-secondary-700">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    required
                    disabled={isSubmitting}
                    className="border-primary-200 focus:border-primary-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-secondary-700">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello!"
                    rows={5}
                    required
                    disabled={isSubmitting}
                    className="border-primary-200 focus:border-primary-500"
                  />
                </div>

                {/* Status Message */}
                {submitStatus.type && (
                  <div
                    className={`flex items-center space-x-2 p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <AlertCircle className="h-5 w-5" />
                    )}
                    <span className="text-sm font-medium">{submitStatus.message}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white shadow-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-primary-100 text-center text-secondary-600">
        <p>&copy; 2024 Bipin Bihari Chauhan. All rights reserved.</p>
        <p className="mt-2 text-sm">Built with Next.js, React, and Tailwind CSS</p>
      </footer>
    </section>
  )
}
