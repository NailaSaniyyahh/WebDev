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
  import { Sidebar, SidebarItem } from "../../components/Sidebar.jsx";

function Awards() {
  return (
    <main className="flex h-screen">

      {/* Sidebar */}
      <Sidebar>
        <SidebarItem
          icon={<Film size={20} />}
          text="Dramas"
          subItems={[{ text: "Validate", linkTo: "/validate"}, { text: "Input New Drama", linkTo: "/input-drama"}]}
        />

        <SidebarItem icon={<Landmark size={20} />} text="Countries" linkTo="/countries"/>
        <SidebarItem icon={<Award size={20} />} text="Awards" linkTo="/awards" active />
        <SidebarItem icon={<GalleryVerticalIcon size={20} />} text="Genres" linkTo={"/genres"}/>
        <SidebarItem icon={<Users2Icon size={20} />} text="Actors" linkTo={"/actors"} />
        <SidebarItem icon={<MessageSquareIcon size={20} />} text="Comments" linkTo={"/comments"}/>
        <SidebarItem icon={<User size={20} />} text="Users" linkTo={"/users"}/>
        <SidebarItem icon={<LogOut size={20} />}  text="Logout" linkTo={"/logout"}/>
       </Sidebar>

       {/* Main Content Area */}
       <section className="flex-1 p-8">
        <h1 className="text-3xl font-bold">Awards</h1>
        <p>
          This is the main content area beside the sidebar. You can place any content here, such as tables, forms, or other elements.
        </p>
        {/* Add more content here */}
      </section>
    </main>
  );
}

export default Awards