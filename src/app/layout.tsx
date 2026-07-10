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
            <div className="w-full bg-[#32373c] text-white py-1">
              <div className="container mx-auto max-w-7xl px-4 flex justify-end gap-6 text-xs font-semibold tracking-wider uppercase">
                <a href="tel:800.326.0089" className="hover:text-blue-300">Customer Service: 800.326.0089</a>
                <a href="tel:251.438.3411" className="hover:text-blue-300">Tech Support: 251.438.3411</a>
              </div>
            </div>

            {/* Main Header */}
            <header className="w-full bg-white border-b-4 border-[#30729f] shadow-sm sticky top-0 z-50">
              <div className="container mx-auto flex h-24 items-center px-4 max-w-7xl justify-between">
                <a href="/" className="flex items-center gap-4">
                  <Image src="/images/crewlogo.jpeg" alt="Crew Worth Aviation Logo" width={60} height={60} className="object-contain mix-blend-multiply" />
                  <div className="flex flex-col">
                    <span className="text-3xl font-oswald font-bold text-[#30729f] uppercase tracking-tight leading-none">Crew Worth</span>
                    <span className="text-xl font-oswald text-[#32373c] uppercase tracking-widest leading-none mt-1">Aviation</span>
                  </div>
                </a>
                
                <nav className="hidden md:flex items-center gap-8 text-[15px] font-bold text-[#32373c] uppercase tracking-wide">
                  <a href="/parts" className="hover:text-[#30729f] transition-colors py-2">Products & Parts</a>
                  <a href="/contact" className="bg-[#30729f] text-white px-6 py-2.5 hover:bg-[#255a7e] transition-colors">Contact Us</a>
                </nav>
              </div>
            </header>
            
            <main className="flex-1">
              {children}
            </main>

            {/* Footer */}
            <footer className="bg-[#32373c] text-white py-12 mt-auto border-t-8 border-[#30729f]">
              <div className="container mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-oswald text-xl uppercase tracking-wider mb-4">Crew Worth Aviation</h3>
                  <p className="text-sm text-slate-300">Global leaders in aircraft engine components, spare parts, and overhaul kits.</p>
                </div>
                <div>
                  <h4 className="font-oswald text-lg uppercase tracking-wider mb-4 text-[#30729f]">Products</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li><a href="/parts" className="hover:text-white">Spare Parts</a></li>
                    <li><a href="/parts" className="hover:text-white">Cylinder Kits</a></li>
                    <li><a href="/parts" className="hover:text-white">Engine Overhaul</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-oswald text-lg uppercase tracking-wider mb-4 text-[#30729f]">Support</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-oswald text-lg uppercase tracking-wider mb-4 text-[#30729f]">Connect</h4>
                  <p className="text-sm text-slate-300 mb-2">Subscribe to our technical bulletins.</p>
                  <div className="flex">
                    <input type="email" placeholder="Email Address" className="px-3 py-2 text-slate-900 w-full rounded-l-none" />
                    <button className="bg-[#30729f] px-4 py-2 uppercase font-bold text-xs">Join</button>
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
