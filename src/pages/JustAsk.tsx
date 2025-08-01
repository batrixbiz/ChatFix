import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import ChatExample from "@/components/ChatExample";

const JustAsk = () => {
  return (
    <div className="min-h-screen bg-background">
      <Breadcrumb />
      
      <main className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-foreground mb-4">
            Just Ask
          </h1>
          <p className="text-xl text-muted-foreground">
            Don't ask permission to ask. Just ask your question.
          </p>
        </div>

        <div className="space-y-16">
          <ChatExample
            badExample={[
              { message: "Can someone help me with a coding question?", username: "asking_user", timestamp: "3:15 PM", avatarIndex: 0 },
              { message: "Sure, what's the question?", username: "helper", timestamp: "3:20 PM", avatarIndex: 1 },
              { message: "I have an issue with my website", username: "asking_user", timestamp: "3:21 PM", avatarIndex: 0 },
              { message: "What kind of issue?", username: "helper", timestamp: "3:22 PM", avatarIndex: 1 }
            ]}
            goodExample={[
              { message: "I'm getting a 'file not found' error when uploading images to my website. Here's my upload code: [code snippet]. What might be causing this?", username: "clear_user", timestamp: "3:15 PM", avatarIndex: 2 },
              { message: "Looking at your code, the issue is likely the file path. Try using an absolute path instead of relative.", username: "helper", timestamp: "3:16 PM", avatarIndex: 1 }
            ]}
          />

          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground leading-relaxed mb-8">
              When you ask "Can someone help me?" you're adding an extra step that doesn't help anyone. 
              People can't decide if they can help until they know what your question is. 
              And if someone could help, they would have helped anyway!
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
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