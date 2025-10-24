import { NextResponse } from "next/server";

const PIPEDREAM_URL = process.env.PIPEDREAM_URL;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body.fullName || !body.email || !body.phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    try {
      if (!PIPEDREAM_URL) {
        return NextResponse.json(
          { error: "PIPEDREAM_URL is not configured" },
          { status: 500 }
        );
      }

      const r = await fetch(PIPEDREAM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!r.ok) {
        return NextResponse.json(
          { error: "Pipedream responded with " + r.status },
          { status: 502 }
        );
      }
      return NextResponse.json({ ok: true, forwarded: true });
    } catch (err) {
      return NextResponse.json({
        ok: true,
        forwarded: false,
        note: "Forward failed - check PIPEDREAM_URL",
      });
    }
  } catch (e) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}
