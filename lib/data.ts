import { FacilityItem } from "@/components/FacilityCard";

export interface AccommodationItem {
  id: string;
  categoryKey: "deluxe" | "villa" | "glamping";
  categoryName: string;
  title: string;
  tagline: string;
  image: string;
  pricePerNight: string;
  capacity: string;
  bedType: string;
  view: string;
  size: string;
  description: string;
  amenities: string[];
}

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: "waterpark",
    title: "Kolam Renang & Waterpark",
    category: "Wahana Air & Rekreasi",
    description:
      "Kolam renang bernuansa resort mewah dengan wahana seluncuran air modern, kolam arus santai, dan area ramah anak. Dikelilingi arsitektur Mediterania yang memukau dan gazebo bersantai.",
    longDescription:
      "Nikmati sensasi berenang dan bermain air dengan kualitas air terfilter higienis setiap hari. Dilengkapi water slide bertingkat, ember tumpah untuk keceriaan keluarga, serta private cabana tepi kolam untuk istirahat santai.",
    image: "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg",
    hours: "07.30 - 17.30 WIB",
    priceNote: "Mulai Rp 35.000 / orang",
    highlights: [
      "Wahana Seluncur Air Spiral",
      "Kolam Anak & Balita Aman",
      "Gazebo & Sun Lounger Tepi Kolam",
      "Kafetaria & Ruang Bilas Nyaman",
    ],
  },
  {
    id: "gym",
    title: "Modern Gym & Fitness",
    category: "Olahraga & Wellness",
    description:
      "Pusat kebugaran berstandar tinggi dengan peralatan cardio dan weight training mutakhir. Suasana sejuk dengan panorama taman terbuka yang menyehatkan tubuh dan pikiran.",
    longDescription:
      "Kebugaran Anda adalah prioritas kami. Ruang fitness ber-AC dengan pemandangan taman resort, dilengkapi treadmill elektrik, dumbbell lengkap, squat rack, dan instruktur profesional yang siap memandu.",
    image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
    hours: "06.00 - 21.00 WIB",
    priceNote: "Mulai Rp 25.000 / visit",
    highlights: [
      "Peralatan Beban & Kardio Lengkap",
      "Locker Room & Shower Air Hangat",
      "Personal Trainer Tersedia",
      "Pemandangan Asri Resort",
    ],
  },
  {
    id: "wedding",
    title: "Wedding & Venue",
    category: "Acara & Konvensi",
    description:
      "Venue megah berarsitektur klasik elegan untuk momen sakral pernikahan, gala dinner, gathering korporat, hingga perayaan ulang tahun istimewa di Kebumen.",
    longDescription:
      "Abadikan momen bersejarah Anda dalam lanskap eksotis Gading Paradise. Kami menyediakan aula serbaguna indoor berkapasitas besar serta amfiteater outdoor dengan dekorasi pencahayaan temaram yang memikat.",
    image: "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg",
    hours: "Sesuai Reservasi Acara",
    priceNote: "Paket mulai Rp 8.500.000",
    highlights: [
      "Kapasitas hingga 1.000 Tamu",
      "Sound System & Lighting Profesional",
      "Paket Katering Nusantara & Internasional",
      "Ruang VIP & Bridal Suite",
    ],
  },
  {
    id: "kuda",
    title: "Pacuan Kuda",
    category: "Petualangan & Rekreasi",
    description:
      "Pengalaman berkuda eksklusif dengan kuda-kuda terlatih dan pemandu berpengalaman. Lintasan pacu yang luas dan aman untuk dewasa maupun anak-anak.",
    longDescription:
      "Rasakan keasyikan menunggang kuda di arena hijau khusus yang terawat rapi. Tersedia joy-ride santai keliling area resort serta kelas pengenalan teknik berkuda dasar untuk pemula.",
    image: "https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg",
    hours: "08.00 - 16.30 WIB",
    priceNote: "Mulai Rp 40.000 / putaran",
    highlights: [
      "Kuda Terawat & Jinak",
      "Instruktur & Pemandu Safety Resmi",
      "Perlengkapan Helm Keamanan",
      "Spot Foto Instagramable",
    ],
  },
];

