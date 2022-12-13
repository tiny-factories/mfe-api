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
      <script src="https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.js" />

      <div className="mx-auto p-9">
        <Navagation />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
