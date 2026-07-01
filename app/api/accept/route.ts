import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const message =
    `🎉 デートのお誘い\n\n` +
    `回答：${body.answer}\n` +
    `日時：${new Date().toLocaleString("ja-JP")}`;

  await fetch("https://api.line.me/v2/bot/message/push", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: process.env.LINE_USER_ID,
      messages: [
        {
          type: "text",
          text: message,
        },
      ],
    }),
  });

  return NextResponse.json({ success: true });
}