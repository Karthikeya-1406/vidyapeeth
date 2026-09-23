import { useState, type ChangeEvent, type FormEvent } from 'react'

const roles = [
  'Primary Wing Teacher',
  'Middle School Subject Teacher',
  'Senior Secondary Subject Teacher',
  'Physical Education Instructor',
  'Counsellor / Special Educator',
  'Administrative Staff',
]

interface FormState {
  name: string
  email: string
  phone: string
  role: string
  message: string
}

const initialState: FormState = { name: '', email: '', phone: '', role: '', message: '' }

const inputClasses =
  'h-11 w-full rounded-sm bg-white px-3 text-sm text-brand placeholder:text-slate-400 outline-none ring-1 ring-transparent focus:ring-2 focus:ring-brand'
const labelClasses = 'text-xs font-semibold tracking-[0.48px] text-[#101c2f]'
const errorClasses = 'text-xs font-semibold text-[#ba1a1a]'

export default function ResumeForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    setResumeFile(e.target.files?.[0] ?? null)
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = 'Full name is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = 'Enter a valid email address.'
    if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ''))) next.phone = 'Enter a valid 10-digit phone number.'
    if (!form.role) next.role = 'Please select a subject area or role.'
    if (form.message.trim().length < 20) next.message = 'Please share at least a couple of sentences about your background.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 rounded-lg bg-white p-10 text-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]">
        <span className="flex size-14 items-center justify-center rounded-full bg-accent/30 text-3xl">✓</span>
        <h3 className="font-display text-2xl font-bold text-brand">Expression of Interest Received</h3>
        <p className="max-w-sm text-sm text-slate-600">
          Thank you, {form.name.split(' ')[0]}. Our academic council will review your dossier and reach out at{' '}
          {form.email} if your profile matches an upcoming opening.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initialState)
            setResumeFile(null)
            setSubmitted(false)
          }}
          className="mt-2 text-sm font-semibold text-brand underline"
        >
          Submit another dossier
        </button>
      </div>
    )
  }

  return (
    <form
      id="resume-form"
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-4 rounded-lg bg-[#f0f3ff] p-6 shadow-[0_1px_1px_0_rgba(0,0,0,0.05)] sm:p-10"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className={labelClasses} htmlFor="name">
            Full Name *
          </label>
          <input
            id="name"
            className={inputClasses}
            placeholder="e.g. Dr. Rajeshwari Sharma"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
          />
          {errors.name && <p className={errorClasses}>{errors.name}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelClasses} htmlFor="email">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            className={inputClasses}
            placeholder="e.g. teacher.name@domain.com"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
          />
          {errors.email && <p className={errorClasses}>{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className={labelClasses} htmlFor="phone">
            Phone Number *
          </label>
          <input
            id="phone"
            className={inputClasses}
            placeholder="e.g. 98765 43210"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value.replace(/[^\d]/g, '').slice(0, 10))}
          />
          {errors.phone && <p className={errorClasses}>{errors.phone}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelClasses} htmlFor="role">
            Subject Area / Role of Interest *
          </label>
          <select id="role" className={inputClasses} value={form.role} onChange={(e) => update('role', e.target.value)}>
            <option value="">Select Area of Specialization</option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
          {errors.role && <p className={errorClasses}>{errors.role}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className={labelClasses} htmlFor="message">
          Brief Professional Background &amp; Teaching Philosophy *
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full resize-none rounded-sm bg-white px-3 py-2 text-sm text-brand placeholder:text-slate-400 outline-none ring-1 ring-transparent focus:ring-2 focus:ring-brand"
          placeholder="Mention your academic qualifications (e.g. B.Ed, M.Sc), years of classroom experience, key teaching methodologies, and what inspires your pedagogy."
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
        />
        {errors.message && <p className={errorClasses}>{errors.message}</p>}
      </div>

      <label
        htmlFor="resume"
        className="flex cursor-pointer items-center gap-2 rounded-sm bg-[#e7eeff] p-2 text-left"
      >
        <span aria-hidden>📎</span>
        <span className="flex-1">
          <span className="block text-xs font-medium text-brand">
            {resumeFile ? resumeFile.name : 'Resume / Curriculum Vitae (optional)'}
          </span>
          <span className="block text-xs text-slate-600">
            Shortlisted applicants will be invited to submit certified transcripts and recommendation portfolios directly.
          </span>
        </span>
        <input id="resume" type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFile} />
      </label>

      <button
        type="submit"
        className="mt-2 flex h-12 items-center justify-center gap-1 rounded-sm bg-accent font-sans text-sm font-bold tracking-[0.35px] text-[#705600] shadow-sm transition-colors hover:bg-accent-dark"
      >
        SUBMIT EXPRESSION OF INTEREST
      </button>
    </form>
  )
}
