import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Trophy, Clock, Target } from "lucide-react"
import Link from "next/link"

const hackathonWinners = [
  {
    position: "Winner",
    teamName: "Caffeine Coderz",
    members: ["Shubham Raj (Team Leader)", "Ayush Kr. Gupta", "Nishant Sharma", "Arvind Kumar", "Harsh Kumar"],
    image: "/images/hackathon-winner.jpg",
    prize: "₹5,000",
    project: "AI-powered Smart Campus Management System",
  },
  {
    position: "1st Runner Up",
    teamName: "Prachand",
    members: ["Ankit Shankar (Team Leader)", "Akash Dhibar", "Debangsu Das", "Smita Raj", "Alekhya Chatterjee"],
    image: "/images/hackathon-first-runner.jpg",
    prize: "₹3,000",
    project: "Blockchain-based Student Verification Platform",
  },
  {
    position: "2nd Runner Up",
    teamName: "Tech_X",
    members: ["Ali Raza (Team Leader)", "Brejbhushan Kumar", "Saurav Sharma", "Ashmit Kumar", "Ankit Kumar"],
    image: "/images/hackathon-second-runner.jpg",
    prize: "₹2,000",
    project: "IoT-enabled Environmental Monitoring System",
  },
]

const internshipCompanies = [
  { name: "GUVI", category: "EdTech", positions: "Frontend/Backend Developer" },
  { name: "HCL", category: "IT Services", positions: "Software Engineer" },
  { name: "Superset", category: "Analytics", positions: "Data Analyst" },
  { name: "Physics Wallah", category: "EdTech", positions: "Content Developer" },
  { name: "Humantics", category: "HR Tech", positions: "Product Developer" },
  { name: "Sam-Iddh", category: "Consulting", positions: "Business Analyst" },
  { name: "SkillNet", category: "Training", positions: "Technical Trainer" },
  { name: "Makasa Industries", category: "Manufacturing", positions: "Process Engineer" },
  { name: "NEXTUTE", category: "EdTech", positions: "Software Developer" },
  { name: "Youth Story", category: "Media", positions: "Content Creator" },
  { name: "FLAT", category: "Real Estate", positions: "Full Stack Developer" },
  { name: "deWall", category: "FinTech", positions: "Backend Developer" },
  { name: "Sasha", category: "Fashion Tech", positions: "UI/UX Designer" },
  { name: "Apnada", category: "E-commerce", positions: "Product Manager" },
  { name: "Gramin", category: "AgriTech", positions: "Mobile App Developer" },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Events & Achievements</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Celebrating innovation, fostering talent, and creating opportunities through impactful events and
              initiatives
            </p>
          </div>
        </div>
      </section>

      {/* Hack N Tech Hackathon */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">HACK N TECH Hackathon 2025</h2>
            <p className="text-xl text-gray-600">
              "Unleash your innovation. Code the future" - A 24-hour coding marathon
            </p>
          </div>

          {/* Event Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="/images/hack-n-tech-poster.jpg"
                alt="Hack N Tech Hackathon Poster"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Event Highlights</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-lg">23-24 May 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-lg">24 Hours Non-stop</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-lg">Central Lecture Hall, IIT Patna</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-lg">150+ Participants</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-lg">Innovation & Future Technology</span>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Event Features:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Workshops & Tech Talks</li>
                  <li>• Coding Sprints & Challenges</li>
                  <li>• Networking Opportunities</li>
                  <li>• Mentorship from Industry Experts</li>
                  <li>• Innovation Showcase</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Event Collage */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Event Moments</h3>
            <img
              src="/images/hackathon-collage.jpg"
              alt="Hackathon Event Collage"
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          {/* Winners Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Hackathon Winners</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {hackathonWinners.map((winner, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                    winner.position === "Winner" ? "ring-2 ring-yellow-400" : ""
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mb-4 ${
                          winner.position === "Winner"
                            ? "bg-yellow-100 text-yellow-800"
                            : winner.position === "1st Runner Up"
                              ? "bg-gray-100 text-gray-800"
                              : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        <Trophy className="w-4 h-4 mr-1" />
                        {winner.position}
                      </div>
                      <img
                        src={winner.image || "/placeholder.svg"}
                        alt={`${winner.teamName} team`}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{winner.teamName}</h4>
                      <p className="text-lg font-semibold text-blue-600 mb-4">{winner.prize}</p>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Project:</h5>
                      <p className="text-gray-700 text-sm mb-4">{winner.project}</p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Team Members:</h5>
                      <ul className="space-y-1">
                        {winner.members.map((member, memberIndex) => (
                          <li key={memberIndex} className="text-sm text-gray-600">
                            {member}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internship Drive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Internship Drive 2025</h2>
            <p className="text-xl text-gray-600">Connecting talented students with leading industry partners</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="/images/internship-drive-poster.jpg"
                alt="Internship Drive Poster"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Drive Details</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-lg">23 May 2025</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-lg">Central Lecture Hall, IIT Patna</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-lg">15+ Partner Companies</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-lg">Multiple Domain Opportunities</span>
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Opportunities Available:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Software Development Internships</li>
                  <li>• Data Science & Analytics Roles</li>
                  <li>• UI/UX Design Positions</li>
                  <li>• Product Management Opportunities</li>
                  <li>• Business Development Roles</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Company Logos */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Participating Companies</h3>
            <img
              src="/images/company-logos.jpg"
              alt="Participating Companies"
              className="w-full rounded-xl shadow-lg mb-8"
            />
          </div>

          {/* Companies List */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Company Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internshipCompanies.map((company, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{company.name}</h4>
                    <p className="text-blue-600 font-semibold mb-2">{company.category}</p>
                    <p className="text-gray-600 text-sm">{company.positions}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Stay tuned for more exciting opportunities and events</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tech Symposium 2025</h3>
                <p className="text-gray-600 mb-4">
                  Annual technology conference featuring industry leaders and innovators
                </p>
                <p className="text-blue-600 font-semibold">Coming Soon</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Startup Pitch Competition</h3>
                <p className="text-gray-600 mb-4">
                  Platform for budding entrepreneurs to showcase their innovative ideas
                </p>
                <p className="text-green-600 font-semibold">Registration Opens Soon</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Coding Championship</h3>
                <p className="text-gray-600 mb-4">Inter-college competitive programming contest with exciting prizes</p>
                <p className="text-purple-600 font-semibold">Planning Phase</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Participate in Our Events?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community and be the first to know about upcoming events and opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/participation">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Join Student Senate
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
