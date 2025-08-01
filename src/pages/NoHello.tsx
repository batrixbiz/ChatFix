import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import ChatExample from "@/components/ChatExample";

const NoHello = () => {
  return (
    <div className="min-h-screen bg-background">
      <Breadcrumb />
      
      <main className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-foreground mb-4">
            No Hello
          </h1>
          <p className="text-xl text-muted-foreground">
            Skip the greeting. Get straight to your question.
          </p>
        </div>

        <div className="space-y-16">
          <ChatExample
            badExample={[
              { message: "Hey", username: "confused_user", timestamp: "2:30 PM", avatarIndex: 0 },
              { message: "Hello? Hello? @Owner @Admin @Moderator", username: "confused_user", timestamp: "2:32 PM", avatarIndex: 0 },
              { message: "What do you want...", username: "helper", timestamp: "2:45 PM", avatarIndex: 1 },
              { message: "I need help.", username: "confused_user", timestamp: "2:46 PM", avatarIndex: 0 },
              { message: "JUST SAY THE PROBLEM!", username: "helper", timestamp: "2:45 PM", avatarIndex: 1 }
            ]}
            goodExample={[
              { message: "Hey! I'm having trouble finding the right words for a project description. Can anyone review my draft?", username: "clear_user", timestamp: "2:30 PM", avatarIndex: 2 },
              { message: "Sure! Share the draft and I’ll take a look.", username: "helper", timestamp: "2:31 PM", avatarIndex: 1 }
            ]}
          />

          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground leading-relaxed mb-8">
              When you just say "Hello" and wait, you're making the conversation take twice as long. 
              The person has to respond to your greeting, then wait for your real question. 
              Instead, include your actual question right away. It's more respectful of everyone's time, 
              and you'll get help faster.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
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
