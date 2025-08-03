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
              { message: "How do I highlight only the last 3 words of a sentence?", username: "confused_user", timestamp: "1:45 PM", avatarIndex: 0 },
              { message: "You can split the sentence and grab the last 3 items.", username: "helper", timestamp: "1:47 PM", avatarIndex: 1 },
              { message: "Thanks! But what if the sentence has punctuation at the end?", username: "confused_user", timestamp: "1:48 PM", avatarIndex: 0 },
              { message: "Hmm, what are you actually trying to do?", username: "helper", timestamp: "1:49 PM", avatarIndex: 1 }
            ]}
            goodExample={[
              { message: "I'm trying to summarize sentences by showing only the ending. What's a good way to do that?", username: "clear_user", timestamp: "1:45 PM", avatarIndex: 2 },
              { message: "Ah, got it. You could use a simple split method and clean the result after. That way punctuation won't interfere.", username: "helper", timestamp: "1:46 PM", avatarIndex: 3 }
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
