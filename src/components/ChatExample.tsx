import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatMessage {
  message: string;
  username: string;
  timestamp: string;
  avatarIndex: number;
}

interface ChatExampleProps {
  badExample: ChatMessage[];
  goodExample: ChatMessage[];
}

const profilePics = [
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108755-2616b612b1f6?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
];

const ChatMessageBubble = ({ message, username, timestamp, avatarIndex }: ChatMessage) => {
  return (
    <div className="flex items-start gap-4 p-4 hover:bg-card/30 transition-all duration-200 group">
      <Avatar className="w-10 h-10 border-2 border-border/50 group-hover:border-primary/20 transition-all duration-200">
        <AvatarImage 
          src={profilePics[avatarIndex % profilePics.length]} 
          alt={username}
          className="object-cover"
        />
        <AvatarFallback className="text-sm font-semibold bg-gradient-to-br from-muted to-muted-foreground/20 text-foreground">
          {username.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      
      <div className="flex-1 min-w-0 space-y-2">
        <div className="flex items-baseline gap-3">
          <span className="font-semibold text-foreground text-sm tracking-tight">
            {username}
          </span>
          <span className="text-xs text-muted-foreground font-mono">{timestamp}</span>
        </div>
        
        <div className="text-sm leading-relaxed p-3 rounded-xl bg-card/80 border border-border/30 text-foreground">
          {message}
        </div>
      </div>
    </div>
  );
};

const ChatExample = ({ badExample, goodExample }: ChatExampleProps) => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 animate-fade-in-up">
      <div className="bg-gradient-to-br from-card to-card/80 border border-red-700/20 rounded-2xl overflow-hidden shadow-xl shadow-red-900/5 hover:shadow-2xl hover:shadow-red-900/10 transition-all duration-300 group">
        <div className="bg-gradient-to-r from-red-950/40 to-red-900/30 px-6 py-4 border-b border-red-700/20">
          <span className="text-sm font-bold text-red-300 tracking-wide">❌ Don't do this</span>
        </div>
        <div className="space-y-0">
          {badExample.map((msg, index) => (
            <ChatMessageBubble key={index} {...msg} />
          ))}
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-card to-card/80 border border-emerald-700/20 rounded-2xl overflow-hidden shadow-xl shadow-emerald-900/5 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-300 group">
        <div className="bg-gradient-to-r from-emerald-950/40 to-emerald-900/30 px-6 py-4 border-b border-emerald-700/20">
          <span className="text-sm font-bold text-emerald-300 tracking-wide">✅ Do this instead</span>
        </div>
        <div className="space-y-0">
          {goodExample.map((msg, index) => (
            <ChatMessageBubble key={index} {...msg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatExample;