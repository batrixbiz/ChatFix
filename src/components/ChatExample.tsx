interface ChatExampleProps {
  badExample: string;
  goodExample: string;
}

const ChatMessage = ({ message, isGood = false, username, timestamp }: { 
  message: string; 
  isGood?: boolean;
  username: string;
  timestamp: string;
}) => {
  return (
    <div className="flex items-start gap-3 p-4 hover:bg-background/50 transition-all duration-150">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
        isGood ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'
      }`}>
        {username.charAt(0).toUpperCase()}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="font-semibold text-foreground text-sm">
            {username}
          </span>
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        </div>
        <div className={`text-sm leading-relaxed p-3 rounded-lg ${
          isGood 
            ? 'bg-emerald-950/20 border border-emerald-900/30 text-emerald-100' 
            : 'bg-red-950/20 border border-red-900/30 text-red-100'
        }`}>
          {message}
        </div>
      </div>
    </div>
  );
};

const ChatExample = ({ badExample, goodExample }: ChatExampleProps) => {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="bg-card border border-red-900/20 rounded-lg overflow-hidden">
        <div className="bg-red-950/30 px-4 py-3 border-b border-red-900/20">
          <span className="text-sm font-semibold text-red-400">❌ Don't do this</span>
        </div>
        <ChatMessage 
          message={badExample} 
          isGood={false} 
          username="confused_user"
          timestamp="Today at 2:30 PM"
        />
      </div>
      
      <div className="bg-card border border-emerald-900/20 rounded-lg overflow-hidden">
        <div className="bg-emerald-950/30 px-4 py-3 border-b border-emerald-900/20">
          <span className="text-sm font-semibold text-emerald-400">✅ Do this instead</span>
        </div>
        <ChatMessage 
          message={goodExample} 
          isGood={true} 
          username="clear_communicator"
          timestamp="Today at 2:31 PM"
        />
      </div>
    </div>
  );
};

export default ChatExample;