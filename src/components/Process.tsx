"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Process() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: "Tiếp nhận yêu cầu",
      description: "Lắng nghe và tìm hiểu nhu cầu tuyển dụng cụ thể của doanh nghiệp. Tư vấn miễn phí giải pháp phù hợp.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Phân tích & Xây dựng tiêu chí",
      description: "Phân tích chi tiết vị trí cần tuyển, xây dựng bộ tiêu chí đánh giá ứng viên chuẩn xác.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Tìm kiếm & Sàng lọc",
      description: "Tìm kiếm ứng viên từ mạng lưới 10,000+ hồ sơ và 100+ CTV phủ sóng từ Bắc đến Nam.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Phỏng vấn & Đánh giá",
      description: "Phỏng vấn sơ bộ, thực hiện bài test năng lực và đánh giá chuyên sâu từng ứng viên.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: "05",
      title: "Giới thiệu ứng viên",
      description: "Gửi hồ sơ và báo cáo đánh giá chi tiết của các ứng viên phù hợp nhất cho doanh nghiệp.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      number: "06",
      title: "Theo dõi & Bảo hành",
      description: "Hỗ trợ theo dõi quá trình thử việc và bảo hành tuyển dụng từ 1-12 tháng.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section id="process" className="py-24 bg-white overflow-hidden" ref={sectionRef}>
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
            QUY TRÌNH LÀM VIỆC
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            Quy Trình Tuyển Dụng{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-400">
              Chuyên Nghiệp
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Quy trình 6 bước được tối ưu hóa để đảm bảo tìm kiếm và sàng lọc ứng viên
            chất lượng nhất trong thời gian ngắn nhất.
          </p>
        </motion.div>

        {/* Process Steps - Vertical Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-yellow-400 to-yellow-200 origin-top"
          />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={stepVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.15, type: "spring" }}
                    className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center text-black font-bold text-xl shadow-xl shadow-yellow-400/40 border-4 border-white"
                  >
                    {step.number}
                  </motion.div>
                </motion.div>

                {/* Content Card */}
                <div className={`flex-1 ml-24 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                  <motion.div
                    whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-yellow-400 transition-all duration-300 group"
                  >
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-500 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300 shrink-0"
                      >
                        {step.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold text-black group-hover:text-yellow-600 transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    <p className={`text-gray-600 leading-relaxed ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>

          {/* End Node */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 1.5, type: "spring" }}
            className="absolute left-8 md:left-1/2 -translate-x-1/2 -bottom-8"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-xl shadow-yellow-400/40 border-4 border-white">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-600 mb-8 text-lg">
            Bạn muốn tìm hiểu thêm về quy trình tuyển dụng của chúng tôi?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(251, 191, 36, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-yellow-400/30"
          >
            Nhận tư vấn miễn phí
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
