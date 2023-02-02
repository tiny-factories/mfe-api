import { redirect } from "next/navigation";

import { getCurrentUser } from "../../../lib/sessions";
import { authOptions } from "../../../lib/auth";
import { stripe } from "../../../lib/stripe";
import { getUserSubscriptionPlan as getUserSubscriptionPlan } from "../../../lib/subscriptions";

export default async function BillingPage() {
  const user = await getCurrentUser();

  // if (!user) {
  //   redirect(authOptions.pages.signIn);
  // }

  const subscriptionPlan = await getUserSubscriptionPlan(user.id);

  // If user has a pro plan, check cancel status on Stripe.
  let isCanceled = false;
  if (subscriptionPlan.isPro) {
    const stripePlan = await stripe.subscriptions.retrieve(
      subscriptionPlan.stripeSubscriptionId
    );
    isCanceled = stripePlan.cancel_at_period_end;
  }
  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center">
        <div className="grid gap-10">
          <BillingForm
            subscriptionPlan={{
              ...subscriptionPlan,
              isCanceled,
            }}
          />
          <div>
            <div className="space-y-4 pb-6 text-sm">
              <p>
                Taxonomy app is a demo app using a Stripe test environment.{" "}
                <strong>
                  You can test the upgrade and won&apos;t be charged.
                </strong>
              </p>
              <p>
                You can find a list of test card numbers on the{" "}
                <a
                  href="https://stripe.com/docs/testing#cards"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline underline-offset-8"
                >
                  Stripe docs
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
