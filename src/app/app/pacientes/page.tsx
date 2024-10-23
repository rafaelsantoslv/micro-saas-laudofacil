import PatientManagement from './_components/paciente-list'

export const metadata = {
  title: 'Pacientes',
}
export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center">
      <PatientManagement />
    </main>
  )
}
