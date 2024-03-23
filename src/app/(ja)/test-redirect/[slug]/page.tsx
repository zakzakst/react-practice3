import { redirect } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

const redirectSlugs = ["test"];

export default function Page({ params }: Props) {
  if (redirectSlugs.includes(params.slug)) {
    redirect("/");
  }

  return <div>page：{params.slug}</div>;
}
