"use client"

import { useEffect, useState } from "react"

const achievements = [
  { label: "Wings Established", value: "3", icon: "🎯", description: "DISHA, ARTHNITI, TATVA" },
  { label: "Sub-Clubs Created", value: "24+", icon: "🏢", description: "Specialized focus areas" },
  { label: "Launch Year", value: "2025", icon: "🚀", description: "New beginning for students" },
  { label: "Core Values", value: "10", icon: "⭐", description: "Guiding principles" },
  { label: "Participation Levels", value: "5", icon: "📈", description: "Growth pathway stages" },
  { label: "Team Structure", value: "9", icon: "👥", description: "Organizational teams" },
]

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("stats-section")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats-section" className="py-20 bg-gradient-to-br from-blue-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Technical Council at a Glance</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our newly established structure designed to maximize student impact and engagement across diverse domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`relative  bg-gradient-to-br from-blue-50 via-white to-blue-50 backdrop-blur-lg rounded-3xl shadow-lg p-8 text-center transform transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl overflow-hidden ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Grain effect overlay */}
              <div
              className="pointer-events-none absolute inset-0 z-0"
              style={{
                backgroundImage:
                "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 fill=%22none%22><filter id=%22grain%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 seed=%221%22/></filter><rect width=%22100%22 height=%22100%22 filter=%22url(%23grain)%22/></svg>')",
                opacity: 0.15,
                mixBlendMode: "overlay",
              }}
              />
              <div className="relative z-10">
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <div className="text-3xl font-bold text-blue-500 mb-2">{achievement.value}</div>
              <div className="text-gray-900 font-medium mb-2">{achievement.label}</div>
              <div className="text-sm text-gray-600">{achievement.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
