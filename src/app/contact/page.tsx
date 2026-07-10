"use client"

import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-oswald font-bold text-[#32373c] uppercase tracking-tight">Contact Us</h1>
          <div className="h-1 w-20 bg-[#30729f] mx-auto mt-6 mb-6"></div>
          <p className="text-lg text-slate-600 font-hanken max-w-2xl mx-auto">
            Get in touch with our aviation experts for parts inquiries, technical support, or to learn more about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 md:p-12 shadow-sm border border-slate-200">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-oswald font-bold text-[#32373c] uppercase border-b-2 border-[#30729f] pb-4 inline-block">Direct Support</h2>
            
            <div className="flex items-start gap-4">
              <div className="bg-[#30729f] p-3 text-white">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-oswald font-bold uppercase text-[#32373c]">Customer Service</h3>
                <a href="tel:800.326.0089" className="text-[#30729f] font-hanken hover:underline block mt-1">800.326.0089</a>
                
                <h3 className="font-oswald font-bold uppercase text-[#32373c] mt-4">Tech Support</h3>
                <a href="tel:251.438.3411" className="text-[#30729f] font-hanken hover:underline block mt-1">251.438.3411</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#30729f] p-3 text-white">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-oswald font-bold uppercase text-[#32373c]">Email Sales</h3>
                <a href="mailto:sales@crewworthaviation.com" className="text-[#30729f] font-hanken hover:underline block mt-1">sales@crewworthaviation.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#30729f] p-3 text-white">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-oswald font-bold uppercase text-[#32373c]">Global Headquarters</h3>
                <address className="text-slate-600 font-hanken not-italic mt-1 leading-relaxed">
                  Crew Worth Aviation Operations<br />
                  Aviation Technology Park<br />
                  Global Distribution Center
                </address>
              </div>
            </div>
          </div>

          {/* Simple Contact Form */}
          <div>
            <h2 className="text-2xl font-oswald font-bold text-[#32373c] uppercase border-b-2 border-[#30729f] pb-4 inline-block mb-8">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully to Crew Worth Aviation!') }}>
              <div>
                <label className="block text-sm font-bold uppercase text-[#32373c] mb-2 font-oswald tracking-wide">Full Name</label>
                <input required type="text" className="w-full px-4 py-3 border border-slate-300 focus:border-[#30729f] focus:outline-none bg-slate-50 transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase text-[#32373c] mb-2 font-oswald tracking-wide">Email Address</label>
                <input required type="email" className="w-full px-4 py-3 border border-slate-300 focus:border-[#30729f] focus:outline-none bg-slate-50 transition-colors" placeholder="john@airline.com" />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase text-[#32373c] mb-2 font-oswald tracking-wide">Message / Parts Request</label>
                <textarea required rows={5} className="w-full px-4 py-3 border border-slate-300 focus:border-[#30729f] focus:outline-none bg-slate-50 transition-colors resize-none" placeholder="How can we assist you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#30729f] text-white py-4 uppercase font-bold font-oswald tracking-wider hover:bg-[#32373c] transition-colors border-2 border-transparent">
                Submit Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
