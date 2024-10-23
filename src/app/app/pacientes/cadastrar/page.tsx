'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

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

// Definindo o esquema de validação usando Zod
const patientSchema = z.object({
  name: z.string().nonempty('Nome é obrigatório'),
  age: z.number().min(0, 'Idade deve ser um número positivo'),
  gender: z
    .enum(['male', 'female', 'other'])
    .refine((value) => value !== undefined, {
      message: 'Selecione um gênero',
    }),
  cpf: z.string().regex(/^\d{11}$/, 'CPF inválido, deve ter 11 dígitos'),
  address: z.string().nonempty('Endereço é obrigatório'),
  contact: z.string().nonempty('Contato é obrigatório'),
  medicalHistory: z.string().optional(),
  preExistingConditions: z.string().optional(),
  documents: z.any().optional(),
})

type Patient = z.infer<typeof patientSchema>

export default function PatientRegistration() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Patient>({
    resolver: zodResolver(patientSchema), // Integração com Zod para validação
  })

  const onSubmit = async (data: Patient) => {
    console.log('Submitting patient data:', data)
    await new Promise((resolve) => setTimeout(resolve, 500))
    toast.success('Paciente cadastrado com sucesso!')
    router.push('/app/pacientes/')
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

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input id="name" {...register('name')} />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="age">Idade</Label>
              <Input
                id="age"
                type="number"
                {...register('age', { valueAsNumber: true })}
              />
              {errors.age && (
                <p className="text-red-500">{errors.age.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="gender">Gênero</Label>
              <Select
                onValueChange={(value) => setValue('gender', value)}
                value={watch('gender') || ''}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o Gênero" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Masculino</SelectItem>
                  <SelectItem value="female">Feminino</SelectItem>
                  <SelectItem value="other">Outro</SelectItem>
                </SelectContent>
              </Select>
              {errors.gender && (
                <p className="text-red-500">{errors.gender.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="cpf">CPF</Label>
              <Input id="cpf" {...register('cpf')} />
              {errors.cpf && (
                <p className="text-red-500">{errors.cpf.message}</p>
              )}
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="address">Endereço</Label>
              <Input id="address" {...register('address')} />
              {errors.address && (
                <p className="text-red-500">{errors.address.message}</p>
              )}
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="contact">Contato</Label>
              <Input id="contact" {...register('contact')} />
              {errors.contact && (
                <p className="text-red-500">{errors.contact.message}</p>
              )}
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="medicalHistory">Histórico Médico</Label>
              <Textarea id="medicalHistory" {...register('medicalHistory')} />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="preExistingConditions">
                Condições pré-existentes
              </Label>
              <Textarea
                id="preExistingConditions"
                {...register('preExistingConditions')}
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="documents">Upload de documentos</Label>
              <Input
                id="documents"
                type="file"
                multiple
                {...register('documents')}
              />
            </div>
          </div>
          <Button type="submit">Cadastrar Paciente</Button>
        </form>
      </div>
    </main>
  )
}
