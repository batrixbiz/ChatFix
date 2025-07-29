import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import ChatExample from "@/components/ChatExample";

const XYProblem = () => {
  return (
    <div className="min-h-screen bg-background">
      <Breadcrumb />
      
      <main className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-foreground mb-4">
            The XY Problem
          </h1>
          <p className="text-xl text-muted-foreground">
            Ask about your real problem, not your attempted solution.
          </p>
        </div>

        <div className="space-y-16">
          <ChatExample
            badExample="How do I extract the last 3 characters from a filename?"
            goodExample="I need to find all image files in a folder. I have filenames like 'photo.jpg' and 'image.png' and I want to group them by file type. How should I do this?"
          />

          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground leading-relaxed mb-8">
              The XY Problem happens when you ask about your attempted solution (Y) 
              instead of your actual problem (X). You think you need to extract the last 3 characters, 
              but what you really need is to identify file types. There might be a much better way to do this!
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              When you explain what you're trying to achieve overall, people can suggest 
              better approaches you might not have thought of. This leads to simpler, 
              more reliable solutions.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default XYProblem;