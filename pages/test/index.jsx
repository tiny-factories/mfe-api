import Layout from "../../components/Layout";
const initStripe = require("stripe");

export default async function AccountPage() {
  return (
    <Layout>
      <div className="border-t-2">
        <div className="font-bold">Account Info</div>
        <div className="">[Email]</div>
        <div className="">[Name]</div>
        <div className="">[username]</div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const stripe = initStripe(process.env.STRIPE_SECRET_KEY);
  const { data: prices } = await stripe.prices.list();
  const plans = await Promise.all(
    prices.map(async (price) => {
      const product = await stripe.products.retrieve(price.product);
      return {
        id: price.id,
        name: product.name,
        price: price.unit_amount,
        interval: price.recurring.interval,
        currency: price.currency,
      };
    })
  );

  return {
    props: {
      plans: plans.reverse(),
    },
  };
};
