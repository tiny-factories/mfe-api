export const dynamic = "force-dynamic";

export default function DataLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>

      {children}
    </div>
  );
}
