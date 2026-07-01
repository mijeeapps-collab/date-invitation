"use client";

import { useState } from "react";

export default function Home() {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = async () => {
    setAccepted(true);

    await fetch("/api/accept", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answer: "Тийм ❤️",
      }),
    });
  };

  const [noText, setNoText] = useState("😊 Өөр өдөр зүгээрээ。");

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-50 to-white flex items-center justify-center p-6">
      <div className="max-w-xl w-full rounded-3xl bg-white/80 backdrop-blur-lg shadow-2xl p-10 text-center">

        <h1 className="text-5xl mb-6">❤️</h1>

        <h2 className="text-4xl font-bold text-pink-600 mb-6">
          Хөөрхөн Энхзул та надтай болзоонд явах уу？
        </h2>

        <p className="text-gray-700 leading-8 text-lg">
          Чамтай танилцсандаа их азтай гэж боддог. <br />
          <br />
          Би чамд нэгэн санал тавихыг хүсч байна. <br />
          <br />
          <br />
          Хэрвээ боломжтой бол, надтай хамтдаа нэгэн өдрийг өнгөрөөхийг хүсч байна. <br />  
          <br />
          Хэрвээ та сонирхож байвал, доорх товчлуур дээр дарж надад мэдэгдээрэй. <br />
        </p>

        <div className="mt-8 space-y-2 text-gray-600">
          <p>📅 8月6日（Пүрэв）</p>
          <p>📍 Цуглах газар: Токио төв буудал</p>
          <p>🍽 Өдрийн зоог → Аквариум → Кафе</p>
        </div>

        {!accepted ? (
          <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
            <button
              onClick={handleAccept}
              className="rounded-full bg-pink-500 px-8 py-3 text-white font-bold hover:bg-pink-600 transition"
            >
              ❤️ Тийм. Хамт явья！
            </button>

            <button
              onClick={() => setNoText("Үгүй 🙂‍↔️ хажуу талын товчыг дар!")}
              className="rounded-full border border-pink-400 px-8 py-3 text-pink-600 hover:bg-pink-50 transition"
            >
              {noText}
            </button>
          </div>
        ) : (
          <div className="mt-10">
            <h3 className="text-3xl font-bold text-pink-600">
              🎉 Баярлалаа！！
            </h3>

            <p className="mt-4 text-lg">
              Хамт нэгэн өдрийг хөгжилтэй өнгөрөөе ❤️
            </p>
          </div>
        )}
      </div>
    </main>
  );
}