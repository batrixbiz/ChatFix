interface ChatExampleProps {
  badExample: string;
  goodExample: string;
}

const ChatExample = ({ badExample, goodExample }: ChatExampleProps) => {
  return (
    <div className="space-y-6">
      <div className="bg-chat-bad p-4 rounded-lg border-l-4 border-destructive">
        <p className="text-sm text-muted-foreground mb-2">❌ Don't do this</p>
        <div className="bg-background p-3 rounded border">
          <p className="text-foreground">{badExample}</p>
        </div>
      </div>
      
      <div className="bg-chat-good p-4 rounded-lg border-l-4 border-green-500">
        <p className="text-sm text-muted-foreground mb-2">✅ Do this instead</p>
        <div className="bg-background p-3 rounded border">
          <p className="text-foreground">{goodExample}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatExample;