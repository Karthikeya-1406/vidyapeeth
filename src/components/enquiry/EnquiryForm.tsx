import { useState, type FormEvent } from 'react'

const grades = ['Nursery', 'LKG', 'UKG', 'Grade I–V', 'Grade VI–VIII', 'Grade IX–X', 'Grade XI–XII']
const modes = ['Campus Visit', 'Phone Call', 'Virtual Meet'] as const

interface FormState {
  parentName: string
  studentName: string
  grade: string
  phone: string
  email: string
  state: string
  city: string
  address: string
  mode: (typeof modes)[number]
  consent: boolean
}

const initialState: FormState = {
  parentName: '',
  studentName: '',
  grade: '',
  phone: '',
  email: '',
  state: 'Telangana',
  city: 'Karimnagar',
  address: '',
  mode: 'Campus Visit',
  consent: false,
}

const inputClasses =
  'h-11 w-full rounded-sm bg-[#f0f3ff] px-3 text-sm text-brand placeholder:text-slate-400 outline-none ring-1 ring-transparent focus:ring-2 focus:ring-brand'
const labelClasses = 'font-sans text-sm font-semibold text-brand'
const errorClasses = 'text-xs font-semibold text-[#ba1a1a]'

export default function EnquiryForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.parentName.trim()) next.parentName = 'Parent/Guardian name is required.'
    if (!form.studentName.trim()) next.studentName = 'Student name is required.'
    if (!form.grade) next.grade = 'Please select a target grade.'
    if (!/^\d{10}$/.test(form.phone.trim())) next.phone = 'Enter a valid 10-digit mobile number.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = 'Enter a valid email address.'
    if (!form.city.trim()) next.city = 'City/Town is required.'
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
      <div className="flex h-full min-h-[500px] flex-col items-center justify-center gap-3 rounded-2xl bg-white p-10 text-center shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]">
        <span className="flex size-14 items-center justify-center rounded-full bg-accent/30 text-3xl">
          &#10003;
        </span>
        <h3 className="font-display text-2xl font-bold text-brand">Enquiry Submitted</h3>
        <p className="max-w-sm text-sm text-slate-600">
          Thank you, {form.parentName.split(' ')[0]}. An admissions dean will contact you within 2
          working hours to discuss the next steps for {form.studentName.split(' ')[0]}.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initialState)
            setSubmitted(false)
          }}
          className="mt-2 font-sans text-sm font-semibold text-brand underline"
        >
          Submit another enquiry
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative flex flex-col gap-5 overflow-hidden rounded-2xl bg-white p-8 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] sm:p-12"
    >
      <span
        className="absolute inset-x-8 top-0 h-1.5 rounded-b bg-gradient-to-r from-brand via-accent to-brand"
        aria-hidden
      />
      <div className="flex items-center justify-between gap-2">
        <h2 className="font-display text-2xl font-bold text-brand">Fast-Track Admission Enquiry</h2>
        <span className="shrink-0 rounded-full bg-[#e7eeff] px-2 py-0.5 text-xs font-medium text-brand">
          Session 2025&ndash;26
        </span>
      </div>
      <p className="-mt-3 text-sm text-slate-600">
        Please share your details below. An admissions dean will contact you within 2 working
        hours.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className={labelClasses} htmlFor="parentName">
            Parent / Guardian Name <span className="text-[#ba1a1a]">*</span>
          </label>
          <input
            id="parentName"
            className={inputClasses}
            placeholder="e.g. Ramesh Chandra"
            value={form.parentName}
            onChange={(e) => update('parentName', e.target.value)}
          />
          {errors.parentName && <p className={errorClasses}>{errors.parentName}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelClasses} htmlFor="studentName">
            Student Name <span className="text-[#ba1a1a]">*</span>
          </label>
          <input
            id="studentName"
            className={inputClasses}
            placeholder="e.g. Aarav Chandra"
            value={form.studentName}
            onChange={(e) => update('studentName', e.target.value)}
          />
          {errors.studentName && <p className={errorClasses}>{errors.studentName}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className={labelClasses} htmlFor="grade">
            Admission Sought For <span className="text-[#ba1a1a]">*</span>
          </label>
          <select
            id="grade"
            className={inputClasses}
            value={form.grade}
            onChange={(e) => update('grade', e.target.value)}
          >
            <option value="">Select target grade</option>
            {grades.map((grade) => (
              <option key={grade} value={grade}>
                {grade}
              </option>
            ))}
          </select>
          {errors.grade && <p className={errorClasses}>{errors.grade}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelClasses} htmlFor="phone">
            Primary Mobile Number <span className="text-[#ba1a1a]">*</span>
          </label>
          <div className="flex h-11 overflow-hidden rounded-sm ring-1 ring-transparent focus-within:ring-2 focus-within:ring-brand">
            <span className="flex items-center bg-[#e7eeff] px-3 text-sm font-semibold text-slate-500">
              +91
            </span>
            <input
              id="phone"
              className="h-full w-full bg-[#f0f3ff] px-3 text-sm text-brand placeholder:text-slate-400 outline-none"
              placeholder="98765 43210"
              value={form.phone}
              onChange={(e) => update('phone', e.target.value.replace(/[^\d]/g, '').slice(0, 10))}
            />
          </div>
          {errors.phone && <p className={errorClasses}>{errors.phone}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className={labelClasses} htmlFor="email">
          Email Address <span className="text-[#ba1a1a]">*</span>
        </label>
        <input
          id="email"
          type="email"
          className={inputClasses}
          placeholder="parent.name@example.com"
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
        />
        {errors.email && <p className={errorClasses}>{errors.email}</p>}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className={labelClasses} htmlFor="state">
            State <span className="text-[#ba1a1a]">*</span>
          </label>
          <input id="state" className={inputClasses} value={form.state} onChange={(e) => update('state', e.target.value)} />
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelClasses} htmlFor="city">
            City / Town <span className="text-[#ba1a1a]">*</span>
          </label>
          <input id="city" className={inputClasses} value={form.city} onChange={(e) => update('city', e.target.value)} />
          {errors.city && <p className={errorClasses}>{errors.city}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className={labelClasses} htmlFor="address">
          Residential Address / Locality
        </label>
        <input
          id="address"
          className={inputClasses}
          placeholder="Street / Colony / Landmark (e.g. Jyothinagar, Back Side Lane District Court)"
          value={form.address}
          onChange={(e) => update('address', e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className={labelClasses}>Preferred Mode of Consultation</span>
        <div className="grid grid-cols-3 gap-2">
          {modes.map((mode) => (
            <label
              key={mode}
              className={`flex items-center gap-2 rounded-sm p-2.5 text-sm font-medium ${
                form.mode === mode ? 'bg-[#e7eeff] text-brand' : 'bg-[#f0f3ff] text-brand'
              }`}
            >
              <input
                type="radio"
                name="mode"
                className="size-3.5 accent-brand"
                checked={form.mode === mode}
                onChange={() => update('mode', mode)}
              />
              {mode}
            </label>
          ))}
        </div>
      </div>

      <label className="flex items-start gap-2 pt-1">
        <input
          type="checkbox"
          className="mt-0.5 size-3.5 shrink-0 rounded-sm border-slate-400"
          checked={form.consent}
          onChange={(e) => update('consent', e.target.checked)}
        />
        <span className="text-xs text-slate-600">
          I hereby consent to receive educational counseling calls, WhatsApp updates, and
          admission notices from Vidya Peeth Schools. Your information remains strictly
          confidential.
        </span>
      </label>
      {errors.consent && <p className={errorClasses}>{errors.consent}</p>}

      <button
        type="submit"
        className="flex h-14 items-center justify-center gap-2 rounded-sm bg-accent font-display text-lg font-bold text-accent-dark shadow-sm transition-colors hover:bg-[color:var(--color-accent-dark)] hover:text-white"
      >
        SUBMIT ENQUIRY <span aria-hidden>&rarr;</span>
      </button>

      <p className="flex items-center justify-center gap-1 text-xs text-slate-500">
        <span aria-hidden>🔒</span> 256-bit encrypted parent portal registration &bull; Zero spam
        pledge
      </p>
    </form>
  )
}
