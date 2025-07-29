import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import ChatExample from "@/components/ChatExample";

const NoHello = () => {
  return (
    <div className="min-h-screen bg-background">
      <Breadcrumb />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            No Hello
          </h1>
          <p className="text-xl text-muted-foreground">
            Skip the greeting. Get straight to your question.
          </p>
        </div>

        <div className="space-y-12">
          <ChatExample
            badExample="Hello, is anyone there?"
            goodExample="Hi! I'm trying to reset my password but the email isn't coming through. I've checked my spam folder. Can someone help?"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              When you just say "Hello" and wait, you're making the conversation take twice as long. 
              The person has to respond to your greeting, then wait for your real question. 
              Instead, include your actual question right away. It's more respectful of everyone's time, 
              and you'll get help faster.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              This isn't about being rude — you can still be polite! Just include your question 
              with your greeting so the conversation can move forward immediately.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NoHello;