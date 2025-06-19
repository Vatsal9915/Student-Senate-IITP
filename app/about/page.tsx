import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Student Technical Council</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              A reimagined and upgraded platform that caters to diverse academic and professional aspirations of
              students through three specialized wings.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Description */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Student Technical Council?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Student Technical Council is a reimagined and upgraded version of the former Technology Club, established with the
                vision of creating a centralized, well-structured platform that caters to the diverse academic and
                professional aspirations of students. Recognizing the need for more specialized focus areas, the Student
                Senate was formed to streamline operations and maximize impact by dividing its responsibilities into
                three dedicated verticals.
              </p>
              <p className="mb-6">
                The Student Technical Council functions as the central decision-making and coordination body, ensuring synergy
                between these wings. It promotes cross-domain collaboration, efficient resource utilization, and a
                unified approach towards student empowerment.
              </p>
            </div>
          </div>

          {/* Mission and Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="border-l-4 border-l-blue-600">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To empower IIT Patna students with the skills, knowledge, and opportunities needed to excel in their
                  chosen careers while fostering strong industry partnerships that benefit both students and
                  organizations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To be recognized as the leading placement cell that consistently produces industry-ready professionals
                  who contribute meaningfully to technological advancement and societal progress.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Sets Us Apart</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence in Training</h3>
                <p className="text-gray-600">
                  Comprehensive training programs covering technical skills, soft skills, and industry-specific
                  knowledge.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Industry Connections</h3>
                <p className="text-gray-600">
                  Strong relationships with 150+ leading companies across various sectors and industries.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Personalized Support</h3>
                <p className="text-gray-600">
                  Individual mentoring and career guidance tailored to each student's aspirations and strengths.
                </p>
              </div>
            </div>
          </div>

          {/* Message from TPC Head */}
          <Card className="bg-gradient-to-r from-blue-50 to-white">
            <CardContent className="p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="TPC Head"
                    className="w-48 h-48 rounded-full object-cover border-4 border-blue-200"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Message from the TPC Head</h3>
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-4">
                    "At IIT Patna's Training and Placement Cell, we don't just focus on placing students; we focus on
                    building careers. Our commitment extends beyond the placement season to ensure that every student is
                    equipped with the skills and confidence needed to thrive in today's dynamic professional landscape.
                    <br />
                    <br />
                    We take pride in our holistic approach that combines rigorous training, industry exposure, and
                    personalized mentoring. Our success is measured not just by placement statistics, but by the
                    long-term career growth and satisfaction of our alumni."
                  </blockquote>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">Mr. Gautam Kashyap</p>
                    <p className="text-blue-600">President, Student Technical Council</p>
                    <p className="text-gray-600">IIT Patna</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
