import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { OnboardingRouter } from "./pages/OnboardingRouter";

// Landing page will be added in Task 10 — placeholder for now
function LandingPlaceholder() {
  return <div>Landing page — coming next</div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/onboarding" element={<LandingPlaceholder />} />
        <Route path="/onboarding/:id" element={<OnboardingRouter />} />
        <Route path="*" element={<Navigate to="/onboarding" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
