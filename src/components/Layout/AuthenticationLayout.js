import React from "react";
import Footer from "./Footer";
import Header from "./Header/Header";

function AuthenticationLayout({ element }) {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col justify-between min-h-full">
          <div className="flex justify-center min-h-screen">
            <div className="p-6 md:p-10 w-full mx-4">
              <main>{element}</main>
            </div>
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AuthenticationLayout;
