import {  Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import Footer from "../component/Fotter";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechNova",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "Codezyra transformed our online presence. The website is stunning, super fast, and user-friendly.",
  },
  {
    name: "Michael Lee",
    role: "Founder, GrowthHub",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    feedback:
      "Working with Codezyra was a game-changer. They built a scalable app for us that exceeded expectations.",
  },
  {
    name: "Emily Carter",
    role: "Marketing Head, BrightEdge",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    feedback:
      "Professional, reliable, and innovative. Their strategies boosted our conversions massively.",
  },
  {
    name: "David Miller",
    role: "CTO, CloudSphere",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    feedback:
      "The Codezyra team is brilliant! They automated our workflow and saved us countless hours every week.",
  },
  {
    name: "Olivia Brown",
    role: "Product Manager, Visionary Labs",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback:
      "From design to development, Codezyra exceeded our expectations. The attention to detail was incredible.",
  },
];


  return (
    
    <>
    <div id="testimonials" className="bg-gray-50 py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        What Our <span className="text-orange-600">Clients</span> Say
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        speed={1000} 
      >
        {testimonials.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center cursor-pointer">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full border-4 border-orange-500"
              />
              <h3 className="text-lg font-bold mt-4">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.role}</p>
              <div className="flex mt-3 mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                “{item.feedback}”
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <Footer />
    </>
  );
};

export default Testimonials;
