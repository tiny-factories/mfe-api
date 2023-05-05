export default function Newsletter() {
  return (
    <>
      <div className="my-3 p-3 w-full bg-green border-tan border-2 rounded">
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/madeforearth"
          method="post"
          target="popupwindow"
          onSubmit="window.open('https://newsletter.madefor.earth', 'popupwindow')"
          class="flex inline-block"
        >
          <label htmlFor="bd-email"></label>
          <div className="flex flex-grow rounded">
            <input
              type="email"
              name="email"
              id="bd-email"
              className="bg-green border-tan placeholder-tan border-0 focus:outline-0 grow text-sm font-normal"
              placeholder="hello@madefor.earth"
            />
            <input
              type="submit"
              value="Subscribe"
              className="bg-green border-tan border-2 py-2 px-4 rounded uppercase text-center font-bold align-middle hover:bg-tan border-tan hover:text-green"
            />
            <input type="hidden" name="tag" value="MFE → Glossary" />
          </div>
        </form>
      </div>
    </>
  );
}
