import Navagation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <>
      {/* <script
        async
        defer
        data-website-id="5620b8c4-3a0a-443c-8855-84fb6ccec68b"
        src="https://umami.tinyfactories.space/umami.js"
      ></script> */}
      <div className="mx-auto p-9">
        <Navagation />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