export const ACCOMMODATIONS_DATA: AccommodationItem[] = [
  {
    id: "deluxe-room",
    categoryKey: "deluxe",
    categoryName: "Kamar Deluxe",
    title: "Deluxe Heritage Room",
    tagline: "Kenyamanan modern berpadu sentuhan kayu jati estetis",
    image: "https://images.pexels.com/photos/271638/pexels-photo-271638.jpeg",
    pricePerNight: "Rp 550.000 / malam",
    capacity: "2 Dewasa (+1 Anak)",
    bedType: "King Bed / Twin Bed",
    view: "Taman Resort & Kolam",
    size: "32 m²",
    description:
      "Kamar Deluxe dirancang dengan interior hangat yang memadukan kayu lokal dan fasilitas hotel bintang. Dilengkapi kasur premium, balkon pribadi, dan smart TV untuk waktu rehat yang damai.",
    amenities: [
      "Sarapan Gratis untuk 2 Orang",
      "Akses Gratis ke Waterpark",
      "High-speed Wi-Fi",
      "Balkon Pribadi dengan Kursi Santai",
      "Kamar Mandi dengan Rain Shower & Water Heater",
      "Coffee & Tea Maker",
      "Pendingin Ruangan (AC) Inverter",
    ],
  },
  {
    id: "family-villa",
    categoryKey: "villa",
    categoryName: "Villa Keluarga",
    title: "Royal Javanese Family Villa",
    tagline: "Privasi eksklusif dengan ruang lapang untuk liburan keluarga besar",
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
    pricePerNight: "Rp 1.450.000 / malam",
    capacity: "6 - 8 Orang",
    bedType: "2 Master King Beds + 2 Single Beds",
    view: "Private Garden & Panorama Resort",
    size: "120 m²",
    description:
      "Villa keluarga 2 lantai bergaya Joglo-Mediterania dengan ruang keluarga luas, dapur mini (kitchenette), ruang makan, serta teras santai untuk berkumpul bersama keluarga tercinta.",
    amenities: [
      "Sarapan Gratis untuk 6 Orang",
      "Akses Prioritas Semua Wahana & Kolam",
      "Ruang Tamu Luas & Smart TV 55 inch",
      "Dapur Bersih & Kulkas",
      "Private Garden & Gazebo",
      "2 Kamar Mandi Mewah dengan Bathtub",
      "Free Parking di Depan Villa",
    ],
  },
  {
    id: "glamping-resort",
    categoryKey: "glamping",
    categoryName: "Glamping",
    title: "Safari Luxury Glamping",
    tagline: "Sensasi bermalam di alam terbuka dengan fasilitas resort mewah",
    image: "https://images.pexels.com/photos/2440079/pexels-photo-2440079.jpeg",
    pricePerNight: "Rp 750.000 / malam",
    capacity: "2 - 4 Orang",
    bedType: "Queen Bed + Daybed",
    view: "Lanskap Hijau Bintang Malam",
    size: "45 m²",
    description:
      "Tenda safari mewah dengan lantai kayu solid, pendingin ruangan (AC), kasur empuk, dan dek teras pribadi. Nikmati kehangatan api unggun dan suasana malam Kebumen yang sejuk nan syahdu.",
    amenities: [
      "Paket BBQ & Api Unggun Malam",
      "Sarapan Tradisional Khas Kebumen",
      "Full AC di dalam Tenda",
      "En-suite Bathroom Pribadi & Water Heater",
      "Akses Bebas ke Seluruh Area Wisata",
      "Deck Santai & Hammock",
      "Wi-Fi Kencang",
    ],
  },
];
