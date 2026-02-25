import { FileText, Download, TrendingUp, DollarSign, Users, BarChart3 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Reports() {
  const reports = [
    { year: "2025", title: "Annual Impact Report 2025", type: "Impact", size: "2.4 MB" },
    { year: "2025", title: "Financial Report 2025", type: "Financial", size: "1.8 MB" },
    { year: "2024", title: "Annual Impact Report 2024", type: "Impact", size: "2.2 MB" },
    { year: "2024", title: "Financial Report 2024", type: "Financial", size: "1.6 MB" },
    { year: "2023", title: "Annual Impact Report 2023", type: "Impact", size: "2.1 MB" },
    { year: "2023", title: "Financial Report 2023", type: "Financial", size: "1.5 MB" }
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1572645098182-5e28a03f1b60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbm51YWwlMjByZXBvcnQlMjBmaW5hbmNpYWwlMjBkb2N1bWVudHN8ZW58MXx8fHwxNzcxOTk3MDE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Reports"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Reports & Transparency</h1>
          <p className="text-xl md:text-2xl opacity-95">Our commitment to accountability and transparency</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: DollarSign, label: "Total Revenue 2025", value: "$8.2M" },
              { icon: TrendingUp, label: "Program Efficiency", value: "92%" },
              { icon: Users, label: "Lives Impacted", value: "50,000+" },
              { icon: BarChart3, label: "Growth Rate", value: "+35%" }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-blue-50 rounded-xl p-6 text-center">
                  <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Annual Reports</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download our comprehensive reports detailing our impact, finances, and operations
            </p>
          </div>

          <div className="space-y-4">
            {reports.map((report, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{report.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{report.year}</span>
                      <span>•</span>
                      <span>{report.type}</span>
                      <span>•</span>
                      <span>{report.size}</span>
                    </div>
                  </div>
                </div>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-semibold">
                  <Download className="w-5 h-5" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Financial Transparency</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-blue-600 mb-2">85%</div>
                <div className="text-gray-700">Program Services</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-blue-600 mb-2">10%</div>
                <div className="text-gray-700">Fundraising</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-blue-600 mb-2">5%</div>
                <div className="text-gray-700">Administrative</div>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-8">
              Every dollar you contribute is maximized for impact. We maintain one of the highest program efficiency ratings in the sector.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
