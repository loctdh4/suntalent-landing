"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);

  return count;
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const partners = useCountUp(300, 2000, isInView);
  const positions = useCountUp(3200, 2000, isInView);
  const retention = useCountUp(92, 2000, isInView);
  const candidates = useCountUp(10000, 2000, isInView);

  const achievements = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      value: partners + "+",
      label: "Doanh nghiệp đối tác",
      description: "Đối tác chiến lược trong các lĩnh vực: Xây dựng, Tài chính, Sản xuất, Bán lẻ",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      value: positions.toLocaleString() + "+",
      label: "Vị trí tuyển dụng thành công",
      description: "Bao gồm 2,200+ lao động phổ thông và 1,000+ nhân sự chuyên môn năm 2024",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      value: retention + "%",
      label: "Tỷ lệ giữ chân ứng viên",
      description: "Sau 6 tháng làm việc, thể hiện chất lượng tuyển dụng vượt trội",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      value: candidates.toLocaleString() + "+",
      label: "Hồ sơ ứng viên chất lượng",
      description: "Mạng lưới ứng viên phủ sóng toàn quốc, đa dạng ngành nghề",
    },
  ];

  const highlights = [
    {
      title: "Dự án 1,500+ nhân sự",
      company: "Công ty Sản Xuất & Thương Mại 30/6",
      location: "Thái Bình",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=300",
    },
    {
      title: "Dự án 900+ nhân sự",
      company: "CTY Cổ Phần Á Châu",
      location: "Hà Nội - KCN Hoà Lạc",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=300",
    },
    {
      title: "Dự án 700+ nhân sự",
      company: "Công ty CP Xây Dựng Thành Công",
      location: "Hà Nội",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=300",
    },
    {
      title: "200+ nhân sự cấp cao",
      company: "CEO, GĐKD, TPKD, TPNS",
      location: "Toàn quốc",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=300",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section id="achievements" className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative" ref={sectionRef}>
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            THÀNH TÍCH NỔI BẬT
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            Con Số{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-400">
              Ấn Tượng
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Những con số minh chứng cho chất lượng dịch vụ và sự tin tưởng của
            hàng trăm doanh nghiệp đối tác.
          </p>
        </motion.div>

        {/* Main Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{
                y: -15,
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
              }}
              className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-yellow-400 transition-colors group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-500 mb-6 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300 shadow-lg group-hover:shadow-yellow-400/30"
              >
                {stat.icon}
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                className="text-5xl font-bold text-black mb-3"
              >
                {stat.value}
              </motion.div>
              <div className="text-lg font-bold text-black mb-3">{stat.label}</div>
              <p className="text-gray-500 text-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlight Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative"
        >
          <div className="bg-black rounded-[2.5rem] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200"
                alt="Office"
                fill
                className="object-cover opacity-20"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl" />

            <div className="relative p-10 md:p-14">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="text-2xl md:text-3xl font-bold text-white text-center mb-12"
              >
                Dự Án <span className="text-yellow-400">Tiêu Biểu</span>
              </motion.h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {highlights.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                    }}
                    className="relative rounded-2xl overflow-hidden cursor-pointer group"
                  >
                    {/* Image */}
                    <div className="relative h-48">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                        className="text-xl font-bold text-yellow-400 mb-2 group-hover:scale-105 transition-transform origin-left"
                      >
                        {project.title}
                      </motion.div>
                      <div className="text-white/90 font-medium text-sm mb-1">{project.company}</div>
                      <div className="text-white/60 text-xs flex items-center gap-1.5">
                        <motion.svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ y: [0, -2, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </motion.svg>
                        {project.location}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
