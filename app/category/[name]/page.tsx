export default async function CategoryPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  return <h1 className="text-2xl font-semibold">Category: {name}</h1>;
}
