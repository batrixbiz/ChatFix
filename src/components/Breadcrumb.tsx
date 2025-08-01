import { useLocation, Link } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  const getBreadcrumb = () => {
    const path = location.pathname;

    switch (path) {
      case "/":
        return "home";
      case "/nohello":
        return "nohello";
      case "/xyproblem":
        return "xyproblem";
      case "/justask":
        return "justask";
      default:
        return "home";
    }
  };

  return (
    <div className="bg-background/90 backdrop-blur-md border-b border-border/30 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-5">
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src="/chatfix.png"
              alt="ChatFix"
              className="w-6 h-6 rounded-sm hover:opacity-80 transition-opacity"
            />
          </Link>
          <span className="text-base text-muted-foreground/90 font-mono tracking-wider">
            <Link
              to="/"
              className="hover:text-foreground/70 transition-colors duration-200"
            >
              chatfix
            </Link>
            <span className="px-1">/</span>
            {getBreadcrumb()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
