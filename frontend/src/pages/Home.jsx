import React from "react";
import {
  FaTree,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaUsers,
  FaLeaf,
  FaChartLine,
  FaRobot,
  FaCertificate,
  FaGlobe,
  FaCamera,
  FaAward,
  FaStar,
  FaHeart,
} from "react-icons/fa";
import { useAppContext } from "../context/AppContext";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import MarcLogoHero from "../components/MarcLogoHero";

const Home = () => {
  const { theme } = useAppContext();
  const { user, isAuthenticated } = useAuth();

  const stats = [
    { number: "15,000+", label: "Reports Filed", icon: FaCamera },
    { number: "2,500+", label: "Hectares Protected", icon: FaShieldAlt },
    { number: "50,000+", label: "Carbon Credits", icon: FaLeaf },
    { number: "200+", label: "Communities", icon: FaUsers },
  ];

  const features = [
    {
      icon: FaMapMarkedAlt,
      title: "Geotagged Reporting",
      description: "Report incidents with precise GPS coordinates and photo evidence for accurate tracking and verification.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: FaRobot,
      title: "AI-Powered Verification",
      description: "Multi-agent AI workflows automatically classify severity and route reports to appropriate authorities.",
      color: "from-teal-500 to-cyan-600",
    },
    {
      icon: FaCertificate,
      title: "Verified Certifications",
      description: "Receive official PDF certifications for your conservation efforts and carbon credit contributions.",
      color: "from-emerald-500 to-green-600",
    },
    {
      icon: FaChartLine,
      title: "Carbon Credit Marketplace",
      description: "Convert your mangrove restoration efforts into tradeable carbon credits for companies to purchase.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: FaAward,
      title: "Gamification Rewards",
      description: "Earn points, and rewards based on your conservation impact and carbon credits saved.",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: FaGlobe,
      title: "Global Impact Tracking",
      description: "Monitor your contribution to global mangrove conservation and climate change mitigation.",
      color: "from-purple-500 to-indigo-600",
    },
  ];

  const impactData = [
    { metric: "Mangrove Coverage", value: "2.5M hectares", change: "+15%", trend: "up" },
    { metric: "Carbon Sequestered", value: "50M tons CO2", change: "+25%", trend: "up" },
    { metric: "Species Protected", value: "1,200+", change: "+8%", trend: "up" },
    { metric: "Coastal Communities", value: "200+", change: "+12%", trend: "up" },
  ];

  const recentReports = [
    {
      type: "Illegal Cutting",
      location: "Sundarbans, Bangladesh",
      severity: "High",
      status: "Under Investigation",
      date: "2024-01-15",
    },
    {
      type: "Pollution Incident",
      location: "Mangrove Bay, India",
      severity: "Medium",
      status: "Resolved",
      date: "2024-01-12",
    },
    {
      type: "Restoration Success",
      location: "Mekong Delta, Vietnam",
      severity: "Positive",
      status: "Completed",
      date: "2024-01-10",
    },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Marine Biologist",
      organization: "Ocean Conservation Society",
      content: "This platform has revolutionized how we track and respond to mangrove threats. The AI verification system is incredibly accurate.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Rajesh Kumar",
      role: "Community Leader",
      organization: "Coastal Village Association",
      content: "Our community has earned over 5,000 carbon credits through mangrove restoration. The certification process is transparent and rewarding.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Maria Santos",
      role: "Environmental Officer",
      organization: "Department of Environment",
      content: "The real-time reporting system has improved our response time by 60%. We can now act before damage becomes irreversible.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}

{/* <div className="relative w-full h-[83vh] overflow-hidden bg-[url('./Hero-bg-2.avif')] bg-cover bg-center bg-no-repeat">
  <div className="relative backdrop-blur-sm h-full">

    <div className="absolute inset-0 bg-white/75"></div>

    <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-teal-900/20"></div>

    <div className="relative text-center space-y-8 pt-32">
      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent pb-4">
        MARC
      </h1>
      <p
        className={`text-2xl max-w-4xl mx-auto leading-relaxed font-bold text-[#114924] ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}
      >
        Mangrove Action for Restoration And Conservation
      </p>
      <p
        className={`text-xl pb-4 max-w-4xl mx-auto leading-relaxed text-[#114924] ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}
      >
        Empowering coastal communities to protect and restore mangrove ecosystems through participatory monitoring, 
        AI-powered verification, and carbon credit rewards. Join the global movement to safeguard our planet's vital coastal forests.
      </p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-10">
        <Link
          to="/login"
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <FaUsers className="w-5 h-5" />
          <span>Join the Community</span>
        </Link>
      </div>
    </div>
  </div>
</div> */}

      <MarcLogoHero />

      {/* Stats Section */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className={`${
                theme === "dark"
                  ? "bg-gray-800/60 backdrop-blur-sm border-gray-700"
                  : "bg-white/60 backdrop-blur-sm border-gray-200"
              } rounded-xl p-6 text-center shadow-lg border`}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
              <div className={`text-sm ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}>{stat.label}</div>
            </div>
          );
        })}
      </div> */}

      {/* Features Section */}
      <div className="space-y-12 px-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            Platform Features
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}>
            Comprehensive tools for mangrove conservation, monitoring, and community engagement
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`${
                  theme === "dark"
                    ? "bg-gray-800/60 backdrop-blur-sm border-gray-700"
                    : "bg-white/60 backdrop-blur-sm border-gray-200"
                } rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border group`}
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}>
                  {feature.title}
                </h3>
                <p className={`leading-relaxed ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Impact Section */}
      {/* <div className={`${
        theme === "dark" ? "bg-gray-800/40" : "bg-green-50"
      } rounded-2xl p-8`}>
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            Global Impact
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}>
            Real-time metrics showing our collective contribution to mangrove conservation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactData.map((item, index) => (
            <div
              key={index}
              className={`${
                theme === "dark" ? "bg-gray-700/60" : "bg-white/80"
              } rounded-xl p-6 text-center shadow-lg`}
            >
              <div className="text-2xl font-bold text-green-600 mb-2">{item.value}</div>
              <div className={`text-sm mb-2 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}>{item.metric}</div>
              <div className="flex items-center justify-center space-x-1">
                <FaArrowRight className={`w-4 h-4 ${
                  item.trend === "up" ? "text-green-500 rotate-45" : "text-red-500 -rotate-45"
                }`} />
                <span className={`text-sm font-semibold ${
                  item.trend === "up" ? "text-green-500" : "text-red-500"
                }`}>{item.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Recent Reports Section */}
      <div className="space-y-8 px-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            Recent Community Reports
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}>
            Stay updated with the latest incidents and restoration efforts from communities worldwide
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentReports.map((report, index) => (
            <div
              key={index}
              className={`${
                theme === "dark"
                  ? "bg-gray-800/60 backdrop-blur-sm border-gray-700"
                  : "bg-white/60 backdrop-blur-sm border-gray-200"
              } rounded-xl p-6 shadow-lg border`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  report.severity === "High" ? "bg-red-100 text-red-800" :
                  report.severity === "Medium" ? "bg-yellow-100 text-yellow-800" :
                  "bg-green-100 text-green-800"
                }`}>
                  {report.severity}
                </span>
                <span className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}>{report.date}</span>
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}>{report.type}</h3>
              <p className={`text-sm mb-3 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}>{report.location}</p>
              <div className="flex items-center space-x-2">
                <span className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}>Status:</span>
                <span className={`text-sm font-semibold ${
                  report.status === "Completed" ? "text-green-600" :
                  report.status === "Under Investigation" ? "text-yellow-600" :
                  "text-blue-600"
                }`}>{report.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className={`${
        theme === "dark" ? "bg-gray-800/40" : "bg-emerald-50"
      } rounded-2xl p-8 px-16`}>
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            Community Voices
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}>
            Hear from the people making a difference in mangrove conservation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${
                theme === "dark" ? "bg-gray-700/60" : "bg-white/80"
              } rounded-xl p-6 shadow-lg`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className={`font-semibold ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}>{testimonial.name}</h4>
                  <p className={`text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}>{testimonial.role}</p>
                  <p className={`text-xs ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}>{testimonial.organization}</p>
                </div>
              </div>
              <p className={`italic ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}>"{testimonial.content}"</p>
              <div className="flex space-x-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-2xl p-12 text-center text-white relative overflow-hidden mx-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative">
          <div className="flex justify-center space-x-4 mb-6">
            <FaTree className="w-8 h-8" />
            <FaHeart className="w-8 h-8" />
            <FaGlobe className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Join the Mangrove Conservation Movement
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Every report, every restoration effort, and every carbon credit contributes to a healthier planet. 
            Start making a difference today and earn rewards while protecting our vital coastal ecosystems.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/login"
              className="inline-flex items-center space-x-2 bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              <FaUsers className="w-5 h-5" />
              <span>Get Started Now</span>
            </Link>
            {/* <button className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200">
              <FaPlay className="w-5 h-5" />
              <span>Learn More</span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
