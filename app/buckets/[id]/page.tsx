export default async function BucketDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <h1 className="text-2xl font-semibold">Bucket {id}</h1>;
}
