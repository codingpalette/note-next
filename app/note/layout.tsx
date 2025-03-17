import { MainLayout } from "@/src/widgets/layout";



export default function NodeLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
      <MainLayout>
        {children}
      </MainLayout>
    </>
  )

}
