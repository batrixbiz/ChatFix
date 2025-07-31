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
    <div className="bg-background/90 backdrop-blur-md border-b border-border/30 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-5">
        <span className="text-sm text-muted-foreground/90 font-mono tracking-wider hover:text-foreground/70 transition-colors duration-200">
          {getBreadcrumb()}
        </span>
      </div>
    </div>
  );
};

export default Breadcrumb;