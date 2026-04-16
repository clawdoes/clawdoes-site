export default function ProseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-14 md:py-20">
      <article className="[&>h1]:font-serif [&>h1]:text-3xl [&>h1]:font-normal [&>h1]:tracking-[-0.02em] [&>h1]:md:text-4xl [&>h2]:mb-4 [&>h2]:mt-10 [&>h2]:font-serif [&>h2]:text-xl [&>h2]:font-medium [&>h2]:tracking-[-0.015em] [&>h3]:mb-3 [&>h3]:mt-8 [&>h3]:text-lg [&>h3]:font-semibold [&>ol]:my-4 [&>ol]:list-decimal [&>ol]:space-y-2 [&>ol]:pl-6 [&>p]:my-4 [&>p]:leading-relaxed [&>p]:text-muted-foreground [&>ul]:my-4 [&>ul]:list-disc [&>ul]:space-y-2 [&>ul]:pl-6 [&_li]:text-sm [&_li]:leading-relaxed [&_li]:text-muted-foreground [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_strong]:font-semibold [&_strong]:text-foreground">
        {children}
      </article>
    </div>
  );
}
