"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const GOOGLE_SHEET_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL || "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    } catch {
      setError("Có lỗi xảy ra. Vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Trụ sở chính",
      content: "382 Nguyễn Hữu Thọ, Cẩm Lệ, Tp. Đà Nẵng",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Hotline",
      content: "0368 012 586",
      subContent: "(Ms. Thảo)",
      isPhone: true,
    },
    {
      icon: (
        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Giờ làm việc",
      content: "Thứ 2 - Thứ 6: 8:00 - 17:30",
      subContent: "Thứ 7: 8:00 - 12:00",
    },
  ];

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 0 0 3px rgba(251, 191, 36, 0.3)" },
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden" ref={sectionRef}>
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
            LIÊN HỆ
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            Kết Nối Với{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-400">
              SunTalent
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hãy để lại thông tin, đội ngũ tư vấn của chúng tôi sẽ liên hệ và hỗ trợ bạn
            tìm giải pháp nhân sự phù hợp nhất.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-black rounded-[2rem] overflow-hidden mb-8"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800"
                  alt="Office"
                  fill
                  className="object-cover opacity-30"
                />
              </div>
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" />

              <div className="relative p-10 text-white">
                <h3 className="text-2xl font-bold mb-8">Thông Tin Liên Hệ</h3>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-5 group cursor-pointer"
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-14 h-14 bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 rounded-2xl flex items-center justify-center shrink-0 border border-yellow-400/30 group-hover:border-yellow-400/60 transition-colors backdrop-blur-sm"
                      >
                        {item.icon}
                      </motion.div>
                      <div>
                        <h4 className="font-semibold mb-1 group-hover:text-yellow-400 transition-colors">
                          {item.title}
                        </h4>
                        {item.isPhone ? (
                          <>
                            <a
                              href="tel:0368012586"
                              className="text-yellow-400 hover:text-yellow-300 text-xl font-bold transition-colors"
                            >
                              {item.content}
                            </a>
                            <p className="text-white/50 text-sm">{item.subContent}</p>
                          </>
                        ) : (
                          <>
                            <p className="text-white/70">{item.content}</p>
                            {item.subContent && (
                              <p className="text-white/70">{item.subContent}</p>
                            )}
                          </>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Team Preview */}
                <div className="mt-10 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[
                        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100",
                        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100",
                        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100",
                      ].map((src, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                          whileHover={{ scale: 1.2, zIndex: 10 }}
                          className="relative w-10 h-10 rounded-full border-2 border-black overflow-hidden"
                        >
                          <Image
                            src={src}
                            alt={`Team member ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">Đội ngũ tư vấn</div>
                      <div className="text-white/50 text-xs">Sẵn sàng hỗ trợ bạn</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative rounded-2xl overflow-hidden"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800"
                  alt="Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/95 to-yellow-500/90" />
              </div>

              <div className="relative p-8">
                <h4 className="font-bold text-xl text-black mb-4 flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </motion.div>
                  Tư vấn miễn phí
                </h4>
                <p className="text-black/80 mb-6 leading-relaxed">
                  Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng tư vấn giải pháp nhân sự
                  phù hợp nhất với nhu cầu và ngân sách của doanh nghiệp.
                </p>
                <motion.a
                  href="tel:0368012586"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-black text-yellow-400 px-8 py-4 rounded-full font-bold text-lg shadow-xl"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Gọi ngay: 0368 012 586
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white rounded-[2rem] p-10 shadow-2xl border border-gray-100"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-black mb-4">Cảm ơn bạn!</h3>
                <p className="text-gray-600 mb-6">
                  Chúng tôi đã nhận được yêu cầu và sẽ liên hệ lại trong vòng 24 giờ làm việc.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSubmitted(false)}
                  className="text-yellow-600 font-semibold hover:text-yellow-700"
                >
                  Gửi yêu cầu khác
                </motion.button>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-black mb-8">Gửi Yêu Cầu Tư Vấn</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div whileFocus="focus" variants={inputVariants}>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Họ và tên *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-yellow-400 focus:ring-0 transition-all outline-none bg-gray-50/50 hover:bg-white"
                        placeholder="Nhập họ và tên"
                      />
                    </motion.div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Số điện thoại *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-yellow-400 focus:ring-0 transition-all outline-none bg-gray-50/50 hover:bg-white"
                        placeholder="Nhập số điện thoại"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-yellow-400 focus:ring-0 transition-all outline-none bg-gray-50/50 hover:bg-white"
                        placeholder="Nhập email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Công ty
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-yellow-400 focus:ring-0 transition-all outline-none bg-gray-50/50 hover:bg-white"
                        placeholder="Tên công ty"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Dịch vụ quan tâm
                    </label>
                    <motion.select
                      whileFocus={{ scale: 1.02 }}
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-yellow-400 focus:ring-0 transition-all outline-none bg-gray-50/50 hover:bg-white cursor-pointer"
                    >
                      <option value="">Chọn dịch vụ</option>
                      <option value="headhunt">Headhunt cấp cao</option>
                      <option value="mass">Tuyển dụng đại trà</option>
                      <option value="consulting">Tư vấn chiến lược nhân sự</option>
                      <option value="assessment">Đánh giá ứng viên</option>
                      <option value="other">Khác</option>
                    </motion.select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nội dung yêu cầu
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-yellow-400 focus:ring-0 transition-all outline-none resize-none bg-gray-50/50 hover:bg-white"
                      placeholder="Mô tả chi tiết nhu cầu tuyển dụng của bạn..."
                    ></motion.textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, boxShadow: "0 15px 50px rgba(251, 191, 36, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-5 rounded-xl font-bold text-lg shadow-xl shadow-yellow-400/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                        />
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        Gửi yêu cầu tư vấn
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </motion.button>

                  {error && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center text-red-500 text-sm font-medium"
                    >
                      {error}
                    </motion.p>
                  )}

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-gray-500 text-sm"
                  >
                    Chúng tôi sẽ liên hệ lại trong vòng 24 giờ làm việc
                  </motion.p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
