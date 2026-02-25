import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Heart,
  Globe,
  User,
  FileText,
  Utensils,
  GraduationCap,
  Stethoscope,
  TrendingUp,
  DollarSign,
  Users,
  Handshake,
  Gift,
  BookOpen,
  Award,
  Target,
  UserCircle,
  Building2,
  BarChart3
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface DropdownItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    {
      label: "What We Do",
      dropdown: [
        { label: "Food Support", href: "/food-support", icon: <Utensils className="w-5 h-5" />, description: "Providing nutritious meals to communities in need" },
        { label: "Education Support", href: "/education", icon: <GraduationCap className="w-5 h-5" />, description: "Empowering children through quality education" },
        { label: "Healthcare Outreach", href: "/healthcare", icon: <Stethoscope className="w-5 h-5" />, description: "Delivering essential medical care and support" },
        { label: "Economic Empowerment", href: "/economic", icon: <TrendingUp className="w-5 h-5" />, description: "Creating sustainable livelihoods and opportunities" }
      ]
    },
    {
      label: "Ways to Give",
      dropdown: [
        { label: "Donate", href: "/donate", icon: <DollarSign className="w-5 h-5" />, description: "Make a financial contribution to our cause" },
        { label: "Volunteer", href: "/volunteer", icon: <Users className="w-5 h-5" />, description: "Join our team and make a hands-on impact" },
        { label: "Partner With Us", href: "/partner", icon: <Handshake className="w-5 h-5" />, description: "Collaborate for greater community impact" },
        { label: "Fundraise", href: "/fundraise", icon: <Gift className="w-5 h-5" />, description: "Start your own fundraising campaign" }
      ]
    },
    {
      label: "Stories",
      dropdown: [
        { label: "Blog", href: "/blog", icon: <BookOpen className="w-5 h-5" />, description: "Read our latest updates and insights" },
        { label: "Impact Stories", href: "/impact", icon: <Award className="w-5 h-5" />, description: "See the real-world change we're making" },
        { label: "News", href: "/news", icon: <FileText className="w-5 h-5" />, description: "Stay updated with our latest announcements" }
      ]
    },
    {
      label: "About Us",
      dropdown: [
        { label: "Mission & Vision", href: "/mission", icon: <Target className="w-5 h-5" />, description: "Learn about our purpose and goals" },
        { label: "Team", href: "/team", icon: <UserCircle className="w-5 h-5" />, description: "Meet the people behind our mission" },
        { label: "Partners", href: "/partners", icon: <Building2 className="w-5 h-5" />, description: "Organizations we work with" },
        { label: "Reports", href: "/reports", icon: <BarChart3 className="w-5 h-5" />, description: "View our impact and financial reports" }
      ]
    },
    { label: "Contact", href: "/contact" }
  ];

  const toggleMobileDropdown = (label: string) =>
    setActiveMobileDropdown(activeMobileDropdown === label ? null : label);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-2" : "bg-white/95 backdrop-blur-sm py-3"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6">
        {/* ===== TOP ROW ===== */}
        <div className="flex items-center justify-between pb-2 border-b border-gray-100">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Crossborders Outreach Logo"
              className="w-12 h-12 object-contain"
            />
            <div className="hidden sm:block">
              <div className="font-bold text-gray-900 text-lg leading-tight">Crossborders Outreach</div>
              <div className="text-xs text-gray-600">Ministry Inc</div>
            </div>
          </a>

          {/* Utilities */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === "EN" ? "ES" : "EN")}
              className="flex items-center gap-1.5 text-gray-700 hover:text-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-50"
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium text-sm">{language}</span>
            </button>

            <a href="/publications" className="flex items-center gap-1.5 text-gray-700 hover:text-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-50">
              <FileText className="w-4 h-4" /> Publications
            </a>

            <a href="/login" className="flex items-center gap-1.5 text-gray-700 hover:text-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-50">
              <User className="w-4 h-4" /> Login
            </a>

            <a href="/donate" className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg">
              <Heart className="w-4 h-4 fill-white" /> Donate Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-gray-700">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* ===== BOTTOM ROW NAV (Desktop) ===== */}
        <div className="hidden lg:flex items-center justify-center gap-8 pt-2">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.dropdown ? (
                <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 py-2 font-medium">
                  {item.label}
                  <ChevronDown className={`w-4 h-4 ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                </button>
              ) : (
                <a href={item.href} className="text-gray-700 hover:text-blue-600 py-2 font-medium">
                  {item.label}
                </a>
              )}

              <AnimatePresence>
                {item.dropdown && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                  >
                    <div className="p-2">
                      {item.dropdown.map((dropdownItem, index) => (
                        <a key={index} href={dropdownItem.href} className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50">
                          <div className="mt-0.5 text-blue-600">{dropdownItem.icon}</div>
                          <div>
                            <div className="font-semibold text-gray-900">{dropdownItem.label}</div>
                            <div className="text-sm text-gray-600">{dropdownItem.description}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* ===== MOBILE MENU ===== */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-1 mt-2 pb-4 border-t border-gray-200">
                {navItems.map((item) => (
                  <div key={item.label} className="flex flex-col">
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => toggleMobileDropdown(item.label)}
                          className="flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium"
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${activeMobileDropdown === item.label ? "rotate-180" : ""}`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeMobileDropdown === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="flex flex-col ml-4 mt-1 overflow-hidden"
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <a
                                  key={dropdownItem.label}
                                  href={dropdownItem.href}
                                  className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                                >
                                  {dropdownItem.label}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={item.href}
                        className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}

                {/* Mobile utilities */}
                <div className="flex flex-col gap-2 mt-4 px-4">
                  <button
                    onClick={() => setLanguage(language === "EN" ? "ES" : "EN")}
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
                  >
                    <Globe className="w-4 h-4" /> {language}
                  </button>
                  <a href="/publications" className="px-3 py-2 text-gray-700 hover:text-blue-600 rounded-md">Publications</a>
                  <a href="/login" className="px-3 py-2 text-gray-700 hover:text-blue-600 rounded-md">Login</a>
                  <a href="/donate" className="px-3 py-2 bg-orange-500 text-white rounded-md text-center font-semibold hover:bg-orange-600">
                    Donate Now
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}