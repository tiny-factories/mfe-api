import Navagation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <script
        async
        defer
        data-website-id="cae4e4ad-25a6-499a-849b-aa9bf23be339"
        src="https://umami.tinyfactories.space/umami.js"
      ></script>
      <div className="mx-auto p-9">
        <Navagation />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
