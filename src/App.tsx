import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteLayout } from "@/components/layout/SiteLayout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Software from "./pages/Software";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Bookkeeping from "./pages/services/Bookkeeping";
import Reporting from "./pages/services/Reporting";
import FPA from "./pages/services/FPA";
import Controllership from "./pages/services/Controllership";
import FractionalCFO from "./pages/services/FractionalCFO";
import Advisory from "./pages/services/Advisory";
import Blog from "./pages/resources/Blog";
import Guides from "./pages/resources/Guides";
import CalculatorPage from "./pages/resources/Calculator";
import FAQ from "./pages/resources/FAQ";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <SiteLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/bookkeeping" element={<Bookkeeping />} />
            <Route path="/services/reporting" element={<Reporting />} />
            <Route path="/services/fpa" element={<FPA />} />
            <Route path="/services/controllership" element={<Controllership />} />
            <Route path="/services/fractional-cfo" element={<FractionalCFO />} />
            <Route path="/services/advisory" element={<Advisory />} />
            <Route path="/software" element={<Software />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/blog" element={<Blog />} />
            <Route path="/resources/guides" element={<Guides />} />
            <Route path="/resources/calculator" element={<CalculatorPage />} />
            <Route path="/resources/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SiteLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
