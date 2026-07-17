import type { Metadata } from "next";
import { Hanken_Grotesk, Oswald } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import Image from "next/image";

const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: '--font-hanken' });
const oswald = Oswald({ subsets: ["latin"], variable: '--font-oswald' });

export const metadata: Metadata = {
  title: "Crew Worth Aviation",
  description: "Enterprise Aviation Spare Parts Management",
  icons: {
    icon: '/icon.png?v=2',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hanken.className} ${hanken.variable} ${oswald.variable} font-sans text-slate-900 bg-white`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            {/* Top Bar - Very Continental Aero */}
            <div className="w-full bg-[#32373c] text-white py-1.5 md:py-1">
              <div className="container mx-auto max-w-7xl px-4 flex flex-col md:flex-row justify-center md:justify-end items-center gap-2 md:gap-6">
                <div className="flex flex-col space-y-2 text-sm text-slate-400">
                  <a href="tel:+919004655405" className="hover:text-blue-300">Customer Service: +91 90046 55405</a>
                  <a href="mailto:info@crewworthaviation.com" className="hover:text-blue-300">Email: info@crewworthaviation.com</a>
                </div>
              </div>
            </div>

            {/* Main Header */}
            <header className="w-full bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm sticky top-0 z-50 transition-all duration-300">
              <div className="container mx-auto flex flex-col md:flex-row md:h-24 items-center px-4 py-4 md:py-0 max-w-7xl justify-between gap-4 md:gap-0">
                <a href="/" className="flex items-center gap-4">
                  <Image src="/images/crewlogo.jpeg" alt="Crew Worth Aviation Logo" width={50} height={50} className="object-contain mix-blend-multiply md:w-[60px] md:h-[60px]" />
                  <div className="flex flex-col">
                    <span className="text-2xl md:text-3xl font-oswald font-bold text-[#30729f] uppercase tracking-tight leading-none">Crew Worth</span>
                    <span className="text-lg md:text-xl font-oswald text-[#32373c] uppercase tracking-widest leading-none mt-1">Aviation</span>
                  </div>
                </a>
                
                <nav className="flex items-center gap-6 md:gap-8 text-[13px] md:text-[14px] font-bold text-slate-700 uppercase tracking-widest w-full md:w-auto justify-center md:justify-end">
                  <a href="/parts" className="hover:text-blue-600 transition-colors py-2 relative group">
                    Products & Parts
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <a href="/contact" className="bg-blue-600 text-white px-6 md:px-8 py-2.5 md:py-3 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 rounded-sm">Contact Us</a>
                </nav>
              </div>
            </header>
            
            <main className="flex-1">
              {children}
            </main>

            {/* Footer */}
            <footer className="bg-[#32373c] text-white pt-16 pb-8 mt-auto border-t-8 border-[#30729f]">
              <div className="container mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                  <div className="col-span-1 md:col-span-1">
                    <h3 className="font-oswald text-2xl uppercase tracking-widest mb-6 font-bold">Crew Worth <span className="text-[#30729f]">Aviation</span></h3>
                    <p className="text-sm text-slate-300 font-hanken leading-relaxed">
                      Global leaders in aircraft engine components, spare parts, and overhaul kits. Powering flight with precision.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-oswald text-lg uppercase tracking-wider mb-6 text-white border-b-2 border-[#30729f] pb-2 inline-block">Products</h4>
                    <ul className="space-y-3 text-sm text-slate-300 font-hanken">
                      <li><a href="/parts" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#30729f]">▸</span> Spare Parts</a></li>
                      <li><a href="/parts" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#30729f]">▸</span> Cylinder Kits</a></li>
                      <li><a href="/parts" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#30729f]">▸</span> Engine Overhaul</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-oswald text-lg uppercase tracking-wider mb-6 text-white border-b-2 border-[#30729f] pb-2 inline-block">Support</h4>
                    <ul className="space-y-3 text-sm text-slate-300 font-hanken">
                      <li><a href="/contact" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#30729f]">▸</span> Contact Us</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-oswald text-lg uppercase tracking-wider mb-6 text-white border-b-2 border-[#30729f] pb-2 inline-block">Connect</h4>
                    <p className="text-sm text-slate-300 mb-4 font-hanken">Subscribe to our technical bulletins and updates.</p>
                    <div className="flex shadow-sm">
                      <input type="email" placeholder="Email Address" className="px-4 py-3 text-slate-900 w-full bg-white outline-none focus:ring-2 focus:ring-[#30729f] font-hanken" />
                      <button className="bg-[#30729f] px-6 py-3 uppercase font-bold text-sm tracking-wider hover:bg-[#255a7e] transition-colors">Join</button>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-slate-600 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 font-hanken">
                  <p>&copy; {new Date().getFullYear()} Crew Worth Aviation. All rights reserved.</p>
                  <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
