import { useState } from 'react'
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Layouts = ({ children }) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="flex h-full w-full">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      {/* Navbar & Main Content */}
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        {/* Main Content */}
        <main
          className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
        >
          {/* Routes */}
          <div className="h-full">
            <Navbar
              onOpenSidenav={() => setOpen(true)}
              logoText={"Horizon UI Tailwind React"}
            />
            <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
              {children}
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
    </>
  )
}

export default Layouts