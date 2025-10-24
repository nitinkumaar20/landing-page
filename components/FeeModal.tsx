'use client'
import React, { useEffect, useState } from 'react'

type Course = { name: string, fee: string }

export default function FeeModal({ uniName, onClose }: { uniName: string, onClose: ()=>void }) {
  const [courses, setCourses] = useState<Course[] | null>(null)
  const [err, setErr] = useState<string | null>(null)

  useEffect(()=>{
    let mounted = true
    fetch('/api/universities').then(r=>r.json()).then((data)=>{
      if(!mounted) return
      const u = data.find((x: any)=> x.name === uniName)
      if(u) setCourses(u.courses)
      else setErr('No data found')
    }).catch(()=> setErr('Unable to load fees'))
    return ()=>{ mounted = false }
  }, [uniName])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded p-4 w-full max-w-lg">
        <h3 className="text-lg font-semibold">Course-wise Fees</h3>
        <div className="mt-3">
          {err && <p className="text-sm text-red-600">{err}</p>}
          {!err && !courses && <p>Loading...</p>}
          {courses && <ul className="space-y-2">{courses.map(c=> <li key={c.name}><strong>{c.name}</strong>: {c.fee}</li>)}</ul>}
        </div>
        <div className="mt-4 text-right">
          <button onClick={onClose} className="btn btn-outline">Close</button>
        </div>
      </div>
    </div>
  )
}
