"use client";

import {
  useState,
  useEffect,
  useCallback,
  useRef,
  type MouseEvent,
  type ReactNode,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#story" },
  { label: "Academics", href: "#academics" },
  { label: "Admissions", href: "#admissions" },
  { label: "Gallery", href: "#gallery" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

/* ─── iOS-style ripple wrapper ─── */
interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

function RippleLink({
  href,
  children,
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const nextId = useRef(0);

  const handleClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const size = Math.max(rect.width, rect.height) * 2.5;
      const id = nextId.current++;

      setRipples((prev) => [...prev, { id, x, y, size }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);

      onClick?.();
    },
    [onClick]
  );

  return (
    <Link href={href} className={`ripple-host ${className}`} onClick={handleClick}>
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="ripple-circle"
          style={{
            width: r.size,
            height: r.size,
            left: r.x - r.size / 2,
            top: r.y - r.size / 2,
          }}
        />
      ))}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Floating glass navbar (appears on scroll) ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: scrolled ? 0 : -80,
          opacity: scrolled ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 28,
        }}
        className="fixed top-3 left-1/2 -translate-x-1/2 z-50 navbar-glass rounded-2xl w-[calc(100%-24px)] lg:w-[75%]"
      >
        <div className="px-5 lg:px-6">
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <RippleLink
              href="#"
              className="flex items-center gap-2.5 rounded-lg px-1.5 py-1 -ml-1.5"
            >
              <Image
                src="/images/logo.png"
                alt="GKA Logo"
                width={32}
                height={32}
                className="rounded relative z-[1]"
              />
              <span className="text-sm font-semibold tracking-tight text-foreground hidden sm:inline relative z-[1]">
                Genius Khalifah Academy
              </span>
            </RippleLink>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <RippleLink
                  key={link.label}
                  href={link.href}
                  className="text-[13px] text-foreground/80 hover:text-foreground px-3 py-1.5 rounded-lg transition-colors duration-200"
                >
                  <span className="relative z-[1]">{link.label}</span>
                </RippleLink>
              ))}
              <RippleLink
                href="#admissions"
                className="ml-2 bg-accent text-white text-[13px] font-medium px-5 py-2 rounded-lg hover:bg-accent/90 transition-all duration-150"
              >
                <span className="relative z-[1]">Apply Now</span>
              </RippleLink>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-foreground p-1.5 rounded-lg hover:bg-black/[0.04] transition-colors"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.25,
                ease: [0.25, 0.1, 0.25, 1] as const,
              }}
              className="lg:hidden overflow-hidden border-t border-black/[0.06]"
            >
              <div className="px-5 py-3 space-y-0.5">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                  >
                    <RippleLink
                      href={link.href}
                      className="block py-2.5 px-3 text-sm text-foreground hover:text-accent rounded-lg transition-colors duration-200"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="relative z-[1]">{link.label}</span>
                    </RippleLink>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: navLinks.length * 0.04,
                    duration: 0.25,
                  }}
                  className="pt-2 pb-1"
                >
                  <RippleLink
                    href="#admissions"
                    className="block bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-lg text-center hover:bg-accent/90 transition-all duration-150"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="relative z-[1]">Apply Now</span>
                  </RippleLink>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ── Floating glass navbar over hero (before scroll) ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: scrolled ? -80 : 0,
          opacity: scrolled ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 28,
        }}
        className={`fixed top-3 left-1/2 -translate-x-1/2 z-40 navbar-glass-hero rounded-2xl w-[calc(100%-24px)] lg:w-[75%] ${
          scrolled ? "pointer-events-none" : ""
        }`}
      >
        <div className="px-5 lg:px-6">
          <div className="flex h-14 items-center justify-between">
            <RippleLink
              href="#"
              className="flex items-center gap-2.5 rounded-lg px-1.5 py-1 -ml-1.5"
            >
              <Image
                src="/images/logo.png"
                alt="GKA Logo"
                width={32}
                height={32}
                className="rounded relative z-[1]"
              />
              <span className="text-sm font-semibold tracking-tight text-white hidden sm:inline relative z-[1]">
                Genius Khalifah Academy
              </span>
            </RippleLink>
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <RippleLink
                  key={link.label}
                  href={link.href}
                  className="text-[13px] text-white/70 hover:text-white px-3 py-1.5 rounded-lg transition-colors duration-200"
                >
                  <span className="relative z-[1]">{link.label}</span>
                </RippleLink>
              ))}
              <RippleLink
                href="#admissions"
                className="ml-2 bg-accent text-white text-[13px] font-medium px-5 py-2 rounded-lg hover:bg-accent/90 transition-all duration-150"
              >
                <span className="relative z-[1]">Apply Now</span>
              </RippleLink>
            </div>
            <motion.button
              onClick={() => {
                setScrolled(true);
                setMenuOpen(true);
              }}
              className="lg:hidden text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <Menu size={20} />
            </motion.button>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
