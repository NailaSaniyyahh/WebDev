import {
    Landmark,
    Award,
    GalleryVerticalIcon,
    Users2Icon,
    MessageSquareIcon,
    User,
    LogOut,
    Film,
  } from "lucide-react";
  import { Sidebar, SidebarItem } from "../components/Sidebar.jsx";

const SidebarPage = () => {
  return (
    <Sidebar>
        <SidebarItem
          icon={<Film size={20} />}
          text="Dramas"
          subItems={[{ text: "Validate" }, { text: "Input New Drama" }]}
        />
        <SidebarItem icon={<Landmark size={20} />} text="Countries" />
        <SidebarItem icon={<Award size={20} />} text="Awards" />
        <SidebarItem icon={<GalleryVerticalIcon size={20} />} text="Genres" />
        <SidebarItem icon={<Users2Icon size={20} />} text="Actors" />
        <SidebarItem icon={<MessageSquareIcon size={20} />} text="Comments" />
        <SidebarItem icon={<User size={20} />} text="Users" />
        <SidebarItem icon={<LogOut size={20} />}  text="Logout" />
    </Sidebar>
  )
}

export default SidebarPage