import React, { useState } from "react";
import StaticAppBar from "./AppBar";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
  return (
    <>
      <StaticAppBar />
      <Sidebar />
    </>
  );
}
