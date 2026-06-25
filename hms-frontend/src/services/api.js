import axios from 'axios'

const BASE = 'http://localhost:8080/api'

// Patients
export const getPatients = () => axios.get(`${BASE}/patients`)
export const addPatient = (data) => axios.post(`${BASE}/patients`, data)
export const updatePatient = (id, data) => axios.put(`${BASE}/patients/${id}`, data)
export const deletePatient = (id) => axios.delete(`${BASE}/patients/${id}`)

// Doctors
export const getDoctors = () => axios.get(`${BASE}/doctors`)
export const addDoctor = (data) => axios.post(`${BASE}/doctors`, data)
export const updateDoctor = (id, data) => axios.put(`${BASE}/doctors/${id}`, data)
export const deleteDoctor = (id) => axios.delete(`${BASE}/doctors/${id}`)

// Appointments
export const getAppointments = () => axios.get(`${BASE}/appointments`)
export const addAppointment = (data) => axios.post(`${BASE}/appointments`, data)
export const updateAppointment = (id, data) => axios.put(`${BASE}/appointments/${id}`, data)
export const deleteAppointment = (id) => axios.delete(`${BASE}/appointments/${id}`)

// Bills
export const getBills = () => axios.get(`${BASE}/bills`)
export const addBill = (data) => axios.post(`${BASE}/bills`, data)
export const updateBill = (id, data) => axios.put(`${BASE}/bills/${id}`, data)
export const deleteBill = (id) => axios.delete(`${BASE}/bills/${id}`)