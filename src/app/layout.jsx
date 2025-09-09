import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "My App Title",
  description: "My App Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
