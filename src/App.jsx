import { AuthProvider } from "./context/AuthProvider";
import { CartProvider } from "./context/CartProvider";
import { CategoriesProvider } from "./context/CategoriesProvider";
import { DrinksProvider } from "./context/DrinksProvider";
import { ModalProvider } from "./context/ModalProvider";
import MainLayout from "./layout";
import AppRoutes from "./router";
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Router>
      <AuthProvider>
        <ModalProvider>
          <CartProvider>
            <DrinksProvider>
              <CategoriesProvider>
                <MainLayout>
                  <AppRoutes />
                </MainLayout>
              </CategoriesProvider>
            </DrinksProvider>
          </CartProvider>
        </ModalProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
