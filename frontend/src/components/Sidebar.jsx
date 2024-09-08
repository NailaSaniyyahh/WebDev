import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState } from "react";
import { Link } from "react-router-dom";

const SidebarContext = createContext();

export function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen">
      <nav className="h-full w-fit flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Farrel Keiza</h4>
              <span className="text-xs text-gray-600">farrel.keiza.tif422@polban.ac.id</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert, subItems, linkTo}) {
  const { expanded } = useContext(SidebarContext);
   const [isOpen, setIsOpen] = useState(true); // Toggle for sub-items

  return (
    <>
      <li
        className={`
          relative flex items-center py-2 px-3 my-1
          font-medium rounded-md cursor-pointer
          transition-colors group
          ${
            active
              ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
              : "hover:bg-indigo-50 text-gray-600"
          }
        `}
        onClick={() => setIsOpen(!isOpen)} // Toggle sub-items visibility
      >
        {/* Use Link from react-router-dom */}
        <Link to={linkTo || "#"} className="flex items-center w-full">
          {icon}
          <span
            className={`overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}
          >
            {text}
          </span>
        </Link>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          />
        )}

        {!expanded && (
          <div
            className={`
              absolute left-full rounded-md px-2 py-1 ml-6
              bg-indigo-100 text-indigo-800 text-sm
              invisible opacity-20 -translate-x-3 transition-all
              group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
            `}
          >
            {text}
          </div>
        )}
      </li>

      {/* Sub-items list */}
      {isOpen && expanded && subItems && (
        <ul className="ml-6 pl-4 border-l border-indigo-200">
          {subItems.map((subItem, index) => (
            <li
              key={index}
              className="flex items-center py-1 px-2 my-1 text-gray-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-md cursor-pointer transition-colors"
            >
              {/* Link for sub-items */}
              <Link to={subItem.linkTo || "#"} className="w-full">
                <span className={`${expanded ? "ml-3" : "ml-0"}`}>
                  {subItem.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
