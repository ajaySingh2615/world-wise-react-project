import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import City from "./components/City/City";
import CityList from "./components/City/CityList";
import CountryList from "./components/CountryItem/CountryList";
import Form from "./components/Form/Form";
import { CitiesProvider } from "./contexts/CitiesContext.jsx";
import { AuthProvider } from "./contexts/FakeAuthContext.jsx";
// import AppLayout from "./pages/AppLayout/AppLayout";
// import HomePage from "./pages/Homepage/Homepage";
// import Login from "./pages/Login/Login";
// import PageNotFound from "./pages/PageNotFound";
// import Pricing from "./pages/Pricing/Pricing";
// import Product from "./pages/Product/Product";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute.jsx";
import { lazy, Suspense } from "react";
import SpinnerFullPage from "./components/Spinner/SpinnerFullPage.jsx";

const HomePage = lazy(() => import("./pages/Homepage/Homepage"));
const Product = lazy(() => import("./pages/Product/Product"));
const Pricing = lazy(() => import("./pages/Pricing/Pricing"));
const Login = lazy(() => import("./pages/Login/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
