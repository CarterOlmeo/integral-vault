const repo =
  process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/${repo}` : "";

module.exports = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: { unoptimized: true },
};
