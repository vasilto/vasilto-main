import { motion, useAnimation, useMotionValue, animate as fmAnimate, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

// ── Facts ────────────────────────────────────────────────────────
const FACTS = [
  { suit: '♠', text: 'Политолог по образование' },
  { suit: '♣', text: 'QA инженер по случайност' },
  { suit: '♥', text: 'Boardgame Heroes — детски клуб в Пловдив' },
  { suit: '♦', text: 'Граждански активист' },
  { suit: '♥', text: 'Татко на две прекрасни деца' },
  { suit: '♠', text: 'Обичам да карам колело' },
  { suit: '♣', text: 'Пловдив, България' },
]

// ── Pip ──────────────────────────────────────────────────────────
const Pip = ({ className = '' }: { className?: string }) => (
  <span className={`w-[11px] h-[11px] bg-[#1a1a1a] rounded-full block shrink-0 ${className}`} />
)

function Face({ side, children }: { side: string; children: React.ReactNode }) {
  return <div className={`face face-${side}`}>{children}</div>
}

// ── Typewriter ───────────────────────────────────────────────────
function useTypewriter(text: string, startDelay = 300, speed = 36) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    setDisplayed('')
    if (!text) return
    const t = setTimeout(() => {
      let i = 0
      const id = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) clearInterval(id)
      }, speed)
      return () => clearInterval(id)
    }, startDelay)
    return () => clearTimeout(t)
  }, [text, startDelay, speed])
  return displayed
}

// ── Sparkle positions ────────────────────────────────────────────
const SPARKLES = [
  { x:  6, y: 22, delay: 0.04, size: 3 },
  { x: 90, y: 18, delay: 0.14, size: 4 },
  { x: 78, y: 80, delay: 0.09, size: 3 },
  { x: 12, y: 75, delay: 0.20, size: 4 },
  { x: 50, y:  3, delay: 0.07, size: 3 },
  { x: 94, y: 50, delay: 0.26, size: 3 },
  { x:  2, y: 48, delay: 0.17, size: 4 },
  { x: 45, y: 97, delay: 0.11, size: 3 },
  { x: 22, y: 40, delay: 0.31, size: 2 },
  { x: 72, y: 42, delay: 0.23, size: 2 },
]

// ── Fact card ────────────────────────────────────────────────────
function FactCard({ fact, factKey }: { fact: { suit: string; text: string }; factKey: number }) {
  const isRed   = ['♥', '♦'].includes(fact.suit)
  const color   = isRed ? '#d94f4f' : '#c9a227'
  const typed   = useTypewriter(fact.text, 320, 36)
  const done    = typed.length >= fact.text.length

  return (
    <motion.div
      key={factKey}
      className="relative w-full"
      initial={{ clipPath: 'inset(50% 6px 50% 6px round 14px)', opacity: 0 }}
      animate={{ clipPath: 'inset(0% 0px 0% 0px round 14px)', opacity: 1 }}
      exit={{   clipPath: 'inset(50% 6px 50% 6px round 14px)', opacity: 0 }}
      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Outer aurora glow */}
      <motion.div
        className="absolute -inset-[4px] rounded-[16px] pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${color}55 0%, transparent 68%)`, filter: 'blur(8px)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.6] }}
        transition={{ duration: 0.6, times: [0, 0.3, 1] }}
      />

      <div
        className="relative rounded-[14px] overflow-hidden border px-5 py-4 flex flex-col items-center gap-2"
        style={{
          borderColor: `${color}45`,
          background: 'linear-gradient(155deg, #1c1508 0%, #0e0c08 60%, #0a0805 100%)',
          boxShadow: `0 0 28px 3px ${color}20, inset 0 1px 0 ${color}25, inset 0 -1px 0 ${color}10`,
        }}
      >
        {/* Scan line sweep */}
        <motion.div
          className="absolute left-0 right-0 pointer-events-none z-20"
          style={{
            height: 80,
            background: `linear-gradient(180deg, transparent 0%, ${color}22 40%, ${color}30 50%, ${color}22 60%, transparent 100%)`,
          }}
          initial={{ top: '-80px' }}
          animate={{ top: '110%' }}
          transition={{ duration: 0.55, delay: 0.04, ease: 'linear' }}
        />

        {/* Ghost watermark */}
        <motion.span
          className="absolute select-none pointer-events-none font-bold leading-none"
          style={{ color, fontSize: 100, top: '50%', left: '50%', x: '-50%', y: '-50%' }}
          initial={{ scale: 3.5, opacity: 0 }}
          animate={{ scale: 1,   opacity: 0.055 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {fact.suit}
        </motion.span>

        {/* Corner marks */}
        {(['tl','tr','bl','br'] as const).map(p => (
          <span
            key={p}
            className={`absolute text-[9px] font-bold leading-none select-none
              ${p === 'tl' ? 'top-2 left-2.5'  : ''}
              ${p === 'tr' ? 'top-2 right-2.5' : ''}
              ${p === 'bl' ? 'bottom-2 left-2.5'  : ''}
              ${p === 'br' ? 'bottom-2 right-2.5' : ''}
            `}
            style={{ color: `${color}65` }}
          >
            {fact.suit}
          </span>
        ))}

        {/* Main suit symbol */}
        <motion.span
          className="text-[28px] leading-none z-10 relative"
          style={{ color, filter: `drop-shadow(0 0 8px ${color}90)` }}
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 280, damping: 11, delay: 0.16 }}
        >
          {fact.suit}
        </motion.span>

        {/* Divider */}
        <motion.div
          className="w-full h-px z-10 relative"
          style={{ background: `linear-gradient(90deg, transparent, ${color}60, transparent)` }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.38, delay: 0.26, ease: 'easeOut' }}
        />

        {/* Typewriter text + cursor */}
        <div className="z-10 relative min-h-[2.6em] flex items-center justify-center">
          <p className="text-sm font-medium text-center text-[#e8d5a3] leading-snug">
            {typed}
            {!done && (
              <motion.span
                className="inline-block w-[1.5px] h-[1em] ml-[2px] align-middle rounded-sm"
                style={{ backgroundColor: color }}
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.48, repeatType: 'reverse' }}
              />
            )}
          </p>
        </div>
      </div>

      {/* Sparkles */}
      {SPARKLES.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size, backgroundColor: color, boxShadow: `0 0 4px ${color}` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1.4, 0], y: [0, -18] }}
          transition={{ duration: 0.85, delay: s.delay, ease: 'easeOut' }}
        />
      ))}
    </motion.div>
  )
}

