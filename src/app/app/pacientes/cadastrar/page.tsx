'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

interface Patient {
  id: number
  name: string
  age: number
  gender: string
  cpf: string
  address: string
  contact: string
  medicalHistory: string
  preExistingConditions: string
  documents: File[]
}

export default function PatientRegistration() {
  const router = useRouter()
  const [newPatient, setNewPatient] = useState<Omit<Patient, 'id'>>({
    name: '',
    age: 0,
    gender: '',
    cpf: '',
    address: '',
    contact: '',
    medicalHistory: '',
    preExistingConditions: '',
    documents: [],
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setNewPatient((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setNewPatient((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setNewPatient((prev) => ({
        ...prev,
        documents: Array.from(e.target.files || []),
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your API
    console.log('Submitting patient data:', newPatient)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // Redirect to search page after successful submission
    router.push('/patient-search')
  }

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="container mx-auto p-4">
        <Link href="/app/pacientes" passHref>
          <Button variant="outline" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
          </Button>
        </Link>

        <h1 className="mb-4 text-2xl font-bold">Cadastrar Novo Paciente</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                name="name"
                value={newPatient.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="age">Idade</Label>
              <Input
                id="age"
                name="age"
                type="number"
                value={newPatient.age}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="gender">Genero</Label>
              <Select
                name="gender"
                value={newPatient.gender}
                onValueChange={(value) => handleSelectChange('gender', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o Genêro" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Masculino</SelectItem>
                  <SelectItem value="female">Feminino</SelectItem>
                  <SelectItem value="other">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="cpf">CPF</Label>
              <Input
                id="cpf"
                name="cpf"
                value={newPatient.cpf}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="address">Endereço</Label>
              <Input
                id="address"
                name="address"
                value={newPatient.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="contact">Contato</Label>
              <Input
                id="contact"
                name="contact"
                value={newPatient.contact}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="medicalHistory">Histórico Médico</Label>
              <Textarea
                id="medicalHistory"
                name="medicalHistory"
                value={newPatient.medicalHistory}
                onChange={handleInputChange}
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="preExistingConditions">
                Condições pré-existentes
              </Label>
              <Textarea
                id="preExistingConditions"
                name="preExistingConditions"
                value={newPatient.preExistingConditions}
                onChange={handleInputChange}
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="documents">Upload de documentos</Label>
              <Input
                id="documents"
                type="file"
                multiple
                onChange={handleFileChange}
                className="cursor-pointer"
              />
            </div>
          </div>
          <Button type="submit">Cadastrar Paciente</Button>
        </form>
      </div>
    </main>
  )
}
