import React from 'react';
import { ChakraProvider, ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/react';
import theme from './config/chakra';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Routes, Route } from 'react-router-dom';
import { Products, Product } from './components/Products';
import { ProductsView } from './components/Products';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Routes>
          <Route element={<ProductsView />}>
            <Route path="/" element={<Products/>} />
            <Route path="/products/:productId" element={<Product />} />
          </Route>
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
