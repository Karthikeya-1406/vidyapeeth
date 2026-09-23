import { useState, type FormEvent } from 'react'

const grades = ['Nursery', 'LKG', 'UKG', 'Grade I–V', 'Grade VI–VIII', 'Grade IX–X', 'Grade XI–XII']
const states = ['Telangana', 'Andhra Pradesh', 'Karnataka', 'Maharashtra', 'Other']

interface FormState {
  parentName: string
  studentName: string
  grade: string
  phone: string
  email: string
  state: string
  city: string
  address: string
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
  consent: false,
}

const inputClasses =
  'h-11 w-full rounded-sm bg-[#f9f9ff] px-3 text-sm text-brand placeholder:text-slate-400 outline-none ring-1 ring-transparent focus:ring-2 focus:ring-brand'
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
    if (!form.grade) next.grade = 'Please select a grade.'
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
      <div className="flex h-full flex-col items-center justify-center gap-3 rounded-lg bg-white p-10 text-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]">
        <span className="flex size-14 items-center justify-center rounded-full bg-accent/30 text-3xl">
          &#10003;
        </span>
        <h3 className="font-display text-2xl font-bold text-brand">Enquiry Received</h3>
        <p className="max-w-sm text-sm text-slate-600">
          Thank you, {form.parentName.split(' ')[0]}. Our admissions desk will reach out to{' '}
          {form.phone} within one business day with guidelines and visit dates.
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
      className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] sm:p-10"
    >
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
            <option value="">Select class or grade</option>
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
            Phone Number (WhatsApp) <span className="text-[#ba1a1a]">*</span>
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

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className={labelClasses} htmlFor="email">
            Email Address <span className="text-[#ba1a1a]">*</span>
          </label>
          <input
            id="email"
            type="email"
            className={inputClasses}
            placeholder="e.g. parent@example.com"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
          />
          {errors.email && <p className={errorClasses}>{errors.email}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelClasses} htmlFor="state">
            State <span className="text-[#ba1a1a]">*</span>
          </label>
          <select id="state" className={inputClasses} value={form.state} onChange={(e) => update('state', e.target.value)}>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className={labelClasses} htmlFor="city">
            City / Town <span className="text-[#ba1a1a]">*</span>
          </label>
          <input id="city" className={inputClasses} value={form.city} onChange={(e) => update('city', e.target.value)} />
          {errors.city && <p className={errorClasses}>{errors.city}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelClasses} htmlFor="address">
            Locality / Residential Address
          </label>
          <input
            id="address"
            className={inputClasses}
            placeholder="e.g. Jyothinagar, Collectorate Area"
            value={form.address}
            onChange={(e) => update('address', e.target.value)}
          />
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
          I authorize Vidya Peeth Schools to contact me via phone, WhatsApp, or email regarding
          admission procedures, fee schedules, and campus walkthrough appointments.
        </span>
      </label>
      {errors.consent && <p className={errorClasses}>{errors.consent}</p>}

      <button
        type="submit"
        className="mt-2 flex h-12 items-center justify-center gap-1 rounded-sm bg-accent font-sans text-sm font-bold tracking-[0.35px] text-[#705600] shadow-sm transition-colors hover:bg-accent-dark"
      >
        SUBMIT ENQUIRY
      </button>
    </form>
  )
}
