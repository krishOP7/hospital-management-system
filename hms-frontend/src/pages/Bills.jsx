import { useEffect, useState } from 'react'
import { getAppointments, addAppointment, deleteAppointment, getPatients, getDoctors } from '../services/api'

const empty = { patient: { id: '' }, doctor: { id: '' }, appointmentDate: '', appointmentTime: '', status: 'SCHEDULED', notes: '' }

export default function Appointments() {
  const [appointments, setAppointments] = useState([])
  const [patients, setPatients] = useState([])
  const [doctors, setDoctors] = useState([])
  const [form, setForm] = useState(empty)

  useEffect(() => { fetchAll() }, [])

  const fetchAll = async () => {
    const [a, p, d] = await Promise.all([getAppointments(), getPatients(), getDoctors()])
    setAppointments(a.data)
    setPatients(p.data)
    setDoctors(d.data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addAppointment(form)
    setForm(empty)
    fetchAll()
  }

  return (
    <div>
      <h4 className="mb-3">Appointments</h4>
      <form onSubmit={handleSubmit} className="row g-2 mb-4">
        <div className="col-md-2">
          <select className="form-select" value={form.patient.id}
            onChange={e => setForm({ ...form, patient: { id: e.target.value } })}>
            <option value="">Select Patient</option>
            {patients.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
        </div>
        <div className="col-md-2">
          <select className="form-select" value={form.doctor.id}
            onChange={e => setForm({ ...form, doctor: { id: e.target.value } })}>
            <option value="">Select Doctor</option>
            {doctors.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
          </select>
        </div>
        <div className="col-md-2">
          <input type="date" className="form-control" value={form.appointmentDate}
            onChange={e => setForm({ ...form, appointmentDate: e.target.value })} />
        </div>
        <div className="col-md-2">
          <input type="time" className="form-control" value={form.appointmentTime}
            onChange={e => setForm({ ...form, appointmentTime: e.target.value })} />
        </div>
        <div className="col-md-2">
          <input className="form-control" placeholder="Notes" value={form.notes}
            onChange={e => setForm({ ...form, notes: e.target.value })} />
        </div>
        <div className="col-md-2">
          <button className="btn btn-warning w-100" type="submit">Book</button>
        </div>
      </form>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr><th>ID</th><th>Patient</th><th>Doctor</th><th>Date</th><th>Time</th><th>Status</th><th>Action</th></tr>
        </thead>
        <tbody>
          {appointments.map(a => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.patient?.name}</td>
              <td>{a.doctor?.name}</td>
              <td>{a.appointmentDate}</td>
              <td>{a.appointmentTime}</td>
              <td><span className="badge bg-success">{a.status}</span></td>
              <td>
                <button className="btn btn-sm btn-danger"
                  onClick={() => { deleteAppointment(a.id); fetchAll() }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}