'use client'

import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function AuthForm() {
  const form = useForm()
  const router = useRouter()

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      const result = await signIn('credentials', {
        email: data.email,
        password: data.password,
      })

      if (result?.ok) {
        toast.success('Login realizado com sucesso!')
        router.push('/app')
      } else {
        toast.error('Credenciais inválidas. Tente novamente.')
      }
    } catch (error) {
      toast.error('Não foi possível autenticar. Por favor, tente novamente.')
    }
  })

  return (
    <div className="mx-auto max-w-sm space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Entre com seu e-mail e senha
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="m@exemplo.com"
            required
            type="email"
            {...form.register('email')}
          />
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            placeholder="Sua senha"
            required
            type="password"
            {...form.register('password')}
          />
        </div>
        <Button
          className="w-full"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? 'Enviando...' : 'Realizar Login'}
        </Button>
      </form>
    </div>
  )
}
