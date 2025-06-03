// import React from "react";
// // eslint-disable-next-line no-unused-vars
// import { AnimatePresence, motion } from "framer-motion";

// // This component now relies on its contentKey changing to trigger animations
// // for its single, always-present (from AnimatePresence's perspective) motion.div child.
// const AnimationOnClick = ({ children, className, contentKey, ...rest }) => {
//   return (
//     // exitBeforeEnter ensures one version of the content exits before the next enters.
//     <AnimatePresence initial={false} exitBeforeEnter>
//       <motion.div
//         key={contentKey} // When this key changes, AnimatePresence handles exit of old, enter of new.
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }} // The transition prop below applies here.
//         exit={{
//           opacity: 0,
//           transition: { duration: 0.2, ease: "easeInOut" }, // Exit: 0.2s
//         }}
//         // This transition applies to the 'animate' state (the enter animation).
//         // Delay will occur after the previous element (if any) has exited.
//         transition={{ duration: 0.3, ease: "easeInOut", delay: 0.25 }} // Enter: 0.25s delay, then 0.3s duration
//         className={className}
//         {...rest}
//       >
//         {children}
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default AnimationOnClick;
