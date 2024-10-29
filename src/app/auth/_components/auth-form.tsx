'use client'

import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function AuthForm() {
  const form = useForm()

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await signIn('nodemailer', { email: data.email, redirect: false })
      toast.success('Enviamos um link de autenticação para seu e-mail')
    } catch (error) {
      toast.error(
        'Não foi possível enviar o e-mail de autenticação, por favor tente novamente.',
      )
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
          <Label htmlFor="email">Email</Label>
          <Input
            id="password"
            placeholder="Sua senha"
            required
            type="password"
            {...form.register('email')}
          />
        </div>
        <Button
          className="w-full"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? 'Sending...' : 'Realizar Login'}
        </Button>
      </form>
    </div>
  )
}
