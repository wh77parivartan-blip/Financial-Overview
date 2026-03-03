import React from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Dashboard from "@/pages/dashboard";

// Custom hook for hash-based location with wouter
function useHashLocation() {
  const [location, setLocation] = React.useState(() => {
    const hash = window.location.hash.slice(1) || "/";
    return hash;
  });

  React.useEffect(() => {
    const updateLocation = () => {
      const hash = window.location.hash.slice(1) || "/";
      setLocation(hash);
    };

    window.addEventListener("hashchange", updateLocation);
    return () => window.removeEventListener("hashchange", updateLocation);
  }, []);

  const navigate = React.useCallback((path: string) => {
    window.location.hash = path;
  }, []);

  return [location, navigate] as const;
}

function App() {
  const [location, navigate] = useHashLocation();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Switch location={location}>
          <Route path="/" component={Dashboard}/>
          <Route component={NotFound} />
        </Switch>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
