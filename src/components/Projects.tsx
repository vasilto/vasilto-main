import ProjectCard from './ProjectCard'

const projects = [
  {
    rank: 'A', suit: '♠', suitColor: 'black' as const,
    icon: '🚶', title: 'Пешеходни Пътеки Пловдив',
    description: 'Граждани докладват опасни пешеходни пътеки в Пловдив, потвърждават чужди сигнали и следят дали общината реагира — с карта, снимки и статуси.',
    tags: ['Next.js', 'TypeScript', 'Neon DB', 'Leaflet'],
    href: '#', rotation: -7, offsetY: 12, delay: 0,
  },
  {
    rank: 'K', suit: '♥', suitColor: 'red' as const,
    icon: '🗳️', title: 'Политически Програми 2026',
    description: 'Всяка предизборна мярка на 4 партии оценена по 4 критерия: конкретност, финансова обоснованост, времева рамка и реална изпълнимост — с цитирани извори.',
    tags: ['Astro', 'TypeScript', 'Supabase', 'Tailwind'],
    href: '#', rotation: 0, offsetY: 0, delay: 0.1,
  },
  {
    rank: 'Q', suit: '♣', suitColor: 'black' as const,
    icon: '🧪', title: 'QA Junior Bootcamp',
    description: 'Платформа за обучение на начинаещи QA специалисти — 4 дни, пълен цикъл: от clarifying questions до bug reports, с ментор review и реален sandbox с умишлени бъгове.',
    tags: ['React', 'Node.js', 'Express', 'SQLite'],
    href: '#', rotation: 7, offsetY: 12, delay: 0.2,
  },
]

export default function Projects() {
  return (
    <section id="projects">
      {/* Wood strip divider */}
      <div
        className="relative z-10 border-y border-[#8a6118]/50 px-12 py-[18px]"
        style={{ background: 'linear-gradient(180deg, #1e1008 0%, #2e1a0c 50%, #1e1008 100%)' }}
      >
        <div className="max-w-5xl mx-auto flex items-center gap-5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c8922a] whitespace-nowrap">
            Проекти
          </span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, #8a6118, transparent)' }} />
        </div>
      </div>

      {/* Felt table */}
      <div className="felt-weave relative z-10 flex flex-col items-center gap-12 py-16 px-6">
        <p className="text-[11px] uppercase tracking-[0.1em] text-[#8a6118]/70">
          Задръж над карта, за да я обърнеш
        </p>

        <div className="flex items-end justify-center gap-8 flex-wrap">
          {projects.map(p => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
