"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Download, ChevronDown } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Senate" },
    {
      href: "/wings",
      label: "Wings",
      dropdown: [
        { href: "/wings/disha", label: "DISHA" },
        { href: "/wings/arthniti", label: "ARTHNITI" },
        { href: "/wings/tatva", label: "TATVA" },
      ],
    },
    { href: "/team", label: "Our Team" },
    { href: "/events", label: "Events" },
    { href: "/#notices", label: "Notices" },
    { href: "/participation", label: "Participation" },
    { href: "/contact", label: "Contact Us" },
  ]

  const handleDownloadBrochure = () => {
    const link = document.createElement("a")
    link.href = "/student-senate-brochure.pdf"
    link.download = "Student-Senate-Brochure-IIT-Patna.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleNoticesClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (typeof window !== "undefined") {
      const noticesSection = document.getElementById("notices-section")
      if (noticesSection) {
        noticesSection.scrollIntoView({ behavior: "smooth" })
      } else {
        // If not on home page, navigate to home page with hash
        window.location.href = "/#notices"
      }
    }
    setIsOpen(false)
  }

  const isNoticesActive = () => {
    if (!isMounted || typeof window === "undefined") return false
    return pathname === "/" && window.location.hash === "#notices"
  }

  return (
    <nav
      className={`sticky top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-white/20 backdrop-blur-md shadow-lg border-b border-blue-100" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200 shadow-lg">
                <span className="text-white font-bold text-lg">SS</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:flex flex-col justify-center">
              <h1 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors leading-tight">
                Student Senate
              </h1>
              <p className="text-sm text-blue-500 font-medium leading-tight">IIT Patna</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.href} className="relative flex items-center">
              {item.dropdown ? (
                <div
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown(null)}
                >
                <button
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                  pathname.startsWith(item.href)
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === item.href && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                    key={dropdownItem.href}
                    href={dropdownItem.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                    {dropdownItem.label}
                    </Link>
                  ))}
                  </div>
                )}
                </div>
              ) : item.label === "Notices" ? (
                <button
                onClick={handleNoticesClick}
                className={`relative px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                  isNoticesActive()
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
                }`}
                >
                {item.label}
                </button>
              ) : (
                <Link
                href={item.href}
                className={`relative px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                  pathname === item.href
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
                }`}
                >
                {item.label}
                {pathname === item.href && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                )}
                </Link>
              )}
              </div>
            ))}
            </div>
            <div className="hidden lg:flex ml-6 items-center">
            <Button
              size="sm"
              onClick={handleDownloadBrochure}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 px-4 py-2 h-10"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Brochure
            </Button>
            </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              size="sm"
              onClick={handleDownloadBrochure}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs px-3 py-2 h-8"
            >
              <Download className="w-3 h-3 mr-1" />
              Brochure
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors flex items-center justify-center"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.href}>
                {item.label === "Notices" ? (
                  <button
                    onClick={handleNoticesClick}
                    className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                      isNoticesActive()
                        ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                      pathname === item.href || pathname.startsWith(item.href)
                        ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
                {item.dropdown && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.href}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
