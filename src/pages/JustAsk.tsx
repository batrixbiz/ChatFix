import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatExample from "@/components/ChatExample";

const JustAsk = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Just Ask
          </h1>
          <p className="text-xl text-muted-foreground">
            Don't ask permission to ask. Just ask your question.
          </p>
        </div>

        <div className="space-y-12">
          <ChatExample
            badExample="Can someone help me with a coding question?"
            goodExample="I'm getting a 'file not found' error when trying to upload images to my website. Here's my code: [code snippet]. What might be causing this?"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              When you ask "Can someone help me?" you're adding an extra step that doesn't help anyone. 
              People can't decide if they can help until they know what your question is. 
              And if someone could help, they would have helped anyway!
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              Instead, just ask your actual question directly. Include relevant details like error messages, 
              what you expected to happen, and what you've already tried. This lets people quickly decide 
              if they can help and gives them everything they need to give you a good answer.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JustAsk;