"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CtaSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50/50 to-cyan-50/30">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-6">
              <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                Join
              </span>
              <span className="text-gray-600 text-sm">
                Streamline your hr process
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight tracking-tight">
              Ready to modernize
              <br />
              your HR processes?
            </h2>

            {/* Description */}
            <p className="mt-6 text-gray-600 text-base md:text-md max-w-md mx-auto lg:mx-0">
              Join thousands of companies using GoHR to streamline their workforce management and boost employee satisfaction.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-base font-medium shadow-lg shadow-blue-600/25 transition-all hover:shadow-xl hover:shadow-blue-600/30">
                Get Started
              </Button>
            </div>
          </div>

          {/* Right Content - Real Image */}
          <div className="relative">
            <div className="relative w-full aspect-[4/3] lg:aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hr-dashboard.png"
                alt="Project Management Dashboard Preview"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Optional: Decorative floating element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}