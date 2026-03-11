import { Github, ArrowLeft, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { useLanguage } from '@/context/LanguageContext'
import { SITE_CONFIG } from '@/config/site'

export function ComingSoon() {
  const { t } = useLanguage()

  return (
    <div className="relative min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center px-4 py-16 hero-gradient">

      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[var(--accent-subtle)] blur-3xl opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl opacity-30" />
      </div>

      <motion.div
        className="relative text-center max-w-lg mx-auto"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-3xl bg-[var(--accent-subtle)] border border-[var(--accent)]/20 flex items-center justify-center">
              <Sparkles size={40} className="text-[var(--accent)]" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--accent)] flex items-center justify-center">
              <span className="text-white text-xs font-bold">!</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight mb-4">
          {t.portfolio.comingSoon.title}
        </h1>

        {/* Message */}
        <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed mb-10">
          {t.portfolio.comingSoon.message}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            as="a"
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
            icon={<Github size={18} />}
          >
            {t.portfolio.comingSoon.cta}
          </Button>

          <Button
            as="a"
            href="/"
            variant="secondary"
            size="lg"
            icon={<ArrowLeft size={17} />}
          >
            {t.portfolio.backHome}
          </Button>
        </div>

        {/* Decorative dots */}
        <div className="flex justify-center gap-2 mt-12">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-[var(--accent)]"
              style={{ opacity: 0.3 + i * 0.3 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
