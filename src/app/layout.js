import "./globals.css";
import { poppins } from "../fonts";

export const metadata = {
  title: "Livre-se da Herpes Labial",
  description: "Livre-se da Herpes Labial",
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
