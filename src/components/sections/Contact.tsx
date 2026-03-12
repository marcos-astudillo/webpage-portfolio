import { useState, FormEvent, useCallback } from 'react'
import { Send, Mail, MapPin, CheckCircle, AlertCircle, Loader2, Clock, RefreshCw, Phone, Github, type LucideIcon } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { useLanguage } from '@/context/LanguageContext'
import { SITE_CONFIG } from '@/config/site'

interface FormState { name: string; email: string; subject: string; message: string }
interface FormErrors { name?: string; email?: string; subject?: string; message?: string }
type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

const initialForm: FormState = { name: '', email: '', subject: '', message: '' }

function generateCaptcha(): { a: number; b: number; answer: number } {
  const a = Math.floor(Math.random() * 9) + 1
  const b = Math.floor(Math.random() * 9) + 1
  return { a, b, answer: a + b }
}

function validateForm(data: FormState, t: ReturnType<typeof useLanguage>['t']): FormErrors {
  const errors: FormErrors = {}
  const v = t.contact.validation
  if (!data.name.trim()) errors.name = v.nameRequired
  if (!data.email.trim()) { errors.email = v.emailRequired }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) { errors.email = v.emailInvalid }
  if (!data.subject.trim()) errors.subject = v.subjectRequired
  if (!data.message.trim()) { errors.message = v.messageRequired }
  else if (data.message.trim().length < 10) { errors.message = v.messageTooShort }
  return errors
}

function InfoRow({
  icon: Icon, label, children, accentColor = 'accent', delay = 0,
}: {
  icon: LucideIcon
  label: string; children: React.ReactNode
  accentColor?: 'accent' | 'emerald'; delay?: number
}) {
  const isEmerald = accentColor === 'emerald'
  return (
    <AnimatedSection delay={delay} direction="left">
      <div className={`
        group flex items-center gap-4 p-4 rounded-xl
        border border-[var(--border-color)] bg-[var(--bg-card)]
        ${isEmerald ? 'hover:border-emerald-500' : 'hover:border-[var(--accent)]'}
        hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300
      `}>
        <div className={`
          w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
          ${isEmerald ? 'bg-emerald-500/10 group-hover:bg-emerald-500' : 'bg-[var(--accent-subtle)] group-hover:bg-[var(--accent)]'}
          transition-colors duration-300
        `}>
          <Icon size={18} className={`${isEmerald ? 'text-emerald-400' : 'text-[var(--accent)]'} group-hover:text-white transition-colors duration-300`} />
        </div>
        <div className="min-w-0">
          <p className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wide mb-0.5">{label}</p>
          {children}
        </div>
      </div>
    </AnimatedSection>
  )
}

