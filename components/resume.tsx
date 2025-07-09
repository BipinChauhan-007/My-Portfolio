"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Eye, FileText } from "lucide-react"

export function Resume() {
  const handleDownload = () => {
    // Create PDF content using jsPDF-like approach with HTML to PDF
    const resumeHTML = `
<!DOCTYPE html>
<html>
<head>
    <title>Bipin Bihari Chauhan - Resume</title>
    <style>
        @page { margin: 0.5in; }
        body { 
            font-family: 'Arial', sans-serif; 
            font-size: 11px; 
            line-height: 1.4; 
            color: #333;
            margin: 0;
            padding: 0;
        }
        .header { 
            text-align: center; 
            margin-bottom: 20px; 
            border-bottom: 2px solid #2563eb;
            padding-bottom: 10px;
        }
        .header h1 { 
            font-size: 18px; 
            color: #2563eb; 
            margin: 0 0 5px 0;
            font-weight: bold;
        }
        .contact-info { 
            font-size: 10px; 
            color: #666; 
            margin: 5px 0;
        }
        .social-links {
            font-size: 9px;
            color: #2563eb;
            margin: 5px 0;
        }
        .section { 
            margin-bottom: 15px; 
        }
        .section-title { 
            font-size: 13px; 
            font-weight: bold; 
            color: #1e40af; 
            margin-bottom: 8px;
            border-bottom: 1px solid #e5e7eb;
            padding-bottom: 2px;
        }
        .job-title { 
            font-weight: bold; 
            color: #333; 
            font-size: 11px;
        }
        .job-details { 
            font-size: 10px; 
            color: #666; 
            margin-bottom: 5px;
        }
        .project-title { 
            font-weight: bold; 
            color: #1e40af; 
            font-size: 11px;
            margin-bottom: 3px;
        }
        .tech-stack { 
            font-size: 10px; 
            color: #666; 
            font-style: italic;
            margin-bottom: 5px;
        }
        .github-link {
            color: #2563eb;
            text-decoration: none;
            font-size: 9px;
        }
        ul { 
            margin: 5px 0; 
            padding-left: 15px; 
        }
        li { 
            margin-bottom: 3px; 
            font-size: 10px;
        }
        .skills-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin-bottom: 10px;
        }
        .skill-category {
            font-size: 10px;
        }
        .skill-category strong {
            color: #1e40af;
        }
        .achievements-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5px;
        }
        .cert-item {
            font-size: 10px;
            margin-bottom: 2px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>BIPIN BIHARI CHAUHAN</h1>
        <div class="contact-info">
            +91-8957955020 | bipinbiharichauhan67@gmail.com<br>
            Near Deep Motors, Barpur, Maunath Bhanjan, 275101
        </div>
        <div class="social-links">
            LinkedIn: https://www.linkedin.com/in/bipin-bihari-chauhan-958345266 | 
            GitHub: https://github.com/BipinChauhan-007 | 
            LeetCode: https://leetcode.com/u/Bipin_BIHARI_Chauhan/
        </div>
    </div>

    <div class="section">
        <div class="section-title">EDUCATION</div>
        <div class="job-title">Noida Institute of Engineering and Technology, Greater Noida, UP, India</div>
        <div class="job-details">B.Tech in Computer Science and Engineering (IoT) | CGPA: 7.4/10 | Nov. 2022 – May 2026</div>
    </div>

    <div class="section">
        <div class="section-title">TECHNICAL SKILLS</div>
        <div class="skills-grid">
            <div class="skill-category"><strong>Languages:</strong> Python, C++, Java, HTML, CSS, JavaScript</div>
            <div class="skill-category"><strong>Frameworks/Technologies:</strong> Boost, ReactJS, Tailwind CSS, Django, MongoDB, SQL</div>
            <div class="skill-category"><strong>C++ Focus:</strong> STL, OOP, Algorithm Optimization, Parsing, System Debugging</div>
            <div class="skill-category"><strong>OS And Toolchains:</strong> Windows, GCC, MSVC, GitHub, GCP, Jupyter</div>
        </div>
        <div class="skill-category"><strong>Tools:</strong> Git, Cisco Packet Tracer, VS Code, IntelliJ, OpenCV</div>
    </div>

    <div class="section">
        <div class="section-title">EXPERIENCE</div>
        <div class="job-title">Google Virtual Internship – AICTE</div>
        <div class="job-details">Microchip Track (Remote) | Aug. 2024 – Oct. 2024</div>
        <ul>
            <li>Completed embedded systems modules using Microchip tools.</li>
            <li>Executed virtual lab simulations and applied embedded hardware-software integration techniques.</li>
        </ul>
    </div>

    <div class="section">
        <div class="section-title">PROJECTS</div>
        
        <div class="project-title">YOGA FIT - AI-Powered Yoga Assistant</div>
        <div class="tech-stack">Python, OpenCV, AI/ML, TensorFlow, MediaPipe, Flask</div>
        <div class="github-link">GitHub: https://github.com/BipinChauhan-007/Excercise</div>
        <ul>
            <li>An intelligent yoga assistant that uses AI and computer vision to analyze yoga poses in real-time.</li>
            <li>Provides personalized feedback, pose correction, and progress tracking using advanced pose detection algorithms.</li>
        </ul>

        <div class="project-title">LLM-Based Voice Assistant with LLaVA</div>
        <div class="tech-stack">Python, LangChain, LLaVA, OpenAI</div>
        <div class="github-link">GitHub: https://github.com/BipinChauhan-007/LLM-POWERED-VOICE-ASSITANT-FOR-MULTIMODEL-DATA</div>
        <div class="github-link">Demo: https://zesty-praline-c499b7.netlify.app/</div>
        <ul>
            <li>Created a voice assistant integrating LLaVA with speech-to-text and vision input capabilities.</li>
            <li>Implemented multimodal inference using LLMs and contextual conversation handling.</li>
        </ul>

        <div class="project-title">Healthcare Monitoring System</div>
        <div class="tech-stack">ESP32, Firebase, Biomedical Sensors</div>
        <div class="github-link">GitHub: https://github.com/BipinChauhan-007/healthcare_monitoring_System</div>
        <div class="github-link">Demo: https://health-monitoring-system.netlify.app/</div>
        <ul>
            <li>Built IoT system to monitor heart rate, oxygen level, and temperature using real-time cloud sync.</li>
            <li>Included emergency notification system for abnormal readings and health analytics.</li>
        </ul>

        <div class="project-title">IoT-Based Dam Monitoring System</div>
        <div class="tech-stack">C++, NodeMCU, Sensors, Cloud</div>
        <ul>
            <li>Developed a real-time monitoring system using IoT sensors for water level and structural health tracking in dams.</li>
            <li>Enabled predictive analytics and alerts via cloud dashboards to prevent structural failures.</li>
        </ul>
    </div>

    <div class="section">
        <div class="section-title">ACHIEVEMENTS</div>
        <div class="achievements-grid">
            <div>• Smart India Hackathon Finalist</div>
            <div>• Completed Google Gen AI Cloud Study Jam Program</div>
            <div>• Completed Google Arcade Session April-May 2025 with Legend Milestone</div>
            <div>• Earned Microsoft Odyssey AI Level 1 and 2 Certifications</div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">CERTIFICATIONS</div>
        <div class="cert-item">• IoT Automation with ESP8266 – Infosys Springboard</div>
        <div class="cert-item">• Express PCB Training – Infosys Springboard</div>
        <div class="cert-item">• ReactJS – Infosys Springboard</div>
        <div class="cert-item">• Java Fundamentals – Infosys Springboard</div>
        <div class="cert-item">• Artificial Intelligence and Machine Learning – Oracle Academy</div>
        <div class="cert-item">• Cloud Computing – Oracle Academy</div>
    </div>
</body>
</html>
    `

    // Create a new window with the resume content and trigger print
    const printWindow = window.open("", "_blank")
    if (printWindow) {
      printWindow.document.write(resumeHTML)
      printWindow.document.close()

      // Wait for content to load, then trigger print dialog
      printWindow.onload = () => {
        setTimeout(() => {
          printWindow.print()
          // Close the window after printing (optional)
          printWindow.onafterprint = () => {
            printWindow.close()
          }
        }, 500)
      }
    }
  }

  const handleView = () => {
    // Open resume in a new window/tab
    const resumeContent = `
<!DOCTYPE html>
<html>
<head>
    <title>Bipin Bihari Chauhan - Resume</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; }
        h1 { color: #2563eb; border-bottom: 2px solid #2563eb; }
        h2 { color: #1e40af; margin-top: 30px; }
        .contact { text-align: center; margin-bottom: 30px; }
        .social-links { 
            text-align: center; 
            margin: 15px 0; 
            padding: 10px; 
            background: #f8fafc; 
            border-radius: 8px;
        }
        .social-links a { 
            color: #2563eb; 
            text-decoration: none; 
            margin: 0 15px; 
            font-weight: 500;
            padding: 5px 10px;
            border-radius: 5px;
            transition: background-color 0.3s;
        }
        .social-links a:hover { 
            background-color: #e5e7eb; 
            text-decoration: underline; 
        }
        .section { margin-bottom: 25px; }
        .project { margin-bottom: 15px; }
        .project-title { font-weight: bold; color: #1e40af; }
        .project-links { margin: 10px 0; }
        .project-links a { 
            color: #2563eb; 
            text-decoration: none; 
            font-size: 14px; 
            margin-right: 15px;
            padding: 3px 8px;
            background: #f1f5f9;
            border-radius: 4px;
            display: inline-block;
            margin-bottom: 5px;
        }
        .project-links a:hover { 
            text-decoration: underline; 
            background: #e2e8f0;
        }
        ul { padding-left: 20px; }
        .skills { display: flex; flex-wrap: wrap; gap: 10px; }
        .skill { background: #e5e7eb; padding: 5px 10px; border-radius: 5px; font-size: 14px; }
    </style>
</head>
<body>
    <h1>BIPIN BIHARI CHAUHAN</h1>
    <div class="contact">
        <p>+91-8957955020 | bipinbiharichauhan67@gmail.com<br>
        Near Deep Motors, Barpur, Maunath Bhanjan, 275101</p>
    </div>
    
    <div class="social-links">
        <a href="https://www.linkedin.com/in/bipin-bihari-chauhan-958345266" target="_blank">🔗 LinkedIn</a>
        <a href="https://github.com/BipinChauhan-007" target="_blank">💻 GitHub Profile</a>
        <a href="https://leetcode.com/u/Bipin_BIHARI_Chauhan/" target="_blank">🧩 LeetCode</a>
    </div>

    <div class="section">
        <h2>EDUCATION</h2>
        <p><strong>Noida Institute of Engineering and Technology</strong>, Greater Noida, UP, India<br>
        B.Tech in Computer Science and Engineering (IoT); CGPA: 7.4/10<br>
        Nov. 2022 – May 2026</p>
    </div>

    <div class="section">
        <h2>TECHNICAL SKILLS</h2>
        <p><strong>Languages:</strong> Python, C++, Java, HTML, CSS, JavaScript</p>
        <p><strong>Frameworks/Technologies:</strong> Boost, ReactJS, Tailwind CSS, Django, MongoDB, SQL</p>
        <p><strong>C++ Focus:</strong> STL, OOP, Algorithm Optimization, Parsing, System Debugging</p>
        <p><strong>OS And Toolchains:</strong> Windows, GCC, MSVC, GitHub, GCP, Jupyter</p>
        <p><strong>Tools:</strong> Git, Cisco Packet Tracer, VS Code, IntelliJ, OpenCV</p>
    </div>

    <div class="section">
        <h2>EXPERIENCE</h2>
        <div class="project">
            <div class="project-title">Google Virtual Internship – AICTE (Aug. 2024 – Oct. 2024)</div>
            <p>Microchip Track (Remote)</p>
            <ul>
                <li>Completed embedded systems modules using Microchip tools.</li>
                <li>Executed virtual lab simulations and applied embedded hardware-software integration techniques.</li>
            </ul>
        </div>
    </div>

    <div class="section">
        <h2>PROJECTS</h2>
        
        <div class="project">
            <div class="project-title">YOGA FIT - AI-Powered Yoga Assistant | Python, OpenCV, AI/ML, TensorFlow, MediaPipe, Flask</div>
            <div class="project-links">
                <a href="https://github.com/BipinChauhan-007/Excercise" target="_blank">📂 GitHub Code</a>
            </div>
            <ul>
                <li>An intelligent yoga assistant that uses AI and computer vision to analyze yoga poses in real-time.</li>
                <li>Provides personalized feedback, pose correction, and progress tracking using advanced pose detection algorithms.</li>
            </ul>
        </div>

        <div class="project">
            <div class="project-title">LLM-Based Voice Assistant with LLaVA | Python, LangChain, LLaVA, OpenAI</div>
            <div class="project-links">
                <a href="https://github.com/BipinChauhan-007/LLM-POWERED-VOICE-ASSITANT-FOR-MULTIMODEL-DATA" target="_blank">📂 GitHub Code</a>
                <a href="https://zesty-praline-c499b7.netlify.app/" target="_blank">🚀 Live Demo</a>
            </div>
            <ul>
                <li>Created a voice assistant integrating LLaVA with speech-to-text and vision input capabilities.</li>
                <li>Implemented multimodal inference using LLMs and contextual conversation handling.</li>
            </ul>
        </div>

        <div class="project">
            <div class="project-title">Healthcare Monitoring System | ESP32, Firebase, Biomedical Sensors</div>
            <div class="project-links">
                <a href="https://github.com/BipinChauhan-007/healthcare_monitoring_System" target="_blank">📂 GitHub Code</a>
                <a href="https://health-monitoring-system.netlify.app/" target="_blank">🚀 Live Demo</a>
            </div>
            <ul>
                <li>Built IoT system to monitor heart rate, oxygen level, and temperature using real-time cloud sync.</li>
                <li>Included emergency notification system for abnormal readings and health analytics.</li>
            </ul>
        </div>

        <div class="project">
            <div class="project-title">IoT-Based Dam Monitoring System | C++, NodeMCU, Sensors, Cloud</div>
            <ul>
                <li>Developed a real-time monitoring system using IoT sensors for water level and structural health tracking in dams.</li>
                <li>Enabled predictive analytics and alerts via cloud dashboards to prevent structural failures.</li>
            </ul>
        </div>
    </div>

    <div class="section">
        <h2>ACHIEVEMENTS</h2>
        <ul>
            <li>Smart India Hackathon Finalist</li>
            <li>Completed Google Gen AI Cloud Study Jam Program</li>
            <li>Completed Google Arcade Session April-May 2025 with Legend Milestone</li>
            <li>Earned Microsoft Odyssey AI Level 1 and 2 Certifications</li>
        </ul>
    </div>

    <div class="section">
        <h2>CERTIFICATIONS</h2>
        <ul>
            <li>IoT Automation with ESP8266 – Infosys Springboard</li>
            <li>Express PCB Training – Infosys Springboard</li>
            <li>ReactJS – Infosys Springboard</li>
            <li>Java Fundamentals – Infosys Springboard</li>
            <li>Artificial Intelligence and Machine Learning – Oracle Academy</li>
            <li>Cloud Computing – Oracle Academy</li>
        </ul>
    </div>
</body>
</html>
    `

    const blob = new Blob([resumeContent], { type: "text/html" })
    const url = URL.createObjectURL(blob)
    window.open(url, "_blank")
  }

  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Resume</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Download or view my complete resume with detailed information about my education, experience, projects, and
            achievements. All links are clickable for easy access.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">My Resume</CardTitle>
              <CardDescription>Complete overview with clickable LinkedIn, GitHub, and LeetCode links</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <p className="text-muted-foreground">
                  Get access to my detailed resume with all social media profiles, GitHub repositories, and demo links.
                  Everything is clickable for instant access to my work and profiles.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={handleDownload} size="lg" className="flex-1 sm:flex-none">
                    <Download className="mr-2 h-5 w-5" />
                    Download as PDF
                  </Button>
                  <Button
                    onClick={handleView}
                    variant="outline"
                    size="lg"
                    className="flex-1 sm:flex-none bg-transparent"
                  >
                    <Eye className="mr-2 h-5 w-5" />
                    View Online
                  </Button>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold mb-3 text-center">Resume Highlights</h4>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>B.Tech CSE (IoT) Student</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>Google Virtual Internship</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>4+ Major Projects</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>SIH Finalist</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>6+ Certifications</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>All Links Clickable</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold mb-3 text-center">Included Links</h4>
                <div className="flex flex-wrap justify-center gap-2 text-sm">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">LinkedIn Profile</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">GitHub Profile</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">LeetCode Profile</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Project Repositories</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Live Demos</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
