import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Award, Star, BadgeIcon as Certificate } from "lucide-react"

export function Achievements() {
  const achievements = [
    {
      title: "Smart India Hackathon Finalist",
      description: "Selected as finalist in one of India's biggest hackathon competitions",
      icon: Trophy,
      color: "bg-yellow-500/10 text-yellow-600",
      images: [
        {
          src: "/images/sih-team-banner.png",
          alt: "Smart India Hackathon 2024 Team at NIET",
          caption: "Team at Smart India Hackathon 2024 - NIET",
        },
        {
          src: "/images/sih-team-indoor.png",
          alt: "SIH Team Collaboration",
          caption: "Team collaboration during the hackathon",
        },
      ],
    },
    {
      title: "Google Gen AI Cloud Study Jam Program",
      description: "Successfully completed Google's comprehensive AI and Cloud program",
      icon: Star,
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      title: "Google Arcade Session Legend Milestone",
      description: "Achieved Legend Milestone in Google Arcade Session April-May 2025",
      icon: Award,
      color: "bg-green-500/10 text-green-600",
    },
    {
      title: "Microsoft Odyssey AI Certifications",
      description: "Earned Microsoft Odyssey AI Level 1 and 2 Certifications",
      icon: Certificate,
      color: "bg-purple-500/10 text-purple-600",
    },
  ]

  const certifications = [
    "IoT Automation with ESP8266 – Infosys Springboard",
    "Express PCB Training – Infosys Springboard",
    "ReactJS – Infosys Springboard",
    "Java Fundamentals – Infosys Springboard",
    "Artificial Intelligence and Machine Learning – Oracle Academy",
    "Cloud Computing – Oracle Academy",
  ]

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent mb-4">
            Achievements & Certifications
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Recognition and certifications that validate my technical skills and commitment to continuous learning in
            emerging technologies.
          </p>
        </div>

        <div className="space-y-12">
          {/* Featured Achievement - Smart India Hackathon */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-secondary-800">Featured Achievement</h3>
            <Card className="max-w-6xl mx-auto shadow-xl bg-gradient-to-br from-white via-yellow-50/50 to-orange-50/50 border-yellow-200 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                <div className="flex items-center justify-center space-x-4">
                  <div className="p-3 bg-white/20 rounded-full">
                    <Trophy className="h-8 w-8" />
                  </div>
                  <div className="text-center">
                    <CardTitle className="text-2xl md:text-3xl font-bold">Smart India Hackathon Finalist</CardTitle>
                    <CardDescription className="text-yellow-100 text-lg">
                      One of India's Most Prestigious Hackathon Competitions
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-5 gap-8 items-start">
                  <div className="lg:col-span-3 space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-secondary-800 mb-3">Achievement Highlights</h4>
                      <ul className="space-y-3 text-secondary-600">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Selected as <strong>finalist</strong> among thousands of participants nationwide
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Participated in <strong>Smart India Hackathon 2024</strong> at NIET, Greater Noida
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Collaborated with a <strong>diverse team</strong> to solve real-world problems
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Demonstrated <strong>innovation and technical excellence</strong> in solution development
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-lg border-l-4 border-yellow-500">
                      <p className="text-secondary-700 font-medium">
                        "This achievement represents my ability to work under pressure, collaborate effectively, and
                        create innovative solutions for complex challenges."
                      </p>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="space-y-4">
                      <div className="relative group overflow-hidden rounded-xl shadow-lg">
                        <img
                          src="/images/sih-team-banner.png"
                          alt="Smart India Hackathon 2024 Team at NIET"
                          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-sm font-medium">Team at Smart India Hackathon 2024 - NIET</p>
                        </div>
                      </div>
                      <div className="relative group overflow-hidden rounded-xl shadow-lg">
                        <img
                          src="/images/sih-team-indoor.png"
                          alt="SIH Team Collaboration"
                          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-sm font-medium">Team collaboration during the hackathon</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Other Achievements */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-secondary-800">Other Major Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.slice(1).map((achievement, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-primary-50/30 border-primary-100"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${achievement.color}`}>
                        <achievement.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-secondary-800">{achievement.title}</CardTitle>
                        <CardDescription className="text-secondary-600">{achievement.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-secondary-800">Professional Certifications</h3>
            <Card className="max-w-4xl mx-auto shadow-lg bg-gradient-to-br from-white to-secondary-50/30 border-secondary-200">
              <CardHeader>
                <CardTitle className="text-xl text-center text-secondary-800">Technical Certifications</CardTitle>
                <CardDescription className="text-center text-secondary-600">
                  Industry-recognized certifications from leading technology companies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-r from-white to-primary-50/50 border border-primary-100 hover:shadow-md transition-shadow"
                    >
                      <Certificate className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-secondary-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
