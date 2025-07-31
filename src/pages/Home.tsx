import { Link } from "react-router-dom";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const concepts = [
  {
    title: "No Hello",
    emoji: "💬",
    description: "Skip the greeting. Get straight to your question.",
    detail: "Don't waste time with \"Hello\" and waiting for a response. Say what you need right away.",
    link: "/nohello",
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "XY Problem", 
    emoji: "🎯",
    description: "Ask about your real problem, not your attempted solution.",
    detail: "Share what you're trying to achieve, not just what's not working. This helps people give you better answers.",
    link: "/xyproblem",
    gradient: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "Just Ask",
    emoji: "🚀", 
    description: "Don't ask permission to ask. Just ask your question.",
    detail: "Skip \"Can I ask a question?\" and ask it directly. People can choose whether to help.",
    link: "/justask",
    gradient: "from-orange-500/20 to-red-500/20"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Breadcrumb />
      
      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-foreground mb-6">
            Fix your chat. Say what matters.
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Learn to communicate better online. Whether you're asking for help or 
            messaging friends, we teach you how to ask the right way.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {concepts.map((concept, index) => (
            <div 
              key={concept.title}
              className="group relative animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${concept.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`} />
              
              <div className="relative bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                <div className="text-4xl mb-4">{concept.emoji}</div>
                
                <h3 className="text-foreground mb-4 text-xl font-bold tracking-tight">
                  {concept.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {concept.description}
                </p>
                
                <p className="text-muted-foreground/80 mb-8 text-sm leading-relaxed">
                  {concept.detail}
                </p>
                
                <Link to={concept.link}>
                  <Button 
                    variant="outline" 
                    className="w-full btn-modern group-hover:border-primary/50 group-hover:text-primary transition-all duration-200"
                  >
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;