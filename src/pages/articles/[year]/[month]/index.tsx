import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = () => {
  const paths = [
    {
      params: {
        year: "2024",
        month: "01",
      },
    },
    {
      params: {
        year: "2023",
        month: "12",
      },
    },
  ];

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  return { props: { ...params } };
};

export default function Page({ year, month }: { year: string; month: string }) {
  return (
    <div>
      articles {year}/{month}
    </div>
  );
}
