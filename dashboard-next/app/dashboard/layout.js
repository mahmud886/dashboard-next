import Header from "@/components/layout/header"
import Sidebar from "@/components/layout/sidebar"
import {SidebarProvider} from "@/hooks/use-sidebar";

export const metadata = {
  title: "Next Shadcn Dashboard Starter",
  description: "Basic dashboard with Next.js and Shadcn"
}

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <SidebarProvider>
        <Sidebar />
        <main className="w-full flex-1 overflow-hidden">
          <Header />
          {children}
        </main>
      </SidebarProvider>
    </div>
  )
}