'use client'


import store from '../lib/redux/store'
import "./globals.css";

import DemoLayout from "@/components/DemoLayout";
import { Provider } from "react-redux";

// import { NextFont } from 'next/dist/compiled/@next/font';


  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
   

    return (
      <Provider store={store}> 
        <html lang="en">
          {/* <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
          </head> */}
          <body className="overflow-x-hidden">
            <DemoLayout>
              {children}
            </DemoLayout>
          </body>
        </html>
      </Provider>
    );
  }
