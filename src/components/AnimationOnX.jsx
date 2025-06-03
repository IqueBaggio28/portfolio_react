// import React from "react";
// // eslint-disable-next-line no-unused-vars
// import { motion } from "framer-motion";

// // default: is from right to left\
// // direction: "right" or "left"
// // left is from left to right

// const AnimationOnX = ({
//   children,
//   className,
//   direction = "right",
//   ...rest
// }) => {
//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         x: direction === "right" ? 100 : direction === "down" ? 0 : -100,
//       }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: false, amount: 0.2 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className={className}
//       {...rest}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default AnimationOnX;
