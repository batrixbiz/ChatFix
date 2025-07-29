interface ChatExampleProps {
  badExample: string;
  goodExample: string;
}

const ChatMessage = ({ message, isGood = false }: { message: string; isGood?: boolean }) => {
  return (
    <div className="flex items-start gap-3 p-3 hover:bg-muted/30 transition-colors">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
        isGood ? 'bg-chat-good text-green-400' : 'bg-chat-bad text-red-400'
      }`}>
        {isGood ? '✓' : '✗'}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="font-medium text-foreground text-sm">
            {isGood ? 'HelpfulUser' : 'NewUser'}
          </span>
          <span className="text-xs text-muted-foreground">Today at 2:30 PM</span>
        </div>
        <div className="text-foreground text-sm leading-relaxed">
          {message}
        </div>
      </div>
    </div>
  );
};

const ChatExample = ({ badExample, goodExample }: ChatExampleProps) => {
  return (
    <div className="space-y-8">
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="bg-chat-bad/50 px-4 py-2 border-b border-border">
          <span className="text-sm font-medium text-red-400">❌ Don't do this</span>
        </div>
        <ChatMessage message={badExample} isGood={false} />
      </div>
      
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="bg-chat-good/50 px-4 py-2 border-b border-border">
          <span className="text-sm font-medium text-green-400">✅ Do this instead</span>
        </div>
        <ChatMessage message={goodExample} isGood={true} />
      </div>
    </div>
  );
};

export default ChatExample;