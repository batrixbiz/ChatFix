import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatExampleProps {
  badExample: string;
  goodExample: string;
}

const profilePics = [
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108755-2616b612b1f6?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
];

const ChatMessage = ({ message, isGood = false, username, timestamp, avatarIndex = 0 }: { 
  message: string; 
  isGood?: boolean;
  username: string;
  timestamp: string;
  avatarIndex?: number;
}) => {
  return (
    <div className="flex items-start gap-4 p-6 hover:bg-card/50 transition-all duration-200 group">
      <Avatar className="w-12 h-12 border-2 border-border/50 group-hover:border-primary/20 transition-all duration-200">
        <AvatarImage 
          src={profilePics[avatarIndex % profilePics.length]} 
          alt={username}
          className="object-cover"
        />
        <AvatarFallback className={`text-sm font-semibold ${
          isGood 
            ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white' 
            : 'bg-gradient-to-br from-red-500 to-red-600 text-white'
        }`}>
          {username.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      
      <div className="flex-1 min-w-0 space-y-2">
        <div className="flex items-baseline gap-3">
          <span className="font-semibold text-foreground text-base tracking-tight">
            {username}
          </span>
          <span className="text-xs text-muted-foreground font-mono">{timestamp}</span>
        </div>
        
        <div className={`text-sm leading-relaxed p-4 rounded-xl border transition-all duration-200 ${
          isGood 
            ? 'bg-gradient-to-br from-emerald-950/30 to-emerald-900/20 border-emerald-700/30 text-emerald-50 shadow-lg shadow-emerald-900/10' 
            : 'bg-gradient-to-br from-red-950/30 to-red-900/20 border-red-700/30 text-red-50 shadow-lg shadow-red-900/10'
        }`}>
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
        <ChatMessage 
          message={badExample} 
          isGood={false} 
          username="confused_user"
          timestamp="Today at 2:30 PM"
          avatarIndex={0}
        />
      </div>
      
      <div className="bg-gradient-to-br from-card to-card/80 border border-emerald-700/20 rounded-2xl overflow-hidden shadow-xl shadow-emerald-900/5 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-300 group">
        <div className="bg-gradient-to-r from-emerald-950/40 to-emerald-900/30 px-6 py-4 border-b border-emerald-700/20">
          <span className="text-sm font-bold text-emerald-300 tracking-wide">✅ Do this instead</span>
        </div>
        <ChatMessage 
          message={goodExample} 
          isGood={true} 
          username="clear_communicator"
          timestamp="Today at 2:31 PM"
          avatarIndex={1}
        />
      </div>
    </div>
  );
};

export default ChatExample;