import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "CEO, LogTech Solutions",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "A equipe desenvolveu um sistema de gestão completo para nossa empresa. A integração com APIs de pagamento e ERPs foi impecável. Reduzimos 60% do tempo operacional!",
    rating: 5
  },
  {
    name: "Fernanda Lima",
    role: "Diretora, E-commerce ModaPlus",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "Nosso e-commerce ficou muito mais rápido e profissional. O dashboard de vendas em tempo real mudou nossa forma de tomar decisões. Performance incrível!",
    rating: 5
  },
  {
    name: "Roberto Nascimento",
    role: "Fundador, ClinicaGest",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    content: "O sistema de agendamento com IA que desenvolveram para nossa clínica é excepcional. Automatizamos todo o atendimento no WhatsApp e triplicamos a eficiência.",
    rating: 5
  },
  {
    name: "Mariana Costa",
    role: "Gerente de TI, Grupo Imobiliário SP",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    content: "A plataforma SaaS que criaram para gestão de imóveis superou todas as expectativas. Interface moderna, segura e escalável. Recomendo muito!",
    rating: 5
  },
  {
    name: "André Oliveira",
    role: "CTO, FinanceiroApp",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    content: "Integrações complexas com gateways de pagamento e bancos foram resolvidas com maestria. A equipe entende de verdade sobre segurança e escalabilidade.",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="glass-card rounded-xl p-0.5 h-full flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
      <div className="relative bg-card rounded-xl p-6 h-full flex flex-col">
        <div className="absolute top-6 right-6 text-neon-pink opacity-20">
          <Quote className="w-12 h-12" />
        </div>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="absolute inset-0 rounded-full border border-primary/30 animate-pulse"></div>
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-primary/50"
            />
          </div>
          <div>
            <h4 className="font-semibold text-white">{testimonial.name}</h4>
            <p className="text-sm text-gray-400">{testimonial.role}</p>
          </div>
        </div>
        
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
            />
          ))}
        </div>
        
        <p className="text-gray-300 flex-grow">"{testimonial.content}"</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);

  const handleNext = () => {
    setActiveIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsAutoplay(false);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;
    
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    
    touchStartX.current = null;
    
    setTimeout(() => {
      setIsAutoplay(true);
    }, 5000);
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.scrollWidth / testimonials.length * activeIndex;
      
      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    if (isAutoplay) {
      autoplayTimerRef.current = setInterval(() => {
        setActiveIndex((prev) => 
          prev === testimonials.length - 1 ? 0 : prev + 1
        );
      }, 5000);
    }
    
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isAutoplay]);

  const pauseAutoplay = () => {
    setIsAutoplay(false);
    
    setTimeout(() => {
      setIsAutoplay(true);
    }, 5000);
  };

  return (
    <section id="depoimentos" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-neon-purple/5 via-transparent to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O que nossos
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-neon-purple mx-2">
              clientes
            </span>
            dizem
          </h2>
          <p className="text-gray-300">
            Veja como ajudamos empresas a transformar suas operações com tecnologia sob medida.
          </p>
        </div>

        <div className="relative">
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 z-10 px-4">
            <button 
              onClick={() => {
                handlePrev();
                pauseAutoplay();
              }}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => {
                handleNext();
                pauseAutoplay();
              }}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-scroll scrollbar-hidden gap-6 pb-8 px-4"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  pauseAutoplay();
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? "bg-primary w-8"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
