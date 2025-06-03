import React, { useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import {
  motion,
  useInView,
  useAnimationControls,
  useScroll,
} from "framer-motion";

const AnimatedSection = ({ children, className, ...rest }) => {
  const ref = useRef(null);
  const controls = useAnimationControls();
  const { scrollY } = useScroll();

  // once: false is crucial for re-animation and detecting entry from different directions.
  // amount: 0.2 means 20% of the element needs to be visible to trigger.
  const isInView = useInView(ref, { amount: 0.2, once: false });

  const lastScrollY = useRef(0);
  // Assume initial scroll direction is downwards or the element is first encountered by scrolling down.
  const scrollDirection = useRef("down");
  const hasBeenInView = useRef(false); // Tracks if the component has been in view at least once

  useEffect(() => {
    // Update scroll direction based on scrollY changes
    return scrollY.onChange((latest) => {
      if (latest > lastScrollY.current) {
        scrollDirection.current = "down";
      } else if (latest < lastScrollY.current) {
        scrollDirection.current = "up";
      }
      // For very small changes or no change, direction remains same
      lastScrollY.current = latest;
    });
  }, [scrollY]);

  const animationVariants = {
    hiddenBottom: { opacity: 0, y: 50 }, // For elements entering from the top (scrolling down)
    hiddenTop: { opacity: 0, y: -50 }, // For elements entering from the bottom (scrolling up)
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      hasBeenInView.current = true;
    } else {
      // Only set the exit state if it has been in view before.
      // This prevents overriding the initial state before first appearance.
      if (hasBeenInView.current) {
        // Element is not in view; set its "hidden" state based on the direction it was moving when it exited.
        // This determined hidden state will be the starting point for the next "visible" animation.
        if (scrollDirection.current === "down") {
          // User was scrolling down, so element exited towards the top.
          // Set its state to "hiddenTop" to prepare for re-entry from the bottom (user scrolling up).
          controls.set("hiddenTop");
        } else {
          // scrollDirection.current === 'up'
          // User was scrolling up, so element exited towards the bottom.
          // Set its state to "hiddenBottom" to prepare for re-entry from the top (user scrolling down).
          controls.set("hiddenBottom");
        }
      }
    }
  }, [isInView, controls]); // scrollDirection.current is a ref, its change doesn't need to be a dependency,
  // but its current value is used when isInView changes.

  return (
    <motion.div
      ref={ref}
      animate={controls}
      whileInView={{ opacity: 1, y: 0 }}
      // Initial state before any scrolling or first appearance.
      // Assumes most elements will first be revealed by scrolling down.
      initial="hiddenBottom"
      variants={animationVariants}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
