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
              { message: "Hello", username: "confused_user", timestamp: "2:30 PM", avatarIndex: 0 },
              { message: "Is anyone there?", username: "confused_user", timestamp: "2:32 PM", avatarIndex: 0 },
              { message: "Hi! What's up?", username: "helper", timestamp: "2:45 PM", avatarIndex: 1 },
              { message: "I need help with something", username: "confused_user", timestamp: "2:46 PM", avatarIndex: 0 }
            ]}
            goodExample={[
              { message: "Hi! I'm trying to reset my password but the email isn't coming through. I've checked my spam folder. Can someone help?", username: "clear_user", timestamp: "2:30 PM", avatarIndex: 2 },
              { message: "Sure! Let me check your account. What email address are you using?", username: "helper", timestamp: "2:31 PM", avatarIndex: 1 }
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