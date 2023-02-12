// These styles apply to every route in the application
import "../styles/globals.css";
import Toaster from "../components/Toaster";
import AuthStatus from "../components/auth-status";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const AuthStatusDiv = await AuthStatus();
  return (
    <html lang="en">
      <body>
        <Toaster />
        {AuthStatusDiv}
        {children}
      </body>
    </html>
  );
}
