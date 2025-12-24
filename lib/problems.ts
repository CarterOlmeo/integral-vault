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
      videoUrl: "",
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
  videoUrl: "https://youtu.be/4hOfpuxerTk",
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

{
    slug: "2025-12-23-easy-integral",
    date: "2025-12-23",
    title: "Easy Integral 23/12/25",
    originalUrl: "https://dailyintegral.com",
    promptLatex: String.raw`\int_{0}^{\pi/12}(\tan x+\cot x)\sin(2x)\cos(3x)\,dx`,
    notes: String.raw`Key idea: use $\tan x+\cot x=\frac{1}{\sin x\cos x}=\frac{2}{\sin(2x)}$, so the integrand simplifies to $2\cos(3x)$. Result: $\frac{\sqrt2}{3}$.`,
    videoUrl: "",
    tags: ["trig", "identity", "simplification"],
  },
  {
    slug: "2025-12-23-medium-integral",
    date: "2025-12-23",
    title: "Medium Integral 23/12/25",
    originalUrl: "https://dailyintegral.com",
    promptLatex: String.raw`\int_{0}^{\pi/2}\frac{\sin^{3}x\,\cos^{5}x}{\left(1-\frac12\sin^{2}x\right)^{3}}\,dx`,
    notes: String.raw`Key idea: write $\sin^3x\cos^5x=(\sin^2x)(\sin x\cos x)(\cos^4x)$ and set $u=\sin^2x$ (so $\sin x\cos x\,dx=\frac12\,du$ and $\cos^4x=(1-u)^2$) to get a rational integral; then use $t=1-\frac{u}{2}$ and partial fractions. Result: $16\ln 2-11$.`,
    videoUrl: "",
    tags: ["trig", "substitution", "rational", "logarithms"],
  },
  {
    slug: "2025-12-23-hard-integral",
    date: "2025-12-23",
    title: "Hard Integral 23/12/25",
    originalUrl: "https://dailyintegral.com",
    promptLatex: String.raw`\int_{-\infty}^{\infty}\frac{e^{-x^{2}}}{1+x^{2}}\,dx`,
    notes: String.raw`Key idea: use $\frac{1}{1+x^2}=\int_0^\infty e^{-t}\cos(tx)\,dt$, swap integrals, and apply the Gaussian transform $\int_{-\infty}^{\infty}e^{-x^2}\cos(tx)\,dx=\sqrt\pi\,e^{-t^2/4}$. Result: $\pi e\,\operatorname{erfc}(1)=\pi e\,(1-\operatorname{erf}(1))$.`,
    videoUrl: "",
    tags: ["gaussian", "fourier", "parameter-integral", "error-function"],
  },

  // Medium / Hard — 17/09/25
  {
    slug: "2025-09-17-medium-integral",
    date: "2025-09-17",
    title: "Medium Integral 17/09/25",
    originalUrl: "https://dailyintegral.com",
    promptLatex: String.raw`\int_{0}^{1}\frac{x}{x^{2}+2x+2}\,dx`,
    notes: String.raw`Key idea: rewrite $x=\frac12(2x+2)-1$ to split into a $\ln(\text{quadratic})$ term plus an arctan term after completing the square $x^2+2x+2=(x+1)^2+1$. Result: $\frac12\ln\!\left(\frac52\right)-\arctan(2)+\frac{\pi}{4}$.`,
    videoUrl: "https://youtu.be/sCcyOzVIrYc",
    tags: ["algebra", "complete-the-square", "logarithms", "arctan"],
  },
  {
    slug: "2025-09-17-hard-integral",
    date: "2025-09-17",
    title: "Hard Integral 17/09/25",
    originalUrl: "https://dailyintegral.com",
    promptLatex: String.raw`\int_{0}^{1}\frac{x^{2}+1}{x^{4}+x^{2}+1}\,dx`,
    notes: String.raw`Key idea: factor $x^4+x^2+1=(x^2+x+1)(x^2-x+1)$ and use the symmetric split $\frac{x^2+1}{(x^2+x+1)(x^2-x+1)}=\frac12\!\left(\frac{1}{x^2+x+1}+\frac{1}{x^2-x+1}\right)$; each piece integrates via arctan after completing squares. Result: $\frac{\pi}{2\sqrt3}$.`,
    videoUrl: "https://youtu.be/3HzAWI8Y8p4",
    tags: ["factorisation", "partial-fractions", "arctan"],
  },

  // Easy / Medium / Hard — 18/09/25
  {
    slug: "2025-09-18-easy-integral",
    date: "2025-09-18",
    title: "Easy Integral 18/09/25",
    originalUrl: "https://dailyintegral.com",
    promptLatex: String.raw`\int_{0}^{\pi/3}\cos^{2}(2x)\,dx`,
    notes: String.raw`Key idea: power-reduction $\cos^2\theta=\frac{1+\cos(2\theta)}{2}$ with $\theta=2x$. Result: $\frac{\pi}{6}-\frac{\sqrt3}{16}$.`,
    videoUrl: "",
    tags: ["trig", "identity", "power-reduction"],
  },
  {
    slug: "2025-09-18-medium-integral",
    date: "2025-09-18",
    title: "Medium Integral 18/09/25",
    originalUrl: "https://dailyintegral.com",
    promptLatex: String.raw`\int_{\pi/6}^{\pi/3} x\cos(2x)\,dx`,
    notes: String.raw`Key idea: integration by parts with $u=x$, $dv=\cos(2x)\,dx$ so $v=\frac12\sin(2x)$, then plug the endpoints. Result: $\frac{\pi\sqrt3}{24}-\frac14$.`,
    videoUrl: "",
    tags: ["integration-by-parts", "trig"],
  },
  {
    slug: "2025-09-18-hard-integral",
    date: "2025-09-18",
    title: "Hard Integral 18/09/25",
    originalUrl: "https://dailyintegral.com",
    promptLatex: String.raw`\int_{0}^{\pi/3}\frac{1-\cos x}{2+\sin x+\cos x}\,dx`,
    notes: String.raw`Key idea: Weierstrass substitution $t=\tan\frac{x}{2}$ makes $\sin x,\cos x,dx$ rational in $t$, reducing the integral to partial fractions. Result: $\frac12\ln\!\left(\frac{6}{5+\sqrt3}\right)-\frac{\pi}{6}+2\sqrt2\,\arctan\!\left(\frac{\sqrt2}{3\sqrt3+1}\right)$.`,
    videoUrl: "",
    tags: ["weierstrass", "tan-half-angle", "partial-fractions", "logarithms", "arctan"],
  },

  // Easy — 19/09/25
  {
    slug: "2025-09-19-easy-integral",
    date: "2025-09-19",
    title: "Easy Integral 19/09/25",
    originalUrl: "https://dailyintegral.com",
    promptLatex: String.raw`\int_{0}^{\pi/6}\sin^{2}(2x)\,dx`,
    notes: String.raw`Key idea: power-reduction $\sin^2\theta=\frac{1-\cos(2\theta)}{2}$ with $\theta=2x$. Result: $\frac{\pi}{12}-\frac{\sqrt3}{16}$.`,
    videoUrl: "",
    tags: ["trig", "identity", "power-reduction"],
  },

  {
  slug: "2025-12-24-easy-integral",
  date: "2025-12-24",
  title: "Easy Integral 24/12/25",
  originalUrl: "https://dailyintegral.com",
  promptLatex: String.raw`\int_{0}^{\pi/4}\frac{\cos(2x)}{\cos x-\sin x}\,dx`,
  notes: String.raw`Key idea: use $\cos(2x)=\cos^2x-\sin^2x=(\cos x-\sin x)(\cos x+\sin x)$, so the fraction simplifies to $\cos x+\sin x$. Then $\int_0^{\pi/4}(\cos x+\sin x)\,dx=[\sin x-\cos x]_0^{\pi/4}=1$. Result: $1$.`,
  videoUrl: "",
  tags: ["trig", "identity", "cancellation"],
},
{
  slug: "2025-12-24-medium-integral",
  date: "2025-12-24",
  title: "Medium Integral 24/12/25",
  originalUrl: "https://dailyintegral.com",
  promptLatex: String.raw`\int_{0}^{\pi/2}\frac{\sin^2 x+\sec x}{1+\tan x}\,dx`,
  notes: String.raw`Key idea: rewrite $\frac{\sin^2x+\sec x}{1+\tan x}=\frac{\cos x\sin^2x+1}{\sin x+\cos x}$, then apply the symmetry $x\mapsto \frac{\pi}{2}-x$ and average the two forms to get $I=\frac12\int_0^{\pi/2}\sin x\cos x\,dx+\int_0^{\pi/2}\frac{dx}{\sin x+\cos x}$. Now $\int_0^{\pi/2}\sin x\cos x\,dx=\frac12$, and $\sin x+\cos x=\sqrt2\sin(x+\frac{\pi}{4})$ gives $\int_0^{\pi/2}\frac{dx}{\sin x+\cos x}=\sqrt2\ln(1+\sqrt2)$. Result: $\frac14+\sqrt2\ln(1+\sqrt2)$.`,
  videoUrl: "",
  tags: ["symmetry", "trig", "log", "csc-integral"],
},
{
  slug: "2025-12-24-hard-integral",
  date: "2025-12-24",
  title: "Hard Integral 24/12/25",
  originalUrl: "https://dailyintegral.com",
  promptLatex: String.raw`\int_{0}^{\infty}\frac{1-\cos x}{x^{2}}\cdot\frac{1}{1+x^{2}}\,dx`,
  notes: String.raw`Key idea: split $\frac{1}{x^2(1+x^2)}=\frac{1}{x^2}-\frac{1}{1+x^2}$. Then
$I=\int_0^\infty\frac{1-\cos x}{x^2}\,dx-\int_0^\infty\frac{1-\cos x}{1+x^2}\,dx$.
For the first, integrate by parts: $\int_0^\infty\frac{1-\cos x}{x^2}\,dx=\int_0^\infty\frac{\sin x}{x}\,dx=\frac{\pi}{2}$.
For the second, $\int_0^\infty\frac{1}{1+x^2}\,dx=\frac{\pi}{2}$ and the standard cosine-transform $\int_0^\infty\frac{\cos x}{1+x^2}\,dx=\frac{\pi}{2}e^{-1}$, so it equals $\frac{\pi}{2}(1-e^{-1})$.
Hence $I=\frac{\pi}{2}-\frac{\pi}{2}(1-e^{-1})=\frac{\pi}{2e}$. Result: $\frac{\pi}{2e}$.`,
  videoUrl: "",
  tags: ["improper-integral", "partial-fractions", "integration-by-parts", "fourier-transform"],
},

