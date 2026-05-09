import { motion } from 'framer-motion'

export default function Nav() {
  const scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-10 py-[18px]
                 border-b border-[#8a6118]/50 backdrop-blur-lg"
      style={{ background: 'rgba(18,10,4,0.88)' }}
    >
      <button onClick={() => scroll('top')} className="font-serif text-xl text-[#f4edd8] tracking-wide cursor-pointer">
        vasil<span className="text-[#c8922a]">♠</span>
      </button>

      <div className="flex items-center gap-8">
        {[['projects', 'Проекти'], ['about', 'За мен']].map(([id, label]) => (
          <button
            key={id}
            onClick={() => scroll(id)}
            className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8a7d5e]
                       hover:text-[#f4edd8] transition-colors cursor-pointer"
          >
            {label}
          </button>
        ))}
        <a
          href="mailto:vasil@example.com"
          className="text-xs font-semibold uppercase tracking-[0.12em] text-[#c8922a]
                     border border-[#8a6118] rounded px-4 py-[7px]
                     hover:bg-[#c8922a] hover:text-[#120a04] transition-colors"
        >
          Контакт
        </a>
      </div>
    </motion.nav>
  )
}
