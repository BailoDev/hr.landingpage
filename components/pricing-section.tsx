"use client"

import { useEffect, useRef, useState } from "react"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PlanFeature {
  name: string
  included: boolean
}

interface PricingPlan {
  name: string
  price: string
  period: string
  trial: string
  description: string
  features: PlanFeature[]
  buttonText: string
  highlighted?: boolean
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Basic Plan",
    price: "D 75",
    period: "/per user per month",
    trial: "14 Days Free Trial",
    description: "Ideal for small HR teams. Includes task management, collaboration, and limited integrations.",
    features: [
      { name: "Attendance Tracking", included: true },
      { name: "Leave Management", included: true },
      { name: "Basic Reports", included: true },
      { name: "Unlimited employees", included: true },
      { name: "Email Support", included: true },
    ],
    buttonText: "Sign Up",
  },
  {
    name: "Professional Plan",
    price: "D 150",
    period: "/per user per month",
    trial: "14 days Free Trial",
    description: "Ideal for small HR teams. Includes task management, collaboration, and limited integrations.",
    features: [
      { name: "Everything in Basic", included: true },
      { name: "Payroll & Payslip Automation", included: true },
      { name: "Benefits & Tax Configuration", included: true },
      { name: "Advanced Reports", included: true },
      { name: "Unlimited Employees", included: true },
      { name: "Priority Support", included: true},
    ],
    buttonText: "Sign Up",
    highlighted: true,
  },
  {
    name: "Enterprise Plan",
    price: "D 200",
    period: "/per user per month",
    trial: "14 days Free Trial",
    description: "Enterprise plan includes:",
    features: [
      { name: "Everything in Professional", included: true },
      { name: "Performance Reviews", included: true },
      { name: "Recruitment & Onboarding", included: true },
      { name: "Advanced Analytics Dashboard", included: true },
      { name: "Staff Document Upload", included: true },
      { name: "Unlimited Employees", included: true },
      { name: "24/7 dedicated Support", included: true },
    ],
    buttonText: "Buy Now",
  },
]

function PricingCard({ plan, index }: { plan: PricingPlan; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  if (plan.highlighted) {
    return (
      <div
        ref={cardRef}
        className={`relative rounded-3xl p-8 transition-all duration-700 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ 
          transitionDelay: `${index * 150}ms`,
          background: "linear-gradient(135deg, #1e3a5f 0%, #0c1929 50%, #1a365d 100%)"
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-lime-400/10 rounded-full blur-2xl" />
        
        <div className="relative z-10">
          {/* Plan Name */}
          <h3 className="text-lg font-medium text-white/90 text-center mb-6">
            {plan.name}
          </h3>

          {/* Price */}
          <div className="text-center mb-2">
            <span className="text-5xl font-bold text-white">{plan.price}</span>
          </div>
          <p className="text-white/60 text-sm text-center mb-4">{plan.period}</p>

          {/* Trial */}
          <p className="text-lime-400 text-sm text-center mb-4">{plan.trial}</p>

          {/* Description */}
          <p className="text-white/60 text-sm text-center mb-8 leading-relaxed">
            {plan.description}
          </p>

          {/* Features */}
          <div className="space-y-4 mb-8">
            {plan.features.map((feature) => (
              <div key={feature.name} className="flex items-center gap-3">
                {feature.included ? (
                  <div className="w-5 h-5 rounded-full bg-lime-400 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-gray-900" strokeWidth={3} />
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-red-400" strokeWidth={3} />
                  </div>
                )}
                <span className={`text-sm ${feature.included ? "text-white" : "text-white/40 line-through"}`}>
                  {feature.name}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button className="w-full bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold py-6 rounded-xl transition-all duration-300 hover:scale-[1.02]">
            {plan.buttonText}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-3xl p-8 shadow-sm border border-gray-100 transition-all duration-700 transform hover:shadow-lg hover:scale-[1.02] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Plan Name */}
      <h3 className="text-lg font-medium text-gray-900 text-center mb-6">
        {plan.name}
      </h3>

      {/* Price */}
      <div className="text-center mb-2">
        <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
      </div>
      <p className="text-gray-500 text-sm text-center mb-4">{plan.period}</p>

      {/* Trial */}
      <p className="text-gray-400 text-sm text-center mb-4">{plan.trial}</p>

      {/* Description */}
      <p className="text-gray-500 text-sm text-center mb-8 leading-relaxed">
        {plan.description}
      </p>

      {/* Features */}
      <div className="space-y-4 mb-8">
        {plan.features.map((feature) => (
          <div key={feature.name} className="flex items-center gap-3">
            {feature.included ? (
              <div className="w-5 h-5 rounded-full bg-lime-400 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-gray-900" strokeWidth={3} />
              </div>
            ) : (
              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <X className="w-3 h-3 text-red-500" strokeWidth={3} />
              </div>
            )}
            <span className={`text-sm ${feature.included ? "text-gray-900 font-medium" : "text-gray-400 line-through"}`}>
              {feature.name}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <Button className="w-full bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold py-6 rounded-xl transition-all duration-300 hover:scale-[1.02]">
        {plan.buttonText}
      </Button>
    </div>
  )
}

export function PricingSection() {
  return (
    <section className="py-20 px-4 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Flexible Plans for Every
            <br />
            Business Size
          </h2>
          <p className="text-gray-500 max-w-4xl mx-auto leading-relaxed">
            We provides flexible pricing plans designed to fit the size and needs of your HR team.
            Whether you&apos;re a growing startup or a large enterprise, we&apos;ve got the right plan for you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* Currency Note */}
        <p className="text-center text-gray-400 text-sm mt-8">
          All prices are in Gambian Dalasis (GMD)
        </p>
      </div>
    </section>
  )
}
