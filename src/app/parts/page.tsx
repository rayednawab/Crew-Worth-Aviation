import { PartsClient } from "@/components/parts-client"

export const metadata = {
  title: "Aviation Spare Parts Catalog | Crew Worth Aviation",
  description: "Search and discover premium aviation spare parts, engine components, and overhaul kits.",
}

export default async function PartsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-[#32373c] border-b-4 border-[#30729f] py-12 px-8">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-oswald font-bold text-white uppercase tracking-tight">Products, Services & Parts</h1>
          <p className="text-blue-100 font-hanken mt-3 text-lg max-w-3xl">
            Search our comprehensive database of aviation spare parts, overhaul kits, and engineering services.
          </p>
        </div>
      </div>  
      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <PartsClient />
        </div>
      </div>
    </main>
  )
}
