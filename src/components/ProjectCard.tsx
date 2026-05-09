import { motion } from 'framer-motion'

interface Props {
  rank: string
  suit: string
  suitColor?: 'black' | 'red'
  icon: string
  title: string
  description: string
  tags: string[]
  href: string
  rotation: number
  offsetY: number
  delay: number
}

export default function ProjectCard({
  rank, suit, suitColor = 'black', icon, title, description, tags, href,
  rotation, offsetY, delay,
}: Props) {
  const suitClass = suitColor === 'red' ? 'text-[#c0182a]' : 'text-[#1a1a1a]'

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
      className="card-group"
      style={{
        width: 260,
        height: 390,
        perspective: 1400,
        transform: `rotate(${rotation}deg) translateY(${offsetY}px)`,
        transition: 'transform 0.35s cubic-bezier(.34,1.56,.64,1)',
        zIndex: 1,
      }}
      whileHover={{
        rotate: 0,
        y: -20,
        scale: 1.04,
        zIndex: 10,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
    >
      <div className="card-inner" style={{ height: '100%' }}>

        {/* BACK */}
        <div
          className="card-face"
          style={{
            background: '#8b1215',
            border: '4px solid #c8922a',
            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))',
          }}
        >
          <div
            className="card-face back-diamond absolute inset-[10px] rounded-lg border border-[#c8922a]/40
                       flex items-center justify-center overflow-hidden"
          >
            <div className="absolute w-20 h-20 border-2 border-[#c8922a]/50 rotate-45" />
            <span className="font-serif text-4xl font-bold text-[#c8922a]/70 relative z-10">V</span>
          </div>
        </div>

        {/* FRONT */}
        <div
          className="card-face card-front-face bg-[#f4edd8] flex flex-col p-2.5 overflow-hidden"
          style={{ border: '3px solid rgba(0,0,0,0.12)', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))' }}
        >
          {/* Top corner */}
          <div className={`absolute top-2.5 left-3 text-center font-serif ${suitClass}`}>
            <span className="block text-xl font-bold leading-none">{rank}</span>
            <span className="block text-sm leading-none">{suit}</span>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-3.5 pt-7 gap-2.5">
            <span className="text-4xl leading-none">{icon}</span>
            <h3 className="font-serif text-[15px] font-bold text-[#1a1a1a] leading-snug">{title}</h3>
            <p className="text-[11.5px] text-[#4a4030] leading-relaxed">{description}</p>
            <div className="flex flex-wrap justify-center gap-1 mt-1">
              {tags.map(t => (
                <span key={t} className="text-[10px] font-semibold bg-black/[.07] rounded px-1.5 py-0.5 text-[#5a4020] tracking-wide">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom corner (rotated) */}
          <div className={`absolute bottom-2.5 right-3 text-center font-serif rotate-180 ${suitClass}`}>
            <span className="block text-xl font-bold leading-none">{rank}</span>
            <span className="block text-sm leading-none">{suit}</span>
          </div>

          {/* Link */}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="block text-center text-[11px] font-bold uppercase tracking-[0.06em]
                       text-[#8a6118] border-t border-black/10 py-2 hover:text-[#1a1a1a] transition-colors"
          >
            Виж проекта →
          </a>
        </div>
      </div>
    </motion.div>
  )
}
