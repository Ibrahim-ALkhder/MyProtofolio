import { motion } from "framer-motion";
import { navLinks } from "../data/data";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/50 bg-white/55 px-5 py-3 shadow-soft backdrop-blur-xl sm:px-7">
        <a
          href="#hero"
          className="font-serif text-xl tracking-wide text-textPrimary"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Ibrahim
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-textSecondary transition duration-300 hover:text-textPrimary"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="mailto:ibrahim@example.com"
          className="rounded-full bg-[#151515] px-4 py-2 text-sm font-medium text-white transition duration-300 hover:scale-[1.02] hover:bg-black"
        >
          Let&apos;s Talk
        </a>
      </nav>
    </motion.header>
  );
}