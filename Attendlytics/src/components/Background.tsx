import { motion } from "framer-motion";

export default function Background() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 -z-10"
    >
      <motion.div
        animate={{
          background: [
            "linear-gradient(45deg, #0a0a0a, #1a1a1a, #0d0d0d)",
            "linear-gradient(135deg, #0a0a0a, #0d0d0d, #1a1a1a)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/20" />
    </motion.div>
  );
}
