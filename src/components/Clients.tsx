"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Clients() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const industries = [
    {
      name: "Xây Dựng",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      clients: [
        "Công ty XD Công Nghiệp Hà Nội",
        "Công ty Phú Gia",
        "Trường Kính TKC",
        "Công ty CP Xây Dựng Thành Công",
      ],
    },
    {
      name: "Sản Xuất",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      clients: [
        "Công ty TNHH XNK Bảo Tín",
        "Công ty TNHH Nhựa Đông Phương",
        "Công ty Sản Xuất & TM 30/6",
        "CTY Cổ Phần Á Châu",
      ],
    },
    {
      name: "Thương Mại & Dịch Vụ",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      clients: [
        "Công ty TNHH Vận Tải Việt Chiến",
        "Công ty Showa Brain NaVi VN",
        "Công ty Du lịch Saco Travel",
        "Công ty Vận Tải Bảo An",
      ],
    },
    {
      name: "Giáo Dục",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
      clients: [
        "Trung tâm Kumon",
        "Mầm non Ước Mơ Của Bé",
        "Công ty TNHH An Lạc",
        "TT Du học Hàn Quốc Thủ Đô",
      ],
    },
  ];

  const trustBadges = [
    {
      icon: (
        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Uy Tín & Chất Lượng",
      description: "Cam kết chất lượng với tỷ lệ giữ chân ứng viên sau 6 tháng đạt 92%",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Nhanh Chóng & Hiệu Quả",
      description: "Thời gian tuyển dụng chỉ từ 7-15 ngày với tỷ lệ thành công trên 90%",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Mạng Lưới Rộng Khắp",
      description: "Hơn 10,000 hồ sơ ứng viên và 100+ CTV phủ sóng từ Bắc đến Nam",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section id="clients" className="py-24 bg-white overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-yellow-400/30"
          >
            KHÁCH HÀNG TIÊU BIỂU
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            Đối Tác{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-400">
              Tin Tưởng
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hơn 300 doanh nghiệp trong nhiều lĩnh vực khác nhau đã và đang tin tưởng
            SunTalent là đối tác tuyển dụng chiến lược.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100 group hover:border-yellow-400"
            >
              <div className="flex items-center gap-5 mb-8">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-500 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300 shadow-lg group-hover:shadow-yellow-400/30"
                >
                  {industry.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-black group-hover:text-yellow-600 transition-colors">
                  {industry.name}
                </h3>
              </div>
              <div className="space-y-4">
                {industry.clients.map((client, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 + idx * 0.05 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 text-gray-600 hover:text-black transition-colors cursor-pointer group/item"
                  >
                    <motion.svg
                      className="w-6 h-6 text-yellow-500 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      whileHover={{ scale: 1.2 }}
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </motion.svg>
                    <span className="font-medium group-hover/item:text-yellow-600 transition-colors">{client}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative"
        >
          <div className="bg-black rounded-[2.5rem] p-10 md:p-14 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="text-center mb-12"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Vì Sao Doanh Nghiệp Tin Tưởng{" "}
                <span className="text-yellow-400">SunTalent</span>?
              </h3>
            </motion.div>

            <div className="relative grid md:grid-cols-3 gap-8">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="text-center group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-yellow-400/30 group-hover:shadow-yellow-400/50 transition-shadow"
                  >
                    {badge.icon}
                  </motion.div>
                  <h4 className="font-bold text-xl text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {badge.title}
                  </h4>
                  <p className="text-white/60 leading-relaxed">
                    {badge.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
