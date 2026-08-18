"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MessageSquare } from "lucide-react";

export interface FacilityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  image: string;
  hours: string;
  priceNote: string;
  highlights: string[];
}

interface FacilityCardProps {
  facility: FacilityItem;
  onBook: (facility: FacilityItem) => void;
}

export default function FacilityCard({ facility, onBook }: FacilityCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden bg-white border-[#E5DEC9] shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl group">
        {/* Image Container */}
        <div className="relative w-full h-64 overflow-hidden bg-[#EAE3D2]">
          <Image
            src={facility.image}
            alt={facility.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          
          <Badge className="absolute top-4 left-4 bg-[#183D2C]/90 backdrop-blur-md text-[#D4A373] border-none font-medium px-3 py-1 text-xs">
            {facility.category}
          </Badge>

          <div className="absolute bottom-3 left-4 right-4 text-white">
            <span className="text-xs font-medium text-[#D4A373] flex items-center gap-1 mb-0.5">
              <Clock className="w-3.5 h-3.5" />
              {facility.hours}
            </span>
            <h3 className="font-serif text-xl font-bold leading-snug drop-shadow-sm">
              {facility.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <p className="text-sm text-[#4E5C53] leading-relaxed">
            {facility.description}
          </p>

          {/* Highlights Tag */}
          <div className="space-y-3 pt-2">
            <div className="flex flex-wrap gap-1.5">
              {facility.highlights.map((item, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-medium bg-[#F4EFE6] text-[#183D2C] px-2.5 py-1 rounded-md border border-[#E8DFD0]"
                >
                  ✓ {item}
                </span>
              ))}
            </div>

            <div className="pt-2 border-t border-[#EAE3D2] flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#6F7D74] block">
                  Informasi Tiket / Sewa
                </span>
                <span className="text-sm font-semibold text-[#183D2C]">
                  {facility.priceNote}
                </span>
              </div>

              <Button
                onClick={() => onBook(facility)}
                className="bg-[#C46D3B] hover:bg-[#B05C2D] text-white text-xs px-4 py-2 rounded-lg font-medium shadow-sm transition-all flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Reservasi</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
