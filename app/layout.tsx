// These styles apply to every route in the application
import Link from "next/link";
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
      <script
        async
        defer
        data-website-id="cae4e4ad-25a6-499a-849b-aa9bf23be339"
        src="https://umami.tinyfactories.space/umami.js"
      ></script>

      <body>
        <Toaster />
        {AuthStatusDiv}

        <div className="mx-auto p-9 text-[#343339]">{children}</div>
      </body>
    </html>
  );
}
