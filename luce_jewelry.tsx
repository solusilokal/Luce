import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  MessageCircle, 
  X, 
  ArrowDown, 
  Facebook,
  Share,
  Copy,
  Check,
  Twitter,
  Clock,
  Star,
  Quote,
  ShoppingBag,
  Info,
  History,
  HelpCircle,
  Sparkles,
  Heart,
  Gem,
  Award,
  ShieldCheck
} from 'lucide-react';
import logoImg from './images/logo.png';
import heroImg from './images/hero.jpg';
import ringClassicDiamond from './images/ring-classic-diamond.webp';
import necklaceGoldPendant from './images/necklace-gold-pendant.webp';
import braceletEleganceTennis from './images/bracelet-elegance-tennis.webp';
import earringsPearlDrop from './images/earrings-pearl-drop.webp';
import ringRoyalSapphire from './images/ring-royal-sapphire.webp';

const pageData = {
  name: "Luce",
  phone: "6289529605601",
  address: "Palangka Raya, Kalimantan Tengah",
  title: "Perhiasan Eksklusif & Abadi",
  description: "Temukan kilau sejati Anda dengan koleksi perhiasan eksklusif dari Luce. Mahakarya pengrajin ahli dengan material emas murni dan berlian bersertifikat untuk setiap momen berharga Anda.",
  profileImg: logoImg, 
  heroImg: heroImg,
  links: {
    instagram: "https://www.instagram.com/solusilokal.id",
    maps: "https://www.google.com/maps/search/?api=1&query=Palangka+Raya", 
    facebook: "https://facebook.com/", 
    tiktok: "https://www.tiktok.com/@solusilokal.id" 
  },
  highlights: [
    { text: "Emas 18K Asli", icon: "Gem" },
    { text: "Sertifikat GIA", icon: "Award" },
    { text: "Garansi Cuci", icon: "ShieldCheck" }
  ],
  about: "Luce lahir dari kecintaan yang mendalam akan seni pembuatan perhiasan. Kami percaya bahwa perhiasan bukan sekadar aksesoris pelengkap, melainkan sebuah investasi dan simbol kenangan abadi yang akan diwariskan dari generasi ke generasi. Setiap potongan perhiasan kami dikerjakan dengan presisi tingkat tinggi oleh pengrajin ahli, menggunakan emas kualitas terbaik dan batu permata pilihan yang bersertifikat.",
  history: [
    { year: "2015", title: "Awal Mula", desc: "Luce bermula sebagai workshop kecil yang menerima pesanan cincin kawin custom untuk klien privat." },
    { year: "2018", title: "Koleksi Berlian Perdana", desc: "Meluncurkan lini perhiasan berlian bersertifikat GIA pertama kami yang mendapat sambutan luar biasa." },
    { year: "2023", title: "Butik Flagship", desc: "Membuka butik perhiasan mewah pertama untuk melayani pelanggan secara langsung dengan pengalaman eksklusif." }
  ],
  catalog: [
    { name: "Classic Diamond Ring", img: ringClassicDiamond, price: "Rp 15.000.000" },
    { name: "Gold Pendant Necklace", img: necklaceGoldPendant, price: "Rp 8.500.000" },
    { name: "Elegance Tennis Bracelet", img: braceletEleganceTennis, price: "Rp 25.000.000" },
    { name: "Pearl Drop Earrings", img: earringsPearlDrop, price: "Rp 6.000.000" },
    { name: "Royal Sapphire Ring", img: ringRoyalSapphire, price: "Rp 35.000.000" },
  ],
  pricing: [
    { category: "18K Gold Collection", duration: "Mulai", price: "Rp 5.000.000", items: ["Emas 18 Karat Asli", "Gratis ukir nama (engraving)", "Box beludru eksklusif"] },
    { category: "Diamond Engagement", duration: "Mulai", price: "Rp 15.000.000", items: ["Berlian kejernihan VVS", "Sertifikat GIA", "Gratis resize ukuran 1x"] },
    { category: "Wedding Ring Pair", duration: "Mulai", price: "Rp 10.000.000", items: ["Sepasang cincin (Pria & Wanita)", "Pilihan Platinum / Rose Gold", "Garansi cuci seumur hidup"] },
    { category: "Bespoke / Custom Jewelry", duration: "Estimasi", price: "Hubungi Kami", items: ["Desain 3D khusus untuk Anda", "Pilihan ragam batu permata", "Konsultasi 1-on-1 dengan desainer"] }
  ],
  faqs: [
    { q: "Apakah perhiasan Luce memiliki sertifikat keaslian?", a: "Ya, setiap perhiasan kami dilengkapi dengan sertifikat keaslian. Khusus untuk berlian di atas 0.3 carat, kami menyertakan sertifikat GIA (Gemological Institute of America) yang diakui secara global." },
    { q: "Bisakah saya memesan desain custom (Bespoke)?", a: "Tentu saja. Kami memiliki layanan Bespoke di mana Anda dapat berdiskusi dan mendesain perhiasan impian Anda bersama desainer in-house kami." },
    { q: "Bagaimana cara merawat perhiasan agar tetap berkilau?", a: "Kami memberikan fasilitas gratis layanan cuci perhiasan seumur hidup. Anda cukup membawa perhiasan Luce Anda ke butik kami. Untuk perawatan di rumah, gunakan air hangat dan sikat berbulu lembut." },
    { q: "Apakah melayani pengiriman pesanan ke luar kota?", a: "Ya, kami melayani pengiriman ke seluruh Indonesia dengan proteksi asuransi pengiriman penuh untuk menjamin keamanan pesanan perhiasan Anda hingga sampai di tujuan." }
  ],
  testimonials: [
    { name: "Sarah Amelia", rating: 5, text: "Cincin tunangannya sangat indah, saya sampai menangis terharu. Detail pengerjaannya sangat rapi dan berliannya memancarkan kilau yang sempurna." },
    { name: "Nadia Putri", rating: 5, text: "Pelayanannya luar biasa mewah. Desainer Luce sangat sabar membantu saya mewujudkan kalung impian dari sekadar sketsa kasar menjadi perhiasan nyata." },
    { name: "Dion W.", rating: 5, text: "Kualitas emasnya tidak perlu diragukan. Cincin kawin kami sudah dipakai setiap hari dan warnanya tetap cantik. Layanan gratis cuci perhiasannya juga sangat responsif." }
  ]
};