// ── Main component ───────────────────────────────────────────────
export default function Dice() {
  const [rolling, setRolling]   = useState(false)
  const [fact, setFact]         = useState<{ suit: string; text: string } | null>(null)
  const [factKey, setFactKey]   = useState(0)
  const [lastIdx, setLastIdx]   = useState(-1)
  const [impactKey, setImpactKey] = useState(0)

  const bounceCtrl = useAnimation()
  const rotX       = useMotionValue(0)
  const rotY       = useMotionValue(0)
  const idleRef    = useRef<{ stop: () => void } | null>(null)

  const startIdle = () => {
    let stopped = false
    const loop = () => {
      if (stopped) return
      const ctrl = fmAnimate(rotY, rotY.get() + 360, {
        duration: 10, ease: 'linear', onComplete: loop,
      })
      idleRef.current = { stop: () => { stopped = true; ctrl.stop() } }
    }
    loop()
  }

  useEffect(() => {
    startIdle()
    return () => idleRef.current?.stop()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const pickFact = () => {
    let idx: number
    do { idx = Math.floor(Math.random() * FACTS.length) } while (idx === lastIdx)
    setLastIdx(idx)
    return idx
  }

  const roll = () => {
    if (rolling) return
    setRolling(true)
    setFact(null)
    idleRef.current?.stop()

    const idx      = pickFact()
    const DURATION = 950

    bounceCtrl.start({
      y:      [0, -70, 12, -26, 5, 0],
      scaleY: [1, 0.9, 0.82, 1.1, 0.96, 1],
      transition: { duration: DURATION / 1000, times: [0, 0.27, 0.52, 0.67, 0.83, 1], ease: 'easeOut' },
    })
    fmAnimate(rotX, rotX.get() + 540 + (idx % 3) * 90, { duration: DURATION / 1000, ease: [0.15, 0, 0.1, 1] })
    fmAnimate(rotY, rotY.get() + 960 + idx * 55,        { duration: DURATION / 1000, ease: [0.15, 0, 0.1, 1] })

    setTimeout(() => {
      setImpactKey(k => k + 1)
      setFact(FACTS[idx])
      setFactKey(k => k + 1)
      setRolling(false)
      setTimeout(startIdle, 2800)
    }, DURATION + 50)
  }

  return (
    <div className="flex flex-col items-center gap-5" style={{ minHeight: 200 }}>

      {/* ── Dice + impact effects ── */}
      <div className="relative flex flex-col items-center" style={{ width: 90 }}>

        {/* Shockwave ring */}
        {impactKey > 0 && (
          <motion.div
            key={`ring-${impactKey}`}
            className="absolute rounded-full border-[1.5px] pointer-events-none z-20"
            style={{ borderColor: '#e0b84a', width: 90, height: 90, left: 0, top: 0 }}
            initial={{ opacity: 0.85, scale: 0.9 }}
            animate={{ opacity: 0,    scale: 3.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          />
        )}

        {/* Impact flash */}
        {impactKey > 0 && (
          <motion.div
            key={`flash-${impactKey}`}
            className="absolute rounded-full pointer-events-none z-20"
            style={{
              width: 90, height: 90, left: 0, top: 0,
              background: 'radial-gradient(circle, rgba(224,184,74,0.95) 0%, transparent 60%)',
            }}
            initial={{ opacity: 1,  scale: 0.3 }}
            animate={{ opacity: 0,  scale: 2.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        )}

        {/* Shadow */}
        <motion.div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/40 blur-[6px]"
          animate={rolling
            ? { scaleX: [1, 0.4, 1.3, 0.7, 1.1, 1], scaleY: [1, 0.3, 1.1, 0.6, 1.05, 1], opacity: [0.4, 0.1, 0.5, 0.25, 0.45, 0.4] }
            : { scaleX: [1, 0.85, 1], scaleY: [1, 0.8, 1], opacity: [0.4, 0.25, 0.4] }
          }
          transition={rolling
            ? { duration: 0.95, times: [0, 0.27, 0.52, 0.67, 0.83, 1] }
            : { repeat: Infinity, duration: 2.8, ease: 'easeInOut' }
          }
          style={{ width: 56, height: 10 }}
        />

        {/* Float wrapper */}
        <motion.div
          animate={rolling ? { y: 0 } : { y: [0, -8, 0] }}
          transition={rolling
            ? { duration: 0.1 }
            : { repeat: Infinity, duration: 2.8, ease: 'easeInOut' }
          }
        >
          {/* Bounce wrapper */}
          <motion.div
            animate={bounceCtrl}
            whileHover={!rolling ? { scale: 1.07, y: -4 } : {}}
            onClick={roll}
            className="cursor-pointer select-none"
            style={{ perspective: 500 }}
          >
            {/* 3-D cube */}
            <motion.div
              style={{
                width: 90, height: 90,
                position: 'relative',
                transformStyle: 'preserve-3d',
                rotateX: rotX,
                rotateY: rotY,
              }}
            >
              <Face side="front">
                <div className="absolute inset-[10px] grid place-items-center"><Pip /></div>
              </Face>
              <Face side="back">
                <div className="absolute inset-[10px] grid grid-cols-2 grid-rows-3 gap-1 content-between">
                  {[0,1,2,3,4,5].map(i => (
                    <Pip key={i} className={i % 2 === 0 ? 'justify-self-start' : 'justify-self-end'} />
                  ))}
                </div>
              </Face>
              <Face side="right">
                <div className="absolute inset-[10px] flex flex-col justify-between">
                  <Pip className="self-end" />
                  <Pip className="self-center" />
                  <Pip className="self-start" />
                </div>
              </Face>
              <Face side="left">
                <div className="absolute inset-[10px] grid grid-cols-2 grid-rows-2 content-between">
                  <Pip className="justify-self-start" />
                  <Pip className="justify-self-end" />
                  <Pip className="justify-self-start self-end" />
                  <Pip className="justify-self-end self-end" />
                </div>
              </Face>
              <Face side="top">
                <div className="absolute inset-[10px] flex flex-col justify-between">
                  <Pip className="self-end" />
                  <Pip className="self-start" />
                </div>
              </Face>
              <Face side="bottom">
                <div className="absolute inset-[10px] grid grid-cols-2 grid-rows-3 content-between">
                  <Pip className="justify-self-start" />
                  <Pip className="justify-self-end" />
                  <Pip className="col-span-2 justify-self-center" />
                  <Pip className="justify-self-start self-end" />
                  <Pip className="justify-self-end self-end" />
                </div>
              </Face>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Fact / hint ── */}
      <div style={{ width: 230, minHeight: 130 }} className="flex items-center justify-center">
        <AnimatePresence mode="wait">
          {fact ? (
            <FactCard key={factKey} fact={fact} factKey={factKey} />
          ) : (
            <motion.p
              key="hint"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.5, 0.35, 0.5] }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="text-[10px] uppercase tracking-[0.1em] text-[#8a6118]"
            >
              кликни да хвърлиш
            </motion.p>
          )}
        </AnimatePresence>
      </div>

    </div>
  )
}
