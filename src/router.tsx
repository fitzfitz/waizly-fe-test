import { AnimatePresence } from "framer-motion";
import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Todo from "./pages/todo";

const routerList = [
  {
    path: "/todo",
    element: (
      <React.Suspense fallback={"Loading..."}>
        <Todo />
      </React.Suspense>
    ),
  },
];

const Router = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        {routerList.map((item) => (
          <Route key={item.path} path={item.path} element={item.element} />
        ))}
        <Route path="*" element={<Navigate to="/todo" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Router;
