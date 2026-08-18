"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Car, Bus, Train, Phone, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function LocationSection() {
  const googleMapsSearchUrl =
    "https://www.google.com/maps/search/?api=1&query=Gading+Paradise+Kebumen";
  
  // Google Maps embed URL centered on Gading Paradise Kebumen
  const googleMapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15814.739775390979!2d109.6455!3d-7.6745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7acb9d5c48b261%3A0xb36ef2071987d65!2sGading%20Paradise!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid";

  return (
    <section id="lokasi" className="py-20 lg:py-28 bg-[#FAF7F2] border-t border-[#EAE3D2] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge className="bg-[#183D2C] text-[#D4A373] hover:bg-[#183D2C] font-semibold px-3.5 py-1 text-xs">
            <MapPin className="w-3.5 h-3.5 mr-1" />
            Lokasi & Akses Strategis
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#183D2C]">
            Kunjungi Gading Paradise Kebumen
          </h2>
          <p className="text-[#5E6B62] text-base md:text-lg">
            Terletak strategis di pusat Kabupaten Kebumen, mudah dijangkau dengan kendaraan pribadi maupun rombongan bus wisata.
          </p>
        </div>

        {/* 2-Column Grid: Info & Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Location details & accessibility */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            {/* Address Card */}
            <div className="bg-white p-7 rounded-3xl border border-[#E5DEC9] shadow-sm space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#183D2C] flex items-center justify-center text-[#D4A373] shrink-0 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#183D2C]">
                    Alamat Resmi
                  </h3>
                  <p className="text-sm text-[#4E5C53] mt-1 leading-relaxed">
                    Jl. Raya Gading No. 1, Pejagoan, Kabupaten Kebumen, Jawa Tengah 54361, Indonesia.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#EAE3D2] space-y-3 text-sm">
                <div className="flex items-center gap-3 text-[#4E5C53]">
                  <Clock className="w-4 h-4 text-[#C46D3B] shrink-0" />
                  <span>Buka Setiap Hari: <strong>07.30 - 17.30 WIB</strong></span>
                </div>
                <div className="flex items-center gap-3 text-[#4E5C53]">
                  <Phone className="w-4 h-4 text-[#C46D3B] shrink-0" />
                  <span>Call Center / Reservasi: <strong>+62 812-3456-7890</strong></span>
                </div>
              </div>
            </div>

            {/* Travel Time / Access Info */}
            <div className="bg-[#EFE9DC]/70 p-6 rounded-3xl border border-[#E0D5C3] space-y-4">
              <h4 className="font-serif text-base font-bold text-[#183D2C] flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#C46D3B]" />
                Aksesibilitas & Jarak Tempuh
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white p-3.5 rounded-2xl border border-[#E5DEC9] text-center">
                  <Car className="w-5 h-5 text-[#2D6A4F] mx-auto mb-1" />
                  <p className="text-xs font-bold text-[#183D2C]">5 Menit</p>
                  <p className="text-[10px] text-[#6F7D74]">Dari Alun-Alun Kebumen</p>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-[#E5DEC9] text-center">
                  <Train className="w-5 h-5 text-[#2D6A4F] mx-auto mb-1" />
                  <p className="text-xs font-bold text-[#183D2C]">7 Menit</p>
                  <p className="text-[10px] text-[#6F7D74]">Dari Stasiun Kebumen</p>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-[#E5DEC9] text-center">
                  <Bus className="w-5 h-5 text-[#2D6A4F] mx-auto mb-1" />
                  <p className="text-xs font-bold text-[#183D2C]">Parkir Bus</p>
                  <p className="text-[10px] text-[#6F7D74]">Kapasitas &gt;20 Bus Besar</p>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <a
              href={googleMapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full bg-[#C46D3B] hover:bg-[#B05C2D] text-white py-6 rounded-2xl font-semibold shadow-md flex items-center justify-center gap-2 text-base transition-all">
                <Navigation className="w-5 h-5" />
                <span>Buka Petunjuk Arah di Google Maps</span>
                <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
              </Button>
            </a>
          </motion.div>

          {/* Right Column: Embedded Google Map with Luxury Frame */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="relative w-full h-[400px] sm:h-[480px] lg:h-full min-h-[380px] rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-[#EAE3D2]">
              <iframe
                title="Peta Lokasi Gading Paradise Kebumen"
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              />

              {/* Floating Overlay Badge on Map */}
              <div className="absolute top-4 left-4 bg-[#183D2C]/90 backdrop-blur-md text-white px-4 py-2.5 rounded-xl shadow-lg border border-[#D4A373]/40 flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                <div>
                  <p className="text-xs font-bold leading-none">Gading Paradise Kebumen</p>
                  <p className="text-[10px] text-[#D4A373] mt-0.5">Pejagoan, Jawa Tengah</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
