import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone, ArrowRight, Instagram, Facebook, Linkedin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#story" },
  { label: "Academics", href: "#academics" },
  { label: "Admissions", href: "#admissions" },
  { label: "Gallery", href: "#gallery" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

const socials: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "LinkedIn", href: "#", icon: Linkedin },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-footer text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {/* School Info — spans 5 cols */}
          <div className="md:col-span-5">
            {/* Logo + Name */}
            <div className="flex items-center gap-2.5 mb-5">
              <Image
                src="/images/logo.png"
                alt="GKA Logo"
                width={28}
                height={28}
                className="rounded"
              />
              <span className="text-sm font-semibold tracking-tight">
                Genius Khalifah Academy
              </span>
            </div>

            <p className="text-sm text-white/50 leading-relaxed max-w-sm mb-8">
              A premier educational institution in Agbado, Ogun State, dedicated
              to academic rigour and character building within an Islamic
              framework.
            </p>

            {/* Contact Details */}
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/50">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-white/30" />
                1, Adetoro Street (Off Adeleke B/Stop), Abule Oko Road, Olaogun
                Agbado, Ogun State, Nigeria
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/50">
                <Mail size={15} className="flex-shrink-0 text-white/30" />
                <a
                  href="mailto:geniuskhalifahacademy@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  geniuskhalifahacademy@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/50">
                <Phone size={15} className="flex-shrink-0 text-white/30" />
                <a
                  href="tel:+2348000000000"
                  className="hover:text-white transition-colors"
                >
                  +234 800 000 0000
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links — spans 3 cols */}
          <div className="md:col-span-3">
            <h3 className="text-xs tracking-[0.15em] uppercase text-white/40 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect — spans 4 cols */}
          <div className="md:col-span-4">
            <h3 className="text-xs tracking-[0.15em] uppercase text-white/40 mb-5">
              Connect
            </h3>

            <a
              href="mailto:geniuskhalifahacademy@gmail.com"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-white/80 transition-colors mb-8"
            >
              Get in Touch
              <ArrowRight size={14} />
            </a>

            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Genius Khalifah Academy. All
            rights reserved.
          </p>
          <p className="text-xs text-white/30">WAEC &amp; NECO Approved</p>
        </div>
      </div>
    </footer>
  );
}
