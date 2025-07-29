import { useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  
  const getBreadcrumb = () => {
    const path = location.pathname;
    
    switch (path) {
      case "/":
        return "chatfix・home";
      case "/nohello":
        return "chatfix・home・no hello";
      case "/xyproblem":
        return "chatfix・home・xy problem";
      case "/justask":
        return "chatfix・home・just ask";
      default:
        return "chatfix・home";
    }
  };

  return (
    <div className="bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <span className="text-sm text-muted-foreground font-mono tracking-wide">
          {getBreadcrumb()}
        </span>
      </div>
    </div>
  );
};

export default Breadcrumb;