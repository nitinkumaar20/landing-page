'use client'
import React, { useState } from 'react'

type Props = { universityName: string, onSuccess?: ()=>void }

export default function LeadForm({ universityName, onSuccess }: Props) {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const fd = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(fd.entries())
    const phone = (data.phone as string) || ''
    if(!/^\d{10}$/.test(phone)) {
      setMessage('Phone must be 10 digits')
      return
    }
    setLoading(true); setMessage(null)
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, university: universityName })
      })
      const j = await res.json()
      if(res.ok) {
        setMessage('Lead submitted — thank you');
        (e.target as HTMLFormElement).reset()
        onSuccess?.()
      } else {
        setMessage(j.error || 'Submission failed')
      }
    } catch (err) {
      setMessage('Network error')
    } finally { setLoading(false) }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input name="fullName" placeholder="Full name" required className="p-2 border rounded" />
        <input name="email" type="email" placeholder="Email" required className="p-2 border rounded" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input name="phone" placeholder="10-digit phone" required className="p-2 border rounded" />
        <select name="state" required className="p-2 border rounded">
          <option value="">Select state</option>
          <option>Uttar Pradesh</option><option>Uttarakhand</option><option>Maharashtra</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <select name="course" required className="p-2 border rounded">
          <option value="">Select course</option>
          <option>B.Tech</option><option>MBA</option><option>BSc</option>
          <option>BCA</option><option>MCA</option><option>BBA</option>
        </select>
        <select name="intake" required className="p-2 border rounded">
          <option>2025</option><option>2026</option><option>2027</option>
        </select>
      </div>
      <div>
        <label className="text-sm"><input type="checkbox" name="consent" required/> I agree to be contacted regarding admissions.</label>
      </div>
      <div className="flex items-center justify-end gap-2">
        <button type="submit" className="btn btn-primary">{loading ? 'Submitting...' : 'Submit'}</button>
      </div>
      {message && <p className="text-sm mt-2">{message}</p>}
    </form>
  )
}
