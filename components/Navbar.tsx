"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, PhoneCall, Compass, Home, Sparkles, Bed, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/", icon: Home },
    { name: "Fasilitas", href: "/facilities", icon: Sparkles },
    { name: "Penginapan", href: "/accommodation", icon: Bed },
    { name: "Tentang Kami", href: "/#tentang", icon: Compass },
    { name: "Lokasi & Kontak", href: "/#lokasi", icon: MapPin },
  ];

  const waBookingUrl =
    "https://wa.me/6287779047467?text=" +
    encodeURIComponent(
      "Halo Admin Gading Paradise Kebumen, saya ingin menanyakan informasi pemesanan tiket / akomodasi."
    );

  const isTransparentHero = pathname === "/" && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparentHero
          ? "bg-gradient-to-b from-black/70 via-black/30 to-transparent text-white py-5"
          : "bg-[#183d2c]/95 backdrop-blur-md shadow-md text-white py-3.5 border-b border-[#2d5740]/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex flex-col">
          <span className="font-serif text-2xl md:text-3xl font-bold tracking-wider text-[#fcfbfa] group-hover:text-[#d4a373] transition-colors">
            GADING PARADISE
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#d4a373] font-medium">
            Kebumen • Resort & Recreation
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors relative py-1 text-sm tracking-wide ${
                  isActive
                    ? "text-[#d4a373] font-semibold"
                    : "text-white/90 hover:text-[#d4a373]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d4a373] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a href={waBookingUrl} target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#c46d3b] hover:bg-[#b05c2d] text-white font-medium px-5 py-2 rounded-full shadow-sm hover:shadow-md transition-all flex items-center gap-2 border border-[#d88454]/40">
              <PhoneCall className="w-4 h-4" />
              <span>Pesan Sekarang</span>
            </Button>
          </a>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="flex md:hidden items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors inline-flex items-center justify-center cursor-pointer"
              aria-label="Buka Menu"
            >
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#132e22] text-white border-l border-[#2d5740] w-[300px] sm:w-[360px] p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#2d5740]/60">
                  <div>
                    <SheetTitle className="font-serif text-xl font-bold tracking-wider text-white">
                      GADING PARADISE
                    </SheetTitle>
                    <p className="text-[10px] tracking-widest text-[#d4a373] uppercase mt-0.5">
                      Kebumen Resort
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-base ${
                          isActive
                            ? "bg-[#1b4332] text-[#d4a373] font-semibold"
                            : "text-white/85 hover:bg-[#1b4332]/50 hover:text-white"
                        }`}
                      >
                        <Icon className="w-5 h-5 text-[#d4a373]" />
                        <span>{link.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-[#2d5740]/60">
                <a
                  href={waBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full"
                >
                  <Button className="w-full bg-[#c46d3b] hover:bg-[#b05c2d] text-white py-5 rounded-xl font-medium flex items-center justify-center gap-2">
                    <PhoneCall className="w-4 h-4" />
                    <span>Pesan via WhatsApp</span>
                  </Button>
                </a>
                <p className="text-xs text-center text-[#d4a373]/80 mt-3">
                  Respon cepat 08.00 - 20.00 WIB
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
