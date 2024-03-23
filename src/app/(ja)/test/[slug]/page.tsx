type Props = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: Props) {
  return <div>slug: {params.slug}</div>;
}
