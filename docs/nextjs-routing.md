# Next.js Routing Reference

Source: https://nextjs.org/docs/app/getting-started/layouts-and-pages

## Dynamic Segments

Dynamic segments allow you to create routes that are generated from data. For example, instead of manually creating a route for each individual blog post, you can create a dynamic segment to generate the routes based on blog post data.

To create a dynamic segment, wrap the segment (folder) name in square brackets: [segmentName]. For example, in the app/blog/[slug]/page.tsx route, the [slug] is the dynamic segment.

export default async function BlogPostPage({
params,
}: {
params: Promise<{ slug: string }>
}) {
const { slug } = await params
const post = await getPost(slug)

return (
<div>
<h1>{post.title}</h1>
<p>{post.content}</p>
</div>
)
}
