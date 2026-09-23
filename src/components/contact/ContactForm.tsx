import { useState, type FormEvent } from 'react'

const purposes = [
  'Admissions Inquiry & Prospectus',
  'General Administration',
  'Transportation & Bus Routes',
  'Academics & Curriculum',
  'Careers & Employment',
  'Other',
]

interface FormState {
  name: string
  email: string
  phone: string
  purpose: string
  message: string
  consent: boolean
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  purpose: purposes[0],
  message: '',
  consent: false,
}

const inputClasses =
  'h-11 w-full rounded-sm bg-[#f0f3ff] px-3 text-sm text-brand placeholder:text-slate-400 outline-none ring-1 ring-transparent focus:ring-2 focus:ring-brand'
const labelClasses = 'font-sans text-sm font-semibold text-brand'
const errorClasses = 'text-xs font-semibold text-[#ba1a1a]'

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = 'Your name is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = 'Enter a valid email address.'
    if (!/^\d{10}$/.test(form.phone.trim())) next.phone = 'Enter a valid 10-digit mobile number.'
    if (!form.message.trim()) next.message = 'Please write a message.'
    if (!form.consent) next.consent = 'Please provide consent to be contacted.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        id="contact-form"
        className="flex h-full min-h-[400px] flex-col items-center justify-center gap-3 rounded-2xl bg-white p-10 text-center shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]"
      >
        <span className="flex size-14 items-center justify-center rounded-full bg-accent/30 text-3xl">
          &#10003;
        </span>
        <h3 className="font-display text-2xl font-bold text-brand">Message Received</h3>
        <p className="max-w-sm text-sm text-slate-600">
          Thank you, {form.name.split(' ')[0]}. Our administrative team will respond to you within
          24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initialState)
            setSubmitted(false)
          }}
          className="mt-2 font-sans text-sm font-semibold text-brand underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      noValidate
      className="flex scroll-mt-24 flex-col gap-5 rounded-2xl bg-white p-8 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] sm:p-12"
    >
      <div className="flex flex-col gap-1">
        <span className="flex items-center gap-1 font-sans text-xs font-bold tracking-[0.6px] text-accent-dark uppercase">
          <span aria-hidden>&#9993;</span> Send Us a Message
        </span>
        <h2 className="font-display text-3xl font-bold text-brand sm:text-[44px] sm:leading-[52px]">
          We Are Glad to Assist You
        </h2>
        <p className="pt-1 text-base text-slate-600">
          Please fill in your contact information below. Our academic counseling cell or
          administrative representative will connect with you within 24 hours.
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <label className={labelClasses} htmlFor="name">
          Your Name <span className="text-[#ba1a1a]">*</span>
        </label>
        <input
          id="name"
          className={inputClasses}
          placeholder="e.g. Ramesh Kumar / Dr. Sneha Reddy"
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
        />
        {errors.name && <p className={errorClasses}>{errors.name}</p>}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className={labelClasses} htmlFor="email">
            Your Email <span className="text-[#ba1a1a]">*</span>
          </label>
          <input
            id="email"
            type="email"
            className={inputClasses}
            placeholder="parent.name@domain.com"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
          />
          {errors.email && <p className={errorClasses}>{errors.email}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelClasses} htmlFor="phone">
            Phone Number <span className="text-[#ba1a1a]">*</span>
          </label>
          <input
            id="phone"
            className={inputClasses}
            placeholder="10-digit mobile number"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value.replace(/[^\d]/g, '').slice(0, 10))}
          />
          {errors.phone && <p className={errorClasses}>{errors.phone}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className={labelClasses} htmlFor="purpose">
          Purpose of Inquiry
        </label>
        <select
          id="purpose"
          className={inputClasses}
          value={form.purpose}
          onChange={(e) => update('purpose', e.target.value)}
        >
          {purposes.map((purpose) => (
            <option key={purpose} value={purpose}>
              {purpose}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className={labelClasses} htmlFor="message">
          Message <span className="text-[#ba1a1a]">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full rounded-sm bg-[#f0f3ff] p-3 text-sm text-brand placeholder:text-slate-400 outline-none ring-1 ring-transparent focus:ring-2 focus:ring-brand"
          placeholder="Write your questions regarding class grade, admission term, campus visits, or specific concerns..."
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
        />
        {errors.message && <p className={errorClasses}>{errors.message}</p>}
      </div>

      <label className="flex items-start gap-2">
        <input
          type="checkbox"
          className="mt-0.5 size-3.5 shrink-0 rounded-sm border-slate-400"
          checked={form.consent}
          onChange={(e) => update('consent', e.target.checked)}
        />
        <span className="text-xs text-slate-600">
          I agree to receive academic updates and communications from Vidya Peeth Schools,
          Karimnagar via SMS/Call/Email.
        </span>
      </label>
      {errors.consent && <p className={errorClasses}>{errors.consent}</p>}

      <button
        type="submit"
        className="mt-1 flex h-14 items-center justify-center gap-2 rounded-sm bg-accent font-display text-lg font-bold text-accent-dark shadow-sm transition-colors hover:bg-[color:var(--color-accent-dark)] hover:text-white"
      >
        SUBMIT MESSAGE <span aria-hidden>&rarr;</span>
      </button>
    </form>
  )
}
