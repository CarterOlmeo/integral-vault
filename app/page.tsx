import Link from "next/link";
import dayjs from "dayjs";
import { problems } from "@/lib/problems";

export default function HomePage() {
  const today = dayjs().format("YYYY-MM-DD");

  const sorted = [...problems].sort((a, b) => (a.date < b.date ? 1 : -1));
  const todays = sorted.find((p) => p.date === today) ?? sorted[0];

  return (
    <main className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-red-500">Integral Vault</h1>
        <p className="text-slate-300">
          A daily-integral archive with solution videos (and links to the original prompts).
        </p>
      </header>

      {todays && (
        <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-xl font-semibold">Featured</h2>
            <span className="text-sm text-slate-400">{todays.date}</span>
          </div>
          <p className="mt-2 text-slate-200">{todays.title}</p>

          <div className="mt-4 flex gap-3">
            <Link
              className="rounded-xl bg-slate-100 px-4 py-2 text-slate-900 hover:bg-white"
              href={`/problems/${todays.slug}`}
            >
              View solution
            </Link>
            <a
              className="rounded-xl border border-slate-700 px-4 py-2 text-slate-100 hover:bg-slate-800"
              href={todays.originalUrl}
              target="_blank"
              rel="noreferrer"
            >
              Original problem
            </a>
          </div>
        </section>
      )}

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Archive</h2>
        <ul className="space-y-2">
          {sorted.map((p) => (
            <li key={p.slug} className="rounded-xl border border-slate-800 bg-slate-900/20 p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <Link className="hover:underline" href={`/problems/${p.slug}`}>
                  {p.title}
                </Link>
                <span className="text-sm text-slate-400">{p.date}</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-3 text-sm">
                <a className="text-slate-300 hover:underline" href={p.originalUrl} target="_blank" rel="noreferrer">
                  Original link
                </a>
                {p.tags?.length ? (
                  <span className="text-slate-500">• {p.tags.join(", ")}</span>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}


