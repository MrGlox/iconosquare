import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import MainLayout from "layout/Main";
import Home from "pages/Home";
import Post from "pages/Post";
import Posts from "pages/Posts";

import { Provider as MainProvider } from "contexts/Main";
import { Provider as ModalProvider } from "contexts/Modal";

import "styles/index.css";

import reportWebVitals from "./reportWebVitals";

const queryClient = new QueryClient();

ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <Routes>
          <Route
            path="/"
            element={
              <MainProvider>
                <MainLayout />
              </MainProvider>
            }
          >
            <Route index element={<Home />} />
            <Route path="posts/:id" element={<Post />} />
            <Route path="posts" element={<Posts />} />
            <Route path=":userId/posts" element={<Posts />} />
          </Route>
        </Routes>
      </ModalProvider>
    </QueryClientProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
