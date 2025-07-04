import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { Navbar } from "./components/Navbar"
import Footer from "./components/Footer"
import MapSection from "./molecules/Map"

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <MapSection />
    <Footer />
    </>
  )
}

export default App
