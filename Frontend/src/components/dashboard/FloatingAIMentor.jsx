import { Bot, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const FloatingAIMentor = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Glow Ring */}
      <div
        className="
          fixed
          bottom-8
          right-8
          w-20
          h-20
          rounded-full
          bg-cyan-500/20
          blur-2xl
          z-40
        "
      />

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => navigate("/mentor")}
        className="
          fixed
          bottom-8
          right-8
          z-50
          group
        "
      >
        {/* Main Button */}
        <div
          className="
            relative
            w-16
            h-16
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            via-blue-500
            to-purple-500
            flex
            items-center
            justify-center
            shadow-[0_0_35px_rgba(6,182,212,0.45)]
            overflow-hidden
          "
        >
          <Bot
            size={30}
            className="text-white"
          />

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              top-1
              right-1
            "
          >
            <Sparkles
              size={14}
              className="text-white"
            />
          </motion.div>
        </div>

        {/* Tooltip */}
        <div
          className="
            absolute
            right-20
            top-1/2
            -translate-y-1/2
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-300
            whitespace-nowrap
          "
        >
          <div
            className="
              px-4
              py-2
              rounded-xl
              bg-[#0F172A]
              border
              border-cyan-500/30
              text-cyan-300
              text-sm
              font-semibold
              shadow-xl
            "
          >
            Talk to Aethra AI
          </div>
        </div>

        {/* Pulse Ring */}
        <span
          className="
            absolute
            inset-0
            rounded-2xl
            animate-ping
            bg-cyan-500/20
          "
        />
      </motion.button>
    </>
  );
};

export default FloatingAIMentor;