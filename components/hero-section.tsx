"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-gradient-to-b from-blue-400 via-sky-50 to-white">
      {/* Cloud Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-48 bg-white/60 rounded-full blur-3xl" />
        <div className="absolute top-32 right-0 w-80 h-40 bg-white/70 rounded-full blur-3xl" />
        <div className="absolute top-40 left-1/4 w-72 h-36 bg-sky-100/50 rounded-full blur-2xl" />
        <div className="absolute top-16 right-1/4 w-64 h-32 bg-white/80 rounded-full blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-200/30 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-24 md:pb-16">
        {/* Centered Content */}
        <div className="text-center mb-12">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-gray-900 mb-6 font-bold">
            <span className="text-balance">
              Unify Every Part Of Your{" "}
              <span className="text-blue-500">HR</span>
              <br className="hidden sm:block" />
              <span className="text-blue-500"> Process</span> In One Platform
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8">
            A Modern HR Solution Designed To Save Time, Reduce Complexity, And Empower Your People.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-blue-900 hover:bg-blue-600 text-white font-medium rounded-full px-8 py-3 text-sm shadow-lg shadow-lime-500/25 transition-all hover:shadow-xl hover:shadow-lime-500/30">
              Start Free Trial
            </Button>
            <p className="text-gray-500 text-sm">No credit card required</p>
          </div>
        </div>

        {/* Dashboard Image */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-2xl shadow-2xl shadow-gray-300/50 overflow-hidden border border-gray-200/50">
            {/* Replace this src with your actual dashboard image */}
            <img
              src="/images/hr-dashboard.png"
              alt="Gomindz HR System Dashboard showing General Reports with employee statistics, attendance tracking, and data management features"
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Decorative glow effect behind dashboard */}
          <div className="absolute -inset-4 bg-gradient-to-r from-sky-200/20 via-blue-200/30 to-sky-200/20 rounded-3xl blur-2xl -z-10" />
        </div>
      </div>
    </section>
  )
}
