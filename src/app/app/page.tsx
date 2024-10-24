import type { Metadata } from 'next'

import { auth } from '@/services/auth'

import { UserInfo } from './_components/user-info'

export const metadata = {
  title: 'Home',
}

export default async function Page() {
  const session = await auth()

  return (
    <>
      <main className="flex h-screen items-center justify-center">
        <UserInfo user={session?.user} />
      </main>
    </>
  )
}
