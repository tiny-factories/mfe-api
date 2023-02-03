import { redirect } from "next/navigation";

import { getServerSession } from "next-auth/next";

import { authOptions } from "../../lib/auth";
import Layout from "../../components/Layout";

export default async function AccountPage() {
  const user = await getServerSession();

  if (!user) {
    redirect(authOptions.pages.signIn);
  }
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
