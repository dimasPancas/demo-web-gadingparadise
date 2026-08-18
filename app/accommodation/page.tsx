"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, CheckCircle2, PhoneCall, Bed, Users, Maximize2, ShieldAlert, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WhatsAppBookingModal from "@/components/WhatsAppBookingModal";
import { ACCOMMODATIONS_DATA, AccommodationItem } from "@/lib/data";
import { BookingDetails } from "@/lib/whatsapp";

export default function AccommodationPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<BookingDetails>({});

  const handleRoomBook = (room: AccommodationItem) => {
    setSelectedBooking({
      itemName: `${room.categoryName} (${room.title})`,
      category: "Penginapan",
      price: room.pricePerNight,
    });
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] pt-24 pb-20">
      {/* Header Banner */}
      <section className="bg-[#183D2C] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <Badge className="bg-[#D4A373] text-[#183D2C] font-semibold mb-2">
            Sanctuary & Staycation
          </Badge>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            Akomodasi & Villa Gading Paradise
          </h1>
          <p className="text-[#D1DBD4] text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Rasakan ketenangan bermalam di tengah lanskap alam Kebumen dengan fasilitas hotel berbintang, pelayanan ramah, dan suasana resort yang asri.
          </p>
        </div>
      </section>

      {/* Main Content Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs defaultValue="deluxe" className="w-full">
          {/* Category Tabs List */}
          <div className="flex justify-center mb-12">
            <TabsList className="bg-[#EAE3D2] p-1.5 rounded-full border border-[#DCD3C0] h-auto flex flex-wrap justify-center gap-2">
              <TabsTrigger
                value="deluxe"
                className="rounded-full px-7 py-3 text-sm md:text-base font-semibold data-[state=active]:bg-[#183D2C] data-[state=active]:text-white transition-all shadow-sm"
              >
                Kamar Deluxe
              </TabsTrigger>
              <TabsTrigger
                value="villa"
                className="rounded-full px-7 py-3 text-sm md:text-base font-semibold data-[state=active]:bg-[#183D2C] data-[state=active]:text-white transition-all shadow-sm"
              >
                Villa Keluarga
              </TabsTrigger>
              <TabsTrigger
                value="glamping"
                className="rounded-full px-7 py-3 text-sm md:text-base font-semibold data-[state=active]:bg-[#183D2C] data-[state=active]:text-white transition-all shadow-sm"
              >
                Glamping
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab Contents */}
          {ACCOMMODATIONS_DATA.map((room) => (
            <TabsContent key={room.id} value={room.categoryKey} className="focus-visible:outline-none">
              <div className="bg-white rounded-3xl border border-[#E5DEC9] shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left Column: Image Showcase */}
                  <div className="lg:col-span-6 relative min-h-[380px] sm:min-h-[480px] bg-[#EAE3D2]">
                    <Image
                      src={room.image}
                      alt={room.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute top-5 left-5">
                      <Badge className="bg-[#183D2C]/90 backdrop-blur-sm text-[#D4A373] border-none px-3.5 py-1 text-xs font-semibold">
                        {room.categoryName}
                      </Badge>
                    </div>
                  </div>

                  {/* Right Column: Room Details */}
                  <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                    <div className="space-y-5">
                      <div>
                        <span className="text-xs uppercase tracking-widest text-[#C46D3B] font-bold">
                          {room.tagline}
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#183D2C] mt-1">
                          {room.title}
                        </h2>
                      </div>

                      <p className="text-[#4E5C53] leading-relaxed text-sm sm:text-base">
                        {room.description}
                      </p>

                      {/* Specs Badge Bar */}
                      <div className="grid grid-cols-3 gap-3 pt-2">
                        <div className="bg-[#F8F5EE] p-3.5 rounded-2xl border border-[#E8DFD0] text-center">
                          <Users className="w-4 h-4 text-[#C46D3B] mx-auto mb-1" />
                          <span className="text-[11px] text-[#6F7D74] block">Kapasitas</span>
                          <span className="text-xs font-bold text-[#183D2C]">{room.capacity}</span>
                        </div>
                        <div className="bg-[#F8F5EE] p-3.5 rounded-2xl border border-[#E8DFD0] text-center">
                          <Bed className="w-4 h-4 text-[#C46D3B] mx-auto mb-1" />
                          <span className="text-[11px] text-[#6F7D74] block">Tipe Ranjang</span>
                          <span className="text-xs font-bold text-[#183D2C]">{room.bedType}</span>
                        </div>
                        <div className="bg-[#F8F5EE] p-3.5 rounded-2xl border border-[#E8DFD0] text-center">
                          <Maximize2 className="w-4 h-4 text-[#C46D3B] mx-auto mb-1" />
                          <span className="text-[11px] text-[#6F7D74] block">Ukuran Ruang</span>
                          <span className="text-xs font-bold text-[#183D2C]">{room.size}</span>
                        </div>
                      </div>

                      {/* Amenities List */}
                      <div className="space-y-3 pt-2">
                        <h4 className="text-xs font-bold text-[#183D2C] uppercase tracking-wider">
                          Fasilitas & Keuntungan Kamar:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {room.amenities.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#4E5C53]">
                              <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Booking Section */}
                    <div className="pt-6 border-t border-[#EAE3D2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-[#6F7D74] block font-medium">
                          Tarif Sewa Kamar:
                        </span>
                        <div className="text-2xl sm:text-3xl font-bold font-serif text-[#C46D3B]">
                          {room.pricePerNight}
                        </div>
                      </div>

                      <Button
                        onClick={() => handleRoomBook(room)}
                        size="lg"
                        className="bg-[#C46D3B] hover:bg-[#B05C2D] text-white px-8 py-4 rounded-xl font-semibold shadow-md flex items-center justify-center gap-2 text-base transition-all"
                      >
                        <PhoneCall className="w-5 h-5" />
                        <span>Pesan Kamar</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Resort Policies Card */}
        <div className="mt-16 bg-[#EFE9DC]/60 p-8 sm:p-10 rounded-3xl border border-[#E0D5C3]">
          <h3 className="font-serif text-2xl font-bold text-[#183D2C] mb-4">
            Informasi Penting & Kebijakan Reservasi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#4E5C53]">
            <div className="bg-white p-5 rounded-2xl border border-[#E5DEC9]">
              <p className="font-bold text-[#183D2C] mb-1">Check-in & Check-out</p>
              <p className="text-xs text-[#5E6B62]">
                Waktu check-in dimulai pukul 14.00 WIB dan waktu check-out maksimal pukul 12.00 WIB.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-[#E5DEC9]">
              <p className="font-bold text-[#183D2C] mb-1">Fasilitas Sarapan</p>
              <p className="text-xs text-[#5E6B62]">
                Sarapan pagi prasmanan disajikan mulai pukul 06.30 - 10.00 WIB di Resto Gading Garden.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-[#E5DEC9]">
              <p className="font-bold text-[#183D2C] mb-1">Konfirmasi Cepat</p>
              <p className="text-xs text-[#5E6B62]">
                Reservasi via WhatsApp langsung diverifikasi oleh staf reservasi dalam waktu kurang dari 15 menit.
              </p>
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
