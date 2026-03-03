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
    return hash;
  });

  React.useEffect(() => {
    // Ensure hash is set on initial load
    if (!window.location.hash) {
      window.location.hash = "/";
    }

    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || "/";
      setLocation(hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Simple route matching
  const renderPage = () => {
    const path = location.split("?")[0]; // Remove query params

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
