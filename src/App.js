import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import { ListTeam } from './components/Teams/ListTeam';
import { Layout } from './components/Layout/Layout';
import { ListWorkers } from './components/Workers/ListWorkers';
import { Stats } from './components/Stats/Stats';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<ListTeam />} />
      <Route path="workers" element={<ListWorkers />} />
      <Route path="stats" element={<Stats />} />

    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App