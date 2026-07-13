import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const messages = [
  "Initializing AETHRA...",
  "Loading Career Intelligence Engine...",
  "Analyzing Future Opportunities...",
  "Preparing Personalized Experience...",
];

const AethraLoader = () => {
  const [index, setIndex] = useState(0);

  const audioRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev < messages.length - 1
          ? prev + 1
          : prev
      );
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;

      audioRef.current
  .play()
  .then(() => {
    console.log("✅ Audio Playing");
  })
  .catch((err) => {
    console.log("❌ Audio Blocked:", err);
  });
    }
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col justify-center items-center overflow-hidden">

      {/* Startup Sound */}
      <audio
        ref={audioRef}
        src="/sounds/aethra-startup.mp3"
      />

      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute
          w-[500px]
          h-[500px]
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          w-[400px]
          h-[400px]
          rounded-full
          bg-purple-500/10
          blur-3xl
        "
      />

      {/* Logo */}
      <motion.div
        animate={{
          rotate: [0, 8, -8, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="mb-8"
      >
        <img
          src="/favicon.jpg"
          alt="Aethra"
          className="
            w-32
            h-32
            object-contain
            drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]
          "
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="
          text-6xl
          font-black
          bg-gradient-to-r
          from-cyan-400
          to-purple-500
          bg-clip-text
          text-transparent
          mb-6
          tracking-wider
        "
      >
        AETHRA
      </motion.h1>

      {/* Message */}
      <motion.p
        key={index}
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          text-cyan-300
          text-lg
          font-medium
          mb-10
        "
      >
        {messages[index]}
      </motion.p>

      {/* Progress Bar */}
      <div
        className="
          w-80
          h-3
          bg-slate-800
          rounded-full
          overflow-hidden
          border
          border-slate-700
        "
      >
        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: "100%",
          }}
          transition={{
            duration: 5,
            ease: "linear",
          }}
          className="
            h-full
            bg-gradient-to-r
            from-cyan-500
            via-blue-500
            to-purple-500
          "
        />
      </div>

      {/* Status */}
      <motion.div
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          mt-5
          text-slate-500
          text-sm
          tracking-widest
        "
      >
        AI CAREER INTELLIGENCE PLATFORM
      </motion.div>

    </div>
  );
};

export default AethraLoader;