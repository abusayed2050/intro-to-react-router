import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Laptop from './components/Laptop/Laptop.jsx';
import Mobile from './components/Mobile/Mobile.jsx';
import Users from './components/Users/Users.jsx';
import Users2 from './components/Users2/Users2.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';

const userPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "laptop",
        Component: Laptop,
      },
      {
        path: "mobile",
        Component: Mobile,
      },
      {
        path: "users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users,
      },
      {
        path: "user/:userid",
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
        Component: UserDetails,
      },
      {
        path: "users2",
        element:<Suspense fallback={<span>Loading...</span>}>
          <Users2 userPromise={userPromise} />
        </Suspense>
      },
      {
        path: "posts",
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts,
      },
      {
        path:"posts/:postId",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component:PostDetails,
      }
    ]
  },
  {
    path: "about",
    element: <div>About Page</div>,
  },
  {
    path: "*",
    Component: () => <div>404 Not Found</div>,
  }
]);
   
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
