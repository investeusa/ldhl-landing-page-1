import "./globals.css";
import { poppins } from "../fonts";

export const metadata = {
  title: "Programa Lipedema 21 Dias",
  description: "Programa Lipedema 21 Dias",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          poppins.className + " text-gray-700 tracking-wide"
        }
      >
        {children}
      </body>
    </html>
  );
}
