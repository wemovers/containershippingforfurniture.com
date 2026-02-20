import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage.jsx';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
const routes = createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path="blog" element={<BlogPage />} />
  <Route path="blog/:slug" element={<BlogPost />} />
 

  </Route>
);

const router = createBrowserRouter(routes, {
  basename: "/", // ✅ this is fine as long as you are hosting at root
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
