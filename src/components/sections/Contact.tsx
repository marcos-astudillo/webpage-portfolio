import { useState, FormEvent } from 'react'
import { Send, Mail, MapPin, CheckCircle, AlertCircle, Loader2, Clock } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useLanguage } from '@/context/LanguageContext'
import { SITE_CONFIG } from '@/config/site'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

const initialForm: FormState = { name: '', email: '', subject: '', message: '' }

function validateForm(data: FormState, t: ReturnType<typeof useLanguage>['t']): FormErrors {
  const errors: FormErrors = {}
  const v = t.contact.validation

  if (!data.name.trim()) errors.name = v.nameRequired
  if (!data.email.trim()) {
    errors.email = v.emailRequired
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = v.emailInvalid
  }
  if (!data.subject.trim()) errors.subject = v.subjectRequired
  if (!data.message.trim()) {
    errors.message = v.messageRequired
  } else if (data.message.trim().length < 10) {
    errors.message = v.messageTooShort
  }
  return errors
}

export function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const validationErrors = validateForm(form, t)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('loading')

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (response.ok) {
        setStatus('success')
        setForm(initialForm)
        setErrors({})
      } else {
        setStatus('error')
      }
    } catch {
      // Network error or endpoint not available in dev
      // In development without a PHP backend, we simulate success
      if (import.meta.env.DEV) {
        setTimeout(() => {
          setStatus('success')
          setForm(initialForm)
        }, 1000)
      } else {
        setStatus('error')
      }
    }
  }

  return (
    <section
      className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24"
      aria-labelledby="contact-title"
    >
      <AnimatedSection>
        <SectionTitle
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-4">
          <AnimatedSection delay={100} direction="left">
            <Card padding="md">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-subtle)] flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-[var(--accent)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wide mb-0.5">
                    {t.contact.info.email}
                  </p>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={150} direction="left">
            <Card padding="md">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-subtle)] flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[var(--accent)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wide mb-0.5">
                    {t.contact.info.location}
                  </p>
                  <p className="text-sm font-medium text-[var(--text-primary)]">
                    {SITE_CONFIG.location}
                  </p>
                </div>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={200} direction="left">
            <Card padding="md">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wide mb-0.5">
                    {t.contact.info.availability}
                  </p>
                  <p className="text-sm font-medium text-emerald-400">
                    {t.contact.info.availabilityValue}
                  </p>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <AnimatedSection delay={100} direction="right">
            <Card padding="lg">
              {status === 'success' ? (
                <div className="flex flex-col items-center text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                    {t.contact.success.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm max-w-sm">
                    {t.contact.success.message}
                  </p>
                  <Button
                    variant="ghost"
                    className="mt-6"
                    onClick={() => setStatus('idle')}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                        {t.contact.form.name} <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder={t.contact.form.namePlaceholder}
                        className={`form-input ${errors.name ? 'border-red-400 focus:border-red-400 focus:shadow-none' : ''}`}
                        disabled={status === 'loading'}
                        autoComplete="name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                        {t.contact.form.email} <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder={t.contact.form.emailPlaceholder}
                        className={`form-input ${errors.email ? 'border-red-400' : ''}`}
                        disabled={status === 'loading'}
                        autoComplete="email"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                      {t.contact.form.subject} <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder={t.contact.form.subjectPlaceholder}
                      className={`form-input ${errors.subject ? 'border-red-400' : ''}`}
                      disabled={status === 'loading'}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                      {t.contact.form.message} <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder={t.contact.form.messagePlaceholder}
                      className={`form-input resize-none ${errors.message ? 'border-red-400' : ''}`}
                      disabled={status === 'loading'}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Error Banner */}
                  {status === 'error' && (
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
                      <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">{t.contact.error.title}</p>
                        <p className="text-xs mt-0.5 opacity-80">{t.contact.error.message}</p>
                      </div>
                    </div>
                  )}

                  {/* Submit */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={status === 'loading'}
                    icon={
                      status === 'loading'
                        ? <Loader2 size={17} className="animate-spin" />
                        : <Send size={17} />
                    }
                  >
                    {status === 'loading' ? t.contact.form.submitting : t.contact.form.submit}
                  </Button>
                </form>
              )}
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
