export type Problem = {
    slug: string;        // unique id used in the URL
    date: string;        // YYYY-MM-DD
    title: string;       // your title
    originalUrl: string; // link to Daily Integral (or wherever)
    promptLatex?: string; // optional: just the integral / your re-phrased prompt
    notes?: string;      // your short write-up
    videoUrl?: string;   // YouTube/Vimeo link
    tags?: string[];
  };
  
  export const problems: Problem[] = [
    {
      slug: "2025-12-22-easy-integral-1",
      date: "2025-12-22",
      title: "Easy Integral 21/12/25",
      originalUrl: "https://drive.google.com/file/d/11lLhRI4sGvB_y0MgRNh5jKS-HOm85j-N/view?usp=drivesdk",
      promptLatex: String.raw`\int_{0}^{\pi/2}\sqrt{1+\sin(2x)}\,dx`,
      notes: "Key idea: rewrite 1+sin(2x) as (sin x + cos x)^2 on [0, π/2].",
      videoUrl: "https://youtu.be/q-H0t_Rxch8",
      tags: ["trig", "identity"],
    },

    {
      slug: "2025-12-22-medium-integral",
      date: "2025-12-22",
      title: "Medium Integral 21/12/25",
      originalUrl: "https://drive.google.com/file/d/1stn9BxJtIVhPOkqSNR3GxAzr5K67dlOI/view?usp=drivesdk",
      promptLatex: String.raw`\int_{-1/3}^{1}\left(\sqrt[3]{1+\sqrt{1-x^{3}}}+\sqrt[3]{1-\sqrt{1-x^{3}}}\right)\,dx`,
      notes: String.raw`Key idea: set $u=\sqrt[3]{1+\sqrt{1-x^3}}$, $v=\sqrt[3]{1-\sqrt{1-x^3}}$. Then $uv=x$ and $y=u+v$ satisfies $y^3-3xy-2=0$. Substitute $x=\frac{y^3-2}{3y}$ to change variables $x\to y$.`,


      videoUrl: "https://youtu.be/BLMiyCiED7w",
      tags: ["algebra", "substitution", "radicals", "cubic", "cardano"],

    },

    {
      slug: "2025-12-22-hard-integral-1",
      date: "2025-12-22",
      title: "Hard Integral 21/12/25",
      originalUrl: "https://drive.google.com/file/d/1hOuZ8xfeUEamESEJ8q-MSbqhBsBHzyuG/view?usp=drivesdk",
      promptLatex: String.raw`\int_{0}^{\pi}\max\left\{\left|2\sin x\right|,\left|2\cos(2x)-1\right|\right\}\,dx`,
      videoUrl: "https://youtu.be/q-H0t_Rxch8",
      notes: String.raw`Key idea: on $[0,\pi]$ we have $\sin x\ge0$, so $\lvert2\sin x\rvert=2\sin x$. Let $g(x)=2\cos(2x)-1$. Then $g(x)=0$ at $x=\pi/6,\,5\pi/6$, so $\lvert g(x)\rvert=g(x)$ on $[0,\pi/6]\cup[5\pi/6,\pi]$ and $\lvert g(x)\rvert=-(g(x))=1-2\cos(2x)$ on $[\pi/6,5\pi/6]$. Use symmetry about $\pi/2$ to write $I=2\int_0^{\pi/2}\max\{2\sin x,\lvert g(x)\rvert\}\,dx$. Find crossover points by solving $2\sin x=\lvert g(x)\rvert$: on $[0,\pi/6]$, $2\sin x=2\cos(2x)-1\iff4\sin^2x+2\sin x-1=0\Rightarrow \sin x=\frac{\sqrt5-1}{4}=\sin(\pi/10)$, so $x=\pi/10$. On $[\pi/6,\pi/2]$, $2\sin x=1-2\cos(2x)\iff4\sin^2x-2\sin x-1=0\Rightarrow \sin x=\frac{1+\sqrt5}{4}=\sin(3\pi/10)$, so $x=3\pi/10$. Therefore on $[0,\pi/2]$ the max is $2\cos(2x)-1$ on $[0,\pi/10]$, then $2\sin x$ on $[\pi/10,3\pi/10]$, then $1-2\cos(2x)$ on $[3\pi/10,\pi/2]$; integrate piecewise and double.`,

      tags: ["trig", "absolute value", "max", "piecewise"]

    },

    {
  slug: "2025-12-22-easy-integral-2",
  date: "2025-12-22",
  title: "Easy Integral 22/12/25",
  originalUrl: "https://dailyintegral.com",
  promptLatex: String.raw`\int_{1}^{\sqrt e}\frac{\ln\!\left(x^{\ln x}\right)+\ln x}{x(\ln x+1)}\,dx`,
  videoUrl: "",
  notes: String.raw`Key idea: use the log power rule $\ln(x^{\ln x})=(\ln x)^2$. Then the numerator is $(\ln x)^2+\ln x=\ln x(\ln x+1)$, which cancels with $(\ln x+1)$ in the denominator, leaving $\int_1^{\sqrt e}\frac{\ln x}{x}\,dx$. Substitute $u=\ln x$ ($du=dx/x$), with bounds $u:0\to\frac12$, giving $\int_0^{1/2}u\,du=\left.\frac{u^2}{2}\right|_0^{1/2}=\frac18$.`,
  tags: ["logs", "simplification", "u-substitution"]
},

{
  slug: "2025-12-22-medium-integral-1",
  date: "2025-12-22",
  title: "Medium Integral 22/12/25",
  originalUrl: "https://dailyintegral.com",
  promptLatex: String.raw`\int_{0}^{\pi/2}\cos x\sqrt{\frac{1-\sin x}{1+\sin x}}\,dx`,
  videoUrl: "",
  notes: String.raw`Key idea: rationalize inside the square root:
\[
\frac{1-\sin x}{1+\sin x}\cdot\frac{1-\sin x}{1-\sin x}=\frac{(1-\sin x)^2}{1-\sin^2 x}=\frac{(1-\sin x)^2}{\cos^2 x}.
\]
On $[0,\pi/2]$, $\cos x\ge0$, so $\sqrt{\frac{(1-\sin x)^2}{\cos^2 x}}=\frac{1-\sin x}{\cos x}$. The integrand becomes $\cos x\cdot\frac{1-\sin x}{\cos x}=1-\sin x$. Hence
\[
\int_0^{\pi/2}(1-\sin x)\,dx=\left[x+\cos x\right]_0^{\pi/2}=\frac{\pi}{2}-1.
\]`,
  tags: ["trig", "algebraic simplification", "radicals"]
},

{
  slug: "2025-12-22-hard-integral-2",
  date: "2025-12-22",
  title: "Hard Integral 22/12/25",
  originalUrl: "https://dailyintegral.com",
  promptLatex: String.raw`\int_{0}^{\infty}\frac{\ln(1+x^2)}{\sinh^2(\pi x)}\,dx`,
  videoUrl: "",
  notes: String.raw`Key idea: integrate by parts using $\dfrac{d}{dx}\coth(\pi x)=-\dfrac{\pi}{\sinh^2(\pi x)}$. Take
\[
v=\int \frac{dx}{\sinh^2(\pi x)}=\frac{1-\coth(\pi x)}{\pi},
\]
which tends to $0$ as $x\to\infty$ (so boundary terms vanish). With $u=\ln(1+x^2)$ and $u'=\frac{2x}{1+x^2}$, integration by parts gives
\[
I=\frac{2}{\pi}\int_0^\infty \frac{x}{1+x^2}\bigl(\coth(\pi x)-1\bigr)\,dx.
\]
Use $\coth(\pi x)-1=\frac{2}{e^{2\pi x}-1}$ to rewrite
\[
I=\frac{4}{\pi}\int_0^\infty \frac{x}{1+x^2}\cdot\frac{1}{e^{2\pi x}-1}\,dx.
\]
Now apply the standard digamma integral (at $z=1$) which implies
\[
\int_0^\infty \frac{x}{1+x^2}\cdot\frac{1}{e^{2\pi x}-1}\,dx=\frac{\gamma-\tfrac12}{2},
\]
so
\[
I=\frac{4}{\pi}\cdot\frac{\gamma-\tfrac12}{2}=\frac{2\gamma-1}{\pi}.
\]
Here $\gamma$ is Euler's constant.`,
  tags: ["special functions", "integration by parts", "hyperbolic", "EulerGamma"]
},


{
  slug: "2025-09-17-easy-integral-3",
  date: "2025-09-17",
  title: "Easy Integral 17/09/2025",
  originalUrl: "https://dailyintegral.com",
  promptLatex: String.raw`\int_{1/2}^{\sqrt{3}/2}\frac{x}{\sqrt{1-x^2}}\,dx`,
  videoUrl: "",
  notes: String.raw`Key idea: use the substitution $u=1-x^2$, so $du=-2x\,dx$ and $x\,dx=-\tfrac12 du$. Then
\[
\int \frac{x}{\sqrt{1-x^2}}\,dx=-\sqrt{1-x^2}.
\]
Evaluate:
\[
\left[-\sqrt{1-x^2}\right]_{1/2}^{\sqrt3/2}=-\sqrt{1-\tfrac34}-\left(-\sqrt{1-\tfrac14}\right)=-\tfrac12+\tfrac{\sqrt3}{2}=\frac{\sqrt3-1}{2}.
\]`,
  tags: ["substitution", "radicals", "definite integral"]
},

  ];
  