import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Breadcrumb />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-foreground mb-8">
            Fix your chat. Say what matters.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Learn to communicate better online. Whether you're asking for help or messaging friends, 
            we teach you how to ask the right way.
          </p>
        </div>

        {/* Three Concepts Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card border-border hover:border-primary/20 transition-all duration-150 p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-primary mb-2">No Hello</CardTitle>
              <CardDescription className="text-muted-foreground">
                Skip the greeting. Get straight to your question.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Don't waste time with "Hello" and waiting for a response. 
                Say what you need right away.
              </p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link to="/nohello">Learn more</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary/20 transition-all duration-150 p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-primary mb-2">XY Problem</CardTitle>
              <CardDescription className="text-muted-foreground">
                Ask about your real problem, not your attempted solution.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Share what you're trying to achieve, not just what's not working. 
                This helps people give you better answers.
              </p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link to="/xyproblem">Learn more</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary/20 transition-all duration-150 p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-primary mb-2">Just Ask</CardTitle>
              <CardDescription className="text-muted-foreground">
                Don't ask permission to ask. Just ask your question.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Skip "Can I ask a question?" and ask it directly. 
                People can choose whether to help.
              </p>
              <Button asChild variant="outline" size="sm" className="w-full">
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