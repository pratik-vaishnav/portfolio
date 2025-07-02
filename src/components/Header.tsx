import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Download, Mail, ExternalLink } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/experience", label: "Experience" },
    { path: "/projects", label: "Projects" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    {
      path: "https://pratik-vaishnav.blogspot.com/",
      label: "Blog",
      external: true,
    },
  ];

  const isActivePath = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo size="md" showText={false} />
            <span className="ml-3 font-bold text-xl text-primary-900 hidden sm:block">
              Pratik Vaishnav
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium transition-colors hover:text-primary-600 text-gray-600 flex items-center gap-1"
                >
                  {item.label}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary-600",
                    isActivePath(item.path)
                      ? "text-primary-600"
                      : "text-gray-600",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <a
                href="/Pratik_Resume.pdf"
                download="Pratik_Vaishnav_Resume.pdf"
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </Button>
            <Button size="sm" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contact
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) =>
                item.external ? (
                  <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium transition-colors hover:text-primary-600 px-2 py-1 text-gray-600 flex items-center gap-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary-600 px-2 py-1",
                      isActivePath(item.path)
                        ? "text-primary-600"
                        : "text-gray-600",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <div className="flex flex-col gap-3 pt-4">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="/Pratik_Resume.pdf"
                    download="Pratik_Vaishnav_Resume.pdf"
                    className="flex items-center gap-2 justify-center"
                  >
                    <Download className="w-4 h-4" />
                    Resume
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 justify-center"
                  >
                    <Mail className="w-4 h-4" />
                    Contact
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
