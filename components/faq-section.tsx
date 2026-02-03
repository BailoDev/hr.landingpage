"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "How Secure is Employee Data in the system?",
    answer:
      "We implement enterprise-grade security with role-based access control, encrypted data transmission, and secure authentication. Only authorized personnel can access specific employee information based on their role and permissions.",
  },
  {
    question: "How does the attendance tracking work?",
    answer:
      "Our system uses QR code-based check-in/out with GPS location verification. Employees scan their unique QR code to clock in/out, and the system automatically tracks their attendance with location confirmation for accurate time tracking.",
  },
  {
    question: "How does payroll system work?",
    answer:
      "The payroll system processes monthly payments based on attendance records and salary information. It calculates taxes, deductions, and benefits, then generates detailed payslips for each employee.",
  },
  {
    question: "Can I manage multiple departments and locations",
    answer:
      "Yes, the system supports multi-department and multi-location management. You can create different departments and handle employees across multiple locations with timezone-aware processing.",
  },
  {
    question: "How do I receive notifcations about system updates?",
    answer:
      "The system sends automatic email notifications for leave request approvals, attendance alerts, payroll settings and other important updates.",
  },
  {
    question: "Can I generate reports for payroll and attendance?",
    answer:
      "Yes, the system provides comprehensive reporting capabilities. You can generate employee reports, attendance reports, payroll reports, leave reports, and performance reports. All reports can be exported to PDF or Excel format for further analysis.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-white via-sky-50/30 to-white">
      {/* Before effect - Left decorative blob */}
      <div className="absolute top-0 left-0 w-72 h-72 md:w-96 md:h-96">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-200/60 via-cyan-100/40 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/4" />
        <div className="absolute top-20 left-10 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-tr from-blue-100/50 to-sky-50/30 rounded-full blur-2xl" />
      </div>

      {/* After effect - Right decorative blob */}
      <div className="absolute bottom-0 right-0 w-80 h-80 md:w-[500px] md:h-[500px]">
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-200/50 via-sky-100/40 to-transparent rounded-full blur-3xl transform translate-x-1/3 translate-y-1/4" />
        <div className="absolute bottom-20 right-10 w-40 h-40 md:w-56 md:h-56 bg-gradient-to-bl from-indigo-100/40 to-cyan-50/30 rounded-full blur-2xl" />
        <div className="absolute bottom-40 right-20 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-l from-sky-100/60 to-blue-50/40 rounded-full blur-xl" />
      </div>

      {/* Additional floating decorative elements */}
      <div className="absolute top-1/3 left-10 w-20 h-20 bg-gradient-to-br from-cyan-100/40 to-transparent rounded-full blur-xl hidden md:block" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full blur-lg hidden md:block" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* <span className="text-blue-600 text-sm font-medium tracking-wide">
            Ask Us Anything
          </span> */}
          <h2 className="mt-3 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-500 text-base md:text-lg">
            Our friendly team would love to answer your questions.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-500 transform ${
                  isOpen
                    ? "bg-slate-800 text-white shadow-xl shadow-slate-800/20 scale-[1.02]"
                    : "bg-gray-100/80 backdrop-blur-sm text-gray-900 hover:bg-gray-100 hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                >
                  <span
                    className={`font-medium text-base md:text-lg pr-4 transition-colors duration-300 ${
                      isOpen ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-white/20 text-white rotate-0"
                        : "bg-white text-gray-600 border border-gray-200"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 transition-transform duration-300" />
                    ) : (
                      <Plus className="w-4 h-4 transition-transform duration-300" />
                    )}
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base leading-relaxed ${
                        isOpen ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
