import React from "react";

export default function Footer() {
  return (
    <div className="grid-system bg-white relative">
      <footer className=" col-span-full md:col-start-2 md:col-span-4 py-12 md:py-16 border-t border-[rgba(0,0,0,0.1)]">
        <div className="container-grid">
          <div className="col-span-6 md:col-start-2 md:col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <p className="text-base text-[#0b0b0b]">Divisions</p>
                </div>
                <div className="space-y-2 text-sm text-[rgba(11,11,11,0.6)]">
                  <p>HyperFocused Ventures</p>
                  <p>HyperFocused Media</p>
                  <p>HyperFocused Capital</p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <p className="text-base text-[#0b0b0b]">Navigation</p>
                </div>
                <div className="space-y-2 text-sm text-[rgba(11,11,11,0.6)]">
                  <p>Navigation-1</p>
                  <p>Navigation-2</p>
                  <p>Navigation-3</p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <p className="text-base text-[#0b0b0b]">Follow</p>
                </div>
                <div className="space-y-2 text-sm text-[rgba(11,11,11,0.6)]">
                  <p>Youtube</p>
                  <p>LinkedIn</p>
                  <p>Instagram</p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <p className="text-base text-[#0b0b0b]">Connect</p>
                </div>
                <div className="space-y-2 text-sm text-[rgba(11,11,11,0.6)]">
                  <p>Skool Community</p>
                  <p>Discord</p>
                  <p>LinkedIn</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[rgba(0,0,0,0.1)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[rgba(0,0,0,0.2)]">
              <p>
                © 2025-Present HyperFocused Holdings, LLC. All rights reserved.
              </p>
              <p>Developed by Gaussjordan</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
