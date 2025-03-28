// app/note/layout.tsx

import { auth } from "@/auth";
import { MainLayout } from "@/src/widgets/layout";



export default async function NodeLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  const session = await auth()
  console.log('session111111', session)

  return (
    <>
      <MainLayout>
        {children}
      </MainLayout>
    </>
  )

}
