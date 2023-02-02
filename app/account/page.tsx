import { redirect } from "next/navigation";
import { cache } from "react";

import { prisma } from "../../lib/prisma";
import { getCurrentUser } from "../../lib/sessions";
import { User } from "@prisma/client";
import { authOptions } from "../../lib/auth";
import Layout from "../../components/Layout";
import SignOut from "../../components/sign-out";

export default async function AccountPage() {
  const user = await getCurrentUser();

  // if (!user) {
  //   redirect(authOptions.pages.signIn);
  // }
  return (
    <Layout>
      <div className="border-t-2">
        <div className="font-bold">Account Info</div>
        <div className="">[Email]</div>
        <div className="">[Name]</div>
        <div className="">[username]</div>
      </div>
      <div className="border-t-2">
        <div className="font-bold">Billing Stripe</div>
        <div className="">Billing Stripe</div>
      </div>
    </Layout>
  );
}
