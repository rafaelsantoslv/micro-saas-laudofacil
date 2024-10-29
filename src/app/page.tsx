import { Check, Users } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-14 items-center justify-center px-4 lg:px-6">
        <div className="container flex items-center justify-between">
          <Link className="flex items-center justify-center" href="#">
            <MedicalIcon className="h-6 w-6" />
            <span className="sr-only">Laudo Fácil</span>
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="#"
            >
              Novidades
            </Link>
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="#"
            >
              Preços
            </Link>
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="#"
            >
              Sobre
            </Link>
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="#"
            >
              Contato
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container flex justify-center px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Laudo Fácil: Laudos Médicos Simplificados
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Simplifique seu processo de relatórios médicos com nosso
                  planos abrangentes.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Plano Básico</CardTitle>
                  <CardDescription>
                    perfeito para pequenas clinicas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">R$149,90</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    por mês
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />1 Usuário
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Administração básica
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Adquirir agora</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Plano Executivo</CardTitle>
                  <CardDescription>
                    Ótimo para clínicas em crescimento
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">R$249,90</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    por mês
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />5
                      Usuários
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Envio de laudos por e-mail
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Adquirir agora</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Plano Coorporativo</CardTitle>
                  <CardDescription>
                    Ideal para grandes centros médicos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">R$499,90</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    por mês
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      15 usuários
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Modelos de laudos
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Adquirir agora</Button>
                </CardFooter>
              </Card>
            </div>
            <div className="mx-auto mt-12 max-w-3xl text-center text-gray-500 dark:text-gray-400">
              <p>
                Licenças adicionais ou planos personalizados podem ser
                contratado com nossos consultores. Também oferecemos opções de
                suporte personalizáveis durante o horário comercial ou 24 horas
                por dia, 7 dias por semana, individualmente.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Fale com um especialista
                </h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tem dúvidas sobre nossos planos ou precisa de uma solução
                  personalizada? Nosso especialistas estão aqui para ajudar.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" size="lg">
                  <Users className="mr-2 h-4 w-4" />
                  Agendar Demonstração
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex w-full shrink-0 flex-col items-center justify-between gap-2 border-t py-6 sm:flex-row">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © 2024 Laudo Fácil. Todos direitos Reservados.
            </p>
            <nav className="flex gap-4 sm:gap-6">
              <Link
                className="text-xs underline-offset-4 hover:underline"
                href="#"
              >
                Termos e Serviços
              </Link>
              <Link
                className="text-xs underline-offset-4 hover:underline"
                href="#"
              >
                Privacidade
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

function MedicalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
      <path d="M8 19a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2H8Z" />
      <path d="M9.5 11h.01" />
      <path d="M14.5 11h.01" />
      <path d="M12 15h.01" />
    </svg>
  )
}
