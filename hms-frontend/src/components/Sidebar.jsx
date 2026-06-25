import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  const links = [
    { to: '/', label: '📊 Dashboard' },
    { to: '/patients', label: '🧑‍⚕️ Patients' },
    { to: '/doctors', label: '👨‍⚕️ Doctors' },
    { to: '/appointments', label: '📅 Appointments' },
    { to: '/bills', label: '💳 Billing' },
  ]

  return (
    <div className="d-flex flex-column bg-dark text-white"
      style={{ width: '220px', minHeight: '100vh', padding: '20px 0' }}>
      <div className="text-center fw-bold fs-5 mb-4 text-primary">HMS</div>
      {links.map(link => (
        <NavLink key={link.to} to={link.to}
          className={({ isActive }) =>
            `px-4 py-2 text-decoration-none ${isActive ? 'bg-primary text-white' : 'text-white-50'}`
          }>
          {link.label}
        </NavLink>
      ))}
    </div>
  )
}