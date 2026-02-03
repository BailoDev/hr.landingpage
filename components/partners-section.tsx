"use client"

import Image from "next/image"

// Partner logos - Using local images from public/partners folder
const partners = [
  { name: "AB Financial", image: "/partners/ab.png" },
  { name: "Academy", image: "/partners/academy.webp" },
  { name: "Aneked", image: "/partners/aneked.png" },
  { name: "Easy Financial", image: "/partners/easy_financial.png" },
  { name: "Modempay", image: "/partners/modem.png" },
  { name: "Forek Financial", image: "/partners/porek.webp" },
]

export function PartnersSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <p className="text-center text-gray-600 text-sm sm:text-base mb-8 sm:mb-12 max-w-2xl mx-auto">
          Over{" "}
          <span className="font-medium text-gray-900">20+ Organizations</span>{" "}
          Trust Gomindz HR system for Peak Productivity
        </p>

        {/* Infinite Scrolling Partner Logos */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Container */}
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex items-center justify-center h-20 px-8 sm:px-12 flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                >
                  <div className="relative h-12 w-32 sm:h-16 sm:w-40">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 128px, 160px"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex animate-marquee" aria-hidden="true">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.name}-duplicate-${index}`}
                  className="flex items-center justify-center h-20 px-8 sm:px-12 flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                >
                  <div className="relative h-12 w-32 sm:h-16 sm:w-40">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 128px, 160px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}