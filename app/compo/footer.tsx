'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import BackToTop from './backToTop'
import ContactForm from './ContactForm'

const EMAIL = 'yugprajapati32@gmail.com'
const LINKEDIN_URL = 'https://www.linkedin.com/in/yug-prajapati-70524926b/'
const GITHUB_URL = 'https://github.com/YUGE0'
const FIGMA_URL = 'https://www.figma.com/@_yug'

export const icons = {
  mail: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  linkedin: (
    <svg width="18" height="18" viewBox="2 2 12 12" fill="currentColor" aria-hidden>
      <path d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z" />
    </svg>
  ),
  github: (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z" />
    </svg>
  ),
  figma: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  ),
  pin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
}

const contactInfo = [
  { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, icon: icons.mail, copy: EMAIL },
  { label: 'LinkedIn', value: 'linkedin.com/in/yug-prajapati', href: LINKEDIN_URL, icon: icons.linkedin, copy: LINKEDIN_URL },
  { label: 'GitHub', value: 'github.com/YUGE0', href: GITHUB_URL, icon: icons.github, copy: GITHUB_URL },
  { label: 'Location', value: 'Ahmedabad, Gujarat, India', icon: icons.pin },
]

export const socials = [
  { label: 'LinkedIn', href: LINKEDIN_URL, icon: icons.linkedin },
  { label: 'GitHub', href: GITHUB_URL, icon: icons.github },
  { label: 'Figma', href: FIGMA_URL, icon: icons.figma },
  { label: 'Email', href: `mailto:${EMAIL}`, icon: icons.mail },
]

const cardClass =
  'rounded-3xl border border-white/80 bg-white/70 p-6 shadow-[0_24px_60px_-32px_rgba(42,64,100,0.35)] backdrop-blur-sm sm:p-7'

function CardHeading({ index, children }: { index: string; children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-inter text-xs sm:text-xs">
      <span className="text-fcolor/50">{index}</span>
      <span className="h-px w-5 bg-fcolor/30" aria-hidden />
      <span className="font-semibold text-fcolor">{children}</span>
    </p>
  )
}

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
      className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-fcolor/40 transition hover:bg-fcolor/10 hover:text-fcolor"
    >
      {copied ? (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500" aria-hidden>
          <path d="M20 6 9 17l-5-5" />
        </svg>
      ) : (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect width="14" height="14" x="8" y="8" rx="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
      )}
    </button>
  )
}

