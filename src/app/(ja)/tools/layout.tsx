import { Navbar } from "./_components/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-gray-900">
        <div className="container flex min-h-screen px-6 py-12 mx-auto">
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
