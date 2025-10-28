// src/components/Layout.jsx
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [openCal, setOpenCal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900">
      <Header onOpenCal={() => setOpenCal(true)} />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />

      {openCal && (
        <div className="modal-iteratum fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-3xl overflow-hidden">
            <div className="flex items-center justify-between border-b px-4 py-3 bg-gray-50">
              <div className="text-sm font-semibold">Book A Call</div>
              <button
                onClick={() => setOpenCal(false)}
                className="btn-iteratum-secondary text-xs px-2 py-1"
              >
                Close
              </button>
            </div>
            <div className="h-[70vh] w-full">
              <iframe
                title="Cal.com Scheduling"
                src="https://cal.com/jonwoods?embed=true"
                className="h-full w-full"
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
