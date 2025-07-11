import { useState } from "react";
import {
  ArrowRight,
  Plus,
  Code,
  MessageSquare,
  Layers,
  Palette,
} from "lucide-react";

const CoursesSection = () => {
  const [activeCard, setActiveCard] = useState("all");

  const techIcons = [
    { icon: Code, color: "text-blue-500", bg: "bg-blue-100" },
    { icon: MessageSquare, color: "text-pink-500", bg: "bg-pink-100" },
    { icon: Layers, color: "text-green-500", bg: "bg-green-100" },
    { icon: Palette, color: "text-orange-500", bg: "bg-orange-100" },
  ];

  const cardConfigs = {
    all: {
      title: "All Courses",
      subtitle: "courses you're powering through right now.",
      number: "23",
    },
    upcoming: {
      title: "Upcoming Courses",
      subtitle: "exciting new courses waiting to boost your skills.",
      number: "05",
    },
    ongoing: {
      title: "Ongoing Courses",
      subtitle: "currently happening - don't miss out on the action!",
      number: "10",
    },
  };

  const getCardStyle = (cardType) => {
    const isActive = activeCard === cardType;

    return {
      width: isActive ? "400px" : "200px",
      height: "300px",
      backgroundColor: isActive ? "#dc2626" : "#fca5a5",
      color: isActive ? "#ffffff" : "#dc2626", 
      zIndex: isActive ? 10 : 1,
    };
  };

  const getCardContent = (cardType) => {
    const config = cardConfigs[cardType];
    const isActive = activeCard === cardType;

    return (
      <div className="relative h-full p-6 flex flex-col justify-between">
        <div>
          {isActive && (
            <div className="flex justify-between items-start mb-6">
              <button className="text-white/80 hover:text-white transition-colors">
                View all Courses <ArrowRight className="inline w-4 h-4 ml-1" />
              </button>
            </div>
          )}

          {isActive && (
            <div className="flex space-x-3 mb-8">
              {techIcons.map((tech, index) => (
                <div
                  key={index}
                  className={`w-12 h-12 ${tech.bg} rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-200`}
                >
                  <tech.icon className={`w-6 h-6 ${tech.color}`} />
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          {!isActive && (
            <div className="text-right mb-4">
              <div
                className="text-red-500 text-sm font-medium mb-2 transform -rotate-90 origin-bottom-right"
                style={{
                  position: "absolute",
                  right: "20px",
                  bottom: "120px",
                  width: "120px",
                }}
              >
                {config.title}
              </div>
              <div
                className="text-red-500 text-xs transform -rotate-90 origin-bottom-right"
                style={{
                  position: "absolute",
                  right: "20px",
                  bottom: "60px",
                  width: "120px",
                }}
              >
                {config.subtitle}
              </div>
            </div>
          )}

          <div className="flex items-end justify-between">
            <div>
              <div
                className={`text-6xl font-bold ${
                  isActive ? "text-white" : "text-red-500"
                } mb-2`}
              >
                {config.number}
              </div>
              {isActive && (
                <div>
                  <div className="text-white font-semibold text-lg mb-1 flex items-center">
                    <Plus className="w-5 h-5 mr-2" />
                    {config.title}
                  </div>
                  <div className="text-white/80 text-sm">{config.subtitle}</div>
                </div>
              )}
            </div>

            <div
              className={`w-8 h-8 ${
                isActive ? "text-white" : "text-red-500"
              } flex items-center justify-center`}
            >
              <Plus className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gray-600 text-lg mb-4">
            Explore our classes and master trending skills!
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Dive Into <span className="text-green-500">What's Hot Right Now!</span> 🔥
          </h1>
        </div>
        <div className="flex justify-center items-center space-x-6">
          {["all", "upcoming", "ongoing"].map((cardType) => (
            <div
              key={cardType}
              className="relative cursor-pointer transition-all duration-500 ease-in-out rounded-3xl shadow-lg hover:shadow-xl"
              style={getCardStyle(cardType)}
              onClick={() => setActiveCard(cardType)}
            >
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                {getCardContent(cardType)}
              </div>
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
