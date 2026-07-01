import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("API called");

    const body = await req.json();

    const message =
      `🎉 デートのお誘い\n\n` +
      `回答：${body.answer}\n` +
      `日時：${new Date().toLocaleString("ja-JP")}`;

    const response = await fetch(
      "https://api.line.me/v2/bot/message/push",
      {
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
      }
    );

    const text = await response.text();

    console.log("LINE Status:", response.status);
    console.log("LINE Response:", text);

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      response: text,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      {
        error: String(err),
      },
      {
        status: 500,
      }
    );
  }
}