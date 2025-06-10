import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-red-300 flex items-center justify-center p-6">
      <motion.div
        className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-md w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-extrabold text-pink-600 mb-4">
          Quiz do Amor ❤️
        </h1>
        <p className="text-pink-700 mb-6">
          Egg Thais! hora da verdade vamos ver se vc lembra da nossa hisotria, valendo os seus presentes. Está pronta? 💖
        </p>

        <Link to="/quiz">
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition-all"
          >
            Começar o Quiz
          </motion.button>
        </Link>

        <Link to="/editar">
          <button className="mt-4 block mx-auto text-sm text-pink-600 hover:underline">
            Editar Perguntas
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
