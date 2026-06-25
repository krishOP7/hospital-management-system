import { useEffect, useState } from 'react'
import { getPatients } from '../services/api'
import { getDoctors } from '../services/api'
import { getAppointments } from '../services/api'
import { getBills } from '../services/api'

export default function Dashboard() {
  const [counts, setCounts] = useState({ patients: 0, doctors: 0, appointments: 0, bills: 0 })

  useEffect(() => {
    Promise.all([getPatients(), getDoctors(), getAppointments(), getBills()])
      .then(([p, d, a, b]) => {
        setCounts({
          patients: p.data.length,
          doctors: d.data.length,
          appointments: a.data.length,
          bills: b.data.length
        })
      })
  }, [])

  const cards = [
    { label: 'Total Patients', value: counts.patients, color: 'primary', icon: '🧑‍⚕️' },
    { label: 'Total Doctors', value: counts.doctors, color: 'success', icon: '👨‍⚕️' },
    { label: 'Appointments', value: counts.appointments, color: 'warning', icon: '📅' },
    { label: 'Bills', value: counts.bills, color: 'danger', icon: '💳' },
  ]

  return (
    <div>
      <h4 className="mb-4">Dashboard</h4>
      <div className="row g-4">
        {cards.map(card => (
          <div key={card.label} className="col-md-3">
            <div className={`card text-white bg-${card.color}`}>
              <div className="card-body text-center">
                <div style={{ fontSize: '2rem' }}>{card.icon}</div>
                <h5 className="card-title mt-2">{card.label}</h5>
                <h2 className="fw-bold">{card.value}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}