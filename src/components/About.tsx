import { motion } from 'framer-motion'

const skills = [
  { suit: '♠', color: '',              text: 'QA Engineering · Test Design · Bug Reporting' },
  { suit: '♣', color: '',              text: 'Гражданско участие · Civic Tech' },
  { suit: '♥', color: 'text-[#c0182a]', text: 'React · Next.js · Astro · Node.js' },
  { suit: '♦', color: 'text-[#c0182a]', text: 'Бордови игри · Пловдив · ♟' },
]

const stats: [string, string][] = [
  ['QA', 'по занаят'],
  ['3', 'проекта'],
  ['∞', 'ходове'],
]

export default function About() {
  return (
    <section id="about" className="relative z-10">
      {/* Wood strip */}
      <div
        className="border-y border-[#8a6118]/50 px-12 py-[18px]"
        style={{ background: 'linear-gradient(180deg, #1e1008 0%, #2e1a0c 50%, #1e1008 100%)' }}
      >
        <div className="max-w-5xl mx-auto flex items-center gap-5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c8922a] whitespace-nowrap">
            За мен
          </span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, #8a6118, transparent)' }} />
        </div>
      </div>

      <div
        className="px-12 py-20"
        style={{ background: 'linear-gradient(180deg, #1e1008 0%, #120a04 100%)' }}
      >
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-16 items-center">

          {/* Player card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-[#f4edd8] rounded-2xl p-7 flex flex-col items-center gap-3"
            style={{
              border: '3px solid #c8922a',
              boxShadow: '0 0 0 6px #3d2310, 0 20px 50px rgba(0,0,0,.6)',
            }}
          >
            <div className="w-full flex justify-between items-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8a6118]">Играч</span>
              <span className="text-[#8a6118]">♠</span>
            </div>

            <div
              className="w-20 h-20 rounded-full flex items-center justify-center font-serif text-3xl font-bold text-[#e0b84a]"
              style={{ background: 'linear-gradient(135deg, #2e1a0c, #3d2310)', border: '3px solid #8a6118' }}
            >
              V
            </div>

            <div className="font-serif text-2xl font-bold text-[#1a1a1a]">Васил</div>
            <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#7a6040] text-center leading-relaxed">
              QA инженер · Граждански активист
            </div>
            <div className="w-full h-px bg-black/10 my-1" />

            <div className="flex items-center justify-center gap-4 w-full">
              {stats.map(([val, key]) => (
                <div key={key} className="flex flex-col items-center gap-0.5">
                  <span className="font-serif text-2xl font-bold text-[#1a1a1a] leading-none">{val}</span>
                  <span className="text-[10px] uppercase tracking-wide text-[#8a7050] text-center">{key}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#f4edd8] leading-[1.15] mb-5">
              Тествам системи,<br />
              <em className="italic text-[#e0b84a]">строя общности</em>
            </h2>
            <p className="text-base text-[#d6c9a8]/70 leading-[1.75] mb-4">
              Политолог по образование, QA инженер по случайност. Исках да работя
              с политики, завърших в IT — не съжалявам, но не съм забравил защо съм
              тръгнал. Затова извън работата се опитвам да участвам там, където смятам,
              че мога да помогна.
            </p>
            <p className="text-base text-[#d6c9a8]/70 leading-[1.75] mb-8">
              В момента водя <span className="text-[#e0b84a] font-medium">Boardgame Heroes</span> — детски клуб за бордови игри
              в Пловдив. Пет-шест деца, 7–9 години, много зарове и доста спорове
              по правилата. Оказа се, че бордовите игри учат повече неща от колкото изглежда.
            </p>

            <div className="flex flex-col gap-3 mb-10">
              {skills.map(({ suit, color, text }) => (
                <div key={text} className="flex items-center gap-3 text-[15px] text-[#d6c9a8]/80">
                  <span className={`text-[#c8922a] ${color}`}>{suit}</span>
                  {text}
                </div>
              ))}
            </div>

            <a
              href="mailto:vasil@example.com"
              className="inline-flex items-center gap-3 px-7 py-3 border border-[#8a6118] rounded-md
                         font-serif text-base text-[#e0b84a] hover:bg-[#c8922a] hover:text-[#120a04]
                         hover:border-[#c8922a] transition-colors"
            >
              Свържи се с мен <span>♠</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
