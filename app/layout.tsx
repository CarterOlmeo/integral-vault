import "./globals.css";
import "katex/dist/katex.min.css";

export const metadata = {
  title: "Integral Vault",
  description: "Daily integrals + solution videos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <div className="mx-auto max-w-4xl px-4 py-10">{children}</div>
      </body>
    </html>
  );
}