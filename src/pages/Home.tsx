import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Fix your chat. Say what matters.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            ChatFix helps anyone — not just developers — communicate better online. 
            Whether you're asking for help, chatting in support, or just messaging friends, 
            we teach you how to ask the right way.
          </p>
        </div>

        {/* Three Concepts Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-warm-bg border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">No Hello</CardTitle>
              <CardDescription className="text-lg">
                Skip the greeting. Get straight to your question.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Don't waste time with "Hello" and waiting for a response. 
                Say what you need right away.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/nohello">Learn more</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-warm-bg border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">XY Problem</CardTitle>
              <CardDescription className="text-lg">
                Ask about your real problem, not your attempted solution.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Share what you're trying to achieve, not just what's not working. 
                This helps people give you better answers.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/xyproblem">Learn more</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-warm-bg border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Just Ask</CardTitle>
              <CardDescription className="text-lg">
                Don't ask permission to ask. Just ask your question.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Skip "Can I ask a question?" and ask it directly. 
                People can choose whether to help.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/justask">Learn more</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;