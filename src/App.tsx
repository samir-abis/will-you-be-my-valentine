"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Não",
      "Tem certeza, amor?",
      "E se eu pedir com jeitinho?",
      "Por favorzinho",
      "Com um brigadeiro de colher?",
      "Que tal Netflix e brigadeiro?",
      "Xuxu, por favor!",
      "Fica com pena de mim",
      "Eu vou chorar... 😭",
      "Jura que não? 🥺",
      "Vou ficar de castigo?",
      "Mozi, meu amor! 💔",
      "Socorro, amor! 🆘",
      "Meu coração vai quebrar 💔",
      "Tão cruel assim? 😢",
      "Tudo bem, eu espero... ⏳",
      "Vou ficar de plantão aqui! 🥺",
      "Nem com um serenata de amor? 🎶",
      "Vou contar pra sua mãe! 👩",
      "Prometo ser o melhor namorado! 🤞",
      "Vamos dar um rolê na paulista? 🚶♂️",
      "Te levo pro Marechal! 🥙",
      "Faz isso não, vida 😢",
      "Tá me dando fora mesmo? 😭",
      "Vou escrever uma poesia pra você 📝",
      "Pelo nosso futuro? 🐱",
      "Última chance, amor? 💘",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">
            UHUUUU!!! Eu te amo, meu bem!! ;))
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Você quer ser meu amorzinho?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Sim
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
