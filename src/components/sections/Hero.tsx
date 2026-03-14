import { Download, Mail, Github, Linkedin, MapPin, ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { useLanguage } from '@/context/LanguageContext'
import { SITE_CONFIG, ASSETS, type NavSection } from '@/config/site'
import { featuredSkills } from '@/data/skills'

interface HeroProps {
  onNavClick: (section: NavSection) => void
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

export function Hero({ onNavClick }: HeroProps) {
  const { t } = useLanguage()
  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] flex items-center hero-gradient"
      aria-label="Hero section"
    >
      {/* Ambient Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[var(--accent-subtle)] blur-3xl opacity-40" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1"
          >
            {/* Available Badge */}
            <motion.div variants={itemVariants} className="mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {t.hero.available}
              </span>
            </motion.div>

            {/* Greeting + Name */}
            <motion.div variants={itemVariants}>
              <p className="text-[var(--text-muted)] text-base sm:text-lg font-medium mb-1">
                {t.hero.greeting}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight leading-none mb-2">
                {t.hero.name}
              </h1>
            </motion.div>

            {/* Title */}
            <motion.div variants={itemVariants} className="mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gradient">
                {t.hero.title}
              </h2>
              <p className="text-sm text-[var(--text-muted)] font-medium mt-1">
                {t.hero.subtitle}
              </p>
            </motion.div>

            {/* Intro */}
            <motion.p
              variants={itemVariants}
              className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed mb-6 max-w-lg"
            >
              {t.hero.intro}
            </motion.p>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-1.5 text-[var(--text-muted)] text-sm mb-8"
            >
              <MapPin size={14} />
              <span>{t.hero.location}</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8">
              <Button
                variant="primary"
                size="lg"
                icon={<Mail size={17} />}
                onClick={() => onNavClick('contact')}
              >
                {t.hero.cta.contact}
              </Button>
              <div className="flex items-center gap-1.5">
                <Button
                  as="a"
                  href={ASSETS.resumeEn}
                  download
                  variant="secondary"
                  size="lg"
                  icon={<Download size={17} />}
                >
                  CV · EN
                </Button>
                <Button
                  as="a"
                  href={ASSETS.resumeEs}
                  download
                  variant="secondary"
                  size="lg"
                  icon={<Download size={17} />}
                >
                  CV · ES
                </Button>
              </div>
              <Button
                variant="ghost"
                size="lg"
                icon={<ArrowRight size={16} />}
                iconPosition="right"
                onClick={() => onNavClick('about')}
              >
                {t.common.learnMore}
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--accent-subtle)] transition-all duration-200"
                aria-label={t.hero.social.github}
              >
                <Github size={19} />
              </a>
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--accent-subtle)] transition-all duration-200"
                aria-label={t.hero.social.linkedin}
              >
                <Linkedin size={19} />
              </a>
              <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <span className="w-px h-5 bg-[var(--border-color)]" />
                <Sparkles size={13} className="text-[var(--accent)]" />
                <span className="font-mono">{SITE_CONFIG.domain}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative">
              {/* Rotating gradient ring */}
              <div className="profile-ring p-0.5 rounded-full w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] lg:w-[320px] lg:h-[320px]">
                <div className="rounded-full overflow-hidden bg-[var(--bg-secondary)] w-full h-full">
                  <img
                    src={ASSETS.profileImage}
                    alt="Marcos Astudillo — Full-Stack Developer"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    onError={(e) => {
                      const target = e.currentTarget
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-[var(--accent-subtle)]">
                            <span style="font-size:5rem;font-weight:800;color:var(--accent)">MA</span>
                          </div>
                        `
                      }
                    }}
                  />
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl px-3 py-2 shadow-[var(--shadow-md)]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">⚡</span>
                  <div>
                    <p className="text-[10px] text-[var(--text-muted)] leading-none">Full-Stack</p>
                    <p className="text-xs font-bold text-[var(--text-primary)] leading-tight">Developer</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl px-3 py-2 shadow-[var(--shadow-md)]"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.4 }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-medium text-[var(--text-primary)]">Ottawa, CA</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Strip */}
        <motion.div
          className="mt-16 pt-8 border-t border-[var(--border-color)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-widest mb-4">
            Core Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {featuredSkills.map((skill) => (
              <Badge key={skill} variant="tech">
                {skill}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
