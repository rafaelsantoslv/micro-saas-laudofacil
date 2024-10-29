import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-[16rem_1fr]">
      <aside>sidebar</aside>
      <div>{children}</div>
    </div>
  )
}
