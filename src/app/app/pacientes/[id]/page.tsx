'use client'

import { Edit, FileText, Plus, Upload } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Textarea } from '@/components/ui/textarea'

export default function PatientDetails() {
  const [patientId, setPatientId] = useState('12345') // Placeholder for patient ID from URL
  const [patient, setPatient] = useState({
    name: 'John Doe',
    age: 35,
    gender: 'Masculino',
    cpf: '123.456.789-00',
    address: '123 Main St, Anytown, AN 12345',
    contact: '+1 (48) 48 9 88228714',
    lastMedicalRecord: 'Paciente utiliza antibioticos constantemente',
    preExistingConditions: ['Asma', 'Hipertensão'],
  })
  const [reports, setReports] = useState([
    { id: 1, date: '2023-05-15', title: 'Exame anual' },
    { id: 2, date: '2023-03-10', title: 'Tratamento para garganta' },
    { id: 3, date: '2023-01-22', title: 'Tratamento de gripe' },
  ])

  const handleNewMedicalRecord = () => {
    // Implement new medical record logic
    console.log('New medical record')
  }

  const handleEditConditions = () => {
    // Implement edit conditions logic
    console.log('Edit conditions')
  }

  const handleUploadDocument = () => {
    // Implement document upload logic
    console.log('Upload document')
  }

  const handleNewReport = () => {
    // Implement new report logic
    console.log('New report')
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Detalhes Paciente</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="space-y-4 md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Informação Pessoal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" value={patient.name} readOnly />
                </div>
                <div>
                  <Label htmlFor="age">Idade</Label>
                  <Input id="age" value={patient.age} readOnly />
                </div>
                <div>
                  <Label htmlFor="gender">Genêro</Label>
                  <Input id="gender" value={patient.gender} readOnly />
                </div>
                <div>
                  <Label htmlFor="cpf">CPF</Label>
                  <Input id="cpf" value={patient.cpf} readOnly />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="address">Endereço</Label>
                  <Input id="address" value={patient.address} readOnly />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="contact">Contato</Label>
                  <Input id="contact" value={patient.contact} readOnly />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Último Registro Medico</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={patient.lastMedicalRecord}
                readOnly
                className="min-h-[100px]"
              />
              <Button onClick={handleNewMedicalRecord} className="mt-4">
                <Plus className="mr-2 h-4 w-4" /> Novo Registro Médico
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Condições pré-existentes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="mb-4 list-disc pl-4">
                {patient.preExistingConditions.map((condition, index) => (
                  <li key={index}>{condition}</li>
                ))}
              </ul>
              <Button onClick={handleEditConditions}>
                <Edit className="mr-2 h-4 w-4" /> Editar condições
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Documentos</CardTitle>
            </CardHeader>
            <CardContent>
              <Button onClick={handleUploadDocument}>
                <Upload className="mr-2 h-4 w-4" /> Upload Documento
              </Button>
            </CardContent>
          </Card>

          <Button onClick={handleNewReport}>
            <FileText className="mr-2 h-4 w-4" /> Novo Laudo
          </Button>
        </div>

        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Últimos Laudos</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[calc(100vh-200px)]">
                {reports.map((report) => (
                  <div key={report.id} className="mb-4 rounded border p-4">
                    <h3 className="font-semibold">{report.title}</h3>
                    <p className="text-sm text-gray-500">{report.date}</p>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
