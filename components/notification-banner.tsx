"use client"

import { useState } from "react"
import { X, Bell } from "lucide-react"

export function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bell className="w-4 h-4" />
          <span className="text-sm font-medium">
            🗳️ Student Senate Elections 2025 - Nominations open until March 15th |
            <a href="/elections" className="underline ml-1 hover:text-orange-200">
              Learn More
            </a>
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="p-1 hover:bg-orange-600 rounded transition-colors"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
