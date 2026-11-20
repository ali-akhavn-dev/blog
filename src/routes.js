import { createBrowserRouter } from "react-router";

import AppLayout from "./components/layouts/AppLayout";
import HomePage from "./components/home/HomePage";
import AuthorPage from "./components/author/AuthorPage";
import BlogPage from "./components/blog/BlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "authors/:authorSlug", element: <AuthorPage /> },
      { path: "blogs/:blogSlug", element: <BlogPage /> },
    ],
  },
]);

export default router;
