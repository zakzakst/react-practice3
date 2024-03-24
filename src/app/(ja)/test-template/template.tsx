export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const date = new Date();
  return (
    <>
      <p>{date.toTimeString()}</p>
      <div className="template">{children}</div>
    </>
  );
}
