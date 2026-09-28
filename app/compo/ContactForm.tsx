'use client'

import { useState, type FormEvent } from 'react'

const CONTACT_EMAIL = 'yugprajapati32@gmail.com'

const fieldClass =
  'w-full rounded-xl border border-fcolor/10 bg-[#eef4fd] px-4 py-3 font-inter text-sm text-fcolor placeholder:text-fcolor/35 transition focus:border-fcolor/40 focus:bg-white focus:outline-none focus:ring-4 focus:ring-fcolor/10'

const labelClass = 'mb-1.5 block font-inter text-xs font-semibold text-fcolor'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const subject = String(data.get('subject') ?? '').trim() || `Hello from ${name}`
    const message = String(data.get('message') ?? '').trim()

    const body = `${message}\n\n— ${name} (${email})`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name
          </label>
          <input id="contact-name" name="name" required autoComplete="name" placeholder="Your name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@domain.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className={labelClass}>
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          placeholder="Project inquiry, Collaboration, etc."
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Tell me a bit about your project..."
          className={`${fieldClass} resize-y`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          className="group inline-flex items-center gap-4 rounded-full bg-fcolor py-1.5 pl-6 pr-1.5 font-inter text-sm font-semibold text-white transition hover:bg-fcolor/90 active:scale-[0.98]"
        >
          Send Message
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-fcolor transition-transform group-hover:translate-x-0.5">
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
        {sent && (
          <p role="status" className="font-inter text-xs text-fcolor/60 sm:text-xs">
            Your email app should open with the message ready to send.
          </p>
        )}
      </div>
    </form>
  )
}
