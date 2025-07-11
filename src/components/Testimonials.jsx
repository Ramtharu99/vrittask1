import { useState } from 'react';
import { Star, Heart, Trophy, MessageCircle, ThumbsUp, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Frontend Developer",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      feedback: "Amazing",
      testimonial: "The team delivered exceptional results that exceeded our expectations. Their attention to detail is remarkable!",
      normalPosition: { top: '35%', left: '25%' },
      hoverPosition: { top: '10%', left: '15%' },
      icon: ThumbsUp,
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "UI/UX Designer",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      feedback: "Incredible",
      testimonial: "Working with this team was a game-changer for our product. The design quality is outstanding!",
      normalPosition: { top: '30%', right: '25%' },
      hoverPosition: { top: '20%', right: '10%' },
      icon: Heart,
      iconColor: 'text-red-500',
      bgColor: 'bg-red-50'
    },
    {
      id: 3,
      name: "Mike Rodriguez",
      role: "Product Manager",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      feedback: "Outstanding",
      testimonial: "Professional, creative, and delivered on time. Couldn't ask for a better development partner!",
      normalPosition: { bottom: '35%', left: '30%' },
      hoverPosition: { bottom: '25%', left: '8%' },
      icon: MessageCircle,
      iconColor: 'text-yellow-500',
      bgColor: 'bg-yellow-50'
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Marketing Director",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      feedback: "Perfect",
      testimonial: "The results speak for themselves. Our conversion rate increased by 300% after the redesign!",
      normalPosition: { bottom: '30%', right: '30%' },
      hoverPosition: { bottom: '15%', right: '15%' },
      icon: Trophy,
      iconColor: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      id: 5,
      name: "David Kim",
      role: "Tech Lead",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      feedback: "Excellent",
      testimonial: "Clean code, modern architecture, and excellent documentation. A developer's dream to work with!",
      normalPosition: { top: '55%', left: '20%' },
      hoverPosition: { top: '45%', left: '5%' },
      icon: Star,
      iconColor: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      id: 6,
      name: "Lisa Wang",
      role: "CEO",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      feedback: "Brilliant",
      testimonial: "They transformed our vision into reality. The team's expertise and dedication are unmatched!",
      normalPosition: { top: '50%', right: '20%' },
      hoverPosition: { top: '60%', right: '8%' },
      icon: Heart,
      iconColor: 'text-pink-500',
      bgColor: 'bg-pink-50'
    }
  ];

  const floatingIcons = [
    { icon: ThumbsUp, position: { top: '15%', left: '45%' }, color: 'text-blue-400', delay: '0s' },
    { icon: Trophy, position: { top: '25%', right: '35%' }, color: 'text-yellow-400', delay: '1s' },
    { icon: Heart, position: { bottom: '30%', right: '45%' }, color: 'text-red-400', delay: '2s' },
    { icon: MessageCircle, position: { bottom: '20%', left: '40%' }, color: 'text-purple-400', delay: '0.5s' }
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden min-h-screen"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-20 hover:opacity-60 transition-opacity duration-300"
          style={{
            ...item.position,
            animationDelay: item.delay,
            animationDuration: `${3 + index}s`
          }}
        >
          <item.icon className={`w-8 h-8 ${item.color}`} />
        </div>
      ))}

      <div className="container mx-auto px-6 relative z-10">
        {/* Testimonials */}
        <div className="relative h-[650px]">
          {testimonials.map((testimonial) => {
            const currentPosition = isHovered ? testimonial.hoverPosition : testimonial.normalPosition;
            return (
              <div
                key={testimonial.id}
                className="absolute group cursor-pointer transition-all duration-700 ease-out"
                style={currentPosition}
              >
                <div className="relative">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-blue-300 hover:scale-110">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`absolute -bottom-2 -right-2 w-8 h-8 ${testimonial.bgColor} rounded-full flex items-center justify-center border-2 border-white shadow-lg`}>
                    <testimonial.icon className={`w-4 h-4 ${testimonial.iconColor}`} />
                  </div>
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className={`px-4 py-2 ${testimonial.bgColor} rounded-full border border-gray-200 shadow-lg backdrop-blur-sm`}>
                      <div className="flex items-center space-x-1">
                        <span className="text-sm font-medium text-gray-700">{testimonial.feedback}</span>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-200"></div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* ✅ Centered "Skill Masters Unite" + Love Counter + Trophy — no box look */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-4 z-20">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/80 rounded-full border border-gray-200">
                <span className="text-sm font-medium text-gray-700">
                  Hear How They Level Up Their Game!
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
                Skill <span className="text-green-500">Masters</span> Unite! 💎
              </h2>

              <button className="group inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 mt-4">
                <span>View all Testimonials</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Love Counter */}
            <div className="flex justify-center">
              <div className="bg-red-500 text-white px-3 py-1 rounded-full flex items-center space-x-1 shadow-md animate-bounce">
                <Heart className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">2</span>
              </div>
            </div>

            {/* Trophy Icon */}
            <div className="flex justify-center">
              <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center shadow animate-float mt-2">
                <Trophy className="w-5 h-5 text-yellow-600" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
