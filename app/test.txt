"use client";

import { useState } from "react";

export default function Home() {
  const [accepted, setAccepted] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-50 to-white flex items-center justify-center p-6">
      <div className="max-w-xl w-full rounded-3xl bg-white/80 backdrop-blur-lg shadow-2xl p-10 text-center">

        <h1 className="text-5xl mb-6">❤️</h1>

        <h2 className="text-4xl font-bold text-pink-600 mb-6">
          一緒にデートに行きませんか？
        </h2>

        <p className="text-gray-700 leading-8 text-lg">
          いつもありがとう。
          <br />
          一緒にいる時間が本当に楽しいです。
          <br />
          <br />
          もし予定が合えば、
          <br />
          今度一緒に出かけませんか？
        </p>

        <div className="mt-8 space-y-2 text-gray-600">
          <p>📅 7月○日（土）</p>
          <p>📍 ○○駅集合</p>
          <p>🍽 ランチ → 水族館 → カフェ</p>
        </div>

        {!accepted ? (
          <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
            <button
              onClick={() => setAccepted(true)}
              className="rounded-full bg-pink-500 px-8 py-3 text-white font-bold hover:bg-pink-600 transition"
            >
              ❤️ はい、行きたい！
            </button>

            <button
              className="rounded-full border border-pink-400 px-8 py-3 text-pink-600 hover:bg-pink-50 transition"
            >
              😊 別の日なら大丈夫
            </button>
          </div>
        ) : (
          <div className="mt-10">
            <h3 className="text-3xl font-bold text-pink-600">
              🎉 ありがとう！！
            </h3>

            <p className="mt-4 text-lg">
              一緒に楽しもうね ❤️
            </p>
          </div>
        )}
      </div>
    </main>
  );
}