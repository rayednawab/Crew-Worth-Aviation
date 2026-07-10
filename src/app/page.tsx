import Image from "next/image"
import { ArrowRight, Plane, Settings, ShieldCheck, Wrench } from "lucide-react"

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex items-center bg-[#32373c]">
        {/* We would use an actual aviation hero image here, using placeholder styling to simulate the dark overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0f2b4c]/80 mix-blend-multiply z-10"></div>
          {/* Fallback pattern to simulate an aircraft hanger or engine close up */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        </div>
        
        <div className="container mx-auto max-w-7xl px-4 relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-oswald font-bold text-white uppercase tracking-tight leading-[1.1] mb-6 shadow-sm">
              Powering <span className="text-[#30729f]">Flight</span> with Precision Parts
            </h1>
            <p className="text-xl text-slate-200 font-hanken mb-8 max-w-xl">
              Crew Worth Aviation designs and supplies advanced piston aircraft engine spare parts for superior performance and reliability worldwide.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <a href="/parts" className="bg-[#30729f] text-white px-6 md:px-8 py-4 uppercase font-bold tracking-wider hover:bg-[#255a7e] transition-colors border-2 border-[#30729f] flex items-center justify-center gap-2 text-sm md:text-base">
                View Parts Catalog <ArrowRight className="h-5 w-5" />
              </a>
              <a href="/contact" className="bg-transparent text-white px-6 md:px-8 py-4 uppercase font-bold tracking-wider hover:bg-white hover:text-[#32373c] transition-colors border-2 border-white flex items-center justify-center gap-2 text-sm md:text-base">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services / Categories Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-oswald font-bold text-[#32373c] uppercase tracking-tight">Our Expertise</h2>
            <div className="h-1 w-20 bg-[#30729f] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 border border-slate-200 hover:shadow-xl hover:border-[#30729f] transition-all group">
              <div className="h-16 w-16 bg-[#30729f] text-white flex items-center justify-center rounded-none mb-6 group-hover:scale-110 transition-transform">
                <Settings className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-oswald font-bold text-[#32373c] uppercase mb-4 group-hover:text-[#30729f] transition-colors">Engine Components</h3>
              <p className="text-slate-600 mb-6 font-hanken">
                Certified spare parts including cylinders, crankcases, and gasket sets for major aviation engines. Built to exact OEM specifications.
              </p>
              <a href="/parts?category=engine" className="text-[#30729f] font-bold uppercase text-sm tracking-wider flex items-center gap-2 hover:text-[#32373c]">
                Explore Components <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="bg-white p-10 border border-slate-200 hover:shadow-xl hover:border-[#30729f] transition-all group">
              <div className="h-16 w-16 bg-[#30729f] text-white flex items-center justify-center rounded-none mb-6 group-hover:scale-110 transition-transform">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-oswald font-bold text-[#32373c] uppercase mb-4 group-hover:text-[#30729f] transition-colors">Overhaul Kits</h3>
              <p className="text-slate-600 mb-6 font-hanken">
                Complete service and overhaul kits designed for maximum reliability. Everything you need for a safe and compliant engine rebuild.
              </p>
              <a href="/parts?category=kits" className="text-[#30729f] font-bold uppercase text-sm tracking-wider flex items-center gap-2 hover:text-[#32373c]">
                View Overhaul Kits <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="bg-white p-10 border border-slate-200 hover:shadow-xl hover:border-[#30729f] transition-all group">
              <div className="h-16 w-16 bg-[#30729f] text-white flex items-center justify-center rounded-none mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-oswald font-bold text-[#32373c] uppercase mb-4 group-hover:text-[#30729f] transition-colors">Technical Support</h3>
              <p className="text-slate-600 mb-6 font-hanken">
                Access to service bulletins, technical publications, and our team of master aviation mechanics for AOG situations.
              </p>
              <a href="/documents" className="text-[#30729f] font-bold uppercase text-sm tracking-wider flex items-center gap-2 hover:text-[#32373c]">
                Access Documents <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#30729f] text-white border-y-[12px] border-[#32373c]">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <Plane className="h-16 w-16 mx-auto mb-8 text-white/80" />
          <h2 className="text-4xl font-oswald font-bold uppercase tracking-tight mb-6">Trusted by MROs Worldwide</h2>
          <p className="text-xl text-blue-100 font-hanken mb-10 max-w-3xl mx-auto">
            From single-engine pistons to extensive fleet operations, Crew Worth Aviation delivers the precision components required to keep you safely in the air.
          </p>
          <a href="/contact" className="bg-white text-[#30729f] px-10 py-4 uppercase font-bold tracking-wider hover:bg-[#32373c] hover:text-white transition-colors inline-flex items-center gap-2">
            Contact Sales Engineering
          </a>
        </div>
      </section>
    </div>
  )
}
