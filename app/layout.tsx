import React from "react";
import "./global.css";
import Header from "@/components/Header";

export default function RootLayout(
    {children,}:
        Readonly<{children: React.ReactNode;}>
){
  return(
      <html lang="en">
        <body>
          <Header />
          {children}
        </body>
      </html>
  );
}