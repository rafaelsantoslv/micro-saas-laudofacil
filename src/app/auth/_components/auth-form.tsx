'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { toast } from 'sonner'

export function AuthForm() {
  const form = useForm()

  const handleSubmit = form.handleSubmit(async (data) => {
      try {
        console.log(data)
        await signIn('nodemailer', { email: data.email, redirect: false })
        toast.success('Enviamos um link de autenticação para seu e-mail')
        console.log('passei o toast')
      } catch (error) {
        toast.error('Não foi possível enviar o e-mail de autenticação, por favor tente novamente.')
      }
    
  })

  return (
    <div className="mx-auto max-w-sm space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your email below to login to your account
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="m@example.com"
            required
            type="email"
            {...form.register('email')}
          />
        </div>
        <Button
          className="w-full"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? 'Sending...' : 'Send Magic Link'}
        </Button>
      </form>
    </div>
  )
}