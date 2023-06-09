import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';

import { Home, Character } from './pages'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<Character />} />
      </Route>
    </Routes>
  );
}
