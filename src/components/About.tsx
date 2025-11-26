"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Chính trực",
      description: "Minh bạch trong quy trình tuyển dụng, đảm bảo sự công bằng cho cả ứng viên và doanh nghiệp.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Chuyên nghiệp",
      description: "Đội ngũ tư vấn viên với 5-10 năm kinh nghiệm, am hiểu sâu về thị trường nhân sự.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=400",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Hiệu quả",
      description: "Tỷ lệ tuyển dụng thành công trên 90%, tiết kiệm thời gian và chi phí cho doanh nghiệp.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=400",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Bảo mật",
      description: "Cam kết bảo mật tuyệt đối thông tin của ứng viên và doanh nghiệp đối tác.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400",
    },
  ];

  const teamMembers = [
    {
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300",
      name: "Nguyễn Văn A",
      role: "CEO & Founder",
    },
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300",
      name: "Trần Thị B",
      role: "HR Director",
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300",
      name: "Lê Văn C",
      role: "Senior Consultant",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden" ref={sectionRef}>
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
            VỀ CHÚNG TÔI
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            Đối Tác Tuyển Dụng{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-400">
              Chiến Lược
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Công ty TNHH Tư Vấn Nhân Sự Doanh Nghiệp SunTalent tự hào là cầu nối vững chắc,
            kết nối những ứng viên chất lượng cao với các doanh nghiệp hàng đầu trong nhiều lĩnh vực.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center mb-24"
        >
          {/* Left - Image Grid */}
          <motion.div variants={itemVariants} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-64 rounded-3xl overflow-hidden shadow-xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-64 rounded-3xl overflow-hidden shadow-xl mt-8"
              >
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600"
                  alt="Business meeting"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-64 rounded-3xl overflow-hidden shadow-xl -mt-8"
              >
                <Image
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=600"
                  alt="Office environment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-64 rounded-3xl overflow-hidden shadow-xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=600"
                  alt="Team success"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-6 -right-6 bg-black rounded-2xl p-6 shadow-2xl border border-yellow-400/30"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-yellow-400 font-bold text-2xl">10+ năm</div>
                  <div className="text-white/70 text-sm">Kinh nghiệm tuyển dụng</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-black mb-8">
              Tầm Nhìn & Sứ Mệnh
            </h3>

            <div className="space-y-8">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex gap-5 group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-400/30"
                >
                  <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </motion.div>
                <div>
                  <h4 className="font-bold text-black text-lg mb-2 group-hover:text-yellow-600 transition-colors">Tầm nhìn</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Trở thành đối tác tuyển dụng chiến lược hàng đầu tại Việt Nam, kết nối nhân sự
                    với doanh nghiệp một cách hiệu quả và bền vững.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex gap-5 group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="flex-shrink-0 w-14 h-14 bg-black rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </motion.div>
                <div>
                  <h4 className="font-bold text-black text-lg mb-2 group-hover:text-yellow-600 transition-colors">Sứ mệnh</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Cung cấp giải pháp tuyển dụng chuyên nghiệp, nhanh chóng, chính xác.
                    Là &quot;người kiến tạo&quot; sự nghiệp - không chỉ tuyển dụng, chúng tôi còn kiến tạo
                    đội ngũ nhân sự tinh hoa và mở ra cơ hội phát triển bền vững.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Team Preview */}
            <div className="mt-10 pt-10 border-t border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600 font-medium">Đội ngũ chuyên gia</span>
                <span className="text-yellow-600 font-bold">20+ thành viên</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.2, zIndex: 10 }}
                      className="relative w-12 h-12 rounded-full border-3 border-white overflow-hidden shadow-lg"
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                  className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm"
                >
                  +17
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Core Values */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-black text-center mb-12"
          >
            Giá Trị Cốt Lõi
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group hover:border-yellow-400 transition-colors cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="absolute bottom-4 left-4 w-14 h-14 bg-yellow-400 rounded-2xl flex items-center justify-center text-black shadow-lg"
                  >
                    {value.icon}
                  </motion.div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <h4 className="font-bold text-black text-xl mb-3">{value.title}</h4>
                  <p className="text-gray-500 leading-relaxed text-sm">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
