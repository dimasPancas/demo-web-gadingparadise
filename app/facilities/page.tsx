"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Clock, CheckCircle2, PhoneCall, ShieldCheck, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FacilityCard, { FacilityItem } from "@/components/FacilityCard";
import WhatsAppBookingModal from "@/components/WhatsAppBookingModal";
import { FACILITIES_DATA } from "@/lib/data";
import { BookingDetails } from "@/lib/whatsapp";

export default function FacilitiesPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<BookingDetails>({});

  const handleFacilityBook = (facility: FacilityItem) => {
    setSelectedBooking({
      itemName: facility.title,
      category: "Fasilitas",
      price: facility.priceNote,
    });
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] pt-24 pb-20">
      {/* Header Banner */}
      <section className="bg-[#183D2C] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <Badge className="bg-[#D4A373] text-[#183D2C] font-semibold mb-2">
            Wahana & Layanan Lengkap
          </Badge>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            Fasilitas Eksklusif Gading Paradise
          </h1>
          <p className="text-[#D1DBD4] text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Dari kesegaran waterpark modern hingga kemewahan venue pernikahan dan sensasi pacuan kuda, temukan pengalaman rekreasi tak tertandingi di Kebumen.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10 text-center sm:text-left">
          <h2 className="font-serif text-3xl font-bold text-[#183D2C]">
            Pilihan Wahana & Fasilitas Utama
          </h2>
          <p className="text-sm text-[#5E6B62] mt-1">
            Klik tombol &quot;Reservasi&quot; untuk langsung terhubung dengan tim customer service kami.
          </p>
        </div>

        {/* Responsive Grid of Facilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {FACILITIES_DATA.map((facility) => (
            <div key={facility.id} id={facility.id} className="scroll-mt-28">
              <FacilityCard facility={facility} onBook={handleFacilityBook} />
            </div>
          ))}
        </div>

        {/* Informational Guidelines Section */}
        <div className="mt-16 bg-white p-8 sm:p-10 rounded-3xl border border-[#E5DEC9] shadow-sm">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#C46D3B] font-bold">
              Informasi Kunjungan
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#183D2C] mt-1 mb-4">
              Ketentuan & Kenyamanan Pengunjung
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#4E5C53]">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#2D6A4F] shrink-0 mt-0.5" />
                <span>Seluruh wahana air diawasi oleh lifeguard terlatih bersertifikasi.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#2D6A4F] shrink-0 mt-0.5" />
                <span>Tersedia loker penitipan barang aman dan ruang bilas air hangat.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#2D6A4F] shrink-0 mt-0.5" />
                <span>Penyewaan venue acara wajib melakukan reservasi H-7 sebelumnya.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#2D6A4F] shrink-0 mt-0.5" />
                <span>Diskon khusus untuk rombongan sekolah, instansi, atau komunitas &gt; 25 orang.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialDetails={selectedBooking}
      />
    </div>
  );
}
