import { 
  Monitor, 
  BarChart3, 
  Settings, 
  Globe, 
  Rocket, 
  Sparkles, 
  Link2, 
  Wrench,
  Shield,
  Zap,
  Scale,
  Users,
  Building2,
  Cog,
  Target,
  Award,
  MessageCircle
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Plataformas Web Completas",
    description: "SaaS, painéis administrativos, áreas de membros",
    color: "neon-blue"
  },
  {
    icon: BarChart3,
    title: "Dashboards Inteligentes",
    description: "Dados em tempo real, relatórios, métricas e gráficos",
    color: "neon-purple"
  },
  {
    icon: Settings,
    title: "Sistemas Personalizados",
    description: "Automação de processos, controle interno, integrações",
    color: "neon-pink"
  },
  {
    icon: Globe,
    title: "Websites Modernos",
    description: "Sites rápidos e focados em conversão",
    color: "neon-green"
  },
  {
    icon: Rocket,
    title: "Landing Pages Otimizadas",
    description: "Páginas leves, ideais para anúncios e SEO",
    color: "neon-blue"
  },
  {
    icon: Sparkles,
    title: "Interfaces Premium",
    description: "Animações avançadas, efeitos flutuantes, UX premium",
    color: "neon-purple"
  },
  {
    icon: Link2,
    title: "Integrações com APIs",
    description: "Pagamentos, WhatsApp, CRM, ERPs, IA, gateways",
    color: "neon-pink"
  },
  {
    icon: Wrench,
    title: "Otimização de Sistemas",
    description: "Melhoria e modernização de sistemas existentes",
    color: "neon-green"
  }
];

const technologies = [
  { icon: Zap, title: "Alta Performance", description: "Sistemas rápidos e otimizados" },
  { icon: Shield, title: "Segurança", description: "Proteção de dados e acessos" },
  { icon: Scale, title: "Escalabilidade", description: "Cresce junto com seu negócio" },
  { icon: Users, title: "UX/UI Premium", description: "Experiência do usuário impecável" }
];

const idealFor = [
  { icon: Building2, text: "Empresas que precisam de sistemas próprios" },
  { icon: Cog, text: "Negócios que querem automatizar processos" },
  { icon: Target, text: "Projetos que exigem performance, escala e segurança" },
  { icon: Award, text: "Quem quer sair do 'mais do mesmo' e ter algo profissional" }
];

const DevServices = () => {
  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-neon-blue/5 via-transparent to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary mb-4">
            O Que Desenvolvemos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Programação &
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple mx-2">
              Desenvolvimento
            </span>
            Sob Medida
          </h2>
          <p className="text-gray-300">
            Oferecemos programação personalizada, desenvolvida conforme a real necessidade do seu negócio — nada engessado, nada genérico.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-lg bg-${service.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className={`w-6 h-6 text-${service.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">Tecnologias Modernas</h3>
            <p className="text-gray-400">Trabalhamos com tecnologias atuais, priorizando:</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center">
                <tech.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-1">{tech.title}</h4>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Info */}
        <div className="glass-card rounded-2xl p-8 mb-20 bg-gradient-to-br from-primary/5 to-neon-purple/5">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">💰 Como Funciona o Valor</h3>
            <p className="text-gray-300 mb-6">
              O custo é sob demanda, calculado de acordo com:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="glass-card rounded-lg p-4">
                <p className="text-sm text-gray-300">Complexidade do projeto</p>
              </div>
              <div className="glass-card rounded-lg p-4">
                <p className="text-sm text-gray-300">Funcionalidades desejadas</p>
              </div>
              <div className="glass-card rounded-lg p-4">
                <p className="text-sm text-gray-300">Integrações necessárias</p>
              </div>
              <div className="glass-card rounded-lg p-4">
                <p className="text-sm text-gray-300">Prazo e personalização</p>
              </div>
            </div>
            <p className="text-primary font-medium">
              👉 Valores sob consulta, após entendimento do projeto.
            </p>
          </div>
        </div>

        {/* Ideal For Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">Para Quem Esse Serviço é Ideal?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {idealFor.map((item, index) => (
              <div key={index} className="flex items-center gap-4 glass-card rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Consultive Approach */}
        <div className="glass-card rounded-2xl p-8 bg-gradient-to-br from-neon-green/5 to-neon-blue/5 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">📌 Atendimento Consultivo</h3>
              <p className="text-gray-300">
                Antes de qualquer orçamento, entendemos o seu objetivo e indicamos a melhor solução — sem empurrar coisas desnecessárias.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://api.whatsapp.com/send/?phone=5511930500397&text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto%20de%20desenvolvimento"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-primary text-black font-semibold hover:bg-primary/90 neo-btn transition-all duration-300"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar Sobre Meu Projeto
          </a>
          <p className="text-gray-400 text-sm mt-4">
            🚀 Descreva brevemente o que você precisa e nossa equipe avalia o melhor caminho
          </p>
        </div>
      </div>
    </section>
  );
};

export default DevServices;
