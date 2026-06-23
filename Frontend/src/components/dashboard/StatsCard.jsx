import { motion } from "framer-motion";

const StatsCard = ({
  title,
  value,
  icon,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="
      bg-white
      rounded-2xl
      shadow-lg
      p-6
      flex
      justify-between
      items-center
      "
    >
      <div>
        <p className="text-gray-500">
          {title}
        </p>

        <h2 className="text-3xl font-bold mt-2">
          {value}
        </h2>
      </div>

      <div className="text-blue-600">
        {icon}
      </div>
    </motion.div>
  );
};

export default StatsCard;