export function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [captcha, setCaptcha] = useState(generateCaptcha)
  const [captchaInput, setCaptchaInput] = useState('')
  const [captchaError, setCaptchaError] = useState(false)

  const refreshCaptcha = useCallback(() => {
    setCaptcha(generateCaptcha()); setCaptchaInput(''); setCaptchaError(false)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const validationErrors = validateForm(form, t)
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return }
    if (parseInt(captchaInput, 10) !== captcha.answer) { setCaptchaError(true); refreshCaptcha(); return }

    setStatus('loading')
    try {
      const params = new URLSearchParams()
      params.append('name', form.name)
      params.append('email', form.email)
      params.append('subject', form.subject)
      params.append('message', form.message)

      const response = await fetch('/form-handler.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      })

      const result = await response.text()
      //console.log('form-handler.php response:', response.status, result)

      if (response.ok) {
        setStatus('success')
        setForm(initialForm)
        setErrors({})
        refreshCaptcha()
      } else {
        console.error('Contact form error:', response.status, result)
        setStatus('error')
      }
    } catch {
      if (import.meta.env.DEV) { setTimeout(() => { setStatus('success'); setForm(initialForm); refreshCaptcha() }, 1000) }
      else { setStatus('error') }
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24" aria-labelledby="contact-title">

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

        {/* ── LEFT: Info ── */}
        <div className="lg:col-span-2 space-y-5">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-0.5 bg-[var(--accent)]" />
              <h2 id="contact-title" className="text-2xl sm:text-3xl font-extrabold text-[var(--accent)] tracking-tight">
                {t.contact.title}
              </h2>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
              {t.contact.subtitle}
            </p>
          </AnimatedSection>

          <div className="space-y-3 pt-2">
            <InfoRow icon={Mail} label={t.contact.info.email} delay={100}>
              <a href={`mailto:${SITE_CONFIG.email}`}
                className="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors truncate block">
                {SITE_CONFIG.email}
              </a>
            </InfoRow>

            <InfoRow icon={Phone} label={t.contact.info.phone} delay={140}>
              <a href={`tel:${SITE_CONFIG.phone}`}
                className="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
                {SITE_CONFIG.phone}
              </a>
            </InfoRow>

            <InfoRow icon={MapPin} label={t.contact.info.location} delay={180}>
              <p className="text-sm font-semibold text-[var(--text-primary)]">{SITE_CONFIG.location}</p>
            </InfoRow>

            <InfoRow icon={Clock} label={t.contact.info.availability} accentColor="emerald" delay={220}>
              <p className="text-sm font-semibold text-emerald-400">{t.contact.info.availabilityValue}</p>
            </InfoRow>

            <AnimatedSection delay={260} direction="left">
              <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)] hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-subtle)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--accent)] transition-colors duration-300">
                  <Github size={18} className="text-[var(--accent)] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wide mb-0.5">GitHub</p>
                  <p className="text-sm font-semibold text-[var(--text-primary)] truncate">github.com/marcos-astudillo</p>
                </div>
              </a>
            </AnimatedSection>
          </div>
        </div>

        {/* ── RIGHT: Form ── */}
        <div className="lg:col-span-3">
          <AnimatedSection delay={100} direction="right">
            <Card padding="lg">
              <div className="mb-6 pb-4 border-b border-[var(--border-color)]">
                <h3 className="text-xl font-bold text-[var(--text-primary)]">{t.contact.formTitle}</h3>
                <p className="text-xs text-[var(--text-muted)] mt-1">{t.contact.info.availabilityValue} · {t.contact.info.locationBadges.remote}</p>
              </div>

              {status === 'success' ? (
                <div className="flex flex-col items-center text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{t.contact.success.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm max-w-sm">{t.contact.success.message}</p>
                  <Button variant="ghost" className="mt-6" onClick={() => setStatus('idle')}>Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-1.5">
                        {t.contact.form.name} <span className="text-red-400">*</span>
                      </label>
                      <input id="name" name="name" type="text" value={form.name} onChange={handleChange}
                        placeholder={t.contact.form.namePlaceholder}
                        className={`form-input ${errors.name ? 'border-red-400' : ''}`}
                        disabled={status === 'loading'} autoComplete="name" />
                      {errors.name && <p className="mt-1 text-xs text-red-400 flex items-center gap-1"><AlertCircle size={11} /> {errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-1.5">
                        {t.contact.form.email} <span className="text-red-400">*</span>
                      </label>
                      <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
                        placeholder={t.contact.form.emailPlaceholder}
                        className={`form-input ${errors.email ? 'border-red-400' : ''}`}
                        disabled={status === 'loading'} autoComplete="email" />
                      {errors.email && <p className="mt-1 text-xs text-red-400 flex items-center gap-1"><AlertCircle size={11} /> {errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-1.5">
                      {t.contact.form.subject} <span className="text-red-400">*</span>
                    </label>
                    <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange}
                      placeholder={t.contact.form.subjectPlaceholder}
                      className={`form-input ${errors.subject ? 'border-red-400' : ''}`}
                      disabled={status === 'loading'} />
                    {errors.subject && <p className="mt-1 text-xs text-red-400 flex items-center gap-1"><AlertCircle size={11} /> {errors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-1.5">
                      {t.contact.form.message} <span className="text-red-400">*</span>
                    </label>
                    <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange}
                      placeholder={t.contact.form.messagePlaceholder}
                      className={`form-input resize-none ${errors.message ? 'border-red-400' : ''}`}
                      disabled={status === 'loading'} />
                    {errors.message && <p className="mt-1 text-xs text-red-400 flex items-center gap-1"><AlertCircle size={11} /> {errors.message}</p>}
                  </div>

                  {/* Captcha */}
                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-1.5">
                      {t.contact.captcha.label} <span className="text-red-400">*</span>
                    </label>
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 px-4 py-2.5 rounded-lg bg-[var(--accent-subtle)] text-[var(--text-primary)] font-mono font-semibold text-sm select-none">
                        {captcha.a} + {captcha.b} = ?
                      </div>
                      <input type="number" inputMode="numeric" value={captchaInput}
                        onChange={e => { setCaptchaInput(e.target.value); setCaptchaError(false) }}
                        placeholder={t.contact.captcha.placeholder}
                        className={`form-input w-28 ${captchaError ? 'border-red-400' : ''}`}
                        disabled={status === 'loading'} autoComplete="off" />
                      <button type="button" onClick={refreshCaptcha}
                        className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-subtle)] transition-colors"
                        title="New question"><RefreshCw size={15} /></button>
                    </div>
                    {captchaError && <p className="mt-1 text-xs text-red-400 flex items-center gap-1"><AlertCircle size={11} /> {t.contact.captcha.invalid}</p>}
                  </div>

                  {status === 'error' && (
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
                      <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">{t.contact.error.title}</p>
                        <p className="text-xs mt-0.5 opacity-80">{t.contact.error.message}</p>
                      </div>
                    </div>
                  )}

                  <Button type="submit" variant="primary" size="lg" fullWidth disabled={status === 'loading'}
                    icon={status === 'loading' ? <Loader2 size={17} className="animate-spin" /> : <Send size={17} />}>
                    {status === 'loading' ? t.contact.form.submitting : t.contact.form.submit}
                  </Button>
                </form>
              )}
            </Card>
          </AnimatedSection>
        </div>
      </div>

      {/* ── BOTTOM: Ottawa Location Banner ── */}
      <AnimatedSection delay={320}>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Left: location info + badges */}
            <div className="lg:col-span-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 sm:p-6 flex flex-col justify-between gap-5">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-px bg-[var(--accent)]" />
                  <span className="text-xs font-semibold text-[var(--accent)] uppercase tracking-[0.15em]">
                    Ottawa, Ontario · Canada
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl" aria-hidden="true">🍁</span>
                  <div>
                    <p className="font-bold text-[var(--text-primary)]">Ottawa, Ontario</p>
                    <p className="text-sm text-[var(--text-muted)]">Canada · EST (UTC-5)</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Badge variant="success">🌐 {t.contact.info.locationBadges.remote}</Badge>
                <Badge variant="accent">✈️ {t.contact.info.locationBadges.relocation}</Badge>
                <Badge variant="default">🏢 {t.contact.info.locationBadges.onsite}</Badge>
                <Badge variant="default">🔄 {t.contact.info.locationBadges.hybrid}</Badge>
              </div>
            </div>

            {/* Right: embedded map */}
            <div className="lg:col-span-3 relative rounded-xl overflow-hidden min-h-[200px]">
              <iframe
                title="Ottawa, Ontario, Canada"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-76.05%2C45.30%2C-75.45%2C45.55&layer=mapnik&marker=45.4215%2C-75.6972"
                className="absolute inset-0 w-full h-full"
                style={{ filter: 'grayscale(1) brightness(0.45) contrast(1.3)', border: 'none' }}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

        </div>
      </AnimatedSection>

    </section>
  )
}
