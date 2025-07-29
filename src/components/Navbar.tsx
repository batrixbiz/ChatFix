import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 space-y-4 sm:space-y-0">
          <Link to="/" className="text-2xl font-bold text-primary hover:text-warm-accent transition-colors text-center sm:text-left">
            ChatFix
          </Link>
          
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 text-center sm:text-left">
            <Link
              to="/"
              className={`text-lg font-medium transition-colors ${
                isActive("/") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/nohello"
              className={`text-lg font-medium transition-colors ${
                isActive("/nohello") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              No Hello
            </Link>
            <Link
              to="/xyproblem"
              className={`text-lg font-medium transition-colors ${
                isActive("/xyproblem") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              XY Problem
            </Link>
            <Link
              to="/justask"
              className={`text-lg font-medium transition-colors ${
                isActive("/justask") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Just Ask
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;