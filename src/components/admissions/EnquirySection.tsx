import SectionHeading from '../ui/SectionHeading'
import EnquiryForm from './EnquiryForm'

export default function EnquirySection() {
  return (
    <section className="bg-[#f0f3ff] px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-5">
          <SectionHeading
            eyebrow="Direct Admissions Desk"
            heading="Enquiry for Admission"
            description="Fill in your child's details to receive full admission guidelines, fee structure details, and scheduled visit dates."
          />

          <div className="flex flex-col gap-3 rounded-lg bg-brand p-6 text-white shadow-lg">
            <h3 className="font-display text-xl font-semibold">Institution Credentials</h3>
            {[
              ['CBSE Board Affiliation', 'No. 3630436'],
              ['Direct Admissions Line', '09346002121'],
              ['Official Desk Email', 'ahps5103@academicheights.in'],
              ['Grades Welcomed', 'Nursery through Grade XII'],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between border-t border-white/10 pt-2 text-sm first:border-0 first:pt-0">
                <span className="text-footer-muted">{label}</span>
                <span className="font-bold text-white">{value}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-3 rounded-lg bg-white p-4 shadow-[0_1px_1px_0_rgba(0,0,0,0.05)]">
            <span className="text-2xl" aria-hidden>
              &#10067;
            </span>
            <div>
              <h4 className="font-display text-lg font-semibold text-brand">Need Clarification?</h4>
              <p className="text-sm text-slate-600">
                Our admission counselors are available Monday through Saturday from 8:00 AM to
                2:00 PM for one-on-one parent assistance.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <EnquiryForm />
        </div>
      </div>
    </section>
  )
}
