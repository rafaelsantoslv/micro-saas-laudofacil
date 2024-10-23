'use client'

import { Edit, Plus, Search } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface Patient {
  id: number
  name: string
  age: number
  gender: string
  cpf: string
  address: string
  contact: string
}

export default function PatientSearch() {
  const [patients, setPatients] = useState<Patient[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // In a real application, you would fetch patients from an API
    // For this example, we'll use mock data
    const mockPatients: Patient[] = [
      {
        id: 1,
        name: 'John Doe',
        age: 30,
        gender: 'Masculino',
        cpf: '123.456.789-00',
        address: '123 Main St',
        contact: 'john@example.com',
      },
      {
        id: 2,
        name: 'Jane Smith',
        age: 25,
        gender: 'Feminino',
        cpf: '987.654.321-00',
        address: '456 Elm St',
        contact: 'jane@example.com',
      },
    ]
    setPatients(mockPatients)
  }, [])

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.cpf.includes(searchTerm),
  )

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Gerenciador de Pacientes</h1>

      <div className="mb-4 flex gap-4">
        <div className="relative flex-1">
          <Label htmlFor="search" className="sr-only">
            Search Patients
          </Label>
          <Input
            id="search"
            type="text"
            placeholder="Buscar pacientes por nome, CPF ou e-mail"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
        </div>

        <Link href="/app/pacientes/cadastrar" passHref>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Novo Paciente
          </Button>
        </Link>
      </div>

      <div className="space-y-4">
        {filteredPatients.map((patient) => (
          <Card key={patient.id}>
            <CardHeader>
              <CardTitle>{patient.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Idade:</strong> {patient.age}
              </p>
              <p>
                <strong>Genero:</strong> {patient.gender}
              </p>
              <p>
                <strong>CPF:</strong> {patient.cpf}
              </p>
              <p>
                <strong>Endereço:</strong> {patient.address}
              </p>
              <p>
                <strong>Contato:</strong> {patient.contact}
              </p>
              <Link href={`/app/pacientes/${patient.id}`} passHref>
                <Button variant="outline" className="mt-2">
                  <Edit className="mr-2 h-4 w-4" /> Detalhes Paciente
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
