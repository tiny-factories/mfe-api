import "../styles/globals.css";
import { useState } from "react";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { MyUserContextProvider } from "../utils/useUser";
import Layout from "../components/Layout";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <div className="">
      <SessionContextProvider supabaseClient={supabaseClient}>
        <MyUserContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MyUserContextProvider>
      </SessionContextProvider>
    </div>
  );
}
export default MyApp;
