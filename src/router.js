import React from "react";
import { Route, Routes } from "react-router-dom";
import PostListing from "./components/PostListing";
import PostDetail from "./components/PostDetails";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<PostListing />} />
      <Route path="/:id" element={<PostDetails />} />
    </Routes>
  );
}