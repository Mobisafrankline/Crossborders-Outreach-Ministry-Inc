import { Calendar, User, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function News() {
  const newsItems = [
    { title: "Crossborders Reaches 50,000 Beneficiaries Milestone", date: "February 22, 2026", category: "Milestone", image: "https://images.unsplash.com/photo-1770922807878-ec02fed1d0c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzJTIwc3RvcnklMjBjZWxlYnJhdGlvbiUyMGFjaGlldmVtZW50fGVufDF8fHx8MTc3MTk5NzAxNXww&ixlib=rb-4.1.0&q=80&w=1080" },
    { title: "New Partnership with Global Health Foundation Announced", date: "February 18, 2026", category: "Partnership", image: "https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWtlJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzE5MzA3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { title: "Expansion of Education Programs to 15 New Schools", date: "February 12, 2026", category: "Program Expansion", image: "https://images.unsplash.com/photo-1770843093640-c44ae557928b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHN0dWR5aW5nJTIwZWR1Y2F0aW9uJTIwQWZyaWNhfGVufDF8fHx8MTc3MTk5NjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080" },
    { title: "Annual Gala Raises $500K for Healthcare Initiatives", date: "February 5, 2026", category: "Fundraising", image: "https://images.unsplash.com/photo-1769837230424-bf083c309ab1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdW5kcmFpc2luZyUyMGV2ZW50JTIwY2hhcml0eSUyMGdhdGhlcmluZ3xlbnwxfHx8fDE3NzE5OTY4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { title: "Volunteer Recognition Award Winners Announced", date: "January 30, 2026", category: "Awards", image: "https://images.unsplash.com/photo-1769837230054-7f3a7356dde1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwY29tbXVuaXR5JTIwc2VydmljZSUyMHRlYW13b3JrfGVufDF8fHx8MTc3MTk5Njg5M3ww&ixlib=rb-4.1.0&q=80&w=1080" },
    { title: "Launch of Mobile App for Donor Engagement", date: "January 25, 2026", category: "Technology", image: "https://images.unsplash.com/photo-1638344956088-49e767865ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzcGFwZXIlMjBwcmVzcyUyMGNvbmZlcmVuY2UlMjBhbm5vdW5jZW1lbnR8ZW58MXx8fHwxNzcxOTk3MDE2fDA&ixlib=rb-4.1.0&q=80&w=1080" }
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1638344956088-49e767865ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzcGFwZXIlMjBwcmVzcyUyMGNvbmZlcmVuY2UlMjBhbm5vdW5jZW1lbnR8ZW58MXx8fHwxNzcxOTk3MDE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="News"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Latest News</h1>
          <p className="text-xl md:text-2xl opacity-95">Stay informed about our recent activities and announcements</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <article key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold mb-3">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700">
                    Read More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
