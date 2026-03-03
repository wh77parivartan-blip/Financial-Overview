import React from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Dashboard from "@/pages/dashboard";

function App() {
  const [location, setLocation] = React.useState(() => {
    const hash = window.location.hash.slice(1) || "/";
    console.log("Initial location from hash:", hash);
    return hash;
  });

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || "/";
      console.log("Hash changed to:", hash);
      setLocation(hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Simple route matching
  const renderPage = () => {
    const path = location.split("?")[0]; // Remove query params
    console.log("Rendering for path:", path);

    switch (path) {
      case "/":
        return <Dashboard />;
      default:
        return <NotFound />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div 
          className="min-h-screen w-full relative"
          style={{
            background: "linear-gradient(135deg, #E8F4F8 0%, #D4EFF7 50%, #C0EBF5 100%)",
          }}
        >
          {/* Watermark */}
          <div 
            className="fixed inset-0 flex items-center justify-center pointer-events-none"
            style={{
              opacity: 0.08,
              zIndex: 0,
            }}
          >
            <div
              className="text-center"
              style={{
                fontSize: "180px",
                fontWeight: "700",
                color: "#006BA6",
                transform: "rotate(-15deg)",
                whiteSpace: "nowrap",
                letterSpacing: "2px",
              }}
            >
              Parivartan
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <Toaster />
            {renderPage()}
          </div>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
