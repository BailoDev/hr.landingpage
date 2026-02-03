"use client"

import { useEffect, useRef, useState } from "react"
import { Clock, Calendar, Wallet, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Attendance Tracking",
    description: "Monitor employee attendance in real-time with automated check-ins and comprehensive reporting.",
    color: "bg-cyan-500",
  },
  {
    icon: Calendar,
    title: "Leave Management",
    description: "Streamline leave requests, approvals, and balance tracking with an intuitive calendar interface.",
    color: "bg-emerald-500",
  },
  {
    icon: Wallet,
    title: "Payroll",
    description: "Automate salary calculations, deductions, and disbursements with accuracy and compliance.",
    color: "bg-amber-500",
  },
  {
    icon: TrendingUp,
    title: "Performance Tracking",
    description: "Set goals, conduct reviews, and track employee growth with actionable insights and analytics.",
    color: "bg-violet-500",
  },
]

// Feature card mockup components
function AttendanceMockup() {
  return (
    <div className="mt-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
      {/* Timeline header */}
      <div className="flex justify-between text-xs text-gray-400 mb-3">
        {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
          <span key={day} className="w-12 text-center">{day}</span>
        ))}
      </div>
      {/* Progress bars */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-cyan-500" />
          </div>
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-cyan-500 rounded-full" style={{ width: "90%" }} />
          </div>
          <span className="text-xs font-medium text-gray-600">90%</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
          </div>
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full" style={{ width: "75%" }} />
          </div>
          <span className="text-xs font-medium text-gray-600">75%</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-amber-500" />
          </div>
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-amber-500 rounded-full" style={{ width: "85%" }} />
          </div>
          <span className="text-xs font-medium text-gray-600">85%</span>
        </div>
      </div>
    </div>
  )
}

function LeaveMockup() {
  return (
    <div className="mt-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
      {/* Task list */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-100">
          <div className="w-2 h-2 rounded-full bg-cyan-500" />
          <span className="text-xs text-gray-600 flex-1">Annual Leave</span>
          <span className="text-[10px] px-2 py-0.5 bg-cyan-100 text-cyan-700 rounded-full">Approved</span>
        </div>
        <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-100">
          <div className="w-2 h-2 rounded-full bg-amber-500" />
          <span className="text-xs text-gray-600 flex-1">Sick Leave</span>
          <span className="text-[10px] px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full">Pending</span>
        </div>
        <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-100">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-xs text-gray-600 flex-1">Remote Work</span>
          <span className="text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full">Approved</span>
        </div>
        <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-100">
          <div className="w-2 h-2 rounded-full bg-violet-500" />
          <span className="text-xs text-gray-600 flex-1">Personal Day</span>
          <span className="text-[10px] px-2 py-0.5 bg-violet-100 text-violet-700 rounded-full">Review</span>
        </div>
      </div>
    </div>
  )
}

function PayrollMockup() {
  return (
    <div className="mt-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
      {/* Calendar grid */}
      <div className="flex gap-1 mb-3">
        {["Mon", "Tue", "Wed", "Thu"].map((day, i) => (
          <div key={day} className="flex-1 text-center">
            <span className="text-[10px] text-gray-400">{day}</span>
            {i === 2 && (
              <div className="mt-1 w-full h-1 bg-cyan-500 rounded-full" />
            )}
          </div>
        ))}
      </div>
      {/* Time blocks */}
      <div className="grid grid-cols-4 gap-1">
        <div className="col-span-2 p-2 bg-cyan-100 rounded-lg">
          <span className="text-[10px] font-medium text-cyan-700">Payroll Run</span>
          <span className="block text-[8px] text-cyan-600">9:00 AM</span>
        </div>
        <div className="col-span-1 p-2 bg-amber-100 rounded-lg">
          <span className="text-[10px] font-medium text-amber-700">Review</span>
          <span className="block text-[8px] text-amber-600">2:00 PM</span>
        </div>
        <div className="col-span-1 row-span-2 p-2 bg-emerald-100 rounded-lg">
          <span className="text-[10px] font-medium text-emerald-700">Approval</span>
          <span className="block text-[8px] text-emerald-600">All Day</span>
        </div>
        <div className="col-span-1 p-2 bg-violet-100 rounded-lg mt-1">
          <span className="text-[10px] font-medium text-violet-700">Tax Filing</span>
          <span className="block text-[8px] text-violet-600">10:00 AM</span>
        </div>
        <div className="col-span-2 p-2 bg-rose-100 rounded-lg mt-1">
          <span className="text-[10px] font-medium text-rose-700">Disbursement</span>
          <span className="block text-[8px] text-rose-600">4:00 PM</span>
        </div>
      </div>
    </div>
  )
}

function PerformanceMockup() {
  return (
    <div className="mt-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
      {/* Kanban-style columns */}
      <div className="flex gap-2">
        <div className="flex-1">
          <div className="flex items-center gap-1 mb-2">
            <div className="w-2 h-2 rounded-full bg-gray-400" />
            <span className="text-[10px] font-medium text-gray-600">Goals</span>
            <span className="text-[10px] text-gray-400 ml-auto">3</span>
          </div>
          <div className="space-y-1">
            <div className="p-2 bg-white rounded-lg border border-gray-100">
              <span className="text-[10px] text-gray-700">Q1 Targets</span>
              <div className="w-full h-1 bg-gray-200 rounded-full mt-1 overflow-hidden">
                <div className="h-full bg-cyan-500 rounded-full" style={{ width: "60%" }} />
              </div>
            </div>
            <div className="p-2 bg-white rounded-lg border border-gray-100">
              <span className="text-[10px] text-gray-700">Skills Dev</span>
              <div className="w-full h-1 bg-gray-200 rounded-full mt-1 overflow-hidden">
                <div className="h-full bg-violet-500 rounded-full" style={{ width: "40%" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-1 mb-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-medium text-gray-600">Completed</span>
            <span className="text-[10px] text-gray-400 ml-auto">2</span>
          </div>
          <div className="space-y-1">
            <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-100">
              <span className="text-[10px] text-emerald-700">Training</span>
              <div className="flex items-center gap-1 mt-1">
                <div className="w-3 h-3 rounded-full bg-emerald-200" />
                <span className="text-[8px] text-emerald-600">100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mockups = [AttendanceMockup, LeaveMockup, PayrollMockup, PerformanceMockup]

export function FeaturesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => 
                prev.includes(index) ? prev : [...prev, index]
              )
            }
          })
        },
        { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
      )
      
      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center px-6 mb-14">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Everything you Need in One{" "}
            <span className="block">HR Platform</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-4xl mx-auto">
            From personal dashboards to seamless attendance tracking, leave management, performance tracking and payroll, GoHR unites essential HR features for engaged teams.
          </p>
        </div>
        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const Mockup = mockups[index]
            const isVisible = visibleCards.includes(index)
            
            return (
              <div
                key={feature.title}
                ref={(el) => { cardRefs.current[index] = el }}
                className={`group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-500 cursor-pointer ${
                  isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms" 
                }}
              >
                {/* Icon and Title */}
                <div className="flex items-start gap-3 mb-3">
                  <div className={`p-2 rounded-xl ${feature.color} text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Mockup Image */}
                <div className="group-hover:scale-[1.02] transition-transform duration-300">
                  <Mockup />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
