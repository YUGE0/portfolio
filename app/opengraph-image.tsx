import { ImageResponse } from 'next/og'
import { JOB_TITLE, SITE_NAME } from './site'

export const alt = `${SITE_NAME} | ${JOB_TITLE}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          color: '#2a4064',
          background:
            'radial-gradient(ellipse 60% 70% at 85% 30%, rgba(91,168,245,0.45), transparent 70%), linear-gradient(135deg, #ffffff 0%, #f3f8ff 45%, #dde9fb 100%)',
        }}
      >
        <div style={{ display: 'flex', fontSize: 28, letterSpacing: 8, textTransform: 'uppercase', opacity: 0.55 }}>
          Design. Develop. Ship.
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 120, fontWeight: 900, letterSpacing: -4, lineHeight: 1 }}>
            {SITE_NAME}
            <span style={{ color: '#5BA8F5' }}>.</span>
          </div>
          <div style={{ display: 'flex', marginTop: 24, fontSize: 44, fontWeight: 700, color: '#4a8fe8' }}>{JOB_TITLE}</div>
        </div>
        <div style={{ display: 'flex', fontSize: 30, opacity: 0.7 }}>
          React · Next.js · TypeScript · Tailwind CSS · yugprajapati.space
        </div>
      </div>
    ),
    size
  )
}
