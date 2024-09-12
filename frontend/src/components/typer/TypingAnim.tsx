import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
    sequence={[
        "Your AI, Your Rules! 🤖",
        1000, // wait 1 second
        "Powered by OpenAI 🧠",
        2500, // wait 2.5 seconds
        "Create with Confidence 🚀",
        2000, // wait 2 seconds
        "〄raZer Customized ChatGPT 🔥",
        3000, // wait 3 seconds
      ]}
      speed={40} // typing speed (lower is faster)
      style={{
        fontSize: "64px", // slightly bigger text
        fontWeight: "bold",
        background: "linear-gradient(to right, #00c6ff, #0072ff, #00ffea)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textShadow: "2px 2px 25px rgba(0, 0, 0, 0.8)",
        display: "inline-block",
        animation: "zoomInOut 5s infinite",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnim;
