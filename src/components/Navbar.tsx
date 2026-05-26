import { useEffect, useState } from "react";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg tracking-wider">
          <span className="text-gradient">FELIPE</span><span className="text-foreground">.B</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-muted-foreground hover:text-cyan-glow transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
