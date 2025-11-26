"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const services = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Headhunt Cấp Cao",
      description: "Tuyển dụng các vị trí quản lý, giám đốc, chuyên gia. Kết nối với mạng lưới hơn 200 nhân sự cấp cao bao gồm CEO, GĐKD, TPKD, TPNS.",
      features: ["Executive Search", "Vị trí C-level", "Chuyên gia đầu ngành"],
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=600",
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Tuyển Dụng Đại Trà",
      description: "Giải pháp tuyển dụng số lượng lớn cho doanh nghiệp. Đã tuyển thành công hơn 2,200 lao động phổ thông và 1,000+ nhân sự có chuyên môn trong năm 2024.",
      features: ["Tuyển số lượng lớn", "Phủ sóng Bắc - Nam", "Thời gian nhanh"],
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600",
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Tư Vấn Chiến Lược Nhân Sự",
      description: "Xây dựng quy trình tuyển dụng chuyên nghiệp, đánh giá năng lực nhân sự và tư vấn giải pháp phù hợp với từng doanh nghiệp.",
      features: ["Xây dựng quy trình", "Đánh giá năng lực", "Tư vấn chiến lược"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600",
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "Đánh Giá Ứng Viên",
      description: "Thực hiện bài test năng lực, phỏng vấn chuyên sâu và sàng lọc ứng viên kỹ lưỡng để đảm bảo chất lượng tốt nhất.",
      features: ["Test năng lực", "Phỏng vấn chuyên sâu", "Báo cáo chi tiết"],
      image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=600",
    },
  ];

  const commitments = [
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Thời gian nhanh",
      description: "7-15 ngày làm việc tùy vị trí",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Bảo hành dài hạn",
      description: "1-12 tháng kể từ ngày nhận việc",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Chi phí hợp lý",
      description: "Linh hoạt theo từng gói dịch vụ",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section id="services" className="py-24 bg-gray-50 overflow-hidden" ref={sectionRef}>
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
            DỊCH VỤ CỦA CHÚNG TÔI
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            Giải Pháp Tuyển Dụng{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-400">
              Toàn Diện
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Chúng tôi cung cấp đa dạng dịch vụ nhân sự, từ tuyển dụng cấp cao đến tuyển đại trà,
            đáp ứng mọi nhu cầu của doanh nghiệp.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-400"
            >
              {/* Image Header */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Icon overlay */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="absolute bottom-4 left-6 w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center text-black shadow-xl shadow-yellow-400/40"
                >
                  {service.icon}
                </motion.div>

                {/* Title on image */}
                <h3 className="absolute bottom-6 left-28 text-2xl font-bold text-white">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-600 mb-5 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 + idx * 0.05 }}
                      className="inline-block bg-yellow-50 text-yellow-700 px-4 py-1.5 rounded-full text-sm font-medium group-hover:bg-yellow-100 transition-colors"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Commitment Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 relative"
        >
          <div className="relative bg-black rounded-[2.5rem] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200"
                alt="Office"
                fill
                className="object-cover opacity-30"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl" />

            <div className="relative p-10 md:p-14 text-white">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="text-2xl md:text-3xl font-bold text-center mb-12"
              >
                Cam Kết <span className="text-yellow-400">Chất Lượng</span>
              </motion.h3>

              <div className="grid md:grid-cols-3 gap-8">
                {commitments.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-yellow-400/20 group-hover:border-yellow-400/50 transition-colors backdrop-blur-sm"
                    >
                      {item.icon}
                    </motion.div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-white/60">{item.description}</p>
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
