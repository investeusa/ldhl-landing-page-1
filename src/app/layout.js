import "./globals.css";
import { poppins } from "../fonts";

export const metadata = {
  title: "Livre-se do Herpes Labial",
  description: "Livre-se do Herpes Labial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
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
