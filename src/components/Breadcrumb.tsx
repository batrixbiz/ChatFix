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
    <div className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <span className="text-sm text-muted-foreground font-mono">
          {getBreadcrumb()}
        </span>
      </div>
    </div>
  );
};

export default Breadcrumb;