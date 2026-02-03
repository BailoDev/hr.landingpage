"use client"

import Image from "next/image"
import { BadgeCheck } from "lucide-react"

interface Testimonial {
  company: string
  avatar: string
  text: string
}

const topRowTestimonials: Testimonial[] = [
  {
    company: "AB Financial",
    avatar: "/partners/ab.png",
    text: "GoHR has completely transformed our HR operations. We've saved countless hours by automating tasks, and our team collaboration has never been better!"
  },
  {
    company: "Easy Financial",
    avatar: "/partners/easy_financial.png",
    text: "GoHR has completely transformed our HR operations. We've saved countless hours by automating tasks, and our team collaboration has never been better!"
  },
  {
    company: "Aneked",
    avatar: "/partners/aneked.png",
    text: "GoHR has completely transformed our HR operations. We've saved countless hours by automating tasks, and our team collaboration has never been better!"
  },
  {
    company: "Porek Financial",
    avatar: "/partners/porek.webp",
    text: "The platform's intuitive design made onboarding a breeze. Our HR team productivity increased by 40% in the first month alone."
  },
  {
    company: "Modem Pay",
    avatar: "/partners/modem.png",
    text: "We've tried multiple HR solutions, but Taskko stands out with its seamless integrations and exceptional customer support."
  },
  {
    company: "Gomindz Academy",
    avatar: "/partners/academy.webp",
    text: "Game-changer for our remote team. Managing payroll and attendance across time zones has never been easier."
  },
]

const bottomRowTestimonials: Testimonial[] = [
  {
    company: "Gomindz Academy",
    avatar: "/partners/academy.webp",
    text: "GoHR has completely transformed our HR operations. We've saved countless hours by automating tasks, and our team collaboration has never been better!"
  },
  {
    company: "Modem Pay",
    avatar: "/partners/modem.png",
    text: "GoHR has completely transformed our HR operations. We've saved countless hours by automating tasks, and our team collaboration has never been better!"
  },
  {
    company: "Porek Financial",
    avatar: "/partners/porek.webp",
    text: "GoHR has completely transformed our HR operations. We've saved countless hours by automating tasks, and our team collaboration has never been better!"
  },
  {
    company: "Aneked",
    avatar: "/partners/aneked.png",
    text: "The analytics dashboard gives us insights we never had before. Decision-making is now data-driven and effective."
  },
  {
    company: "Easy Financial",
    avatar: "/partners/easy_financial.png",
    text: "Scalability is incredible. We went from 50 to 500 employees and Taskko handled it without any hiccups."
  },
  {
    company: "AB Financial",
    avatar: "/partners/ab.png",
    text: "Best investment we made this year. The ROI was visible within the first quarter of implementation."
  },
]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex-shrink-0 w-[320px] md:w-[380px] bg-gray-50 rounded-2xl p-6 mx-3">
      {/* Profile */}
      <div className="flex items-center gap-3 mb-4">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={testimonial.avatar || "/placeholder.svg"}
            alt={testimonial.company}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-gray-900 text-sm">{testimonial.company}</span>
            <BadgeCheck className="w-4 h-4 text-blue-500 fill-blue-500" />
          </div>
        </div>
      </div>
      
      {/* Testimonial Text */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {testimonial.text}
      </p>
    </div>
  )
}

export function TestimonialSection() {
  // Double the arrays for seamless loop
  const topRow = [...topRowTestimonials, ...topRowTestimonials]
  const bottomRow = [...bottomRowTestimonials, ...bottomRowTestimonials]

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-14">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
          Trusted by HR Teams{" "}
          <span className="block">Across Industries</span>
        </h2>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
          Empowering teams across industries with smarter HR management and improved performance.
        </p>
      </div>

      {/* Testimonial Rows */}
      <div className="space-y-6">
        {/* Top Row - Slides Left */}
        <div className="relative">
          {/* Left Gradient Mask */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          {/* Right Gradient Mask */}
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="flex animate-marquee-left">
            {topRow.map((testimonial, index) => (
              <TestimonialCard 
                key={`top-${testimonial.company}-${index}`} 
                testimonial={testimonial} 
              />
            ))}
          </div>
        </div>

        {/* Bottom Row - Slides Right */}
        <div className="relative">
          {/* Left Gradient Mask */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          {/* Right Gradient Mask */}
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="flex animate-marquee-right">
            {bottomRow.map((testimonial, index) => (
              <TestimonialCard 
                key={`bottom-${testimonial.company}-${index}`} 
                testimonial={testimonial} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}