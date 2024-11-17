import React from "react";
import { Outlet } from "react-router-dom";

function Dashboard() {
    return (
        <>
            <Outlet />
            <h1>Dashboard here</h1>
        </>
    )
}

export default Dashboard