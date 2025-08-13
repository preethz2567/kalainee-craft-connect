import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LanguageSelect from "./pages/LanguageSelect";
import PortalSelect from "./pages/PortalSelect";
import ArtistPortal from "./pages/ArtistPortal";
import AdmirerPortal from "./pages/AdmirerPortal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LanguageSelect />} />
          <Route path="/home" element={<Index />} />
          <Route path="/portal-select" element={<PortalSelect />} />
          <Route path="/artist-portal" element={<ArtistPortal />} />
          <Route path="/admirer-portal" element={<AdmirerPortal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
