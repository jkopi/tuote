import React from 'react';
import { ChakraProvider, ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/react';
import theme from './config/chakra';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Routes, Route } from 'react-router-dom';
import { Products, Product } from './components/Products';
import { ProductsView } from './components/Products';
import { UserProvider } from './context/UserContext';
import { ProductProvider } from './context/ProductContext';
import { ErrorBoundary } from 'react-error-boundary';
import { FallBack } from './components/ErrorBoundary';
import { Checkout, CheckoutView } from './components/Checkout';
import { LandingView } from './components/Landing';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <ErrorBoundary FallbackComponent={FallBack}>
          <UserProvider>
            <ProductProvider>
              <Routes>
                <Route path="/" element={<LandingView />} />
                <Route element={<ProductsView />}>
                  <Route path="/products" element={<Products />} />
                  <Route path="/products/:productId" element={<Product />} />
                </Route>
                <Route element={<CheckoutView />}>
                  <Route path="/checkout" element={Checkout} />
                </Route>
                <Route path="*" element={<p>404</p>} />
              </Routes>
            </ProductProvider>
          </UserProvider>
        </ErrorBoundary>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
