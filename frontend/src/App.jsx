
import { BarChart3, UserCircle, Boxes, Package, Receipt, Settings, LifeBuoy, LayoutDashboard} from "lucide-react"
import { Sidebar, SidebarItem } from "./components/Sidebar.jsx" 

function App() {
  return (
    <main className="App">
    <Sidebar>
      <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" alert />
      <SidebarItem icon={<BarChart3 size={20} />} text="Dashboard" />
      <SidebarItem icon={<UserCircle size={20} />} text="Users" />
      <SidebarItem icon={<Boxes size={20} />} text="Products" />
      <SidebarItem icon={<Package size={20} />} text="Orders" />
      <SidebarItem icon={<Receipt size={20} />} text="Invoices" />
      <SidebarItem icon={<Settings size={20} />} text="Settings" />
      <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
    </Sidebar>
    </main>
  )
}
export default App
