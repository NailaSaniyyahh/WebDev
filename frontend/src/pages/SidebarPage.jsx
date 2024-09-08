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
          subItems={[{ text: "Validate", linkTo: "/validate"}, { text: "Input New Drama"}]}
          active
        />

        <SidebarItem icon={<Landmark size={20} />} text="Countries" linkTo="/countries"/>
        <SidebarItem icon={<Award size={20} />} text="Awards" linkTo="/awards" />
        <SidebarItem icon={<GalleryVerticalIcon size={20} />} text="Genres" linkTo={"/genres"}/>
        <SidebarItem icon={<Users2Icon size={20} />} text="Actors" linkTo={"/actors"} />
        <SidebarItem icon={<MessageSquareIcon size={20} />} text="Comments" linkTo={"/comments"}/>
        <SidebarItem icon={<User size={20} />} text="Users" linkTo={"/users"}/>
        <SidebarItem icon={<LogOut size={20} />}  text="Logout" linkTo={"/logout"}/>
    </Sidebar>
  )
}

export default SidebarPage