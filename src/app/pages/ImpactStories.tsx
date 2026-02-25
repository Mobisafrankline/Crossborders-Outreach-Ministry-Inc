import { Heart, TrendingUp, Users, Quote, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function ImpactStories() {
  const stories = [
    {
      title: "From Hunger to Hope: Maria's Journey",
      category: "Food Support",
      image: "https://images.unsplash.com/photo-1710092784814-4a6f158913b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGlzdHJpYnV0aW9uJTIwY2hhcml0eSUyMHZvbHVudGVlcnN8ZW58MXx8fHwxNzcxOTk2NjkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      quote: "Before Crossborders, my children would go to bed hungry. Now we have regular meals and hope for the future.",
      impact: "Maria and her family now receive weekly food packages, and her children attend school regularly with proper nutrition."
    },
    {
      title: "Breaking Barriers: David's Education Story",
      category: "Education",
      image: "https://images.unsplash.com/photo-1770843093640-c44ae557928b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHN0dWR5aW5nJTIwZWR1Y2F0aW9uJTIwQWZyaWNhfGVufDF8fHx8MTc3MTk5NjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      quote: "Education changed everything. I went from helping at my father's farm to becoming the first in my family to attend university.",
      impact: "With a full scholarship, David completed high school with honors and is now studying engineering on a university scholarship."
    },
    {
      title: "A New Life: Grace's Healthcare Miracle",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1770221797840-8f5a095ad7ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMG91dHJlYWNofGVufDF8fHx8MTc3MTk5NjY5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      quote: "The mobile clinic saved my life. I had been sick for months but couldn't afford to travel to the hospital.",
      impact: "Grace received timely treatment for a treatable condition and now volunteers with the mobile clinic to help others."
    },
    {
      title: "Building Dreams: Amina's Business Success",
      category: "Economic Empowerment",
      image: "https://images.unsplash.com/photo-1752650736246-abae155278be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVudHJlcHJlbmV1ciUyMHNtYWxsJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcxOTk2Njk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      quote: "The microloan and business training gave me the confidence and resources to start my tailoring business.",
      impact: "Amina now employs three people, supports her family, and has become a role model for women entrepreneurs in her community."
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1770922807878-ec02fed1d0c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzJTIwc3RvcnklMjBjZWxlYnJhdGlvbiUyMGFjaGlldmVtZW50fGVufDF8fHx8MTc3MTk5NzAxNXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Success stories"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Impact Stories</h1>
          <p className="text-xl md:text-2xl opacity-95">Real lives, real change, real impact</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-20">
            {stories.map((story, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                    {story.category}
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">{story.title}</h2>
                  
                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <Quote className="w-10 h-10 text-blue-600 mb-4" />
                    <p className="text-lg text-gray-700 italic mb-4">"{story.quote}"</p>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6">{story.impact}</p>
                  
                  <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700">
                    Read Full Story <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <ImageWithFallback
                    src={story.image}
                    alt={story.title}
                    className="rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Heart className="w-16 h-16 text-orange-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Support Creates These Stories</h2>
          <p className="text-xl text-gray-600 mb-8">Every donation, every hour volunteered, every partnership creates ripple effects of positive change.</p>
          <a href="/donate" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg">
            Make an Impact Today
          </a>
        </div>
      </section>
    </div>
  );
}