{
  slug: "2025-09-19-medium-integral",
  date: "2025-09-19",
  title: "Medium Integral 19/09/25",
  originalUrl: "https://dailyintegral.com",
  promptLatex: String.raw`\int_{0}^{\ln 3}\frac{e^x}{e^{2x}+e^x+1}\,dx`,
  notes: String.raw`Key idea: substitute $t=e^x$ so $dt=e^x\,dx$ and the bounds $x:0\to\ln3$ become $t:1\to3$. Then
\[
I=\int_{1}^{3}\frac{1}{t^2+t+1}\,dt
=\int_{1}^{3}\frac{1}{(t+\tfrac12)^2+(\tfrac{\sqrt3}{2})^2}\,dt
=\frac{2}{\sqrt3}\Big[\arctan\!\Big(\frac{2t+1}{\sqrt3}\Big)\Big]_{1}^{3}.
\]
This equals $\frac{2}{\sqrt3}\big(\arctan(\tfrac{7}{\sqrt3})-\arctan(\sqrt3)\big)$, and using $\arctan a-\arctan b=\arctan\!\big(\frac{a-b}{1+ab}\big)$ (valid here since both angles are in $(0,\pi/2)$) gives
\[
I=\frac{2}{\sqrt3}\arctan\!\Big(\frac{1}{2\sqrt3}\Big).
\]
Result: $\frac{2}{\sqrt3}\arctan\!\big(\frac{1}{2\sqrt3}\big)$.`,
  videoUrl: "",
  tags: ["substitution", "arctan", "complete-square"],
},
{
  slug: "2025-09-19-hard-integral",
  date: "2025-09-19",
  title: "Hard Integral 19/09/25",
  originalUrl: "https://dailyintegral.com",
  promptLatex: String.raw`\int_{0}^{1}\frac{x^4+1}{x^4+x^2+1}\,dx`,
  notes: String.raw`Key idea: write $\frac{x^4+1}{x^4+x^2+1}=1-\frac{x^2}{x^4+x^2+1}$, so
\[
I=1-\int_0^1\frac{x^2}{x^4+x^2+1}\,dx.
\]
Factor $x^4+x^2+1=(x^2+x+1)(x^2-x+1)$ and use the clean split
\[
\frac{x^2}{(x^2+x+1)(x^2-x+1)}
=\frac12\left(\frac{x}{x^2-x+1}-\frac{x}{x^2+x+1}\right).
\]
Each term integrates by “derivative + leftover constant”: for example,
$x=\tfrac12(2x-1)+\tfrac12$ over $x^2-x+1$, giving a $\ln$ part plus an $\arctan$ part after completing the square.
Carrying this out from $0$ to $1$ gives
\[
\int_0^1\frac{x^2}{x^4+x^2+1}\,dx=-\frac14\ln 3+\frac{\pi}{4\sqrt3}.
\]
Hence
\[
I=1+\frac{\ln 3}{4}-\frac{\pi}{4\sqrt3}.
\]
Result: $1+\frac{\ln 3}{4}-\frac{\pi}{4\sqrt3}$.`,
  videoUrl: "",
  tags: ["factorisation", "partial-fractions", "log", "arctan"],
},

  ];
  