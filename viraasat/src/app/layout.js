import { Poppins } from "next/font/google";
import "./globals.css";
import "./prose-custom.css";
import { ThemeProvider } from "./components/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins", // bind to CSS variable
});

export const metadata = {
  title: "Viraasat - Heritage in AR",
  description: "Experience cultural heritage through immersive AR technology",
  icons: {
    icon: "/logo24.png", // your favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
