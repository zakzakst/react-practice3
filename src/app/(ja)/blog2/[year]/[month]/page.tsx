type Props = {
  params: { year: string; month: string };
};

export async function generateStaticParams() {
  return [
    {
      year: "2024",
      month: "01",
    },
    {
      year: "2023",
      month: "12",
    },
  ];
}

export default async function Page({ params }: Props) {
  return (
    <div>
      blog2 {params.year}/{params.month}
    </div>
  );
}
