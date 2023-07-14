import { CartProvider } from "./context/CartProvider";
import { CategoriesProvider } from "./context/CategoriesProvider";
import { DrinksProvider } from "./context/DrinksProvider";
import { ModalProvider } from "./context/ModalProvider";
import MainLayout from "./layout";
import AppRoutes from "./router";

function App() {
  return (
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
  );
}

export default App;
