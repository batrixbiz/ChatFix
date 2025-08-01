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
              { message: "Can someone help me with something?", username: "asking_user", timestamp: "3:15 PM", avatarIndex: 0 },
              { message: "Okay, what is the problem", username: "helper", timestamp: "3:20 PM", avatarIndex: 1 },
              { message: "I’m confused about a thing I’m trying to figure out.", username: "asking_user", timestamp: "3:21 PM", avatarIndex: 0 },
              { message: "BRO JUST TELL ME WHAT YOU NEED HELP WITH", username: "helper", timestamp: "3:22 PM", avatarIndex: 1 }
            ]}
            goodExample={[
              { message: "I'm struggling to organize a big list of tasks into categories. Any tips or tools you recommend?", username: "clear_user", timestamp: "3:15 PM", avatarIndex: 0 },
              { message: "You could try using a board view in Trello or Notion — it's great for that use case.", username: "helper", timestamp: "3:16 PM", avatarIndex: 1 }
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
