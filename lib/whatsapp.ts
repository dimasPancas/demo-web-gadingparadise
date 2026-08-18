/**
 * Utility to generate WhatsApp booking links with pre-formatted messages for Gading Paradise Kebumen
 */

export const GADING_PARADISE_WA_NUMBER = "6287779047467";

export interface BookingDetails {
  itemName?: string;
  category?: "Penginapan" | "Fasilitas" | "Tiket Wisata" | "Event / Wedding" | "Umum";
  checkInDate?: string;
  checkOutDate?: string;
  visitDate?: string;
  guestCount?: number | string;
  name?: string;
  notes?: string;
  price?: string;
}

export function createWhatsAppBookingUrl(details: BookingDetails): string {
  const {
    itemName = "Kunjungan Wisata Gading Paradise",
    category = "Umum",
    checkInDate,
    checkOutDate,
    visitDate,
    guestCount,
    name,
    notes,
    price,
  } = details;

  let message = `*HALO GADING PARADISE KEBUMEN*\n`;
  message += `Saya tertarik untuk melakukan pemesanan/reservasi:\n\n`;
  message += `📌 *Pilihan:* ${itemName}\n`;
  message += `🏷️ *Kategori:* ${category}\n`;

  if (price) {
    message += `💰 *Estimasi Biaya:* ${price}\n`;
  }

  if (visitDate) {
    message += `📅 *Tanggal Kunjungan:* ${visitDate}\n`;
  }

  if (checkInDate) {
    message += `📅 *Check-in:* ${checkInDate}\n`;
  }

  if (checkOutDate) {
    message += `📅 *Check-out:* ${checkOutDate}\n`;
  }

  if (guestCount) {
    message += `👥 *Jumlah Tamu/Tiket:* ${guestCount} orang\n`;
  }

  if (name) {
    message += `👤 *Nama Pemesan:* ${name}\n`;
  }

  if (notes) {
    message += `📝 *Catatan Khusus:* ${notes}\n`;
  }

  message += `\nMohon info ketersediaan dan detail pembayarannya. Terima kasih!`;

  return `https://wa.me/${GADING_PARADISE_WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
