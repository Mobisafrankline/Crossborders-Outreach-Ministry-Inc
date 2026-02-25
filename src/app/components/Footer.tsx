import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png" // <-- your logo in public folder
                alt="Crossborders Outreach Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <div className="font-bold text-white text-lg leading-tight">
                  Crossborders Outreach
                </div>
                <div className="text-xs text-gray-400">Ministry Inc</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming lives across borders through compassion, dedication, and sustainable community impact.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Programs</h3>
            <ul className="space-y-3">
              <li>
                <a href="/food-support" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Food Support
                </a>
              </li>
              <li>
                <a href="/education" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Education Support
                </a>
              </li>
              <li>
                <a href="/healthcare" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Healthcare Outreach
                </a>
              </li>
              <li>
                <a href="/economic" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Economic Empowerment
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/mission" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Mission & Vision
                </a>
              </li>
              <li>
                <a href="/impact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Impact Stories
                </a>
              </li>
              <li>
                <a href="/reports" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Annual Reports
                </a>
              </li>
              <li>
                <a href="/volunteer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="/partner" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Partner With Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Humanitarian Way<br />
                  Hope City, HC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-blue-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@crossborders.org" className="text-gray-400 hover:text-blue-400 transition-colors">
                  info@crossborders.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Crossborders Outreach Ministry Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="/accessibility" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}