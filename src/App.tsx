import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Engga?!",
      "Yakin nih?",
      "Yakin banget?",
      "Pikir lagi deh!",
      "Kesempatan Terakhir!",
      "Beneran gamau?",
      "Nanti Nyesel!",
      "Coba Pikirin lagi!",
      "Bener bener yakin emang?",
      "Kayaknya salah deh!",
      "Serius gamau?",
      "Pelit banget!, jajanin ya?",
      "JAJAN PLEASE!",
      "Ayolah pikir lagi?",
      "Itu jawaban kamu terakhir?",
      "Yah sedih nih ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            <div className="text-container">YAY ditunggu! wuuv u</div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
            <h1 className="text-container">
              {noCount === 0 ? "Eci, mau jajanin aku?" : getNoButtonText()}
            </h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Ya
              </button>

              <button onClick={handleNoClick} className="no-button">
                Ga!
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