export function ContactSection() {
  const reduceMotion = useReducedMotion()

  const reveal = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section id="contact" className="relative overflow-hidden pb-14 sm:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 15% 75%, rgba(91,168,245,0.22), transparent 60%), radial-gradient(ellipse 50% 40% at 85% 20%, rgba(91,168,245,0.12), transparent 60%), linear-gradient(180deg, #f4f8ff 0%, #eaf2fd 55%, #f4f8ff 100%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-8 sm:pt-24 lg:px-12">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-[1.1fr_1fr_0.9fr]">
          <motion.div className="relative md:col-span-2 lg:col-span-1 lg:min-h-[34rem] lg:pr-6" {...reveal(0)}>
            <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.28em] text-accent sm:text-xs">
              Let&apos;s work together
            </p>
            <h2 className="mt-4 font-satoshi text-5xl font-bold leading-[0.95] tracking-tight text-fcolor sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]">
              Let&apos;s{' '}
              <span className="bg-gradient-to-b from-accent to-[#3B7FD4] bg-clip-text text-transparent">Build</span>
              <br />
              Something
              <br />
              Great<span className="text-accent">.</span>
            </h2>
            <p className="mt-6 max-w-md font-inter text-sm leading-relaxed text-fcolor/70 sm:text-base">
              I&apos;m always open to discussing new opportunities, exciting projects or just a good
              conversation about design, development and ideas.
            </p>

            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-[25rem] -left-44 hidden h-[640px] w-[640px] [mask-image:linear-gradient(to_bottom,black_18%,transparent_38%)] lg:block"
            >
              <div className="hero-globe absolute inset-0 rounded-full bg-[radial-gradient(circle_at_60%_25%,rgba(160,205,255,0.55),rgba(91,168,245,0.25)_45%,transparent_70%)]" />
              <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 400 400" fill="none">
                <circle cx="200" cy="200" r="150" stroke="white" strokeWidth="0.8" />
                <ellipse cx="200" cy="200" rx="150" ry="55" stroke="white" strokeWidth="0.6" />
                <ellipse cx="200" cy="200" rx="150" ry="105" stroke="white" strokeWidth="0.5" />
                <ellipse cx="200" cy="200" rx="55" ry="150" stroke="white" strokeWidth="0.6" />
                <ellipse cx="200" cy="200" rx="105" ry="150" stroke="white" strokeWidth="0.5" />
                <path d="M235 120 Q 300 60 390 110" stroke="white" strokeWidth="0.8" strokeDasharray="3 4" />
                <circle cx="235" cy="120" r="4" fill="#5BA8F5" />
                <circle cx="300" cy="150" r="3.5" fill="#5BA8F5" />
                <circle cx="390" cy="110" r="3" fill="#5BA8F5" />
              </svg>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/80 bg-white/80 px-4 py-3 font-inter text-xs font-medium text-fcolor shadow-md shadow-fcolor/10 backdrop-blur-sm lg:absolute lg:bottom-10 lg:left-0 lg:mt-0">
              <span className="text-fcolor">{icons.pin}</span>
              Ahmedabad, Gujarat, India
            </div>
          </motion.div>

          <motion.div className={`${cardClass} flex flex-col`} {...reveal(0.1)}>
            <CardHeading index="01">Send a Message</CardHeading>
            <p className="mt-4 font-inter text-sm leading-relaxed text-fcolor/70 sm:text-sm">
              Have a project in mind or just want to say hi?
              <br />
              I&apos;ll get back to you as soon as possible.
            </p>
            <ContactForm />
          </motion.div>

          <div className="flex flex-col gap-5">
            <motion.div className={cardClass} {...reveal(0.2)}>
              <CardHeading index="02">Contact Info</CardHeading>
              <ul className="mt-3 divide-y divide-fcolor/10">
                {contactInfo.map((item) => {
                  const content = (
                    <>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-fcolor/[0.07] text-fcolor transition group-hover:bg-fcolor group-hover:text-white">
                        {item.icon}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-inter text-sm font-semibold text-fcolor">{item.label}</span>
                        <span className="block truncate font-inter text-xs text-fcolor/60">{item.value}</span>
                      </span>
                    </>
                  )

                  return (
                    <li key={item.label} className="flex items-center gap-2 py-3">
                      {item.href ? (
                        <Link
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          className="group flex min-w-0 flex-1 items-center gap-4"
                        >
                          {content}
                        </Link>
                      ) : (
                        <div className="flex min-w-0 flex-1 items-center gap-4">{content}</div>
                      )}
                      {item.copy && <CopyButton value={item.copy} label={item.label} />}
                    </li>
                  )
                })}
              </ul>
            </motion.div>

            <motion.div className={cardClass} {...reveal(0.3)}>
              <CardHeading index="03">Let&apos;s Connect</CardHeading>
              <p className="mt-3 font-inter text-sm text-fcolor/70 sm:text-sm">You can also find me on these platforms.</p>
              <div className="mt-4 grid grid-cols-4 gap-3">
                {socials.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    aria-label={social.label}
                    className="grid h-12 place-items-center rounded-xl border border-fcolor/10 bg-white text-fcolor transition hover:-translate-y-0.5 hover:border-fcolor hover:bg-fcolor hover:text-white"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
              <p className="mt-4 flex items-center gap-2 rounded-xl bg-[#eef4fd] px-4 py-2.5 font-inter text-xs text-fcolor/70 sm:text-xs">
                <span className="relative flex h-2 w-2" aria-hidden>
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
                  <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Usually replies within 24 hours
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Footer() {
  const pathname = usePathname()
  const showContact = pathname === '/'

  return (
    <footer id="site-footer" className={`relative ${showContact ? 'mt-10 sm:mt-16' : 'mt-6'}`}>
      {showContact && <ContactSection />}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className={`relative flex flex-col items-center gap-6 border-t border-fcolor/10 py-8 text-center sm:py-10 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-8 lg:text-left`}>
          <div className="lg:justify-self-start">
            <Link href="/" aria-label="Yug home" className="font-satoshi text-2xl font-black tracking-tight text-fcolor sm:text-3xl">
              Yug<span className="text-accent">.</span>
            </Link>
            <p className="mx-auto mt-2 max-w-[17rem] font-inter text-xs leading-relaxed text-fcolor/60 sm:text-xs lg:mx-0">
              Design. Develop. Ship.
              <br />
              Turning ideas into fast, beautiful and functional web experiences.
            </p>
          </div>
          <div id="footer-nav-slot" aria-hidden className="w-full sm:w-auto" />
          <div className="flex w-full items-center justify-between gap-4 sm:max-w-md lg:w-auto lg:justify-self-end lg:gap-6">
            <p className="whitespace-nowrap text-left font-inter text-xs leading-relaxed text-fcolor/60 sm:text-xs lg:border-l lg:border-fcolor/20 lg:pl-6">
              © {new Date().getFullYear()} Yug Prajapati
              <br />
              All rights reserved.
            </p>
            <BackToTop />
          </div>
        </div>
      </div>
    </footer>
  )
}
