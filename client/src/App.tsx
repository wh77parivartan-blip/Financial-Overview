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
        <Toaster />
        {renderPage()}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
