import SidebarPage from "./pages/SidebarPage";

function App() {
  return (
    <main className="flex h-screen">

      {/* Sidebar */}
      <SidebarPage />

       {/* Main Content Area */}
       <section className="flex-1 p-8">
        <h1 className="text-3xl font-bold">Main Content Area</h1>
        <p>
          This is the main content area beside the sidebar. You can place any content here, such as tables, forms, or other elements.
        </p>
        {/* Add more content here */}
      </section>
    </main>
  );
}

export default App;
