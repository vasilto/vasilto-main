import { motion } from 'framer-motion'
import Dice from './Dice'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' as const, delay },
})

export default function Hero() {
  return (
    <section id="top" className="min-h-screen flex items-center justify-center px-6 py-28 relative z-10">
      {/* Felt table card */}
      <div
        className="w-full max-w-3xl rounded-3xl p-[6px]"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, #145232 0%, #0c3520 60%, #091e12 100%)',
          boxShadow: '0 0 0 6px #3d2310, 0 0 0 10px #8a6118, 0 0 0 14px #1e1008, 0 40px 80px rgba(0,0,0,.7)',
        }}
      >
        {/* Gold inner border */}
        <div className="border-2 border-[#8a6118]/70 rounded-[20px] px-12 py-14 flex flex-col items-center gap-7 relative overflow-hidden">

          {/* Felt sheen */}
          <div className="pointer-events-none absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 30% 40%, rgba(79,200,120,.04) 0%, transparent 60%)' }} />

          <motion.div {...fade(0.1)} className="flex gap-5 text-[#8a6118]/60 text-lg tracking-[8px]" aria-hidden>
            ♠ ♣ ♥ ♦
          </motion.div>

          <div className="flex flex-col items-center gap-6 text-center relative z-10">
            <motion.p {...fade(0.2)} className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c8922a]/85">
              QA инженер · Граждански активист · Пловдив
            </motion.p>

            <motion.h1 {...fade(0.3)} className="font-serif text-5xl md:text-6xl font-bold text-[#f4edd8] leading-[1.1] -tracking-[0.01em]">
              Тествам системи,<br />
              <em className="text-[#e0b84a] not-italic italic">строя общности</em>
            </motion.h1>

            <motion.p {...fade(0.4)} className="text-base text-[#d6c9a8]/65 leading-relaxed max-w-md">
              QA инженер по занаят, граждански активист по призвание
              и фен на бордовите игри по душа — понякога и трите се срещат в един проект.
            </motion.p>

            <motion.div {...fade(0.5)}>
              <Dice />
            </motion.div>

            <motion.a
              {...fade(0.6)}
              href="#projects"
              onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#c8922a] text-[#120a04]
                         font-serif text-lg font-bold rounded-md tracking-[0.02em]
                         hover:bg-[#e0b84a] hover:-translate-y-0.5 transition-all
                         shadow-[0_4px_20px_rgba(200,146,42,0.35)] hover:shadow-[0_8px_30px_rgba(200,146,42,0.5)]"
            >
              Разгледай проектите <span>♦</span>
            </motion.a>
          </div>

          <motion.div {...fade(0.7)} className="flex gap-5 text-[#8a6118]/30 text-lg tracking-[8px]" aria-hidden>
            ♦ ♥ ♣ ♠
          </motion.div>
        </div>
      </div>
    </section>
  )
}
