import React from "react";
import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Dashboard from "@/pages/dashboard";

// Hash-based routing for GitHub Pages
function useHashLocation() {
  const [location, setLocation] = React.useState(() => {
    return window.location.hash.slice(1) || "/";
  });

  React.useEffect(() => {
    const handler = () => {
      setLocation(window.location.hash.slice(1) || "/");
    };

    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  return [location, (newLocation: string) => {
    window.location.hash = newLocation;
  }];
}

function App() {
  const [location, navigate] = useHashLocation();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router location={location} navigator={{ push: navigate }}>
          <Switch>
            <Route path="/" component={Dashboard}/>
            <Route component={NotFound} />
          </Switch>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
