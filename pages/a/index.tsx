import type { NextPage } from "next";
import { useRouter } from "next/router";

import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "../../components/Account";
import Layout from "../../components/Layout";

export default function AccountPage() {
  const router = useRouter();
  const session = useSession();
  const supabase = useSupabaseClient();
  return (
    <>
      <div className="container" style={{ padding: "50px 0 100px 0" }}>
        {!session ? (
          <>SignOut</>
        ) : (
          <>
            <h3>LogIn</h3>
          </>
        )}
      </div>
    </>
  );
}
