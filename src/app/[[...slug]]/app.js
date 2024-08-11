"use client";
import dynamic from "next/dynamic";

const AppComponent = dynamic(() => import("../../components/App.jsx"), {
    ssr: false,
});

export const App = () => {
    return <AppComponent />;
};