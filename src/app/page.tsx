import Image from "next/image"
import { ArrowRight, Plane, Settings, ShieldCheck, Wrench } from "lucide-react"

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#0f2b4c]">
          <div 
            className="absolute inset-0 opacity-50 mix-blend-screen"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1542304899-7f375c3db731?q=80&w=2000&auto=format&fit=crop")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2b4c] via-[#0f2b4c]/80 to-transparent z-10"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl px-4 relative z-20">
          <div className="max-w-2xl transform transition-all duration-1000 translate-y-0 opacity-100">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 font-hanken text-sm font-semibold tracking-widest uppercase mb-6">
              Premium Aerospace Components
            </div>
            <h1 className="text-5xl md:text-7xl font-oswald font-bold text-white uppercase tracking-tight leading-[1.05] mb-6 drop-shadow-lg">
              Powering <span className="text-blue-400">Flight</span> with Precision
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 font-hanken mb-10 max-w-xl font-light leading-relaxed">
              Crew Worth Aviation designs and supplies advanced piston aircraft engine spare parts for superior performance and reliability worldwide.
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              <a href="/parts" className="bg-blue-500 text-white px-8 md:px-10 py-4 md:py-5 uppercase font-bold tracking-wider hover:bg-blue-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 border border-blue-400 flex items-center justify-center gap-3 text-sm md:text-base rounded-sm">
                View Parts Catalog <ArrowRight className="h-5 w-5" />
              </a>
              <a href="/contact" className="bg-white/5 backdrop-blur-sm text-white px-8 md:px-10 py-4 md:py-5 uppercase font-bold tracking-wider hover:bg-white hover:text-[#0f2b4c] hover:scale-105 transition-all duration-300 border border-white/30 flex items-center justify-center gap-3 text-sm md:text-base rounded-sm">
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
            <div className="bg-white p-10 border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-blue-400 transition-all duration-500 group rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100 transition-colors"></div>
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

            <div className="bg-white p-10 border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-blue-400 transition-all duration-500 group rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100 transition-colors"></div>
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

            <div className="bg-white p-10 border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-blue-400 transition-all duration-500 group rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100 transition-colors"></div>
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
      <section className="relative py-24 border-y border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#0f2b4c]">
          <div 
            className="absolute inset-0 opacity-20 mix-blend-screen"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
        <div className="container mx-auto max-w-5xl px-4 text-center relative z-10">
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
