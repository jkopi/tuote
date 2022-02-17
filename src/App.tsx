import React from 'react';
import { ChakraProvider, ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/react';
import theme from './config/chakra';
import { Layout } from './components/Layout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
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
          <Route path="/" element={<Layout />}>
            <Route index element={<ProductsView />} />
            <Route path="/products/:productId" element={<Product />} />
          </Route>
        </Routes>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