export default function App() {
  const [lightbox, setLightbox] = useState({ isOpen: false, image: null });
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (imgSrc) => {
    setLightbox({ isOpen: true, image: imgSrc });
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, image: null });
    document.body.style.overflow = 'unset';
  };

  const scrollToForm = () => {
    document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const materialType = formData.get('materialType');
    const jewelryType = formData.get('jewelryType');
    const notes = formData.get('notes');
    const waUrl = `https://wa.me/${pageData.phone}?text=Halo%20Admin%20${pageData.name},%20saya%20${name}.%20Saya%20tertarik%20dan%20ingin%20berkonsultasi%20mengenai%20pemesanan%20*${jewelryType}*%20dengan%20material%20*${materialType}*.%20%0A%0ACatatan%20Tambahan:%20${notes}`;
    window.open(waUrl, '_blank');
  };

  const handleShare = async () => {
    try {
      const isHttp = window.location.protocol === 'http:' || window.location.protocol === 'https:';
      if (isHttp && typeof navigator.share === 'function') {
        const shareData = { title: pageData.name, text: pageData.title, url: window.location.href };
        let canShare = false;
        try {
          canShare = typeof navigator.canShare === 'function' ? navigator.canShare(shareData) : true;
        } catch {
          canShare = false;
        }
        if (canShare) {
          await navigator.share(shareData);
          return;
        }
      }
    } catch (err) {
      // User cancelled share dialog or native share failed
    }
    setShowShareModal(true);
  };

  const copyToClipboard = () => {
    const tempInput = document.createElement('input');
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = {
    whatsapp: () => window.open(`https://wa.me/?text=${encodeURIComponent(pageData.title + ' ' + window.location.href)}`, '_blank'),
    facebook: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank'),
    twitter: () => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(pageData.name)}`, '_blank')
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        
        body {
          background-color: #FFFFFF;
          color: #1a1a1a;
          margin: 0;
          font-family: 'Plus Jakarta Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        h1, h2, h3, .font-serif {
          font-family: 'Playfair Display', serif;
        }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        details > summary { list-style: none; }
        details > summary::-webkit-details-marker { display: none; }
      `}</style>
      
      <main className="w-full max-w-[480px] mx-auto relative shadow-[0_0_40px_rgba(212,175,55,0.08)] bg-white min-h-screen overflow-hidden pb-32">
        
        {}
        <section className="relative w-full min-h-[90dvh] flex flex-col justify-end pb-12 px-6 bg-white">
          <button
            onClick={handleShare}
            aria-label="Share this page"
            className="absolute top-6 right-6 z-20 p-3 bg-white/30 backdrop-blur-md rounded-full border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-white/50 transition-all shadow-sm"
          >
            <Share size={20} />
          </button>

          <div className="absolute inset-0 z-0">
            <img 
              src={pageData.heroImg} 
              alt={pageData.name} 
              className="w-full h-full object-cover object-center opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-black/15"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mt-32">
            <div className="w-24 h-24 rounded-full p-2 bg-white mb-6 shadow-xl border border-[#D4AF37]/50 flex items-center justify-center overflow-hidden">
              <img 
                src={pageData.profileImg} 
                alt="Profile" 
                className="w-full h-full object-contain"
              />
            </div>

            <h1 className="text-4xl font-bold text-[#1a1a1a] mb-3 leading-tight tracking-wide font-serif">
              {pageData.name}
            </h1>
            <p className="text-stone-600 font-light text-sm leading-relaxed mb-6 max-w-[95%]">
              {pageData.description}
            </p>

            <div className="flex flex-col gap-3 w-full max-w-sm mb-8">
              <div className="grid grid-cols-2 gap-3">
                <a href={pageData.links.instagram} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white hover:bg-[#FAF7F2] transition-all text-[#D4AF37] shadow-sm text-[14px] font-bold border border-[#D4AF37]/50">
                  <Instagram size={18} /> Instagram
                </a>
                <a href={pageData.links.tiktok} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white hover:bg-[#FAF7F2] transition-all text-[#D4AF37] shadow-sm text-[14px] font-bold border border-[#D4AF37]/50">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg> TikTok
                </a>
              </div>
              <a href="#lokasi" className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white hover:bg-[#FAF7F2] transition-all text-[#D4AF37] shadow-sm text-[14px] font-bold w-full border border-[#D4AF37]/50">
                <MapPin size={18} /> Butik Kami
              </a>
            </div>

            <button 
              onClick={scrollToForm}
              className="group relative flex items-center justify-center gap-3 w-full max-w-sm py-4 bg-gradient-to-r from-[#D4AF37] to-[#B78628] text-white rounded-xl font-bold text-[13px] uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-[#D4AF37]/20"
            >
              Konsultasi Sekarang
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </section>

        {}
        <section className="py-6 px-6 bg-gradient-to-r from-[#D4AF37] to-[#B78628] shadow-inner">
          <div className="flex flex-wrap justify-center gap-5 w-full max-w-md mx-auto">
            {pageData.highlights.map((item, idx) => (
              <span key={idx} className="flex items-center gap-2 px-2 py-1.5 text-xs text-white font-medium tracking-wide">
                {item.icon === 'Gem' && <Gem size={15} />}
                {item.icon === 'Award' && <Award size={15} />}
                {item.icon === 'ShieldCheck' && <ShieldCheck size={15} />}
                {item.text}
              </span>
            ))}
          </div>
        </section>

        {}
        <section className="py-12 px-6 bg-white border-b border-[#FAF7F2]">
          <div className="mb-6 flex flex-col items-center text-center">
            <Info className="text-[#D4AF37] mb-3" strokeWidth={1.5} size={28} />
            <h2 className="text-2xl font-bold text-[#1a1a1a] font-serif mb-4">Filosofi Kami</h2>
            <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
          </div>
          <p className="text-[#4a4a4a] text-[14px] leading-[1.8] text-justify mx-auto mb-10">
            {pageData.about}
          </p>

          <div className="mb-6 flex flex-col items-start gap-2">
            <h3 className="text-xl font-bold text-[#1a1a1a] font-serif flex items-center gap-2">
              <History className="text-[#D4AF37]" size={20} /> Perjalanan Singkat
            </h3>
          </div>
          
          <div className="pl-4 border-l-2 border-[#D4AF37]/30 flex flex-col gap-6 relative">
            {pageData.history.map((hist, idx) => (
              <div key={idx} className="relative pl-4">
                <div className="absolute w-3 h-3 bg-[#D4AF37] rounded-full -left-[23px] top-1.5 border-4 border-white shadow-sm"></div>
                <span className="text-[#D4AF37] font-bold text-xs tracking-wider">{hist.year}</span>
                <h4 className="text-[#1a1a1a] font-semibold text-[15px] mt-0.5">{hist.title}</h4>
                <p className="text-stone-500 text-xs mt-1 leading-relaxed">{hist.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {}
        <section id="katalog" className="pt-12 pb-8 bg-[#FAF7F2] border-b border-stone-100">
          <div className="px-6 mb-6 flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#1a1a1a] font-serif">Koleksi Signature</h2>
              <ShoppingBag className="text-[#D4AF37]" size={20} />
            </div>
            <p className="text-stone-500 text-xs">Jelajahi keindahan yang dirancang secara paripurna.</p>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-6 no-scrollbar">
            {pageData.catalog.map((item, idx) => (
              <div 
                key={idx}
                className="snap-center shrink-0 w-[220px] rounded-2xl overflow-hidden cursor-pointer group bg-white border border-[#D4AF37]/20 shadow-sm flex flex-col"
              >
                <div 
                  className="w-full aspect-[3/4] relative overflow-hidden"
                  onClick={() => openLightbox(item.img)}
                >
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/95 backdrop-blur text-[#1a1a1a] text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-[#D4AF37]/30">Perbesar</span>
                  </div>
                </div>
                <div className="p-4 text-center border-t border-[#D4AF37]/10">
                  <h3 className="font-semibold text-[#1a1a1a] text-sm">{item.name}</h3>
                  <p className="text-[#D4AF37] font-bold text-[13px] mt-1">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        <section className="py-12 px-6 bg-white border-b border-[#FAF7F2]">
          <div className="mb-8 flex flex-col items-center text-center gap-2">
            <Gem className="text-[#D4AF37] mb-1" size={24} />
            <h2 className="text-2xl font-bold text-[#1a1a1a] font-serif">Estimasi Investasi</h2>
            <p className="text-stone-500 text-xs mt-1">Transparan berdasarkan jenis material & karat.</p>
          </div>

          <div className="flex flex-col gap-4">
            {pageData.pricing.map((pkg, idx) => (
              <div key={idx} className="bg-white border border-[#D4AF37]/30 p-5 rounded-2xl relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute top-0 right-0 bg-gradient-to-r from-[#D4AF37] to-[#B78628] text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
                  {pkg.duration}
                </div>
                <h3 className="text-base font-bold text-[#1a1a1a] mb-1">{pkg.category}</h3>
                <div className="text-xl font-bold text-[#D4AF37] mb-4 font-serif">{pkg.price}</div>
                
                <ul className="flex flex-col gap-2">
                  {pkg.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-stone-600 text-xs">
                      <Check size={14} className="text-[#D4AF37] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {}
        <section className="py-12 px-6 bg-[#FAF7F2] border-b border-stone-100">
          <div className="mb-8 flex flex-col gap-1">
            <h2 className="text-2xl font-bold text-[#1a1a1a] font-serif flex items-center gap-2">
               <HelpCircle className="text-[#D4AF37]" size={22} /> Informasi Umum
            </h2>
            <p className="text-stone-500 text-xs">Jawaban dari pertanyaan yang sering diajukan klien kami.</p>
          </div>

          <div className="flex flex-col gap-3">
            {pageData.faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white border border-[#D4AF37]/20 rounded-xl overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between font-semibold text-[#1a1a1a] text-[13px] p-4 cursor-pointer select-none">
                  {faq.q}
                  <span className="transition group-open:rotate-180">
                    <ArrowDown size={16} className="text-[#D4AF37]" />
                  </span>
                </summary>
                <div className="text-stone-600 text-xs leading-relaxed px-4 pb-4 border-t border-[#D4AF37]/10 pt-3">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {}
        <section className="py-12 px-6 bg-white border-b border-[#FAF7F2]">
          <div className="mb-8 flex flex-col gap-1 text-center items-center">
            <Quote className="text-[#D4AF37] mb-2 opacity-60" size={28} />
            <h2 className="text-2xl font-bold text-[#1a1a1a] font-serif">Kisah Klien Kami</h2>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar">
            {pageData.testimonials.map((testi, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] bg-white p-6 rounded-2xl border border-[#D4AF37]/30 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed italic">"{testi.text}"</p>
                <div className="mt-auto pt-4 border-t border-[#D4AF37]/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] font-bold text-xs uppercase">
                    {testi.name.charAt(0)}
                  </div>
                  <span className="text-[13px] font-bold text-[#1a1a1a]">{testi.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        <section id="lokasi" className="py-12 px-6 bg-[#FAF7F2] border-b border-stone-100">
          <div className="mb-6 flex flex-col gap-1">
            <h2 className="text-2xl font-bold text-[#1a1a1a] font-serif flex items-center gap-2">
               <MapPin className="text-[#D4AF37]" size={22} /> Kunjungi Butik
            </h2>
            <p className="text-stone-500 text-xs">Jadwalkan kunjungan Anda untuk melihat koleksi secara langsung.</p>
          </div>
          
          <div className="bg-white p-5 rounded-2xl border border-[#D4AF37]/20 shadow-sm flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-[#FAF7F2] rounded-lg text-[#D4AF37] mt-0.5">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1a1a1a] mb-1">{pageData.name} Fine Jewelry</h4>
                <p className="text-stone-500 text-xs leading-relaxed">{pageData.address}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="p-2 bg-[#FAF7F2] rounded-lg text-[#D4AF37] mt-0.5">
                <Clock size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1a1a1a] mb-1">Jam Operasional</h4>
                <p className="text-stone-500 text-xs leading-relaxed">Senin - Minggu: 10:00 - 21:00<br/><span className="italic text-[#D4AF37]">*Disarankan membuat reservasi untuk layanan bespoke</span></p>
              </div>
            </div>

            <a 
              href={pageData.links.maps} 
              target="_blank" 
              rel="noreferrer"
              className="mt-2 w-full py-3 bg-white border border-[#D4AF37] text-[#D4AF37] text-xs font-bold uppercase tracking-widest rounded-xl text-center hover:bg-[#FAF7F2] transition-colors"
            >
              Buka di Google Maps
            </a>
          </div>
        </section>

        {}
        <section id="booking-form" className="py-12 px-6 bg-white">
          <div className="bg-white border border-[#D4AF37]/40 rounded-[2rem] p-8 shadow-xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#D4AF37]/10 rounded-full pointer-events-none blur-2xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#D4AF37]/10 rounded-full pointer-events-none blur-2xl"></div>
            
            <div className="relative z-10 mb-8 text-center">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2 font-serif">Pemesanan & Konsultasi</h2>
              <p className="text-stone-500 text-xs leading-relaxed">Hubungi konsultan perhiasan kami untuk berdiskusi mengenai koleksi impian Anda.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 relative z-10">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest ml-1">Nama Anda</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Ketik nama lengkap Anda"
                  className="w-full bg-[#FAF7F2] border border-[#D4AF37]/30 rounded-xl px-4 py-3.5 text-sm text-[#1a1a1a] placeholder-stone-400 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/50 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest ml-1">Kategori Perhiasan</label>
                <select 
                  name="jewelryType" 
                  required
                  className="w-full bg-[#FAF7F2] border border-[#D4AF37]/30 rounded-xl px-4 py-3.5 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/50 transition-all appearance-none"
                >
                  <option value="" className="text-stone-500">Pilih kategori...</option>
                  <option value="Cincin Tunangan / Kawin">Cincin Tunangan / Kawin</option>
                  <option value="Kalung">Kalung</option>
                  <option value="Gelang">Gelang</option>
                  <option value="Anting">Anting</option>
                  <option value="Bespoke / Custom Design">Bespoke / Custom Design</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest ml-1">Pilihan Material Dasar</label>
                <select 
                  name="materialType" 
                  required
                  className="w-full bg-[#FAF7F2] border border-[#D4AF37]/30 rounded-xl px-4 py-3.5 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/50 transition-all appearance-none"
                >
                  <option value="" className="text-stone-500">Pilih material...</option>
                  <option value="Emas Kuning 18K">Emas Kuning 18K</option>
                  <option value="Emas Putih 18K">Emas Putih 18K</option>
                  <option value="Rose Gold 18K">Rose Gold 18K</option>
                  <option value="Platinum">Platinum</option>
                  <option value="Belum Yakin / Konsultasi Dulu">Belum Yakin / Konsultasi Dulu</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest ml-1">Catatan Tambahan (Opsional)</label>
                <textarea 
                  name="notes" 
                  rows="2"
                  placeholder="Cth: Ukuran jari perkiraan 12, budget sekitar 15jt..."
                  className="w-full bg-[#FAF7F2] border border-[#D4AF37]/30 rounded-xl px-4 py-3.5 text-sm text-[#1a1a1a] placeholder-stone-400 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/50 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full mt-4 bg-gradient-to-r from-[#D4AF37] to-[#B78628] text-white font-bold text-[13px] uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-2 hover:brightness-110 transition-colors shadow-md shadow-[#D4AF37]/20"
              >
                Kirim via WhatsApp
                <MessageCircle size={18} className="text-white fill-current" />
              </button>
            </form>
          </div>
        </section>

        {}
        <footer className="pt-8 pb-12 text-center flex flex-col items-center justify-center mx-6 mt-4">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mb-8"></div>
          
          <div className="w-16 h-16 rounded-full p-2 bg-white mb-4 shadow-sm border border-[#D4AF37]/30 flex items-center justify-center overflow-hidden">
            <img 
              src={pageData.profileImg} 
              alt={pageData.name} 
              className="w-full h-full object-contain"
            />
          </div>

          <h2 className="font-serif text-xl font-bold text-[#1a1a1a] mb-1.5">{pageData.name}</h2>
          <p className="text-stone-500 text-xs max-w-[250px] mb-6">{pageData.address}</p>

          <p className="text-stone-400 text-[10px]">
            © {new Date().getFullYear()} {pageData.name} Fine Jewelry. All rights reserved.
          </p>

          <a 
            href="https://www.solusilokal.id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-stone-400 text-[10px] mt-2 tracking-wide font-medium hover:text-[#D4AF37] transition-colors"
          >
            powered by solusilokal.id
          </a>
        </footer>

        {/* Sticky CTA */}
        <div 
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-40 transition-all duration-500 ease-out ${
            showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
          }`}
        >
          <button 
            onClick={scrollToForm}
            className="w-full flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-xl border border-[#D4AF37]/40 rounded-2xl text-[#1a1a1a] shadow-[0_10px_40px_rgba(212,175,55,0.15)] hover:bg-[#FAF7F2] active:scale-[0.98] transition-all"
          >
            <span className="font-bold text-[13px] tracking-widest uppercase text-[#1a1a1a]">Hubungi Kami</span>
            <div className="bg-gradient-to-r from-[#D4AF37] to-[#B78628] text-white p-2 rounded-xl">
              <MessageCircle size={18} className="fill-none stroke-current stroke-2" />
            </div>
          </button>
        </div>

        {/* Lightbox Modal */}
        {lightbox.isOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50"
              onClick={closeLightbox}
            >
              <X size={20} />
            </button>
            <div className="w-full max-w-4xl max-h-[100dvh] p-4 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <img 
                src={lightbox.image} 
                alt="Zoomed View" 
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}

        {showShareModal && (
          <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm sm:items-center transition-opacity"
            onClick={() => setShowShareModal(false)}
          >
            <div
              className="w-full max-w-[480px] bg-white border-t sm:border border-[#D4AF37]/30 sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-center items-center mb-6 relative">
                <h3 className="text-[#1a1a1a] font-bold text-[15px]">Bagikan Katalog Perhiasan</h3>
                <button
                  onClick={() => setShowShareModal(false)}
                  className="absolute right-0 p-1 text-stone-500 hover:bg-[#FAF7F2] rounded-full transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar justify-center px-1 mb-4">
                <div className="flex flex-col items-center gap-2 min-w-[76px]">
                  <button onClick={copyToClipboard} className="w-[60px] h-[60px] rounded-full bg-[#FAF7F2] border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] hover:bg-stone-100 transition-all shadow-sm">
                    {copied ? <Check size={26} className="text-[#D4AF37]" /> : <Copy size={26} />}
                  </button>
                  <span className="text-[11px] font-semibold text-stone-600 text-center">{copied ? 'Tersalin' : 'Salin Tautan'}</span>
                </div>
                <div className="flex flex-col items-center gap-2 min-w-[76px]">
                  <button onClick={shareLinks.twitter} className="w-[60px] h-[60px] rounded-full bg-stone-900 flex items-center justify-center text-white hover:bg-stone-800 transition-all shadow-sm">
                    <Twitter size={26} />
                  </button>
                  <span className="text-[11px] font-semibold text-stone-600 text-center">X</span>
                </div>
                <div className="flex flex-col items-center gap-2 min-w-[76px]">
                  <button onClick={shareLinks.facebook} className="w-[60px] h-[60px] rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm">
                    <Facebook size={26} className="fill-current" />
                  </button>
                  <span className="text-[11px] font-semibold text-stone-600 text-center">Facebook</span>
                </div>
                <div className="flex flex-col items-center gap-2 min-w-[76px]">
                  <button onClick={shareLinks.whatsapp} className="w-[60px] h-[60px] rounded-full bg-[#25D366] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm">
                    <MessageCircle size={26} className="fill-current" />
                  </button>
                  <span className="text-[11px] font-semibold text-stone-600 text-center">WhatsApp</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}