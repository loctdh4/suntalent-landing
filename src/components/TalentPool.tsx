"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TalentPool() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const stats = [
    { number: "10,000+", label: "Hồ sơ ứng viên" },
    { number: "50+", label: "Ngành nghề" },
    { number: "3", label: "Miền Bắc - Trung - Nam" },
  ];

  const categories = [
    "Quản lý cấp cao",
    "Kế toán - Tài chính",
    "Nhân sự - Hành chính",
    "Kinh doanh - Sales",
    "Kỹ thuật - Sản xuất",
    "Marketing",
  ];

  return (
    <section id="talent-pool" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-6"
            >
              NGÂN HÀNG ỨNG VIÊN
            </motion.span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Truy Cập Ngay{" "}
              <span className="text-yellow-600">Nguồn Nhân Lực</span>{" "}
              Chất Lượng
            </h2>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Hơn 10,000 hồ sơ ứng viên đã được sàng lọc và đánh giá.
              Tiết kiệm thời gian tuyển dụng với nguồn data phong phú từ SunTalent.
            </p>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full text-sm"
                >
                  {cat}
                </motion.span>
              ))}
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors"
            >
              Liên hệ ngay
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100"
              >
                <div className="text-2xl md:text-3xl font-bold text-yellow-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
