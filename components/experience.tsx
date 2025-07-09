import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional experience and internships that have shaped my technical expertise and understanding of
            industry practices.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Google Virtual Internship – AICTE</CardTitle>
                    <CardDescription className="text-base">Microchip Track (Remote)</CardDescription>
                  </div>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  Aug 2024 – Oct 2024
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Responsibilities & Achievements:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Completed embedded systems modules using Microchip tools and development environments
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Executed virtual lab simulations and applied embedded hardware-software integration techniques
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Gained hands-on experience with microcontroller programming and embedded system design
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Microchip Tools</Badge>
                    <Badge variant="secondary">Embedded Systems</Badge>
                    <Badge variant="secondary">Hardware-Software Integration</Badge>
                    <Badge variant="secondary">Virtual Lab Simulations</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
