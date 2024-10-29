import Link from 'next/link'

export function FooterPage() {
  return (
    <footer className="flex w-screen border-t py-2 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2024 MediReport. All rights reserved.
        </p>
        <nav className="flex gap-4">
          <Link
            className="text-sm text-gray-500 hover:underline dark:text-gray-400"
            href="#"
          >
            Politica e Privacidade
          </Link>
          <Link
            className="text-sm text-gray-500 hover:underline dark:text-gray-400"
            href="#"
          >
            Termos e Serviços
          </Link>
        </nav>
      </div>
    </footer>
  )
}
