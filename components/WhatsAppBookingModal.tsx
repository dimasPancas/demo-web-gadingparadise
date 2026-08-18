"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Send, CheckCircle2, PhoneCall, Sparkles } from "lucide-react";
import { createWhatsAppBookingUrl, BookingDetails } from "@/lib/whatsapp";

interface WhatsAppBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDetails?: BookingDetails;
}

export default function WhatsAppBookingModal({
  isOpen,
  onClose,
  initialDetails = {},
}: WhatsAppBookingModalProps) {
  const [name, setName] = useState(initialDetails.name || "");
  const [itemName, setItemName] = useState(initialDetails.itemName || "Tiket Masuk & Rekreasi");
  const [category, setCategory] = useState<BookingDetails["category"]>(
    initialDetails.category || "Umum"
  );
  const [date, setDate] = useState(
    initialDetails.visitDate ||
      initialDetails.checkInDate ||
      new Date().toISOString().split("T")[0]
  );
  const [guestCount, setGuestCount] = useState(initialDetails.guestCount || "2");
  const [notes, setNotes] = useState(initialDetails.notes || "");
  const [isSuccessPreview, setIsSuccessPreview] = useState(false);

  const currentDetails: BookingDetails = {
    itemName: initialDetails.itemName || itemName,
    category: initialDetails.category || category,
    visitDate: date,
    checkInDate: category === "Penginapan" ? date : undefined,
    guestCount,
    name,
    notes,
    price: initialDetails.price,
  };

  const generatedUrl = createWhatsAppBookingUrl(currentDetails);

  const handleSendToWhatsApp = () => {
    window.open(generatedUrl, "_blank", "noopener,noreferrer");
    setIsSuccessPreview(true);
    setTimeout(() => {
      setIsSuccessPreview(false);
      onClose();
    }, 2500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-[#FAF8F5] border-[#E4DCCE] text-[#1C2B21] max-w-lg p-6 rounded-2xl shadow-2xl">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <Badge className="bg-[#183D2C] text-[#D4A373] hover:bg-[#183D2C] font-normal px-2.5 py-0.5">
              <Sparkles className="w-3 h-3 mr-1" />
              Direct WhatsApp Booking
            </Badge>
          </div>
          <DialogTitle className="font-serif text-2xl text-[#183D2C]">
            Reservasi Gading Paradise
          </DialogTitle>
          <DialogDescription className="text-sm text-[#5E6B62]">
            Isi formulir singkat di bawah ini. Anda akan diarahkan langsung ke WhatsApp resmi Customer Service kami dengan format pesan terisi otomatis.
          </DialogDescription>
        </DialogHeader>

        {isSuccessPreview ? (
          <div className="py-8 text-center flex flex-col items-center justify-center space-y-3">
            <div className="w-16 h-16 bg-[#2D6A4F]/10 rounded-full flex items-center justify-center text-[#2D6A4F]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#183D2C]">
              Membuka WhatsApp...
            </h4>
            <p className="text-sm text-[#5E6B62] max-w-xs">
              Terima kasih! Sampaikan pesan yang telah disiapkan di aplikasi WhatsApp Anda.
            </p>
          </div>
        ) : (
          <div className="space-y-4 pt-2">
            {/* Selected Item Summary */}
            <div className="bg-[#EFE9DC] p-3.5 rounded-xl border border-[#DFD5C2]">
              <p className="text-xs font-semibold text-[#183D2C]/70 uppercase tracking-wider">
                Pilihan Item:
              </p>
              <div className="flex items-center justify-between mt-1">
                <span className="font-serif font-bold text-base text-[#183D2C]">
                  {initialDetails.itemName || itemName}
                </span>
                {initialDetails.price && (
                  <span className="text-sm font-semibold text-[#C46D3B]">
                    {initialDetails.price}
                  </span>
                )}
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-medium text-[#183D2C] mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Budi Santoso"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-sm px-3 py-2 rounded-lg border border-[#D8CEBE] bg-white focus:outline-none focus:ring-2 focus:ring-[#C46D3B]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#183D2C] mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#C46D3B]" />
                  Tanggal Rencana
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full text-sm px-3 py-2 rounded-lg border border-[#D8CEBE] bg-white focus:outline-none focus:ring-2 focus:ring-[#C46D3B]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#183D2C] mb-1 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-[#C46D3B]" />
                  Jumlah Orang / Tamu
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full text-sm px-3 py-2 rounded-lg border border-[#D8CEBE] bg-white focus:outline-none focus:ring-2 focus:ring-[#C46D3B]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#183D2C] mb-1">
                  Catatan Tambahan
                </label>
                <input
                  type="text"
                  placeholder="Request khusus..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full text-sm px-3 py-2 rounded-lg border border-[#D8CEBE] bg-white focus:outline-none focus:ring-2 focus:ring-[#C46D3B]"
                />
              </div>
            </div>

            {/* Message Preview Box */}
            <div className="bg-white/80 p-3 rounded-lg border border-[#E0D8CA] text-xs text-[#5E6B62] font-mono leading-relaxed">
              <span className="font-semibold text-[#183D2C] block font-sans mb-1 text-[11px]">
                Pratinjau Pesan WhatsApp:
              </span>
              <p className="line-clamp-3 whitespace-pre-line text-emerald-900/80">
                Halo Admin Gading Paradise, saya tertarik memesan {currentDetails.itemName} untuk tanggal {date} sejumlah {guestCount} orang.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                onClick={handleSendToWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-medium py-3 rounded-xl shadow-md flex items-center justify-center gap-2 text-base transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Lanjutkan Reservasi ke WhatsApp</span>
              </Button>
              <p className="text-[11px] text-center text-[#5E6B62] mt-2">
                Nomor Resmi CS: +62 812-3456-7890 (Online Setiap Hari)
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
