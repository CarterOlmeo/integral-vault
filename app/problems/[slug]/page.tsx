import { notFound } from "next/navigation";
import katex from "katex";
import { problems } from "@/lib/problems";
import { toYouTubeEmbed } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default async function ProblemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const p = problems.find((x) => x.slug === slug);
  if (!p) return notFound();

  const embed = toYouTubeEmbed(p.videoUrl);

  const latexHtml = p.promptLatex
    ? katex.renderToString(p.promptLatex, {
        throwOnError: false,
        displayMode: true,
      })
    : null;

  return (
    <main className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">{p.title}</h1>
        <p className="text-slate-400">{p.date}</p>
        <a className="text-slate-200 underline" href={p.originalUrl} target="_blank" rel="noreferrer">
          View the original problem
        </a>
      </div>

      {latexHtml ? (
        <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="mb-3 text-lg font-semibold">Integral</h2>
          <div dangerouslySetInnerHTML={{ __html: latexHtml }} />
        </section>
      ) : null}

      {embed ? (
        <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="mb-3 text-lg font-semibold">Solution video</h2>
          <div className="aspect-video w-full overflow-hidden rounded-xl border border-slate-800">
            <iframe
              className="h-full w-full"
              src={embed}
              title="Solution video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      ) : null}

      {p.notes ? (
  <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
    <h2 className="mb-2 text-lg font-semibold">Notes</h2>

    <div className="prose prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
      >
        {p.notes}
      </ReactMarkdown>
    </div>
  </section>
) : null}

    </main>
  );
}

