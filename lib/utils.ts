export function toYouTubeEmbed(url?: string) {
    if (!url) return null;
  
    // handles youtu.be/ID, youtube.com/watch?v=ID, youtube.com/embed/ID
    const yt = new URL(url);
    if (yt.hostname.includes("youtu.be")) {
      const id = yt.pathname.replace("/", "");
      return `https://www.youtube-nocookie.com/embed/${id}`;
    }
    if (yt.hostname.includes("youtube.com")) {
      if (yt.pathname.startsWith("/embed/")) return `https://www.youtube-nocookie.com${yt.pathname}`;
      const id = yt.searchParams.get("v");
      if (id) return `https://www.youtube-nocookie.com/embed/${id}`;
    }
  
    // fallback: try embedding as-is (works for some platforms)
    return url;
  }
  