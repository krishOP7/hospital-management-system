import { useEffect, useState } from 'react'
import { getPatients, addPatient, deletePatient } from '../services/api'

const empty = { name: '', age: '', gender: '', phone: '', email: '', address: '' }

export default function Patients() {
  const [patients, setPatients] = useState([])
  const [form, setForm] = useState(empty)

  useEffect(() => { fetch() }, [])

  const fetch = async () => {
    const res = await getPatients()
    setPatients(res.data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addPatient(form)
    setForm(empty)
    fetch()
  }

  return (
    <div>
      <h4 className="mb-3">Patient Management</h4>
      <form onSubmit={handleSubmit} className="row g-2 mb-4">
        {['name','age','gender','phone','email','address'].map(field => (
          <div className="col-md-2" key={field}>
            <input className="form-control" placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={e => setForm({ ...form, [field]: e.target.value })} />
          </div>
        ))}
        <div className="col-md-2">
          <button className="btn btn-primary w-100" type="submit">Add Patient</button>
        </div>
      </form>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr><th>ID</th><th>Name</th><th>Age</th><th>Gender</th><th>Phone</th><th>Email</th><th>Action</th></tr>
        </thead>
        <tbody>
          {patients.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td><td>{p.name}</td><td>{p.age}</td>
              <td>{p.gender}</td><td>{p.phone}</td><td>{p.email}</td>
              <td>
                <button className="btn btn-sm btn-danger"
                  onClick={() => { deletePatient(p.id); fetch() }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}