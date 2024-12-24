import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './Home'
import { NotFound } from './NotFound'
import { About } from './About'
import { Cats } from './Cats'
import { Contact } from './Contact'
import { Cat } from './Cat'

export const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <NotFound />
    },
    {
      path: '/quienes-somos',
      element: <About />,
      errorElement: <NotFound />
    },
    {
      path: '/contacto',
      element: <Contact />,
      errorElement: <NotFound />
    },
    {
      path: '/gatos-en-adopcion',
      element: <Cats />,
      errorElement: <NotFound />
    },
    {
      path: '/gatos-en-adopcion/:catID',
      element: <Cat />,
      errorElement: <NotFound />
    },
  ])
  return <RouterProvider router={router} />
}