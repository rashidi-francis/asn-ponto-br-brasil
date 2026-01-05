import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DevServices from "@/components/DevServices";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import ChatAsnDemo from "@/components/ChatAsnDemo";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import nathaliaAvatar from "@/assets/nathalia-avatar.jpg";
import { sendMetaEvent } from "@/lib/meta-events";

const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    sendMetaEvent("PageView");
  }, []);

  // Increment notification badge every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setNotificationCount(prev => prev + 1);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  // Add smooth scroll effect for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = anchor.getAttribute('href')?.substring(1);
        const element = document.getElementById(id as string);
        
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <DevServices />
        <ChatAsnDemo />
        <Testimonials />
        <Partners />
      </main>
      <Footer />

      {/* Fixed WhatsApp Button with Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <div className="fixed bottom-8 right-8 z-40">
          <div className="relative">
            {/* Nathalia Avatar */}
            <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full border-4 border-background overflow-hidden shadow-lg animate-bounce">
              <img 
                src={nathaliaAvatar} 
                alt="Nathalia - Atendimento"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Notification Badge */}
            {notificationCount > 0 && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg animate-pulse z-10">
                {notificationCount}
              </div>
            )}
            
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 to-green-600 opacity-70 blur-md animate-pulse"></div>
            <DialogTrigger asChild>
              <button
                className="cta-whatsapp-float-button relative flex items-center justify-center w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white font-medium shadow-xl transition-all hover:scale-110"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </button>
            </DialogTrigger>
          </div>
        </div>

        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                <img 
                  src={nathaliaAvatar} 
                  alt="Nathalia"
                  className="w-full h-full object-cover"
                />
              </div>
              <DialogTitle className="text-left">
                Olá, eu sou a Nathalia da Ajudo Seu Negócio
              </DialogTitle>
            </div>
          </DialogHeader>
          <p className="text-muted-foreground mb-6">
            Vamos iniciar uma conversa?
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5511930500397&text=Olá,%20vim%20a%20partir%20do%20site...."
            target="_blank"
            rel="noopener noreferrer"
            className="cta-whatsapp-float-dialog w-full"
          >
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
              Iniciar conversa
            </Button>
          </a>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
