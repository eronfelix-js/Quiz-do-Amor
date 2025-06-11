import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const questions = [
   {
    question: "que dia nos conhcemos?",
    options: ["dia 25", "dia 27", "dia 26", "dia 28"],
    correct: "dia 27",
    prize: "Você ganhou lirios",
    image: "/images/lirios.jpg"
  },
  {
    question: "Onde foi nosso primeiro date?",
    options: ["Na academia", "No cinema", "Em casa", "Em um restaurante"],
    correct: "Em casa",
    prize: "Você ganhou um gel beijável",
    image: "/images/image.webp"
  },
   {
    question: "oq comemos na primeira vez que a gente saiu?",
    options: ["sushi", "x tudo", "açai", "macarrão"],
    correct: "açai",
    prize: "Você ganhou um hidratante brand",
    image: "/images/hidratante.jpg"
  },
  {
    question: "Qual é minha comida favorita?",
    options: ["Pizza", "Lasanha", "Hambúrguer", "Sushi"],
    correct: "Lasanha",
    prize: "Vale um gloss da Franciny",
    image: "/images/Gloss-Labial.webp"
  },
  {
    question: "Qual nossa música?",
    options: ["Lembrança Boa", "Tenesse whisky", "sonha cmg", "Yellow"],
    correct: "Lembrança Boa",
    prize: "Você ganhou um perfume arabe",
    image: "/images/fakhar_rose_25ml.jpg"
  }
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option: string) => {
    const current = questions[step];
    const correct = option === current.correct;
    setIsCorrect(correct);
    setShowAnswer(true);
    setTimeout(() => {
      setShowAnswer(false);
      if (step + 1 < questions.length) {
        setStep(step + 1);
      } else {
        setFinished(true);
      }
    }, 2500);
  };

  return (
    <>
      <AnimatePresence>
        {showAnswer && isCorrect && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-2xl text-center max-w-sm"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h2 className="text-xl font-bold text-pink-600 mb-2">🎁 Presente!</h2>
              <p className="mb-4">{questions[step].prize}</p>
              <img
                src={questions[step].image}
                alt="Presente"
                className="rounded-lg shadow-md mb-4 w-full h-48 object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-gradient-to-br from-pink-200 to-red-300 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">
          {!finished ? (
            <>
              <h1 className="text-2xl font-bold mb-4 text-red-500">Quiz do Amor ❤️</h1>
              <motion.p
                className="text-lg mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={questions[step].question}
              >
                {questions[step].question}
              </motion.p>
              <div className="grid grid-cols-1 gap-3">
                {questions[step].options.map((option) => (
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className="bg-pink-100 hover:bg-pink-200 text-pink-700 py-2 px-4 rounded-full shadow-md"
                  >
                    {option}
                  </motion.button>
                ))}
              </div>

              <AnimatePresence>
                {showAnswer && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-6 text-lg font-semibold"
                  >
                    {isCorrect
                      ? questions[step].prize
                      : "Errrrrou, tente novamente 🥺"}
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold text-pink-600">
                Parabéns, meu amor! 🎉
              </h2>
              <p className="mt-4 text-lg">Você completou o quiz do amor 💕</p>
              <p className="mt-4 text-lg">Seu presente esta a caminho 💕</p>
              <p className="mt-2">💖</p>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}
