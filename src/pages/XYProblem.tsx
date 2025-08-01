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
            badExample={[
              { message: "How do I extract the last 3 characters from a filename?", username: "confused_coder", timestamp: "1:45 PM", avatarIndex: 0 },
              { message: "You can use filename.slice(-3) in JavaScript", username: "helper", timestamp: "1:47 PM", avatarIndex: 1 },
              { message: "Thanks! But wait, what if the extension is 4 characters like .jpeg?", username: "confused_coder", timestamp: "1:48 PM", avatarIndex: 0 },
              { message: "Ah, what are you actually trying to do?", username: "helper", timestamp: "1:49 PM", avatarIndex: 1 }
            ]}
            goodExample={[
              { message: "I need to group image files by type. I have filenames like 'photo.jpg' and 'image.png' - what's the best way to extract file extensions?", username: "clear_coder", timestamp: "1:45 PM", avatarIndex: 2 },
              { message: "Use path.extname() in Node.js or filename.split('.').pop() in JavaScript. Much cleaner than slicing!", username: "helper", timestamp: "1:46 PM", avatarIndex: 1 }
            ]}
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