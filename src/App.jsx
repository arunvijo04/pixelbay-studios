import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "/logo.jpg";
import { Code, Smartphone, LayoutDashboard, ShoppingCart } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "Responsive websites using modern frameworks like React, Next.js, and Tailwind CSS. We ensure blazing-fast performance and SEO optimization.",
    icon: <Code size={40} />,
  },
  {
    title: "App Development",
    desc: "Cross-platform mobile apps with intuitive UIs and native performance, built with React Native, Flutter, or Swift.",
    icon: <Smartphone size={40} />,
  },
  {
    title: "UI/UX Design",
    desc: "Intuitive, elegant, and conversion-focused designs that reflect your brand identity and boost engagement.",
    icon: <LayoutDashboard size={40} />,
  },
  {
    title: "E-commerce Solutions",
    desc: "Powerful online stores integrated with secure payments, inventory management, and user-friendly interfaces.",
    icon: <ShoppingCart size={40} />,
  },
];

const team = [
  { name: "Arun Vijo", role: "Founder & CEO" },
];

export default function App() {
  const [query, setQuery] = useState("");
  const filteredServices = services.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-[#0e0e10] text-white font-['Poppins']">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-[#1a1a1d] shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center gap-3">
          <img src={logo} alt="PixelBay Logo" className="w-10 h-10 rounded" />
          <h1 className="text-xl font-bold text-yellow-400">PixelBay Studios</h1>
        </div>
        <div className="hidden md:flex gap-6">
          <a href="#home" className="hover:text-yellow-400 transition">Home</a>
          <a href="#about" className="hover:text-yellow-400 transition">About</a>
          <a href="#services" className="hover:text-yellow-400 transition">Services</a>
          <a href="#team" className="hover:text-yellow-400 transition">Team</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </div>
      </nav>

      {/* Home Section with Video Background */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-100"
        >
          <source src="/tech-bg.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 text-center px-4 pt-20 md:pt-0">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-black text-blue-400 drop-shadow-xl"
          >
            PixelBay <span className="text-yellow-400">Studios</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-2xl text-gray-300 mt-4 max-w-xl mx-auto drop-shadow-md"
          >
            Crafting Digital Excellence – One Pixel at a Time
          </motion.p>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 to-[#0e0e10]" />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen px-6 md:px-12 py-24 bg-[#1a1a1d] flex items-center justify-center">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-yellow-400">About PixelBay</h2>
            <p className="text-gray-300 mb-4">
              At <span className="text-white font-semibold">PixelBay</span>, we empower businesses with innovative, scalable, and visually compelling digital products.
              Our mission is to bridge technology with creativity—delivering custom-built solutions that meet your business goals.
            </p>
            <p className="text-gray-400 mb-4">
              With a passionate team of developers, designers, and strategists, we transform ideas into user-friendly websites and powerful mobile applications.
              From startups to enterprise clients, our work speaks of precision, performance, and purpose.
            </p>
            <p className="text-gray-400">
              Let us turn your digital vision into reality—with cutting-edge technologies, aesthetic designs, and seamless functionality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="/about.jpg"
              alt="About PixelBay"
              className="w-full h-auto object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen px-6 md:px-12 py-24 flex flex-col justify-center bg-[#0e0e10]">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-center text-yellow-400"
        >
          Our Services
        </motion.h2>

        <div className="flex justify-center mb-10">
          <input
            placeholder="Search services..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full md:w-1/2 p-3 rounded text-black shadow-md bg-white"
          />
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1f1f23] p-6 rounded-xl shadow-lg hover:shadow-yellow-500/20 hover:scale-105 transition duration-300"
            >
              <div className="mb-4 text-yellow-400">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Team Section */}
      <section id="team" className="min-h-screen px-6 md:px-12 py-20 bg-[#1a1a1d] flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-6 text-yellow-400">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#2a2a2e] p-6 rounded shadow text-center hover:shadow-lg"
            >
              <div className="w-20 h-20 bg-gray-600 rounded-full mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-yellow-400">{member.name}</h4>
              <p className="text-gray-300">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen px-6 md:px-12 py-24 bg-[#0e0e10] flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Contact Us</h2>
          <p className="text-gray-300 mb-2 italic">Let’s connect and turn your idea into a digital reality ✨</p>
          <p className="text-gray-400 mb-8">
            Whether you need a stunning website, powerful app, or a full-stack solution — we’re here to help!
          </p>

          <form className="grid gap-5">
            <motion.input
              type="text"
              placeholder="Your Name"
              whileFocus={{ scale: 1.02 }}
              className="p-3 rounded bg-[#1a1a1d] text-white focus:ring-2 ring-yellow-400 placeholder-gray-400"
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              whileFocus={{ scale: 1.02 }}
              className="p-3 rounded bg-[#1a1a1d] text-white focus:ring-2 ring-yellow-400 placeholder-gray-400"
            />
            <motion.textarea
              placeholder="Your Message"
              rows="4"
              whileFocus={{ scale: 1.02 }}
              className="p-3 rounded bg-[#1a1a1d] text-white focus:ring-2 ring-yellow-400 placeholder-gray-400"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded transition hover:bg-yellow-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1d] py-6 text-center text-gray-500">
        © {new Date().getFullYear()} PixelBay. All rights reserved.
      </footer>
    </div>
  );
}