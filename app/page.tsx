"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Compass,
  CheckCircle2,
  Calendar,
  Users,
  Award,
  PhoneCall,
  MapPin,
  Clock,
  Heart,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FacilityCard, { FacilityItem } from "@/components/FacilityCard";
import LocationSection from "@/components/LocationSection";
import WhatsAppBookingModal from "@/components/WhatsAppBookingModal";
import { FACILITIES_DATA, ACCOMMODATIONS_DATA, AccommodationItem } from "@/lib/data";
import { BookingDetails } from "@/lib/whatsapp";

export default function HomePage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<BookingDetails>({});

  const handleOpenBooking = (details: BookingDetails) => {
    setSelectedBooking(details);
    setBookingModalOpen(true);
  };

  const handleFacilityBook = (facility: FacilityItem) => {
    handleOpenBooking({
      itemName: facility.title,
      category: "Fasilitas",
      price: facility.priceNote,
    });
  };

  const handleAccommodationBook = (room: AccommodationItem) => {
    handleOpenBooking({
      itemName: `${room.categoryName} - ${room.title}`,
      category: "Penginapan",
      price: room.pricePerNight,
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F4EE]">
      {/* -------------------- STEP 2: HERO SECTION -------------------- */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg"
            alt="Gading Paradise Kebumen Resort"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105 animate-in fade-in duration-1000"
          />
          {/* Subtle multi-layer gradient dark overlay for maximum legibility and warmth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#132E22] via-[#132E22]/60 to-black/40" />
          <div className="absolute inset-0 bg-[#183D2C]/30 backdrop-brightness-95" />
        </div>

        {/* Content with Framer Motion Fade-In Animation */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-24 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#183D2C]/80 border border-[#D4A373]/50 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#EAE3D2]">
                Destinasi Wisata & Resort Ikonik Kebumen
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.15] drop-shadow-md">
              Gading Paradise Kebumen: <span className="text-[#D4A373] italic font-normal">Oase Kemewahan</span> di Jantung Kebumen
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-[#E5DEC9] max-w-2xl mx-auto font-light leading-relaxed drop-shadow">
              Nikmati perpaduan sempurna rekreasi modern dan keanggunan budaya
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button
                onClick={() =>
                  handleOpenBooking({
                    itemName: "Kunjungan Wisata & Tiket Masuk",
                    category: "Tiket Wisata",
                  })
                }
                size="lg"
                className="w-full sm:w-auto bg-[#C46D3B] hover:bg-[#B05C2D] text-white text-base font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 border border-[#D88454]/40 flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Pesan Sekarang</span>
              </Button>

              <Link href="/facilities" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-white/15 hover:bg-white/25 text-white border-white/40 hover:border-white text-base font-medium px-8 py-6 rounded-full backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Jelajahi Fasilitas</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Quick Feature Badges */}
            <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
              {[
                { label: "Waterpark & Kolam", sub: "Standar Higienis" },
                { label: "Pacuan Kuda", sub: "Pemandu Resmi" },
                { label: "Villa & Glamping", sub: "Suasana Asri" },
                { label: "Wedding Hall", sub: "Kapasitas 1000+" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-black/35 backdrop-blur-sm p-3 rounded-xl border border-white/10"
                >
                  <p className="text-xs font-semibold text-white">{item.label}</p>
                  <p className="text-[11px] text-[#D4A373]">{item.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* -------------------- STEP 2: INTRODUCTION SECTION -------------------- */}
      <section id="tentang" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C46D3B] uppercase">
              <Compass className="w-4 h-4" />
              <span>Tentang Gading Paradise</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#183D2C] leading-tight">
              Harmoni Keindahan Mediterania Berpadu Keramahan Jawa
            </h2>

            <p className="text-[#4E5C53] leading-relaxed text-base md:text-lg">
              Berlokasi di kawasan Pejagoan, Kebumen, <strong>Gading Paradise</strong> hadir sebagai landmark wisata premier keluarga. Kami memadukan estetika lanskap arsitektur khas resort Mediterania bernuansa kastil anggun dengan keteduhan alam tropis dan sentuhan tradisi Jawa yang hangat.
            </p>

            <p className="text-[#4E5C53] leading-relaxed text-base">
              Setiap sudut dirancang tidak hanya sebagai tempat melepas penat, tetapi juga sebagai ruang berbagi kenangan tak terlupakan. Mulai dari keceriaan wahana air, sensasi berkuda di lintasan asri, pusat kebugaran terpadu, hingga villa peristirahatan yang tenang.
            </p>

            {/* Checklist points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                "Lokasi Strategis & Parkir Luas",
                "Aman & Ramah untuk Semua Usia",
                "Pilihan Kuliner Khas & Modern",
                "Spot Foto Estetik & Ikonik",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm font-medium text-[#183D2C]">
                  <CheckCircle2 className="w-4 h-4 text-[#C46D3B] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Button
                onClick={() =>
                  handleOpenBooking({
                    itemName: "Konsultasi Kunjungan Rombongan / Acara",
                    category: "Umum",
                  })
                }
                className="bg-[#183D2C] hover:bg-[#132E22] text-[#FCFBFA] px-6 py-3 rounded-full font-medium cursor-pointer"
              >
                Hubungi Pengelola
              </Button>
              <Link href="/facilities">
                <span className="text-sm font-semibold text-[#C46D3B] hover:text-[#B05C2D] flex items-center gap-1 cursor-pointer">
                  Lihat Semua Wahana <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Column 2: Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Image */}
              <div className="relative h-[420px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#EAE3D2]">
                <Image
                  src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg"
                  alt="Gading Paradise Waterpark & Resort"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#183D2C]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-[#D4A373] font-semibold">
                    Keindahan Tiada Dua
                  </span>
                  <h3 className="font-serif text-2xl font-bold mt-0.5">
                    Pesona Resort Air & Nuansa Kastil
                  </h3>
                </div>
              </div>

              {/* Floating Badge Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-[#E5DEC9] max-w-[220px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#183D2C] flex items-center justify-center text-[#D4A373]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-lg font-bold font-serif text-[#183D2C]">4.9 / 5.0</p>
                    <p className="text-xs text-[#5E6B62]">Rating Wisatawan</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -------------------- STEP 3: FACILITIES PREVIEW SECTION -------------------- */}
      <section id="facilities" className="py-20 bg-[#EFE9DC]/60 border-y border-[#E2D8C7] scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-[#C46D3B] font-bold">
                Fasilitas Unggulan
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#183D2C]">
                Layanan & Wahana Rekreasi Pilihan
              </h2>
              <p className="text-[#5E6B62] text-base">
                Temukan beragam fasilitas kelas satu yang dirancang untuk kesenangan setiap anggota keluarga dan tamu istimewa Anda.
              </p>
            </div>

            <div className="mt-6 md:mt-0">
              <Link href="/facilities">
                <Button
                  variant="outline"
                  className="border-[#183D2C] text-[#183D2C] hover:bg-[#183D2C] hover:text-white rounded-full px-5 py-2 font-medium text-sm transition-all cursor-pointer"
                >
                  Lihat Seluruh Fasilitas
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Grid of 4 Facilities using FacilityCard Component */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACILITIES_DATA.map((facility) => (
              <FacilityCard
                key={facility.id}
                facility={facility}
                onBook={handleFacilityBook}
              />
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- STEP 4: ACCOMMODATION TABS SECTION -------------------- */}
      <section id="accommodation" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs uppercase tracking-widest text-[#C46D3B] font-bold">
            Penginapan & Peristirahatan
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#183D2C]">
            Bermalam Nyaman di Gading Paradise
          </h2>
          <p className="text-[#5E6B62] text-base md:text-lg">
            Pilih tipe kamar dan suasana menginap favorit Anda. Nikmati udara sejuk, ketenangan alam, dan fasilitas resort bintang.
          </p>
        </div>

        {/* shadcn Tabs for Accommodations */}
        <Tabs defaultValue="deluxe" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-[#EAE3D2] p-1.5 rounded-full border border-[#DCD3C0] h-auto flex flex-wrap justify-center gap-1">
              <TabsTrigger
                value="deluxe"
                className="rounded-full px-6 py-2.5 text-sm font-semibold data-[state=active]:bg-[#183D2C] data-[state=active]:text-white transition-all"
              >
                Kamar Deluxe
              </TabsTrigger>
              <TabsTrigger
                value="villa"
                className="rounded-full px-6 py-2.5 text-sm font-semibold data-[state=active]:bg-[#183D2C] data-[state=active]:text-white transition-all"
              >
                Villa Keluarga
              </TabsTrigger>
              <TabsTrigger
                value="glamping"
                className="rounded-full px-6 py-2.5 text-sm font-semibold data-[state=active]:bg-[#183D2C] data-[state=active]:text-white transition-all"
              >
                Glamping
              </TabsTrigger>
            </TabsList>
          </div>

          {ACCOMMODATIONS_DATA.map((room) => (
            <TabsContent key={room.id} value={room.categoryKey} className="focus-visible:outline-none">
              <div className="bg-white rounded-3xl border border-[#E5DEC9] shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Room Image */}
                  <div className="lg:col-span-6 relative min-h-[340px] sm:min-h-[420px] bg-[#EAE3D2]">
                    <Image
                      src={room.image}
                      alt={room.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#183D2C] text-[#D4A373] border-none px-3 py-1 text-xs">
                        {room.categoryName}
                      </Badge>
                    </div>
                  </div>

                  {/* Room Info & Details */}
                  <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-[#C46D3B] font-bold">
                          {room.tagline}
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#183D2C] mt-1">
                          {room.title}
                        </h3>
                      </div>

                      <p className="text-sm text-[#4E5C53] leading-relaxed">
                        {room.description}
                      </p>

                      {/* Room Specs grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 pb-2">
                        <div className="bg-[#F8F5EE] p-3 rounded-xl border border-[#E8DFD0]">
                          <span className="text-[11px] text-[#6F7D74] block">Kapasitas</span>
                          <span className="text-xs font-bold text-[#183D2C]">{room.capacity}</span>
                        </div>
                        <div className="bg-[#F8F5EE] p-3 rounded-xl border border-[#E8DFD0]">
                          <span className="text-[11px] text-[#6F7D74] block">Tipe Tempat Tidur</span>
                          <span className="text-xs font-bold text-[#183D2C]">{room.bedType}</span>
                        </div>
                        <div className="bg-[#F8F5EE] p-3 rounded-xl border border-[#E8DFD0] col-span-2 sm:col-span-1">
                          <span className="text-[11px] text-[#6F7D74] block">Luas Kamar</span>
                          <span className="text-xs font-bold text-[#183D2C]">{room.size}</span>
                        </div>
                      </div>

                      {/* Amenities checklist */}
                      <div className="space-y-2 pt-2">
                        <p className="text-xs font-semibold text-[#183D2C] uppercase tracking-wider">
                          Fasilitas Termasuk:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {room.amenities.slice(0, 6).map((amenity, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-[#4E5C53]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0" />
                              <span>{amenity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Price & Booking Button */}
                    <div className="pt-6 border-t border-[#EAE3D2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-[#6F7D74] block">Tarif Menginap</span>
                        <div className="text-2xl font-bold font-serif text-[#C46D3B]">
                          {room.pricePerNight}
                        </div>
                      </div>

                      <Button
                        onClick={() => handleAccommodationBook(room)}
                        size="lg"
                        className="bg-[#C46D3B] hover:bg-[#B05C2D] text-white px-7 py-3 rounded-xl font-medium shadow-md flex items-center justify-center gap-2 text-sm transition-all cursor-pointer"
                      >
                        <PhoneCall className="w-4 h-4" />
                        <span>Pesan Kamar (WhatsApp)</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* -------------------- INTERACTIVE LOCATION & MAPS SECTION -------------------- */}
      <LocationSection />

      {/* -------------------- STEP 5: BANNER CTA & INTERACTIVE SIMULATION -------------------- */}
      <section className="py-16 bg-[#183D2C] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <Badge className="bg-[#D4A373] text-[#183D2C] font-semibold">
                Layanan Reservasi Cepat
              </Badge>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Rencanakan Liburan Istimewa Anda Hari Ini
              </h2>
              <p className="text-[#D1DBD4] text-base max-w-2xl leading-relaxed">
                Dapatkan penawaran harga terbaik untuk tiket rombongan, sewa venue acara, dan kamar keluarga dengan layanan respon cepat via WhatsApp resmi kami.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Button
                onClick={() =>
                  handleOpenBooking({
                    itemName: "Paket Liburan & Wisata Komplit",
                    category: "Umum",
                  })
                }
                size="lg"
                className="w-full bg-[#C46D3B] hover:bg-[#B05C2D] text-white font-semibold py-6 rounded-2xl shadow-xl flex items-center justify-center gap-2 text-base cursor-pointer"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Simulasi Booking WhatsApp</span>
              </Button>
              <p className="text-[11px] text-center text-[#D4A373]/80">
                Pesan terformat otomatis tanpa ribet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Modal Instance */}
      <WhatsAppBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialDetails={selectedBooking}
      />
    </div>
  );
}
