import { useEffect, useState } from "react";
import { animate } from "framer-motion";

export default function AnimatedNumber({ value, suffix = "", format, className }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const animation = animate(0, value, {
      duration: 0.8,
      ease: "easeOut",
      onUpdate(latest) {
        setDisplayValue(Math.round(latest));
      },
    });

    return () => animation.stop();
  }, [value]);

  const rendered = format ? format(displayValue) : displayValue;

  return (
    <span className={className}>
      {rendered}
      {suffix}
    </span>
  );
}
