import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  const backendUrl = process.env.BACKEND_URL;
  if (!backendUrl) {
    return res.status(500).json({ error: "BACKEND_URL not configured" });
  }

  const { path } = req.query;
  const targetPath = Array.isArray(path) ? path.join("/") : path || "";
  const url = new URL(targetPath, backendUrl);

  // Forward query string
  const queryString = req.url?.split("?")[1];
  if (queryString) {
    url.search = queryString;
  }

  const headers: Record<string, string> = {
    "Content-Type": req.headers["content-type"] || "application/json",
  };

  const fetchOptions: RequestInit = {
    method: req.method,
    headers,
  };

  if (req.method !== "GET" && req.method !== "HEAD" && req.body) {
    fetchOptions.body = JSON.stringify(req.body);
  }

  try {
    const response = await fetch(url.toString(), fetchOptions);
    const contentType = response.headers.get("content-type") || "";

    res.status(response.status);
    res.setHeader("Content-Type", contentType);

    if (contentType.includes("application/json")) {
      const data = await response.json();
      return res.json(data);
    }

    const text = await response.text();
    return res.send(text);
  } catch (error) {
    console.error("Proxy error:", error);
    return res.status(502).json({ error: "Backend unavailable" });
  }
}
