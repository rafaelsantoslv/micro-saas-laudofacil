import {
  Activity,
  Bell,
  CalendarDays,
  FileText,
  Search,
  Users,
} from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function HomeScreen() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="flex h-14 items-center px-4 lg:px-6">
        <Link className="flex items-center justify-center" href="#">
          <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <span className="ml-2 text-lg font-bold">LaudoFácil - </span>
          <span className="ml-2 text-lg font-bold">Clinica Vista</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Dashboard
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Pacientes
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Laudos
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Configurações
          </Link>
        </nav>
      </header>
      <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">
              Bem vindo de volta, Dr. Smith
            </h1>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  type="search"
                  placeholder="Buscar Pacientes ou Laudos..."
                  className="w-[250px] bg-white pl-8 dark:bg-gray-800"
                />
              </div>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total de Pacientes
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+5 está semana</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Laudos Gerados
                </CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">567</div>
                <p className="text-xs text-muted-foreground">+23 este mês</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Próximos Compromissos
                </CardTitle>
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">próximos 7 dias</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Saúde do Sistema
                </CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98%</div>
                <p className="text-xs text-muted-foreground">
                  Todo sistema operacional
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Atividades Recentes</CardTitle>
                <CardDescription>Suas últimas ações no sistema</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      action: 'Adicionado novo paciente',
                      time: '2 horas atrás',
                    },
                    {
                      action: 'Gerado laudo para Rafael Santos',
                      time: 'Ontem',
                    },
                    {
                      action: 'Atualizado informações de Rafael Santos',
                      time: '2 dias atrás',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <p className="text-sm">{item.action}</p>
                      <span className="text-xs text-muted-foreground">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Painel Rápido</CardTitle>
                <CardDescription>
                  Recursos usados com frequência
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button className="h-20">
                    <Users className="mr-2 h-5 w-5" />
                    Adicionar Novo Paciente
                  </Button>
                  <Button className="h-20">
                    <FileText className="mr-2 h-5 w-5" />
                    Criar novo Laudo
                  </Button>
                  <Button className="h-20">
                    <CalendarDays className="mr-2 h-5 w-5" />
                    Agendar retorno
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Atualizações do sistema e novidades</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="updates" className="w-full">
                <TabsList>
                  <TabsTrigger value="updates">
                    Atualizações Do Sistema
                  </TabsTrigger>
                  <TabsTrigger value="news">Noticias Médicas</TabsTrigger>
                </TabsList>
                <TabsContent value="updates">
                  <ul className="list-disc space-y-2 pl-5">
                    <li>
                      Novo recurso: geração de relatórios em massa agora
                      disponível
                    </li>
                    <li>
                      Melhorias de desempenho na funcionalidade de pesquisa de
                      pacientes
                    </li>
                    <li>
                      Correção de bug: problema resolvido com lembretes de
                      compromissos
                    </li>
                  </ul>
                </TabsContent>
                <TabsContent value="news">
                  <ul className="list-disc space-y-2 pl-5">
                    <li>
                      Publicada a última pesquisa sobre variantes da COVID-19
                    </li>
                    <li>
                      Lançadas novas diretrizes para o controle do diabetes
                    </li>
                    <li>Próximo webinar: Avanços na telemedicina</li>
                  </ul>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
