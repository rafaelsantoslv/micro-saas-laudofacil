import { PropsWithChildren } from 'react'

import { FooterPage } from './_components/footer'
import { MainSidebar } from './_components/main-sidebar'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-[16rem_1fr] gap-4">
      <MainSidebar />
      <main>{children}</main>
      <FooterPage />
    </div>
  )
}
