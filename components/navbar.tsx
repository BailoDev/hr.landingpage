"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, Layers, FileText, DollarSign, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Feature", href: "/feature" },
  { name: "Testimonial", href: "/page" },
  { name: "Pricing", href: "/pricing" },
]

const mobileNavItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Feature", href: "/feature", icon: Layers },
  { name: "Testimonials", href: "/page", icon: FileText },
  { name: "Pricing", href: "/pricing", icon: DollarSign },
]

export function Navbar() {
  const [activeItem, setActiveItem] = useState("Home")

  return (
    <>
      {/* Desktop Navbar - Always styled like scrolled state */}
      <nav 
        className="hidden md:flex items-center justify-between max-w-7xl mx-auto px-6 lg:px-12 py-4 sticky top-4 z-50 bg-white/90 backdrop-blur-md shadow-sm rounded-full mx-4 lg:mx-auto transition-all duration-300"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="text-xl font-semibold text-gray-900">
            GoHR
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Login
          </Link>
          <Button 
            className="rounded-full px-5 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white transition-all"
          >
            Sign Up
          </Button>
        </div>
      </nav>

      {/* Mobile Top Bar - Logo + Auth - Always styled like scrolled state */}
      <div 
        className="md:hidden flex items-center justify-between px-4 py-3 sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="text-lg font-semibold text-gray-900">
            Taskko
          </span>
        </Link>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Login
          </Link>
          <Button 
            className="rounded-full px-4 py-1.5 text-sm bg-blue-600 hover:bg-blue-700 text-white transition-all"
          >
            Sign Up
          </Button>
        </div>
      </div>

      {/* Mobile Bottom Navigation - Apple Style */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 z-50 pb-safe">
        <div className="flex items-center justify-around px-4 py-2">
          {mobileNavItems.map((item) => {
            const Icon = item.icon
            const isActive = activeItem === item.name
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`flex flex-col items-center justify-center min-w-[56px] py-2 px-2 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Icon
                  className={`w-5 h-5 mb-1 transition-transform duration-200 ${
                    isActive ? "scale-110" : ""
                  }`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span className={`text-[10px] font-medium ${isActive ? "font-semibold" : ""}`}>
                  {item.name}
                </span>
              </Link>
            )
          })}
        </div>
        {/* Home indicator bar for iOS-like experience */}
        <div className="flex justify-center pb-1">
          <div className="w-32 h-1 bg-gray-300 rounded-full" />
        </div>
      </nav>
    </>
  )
}
