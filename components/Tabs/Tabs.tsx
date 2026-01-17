import { useRef, useState, useEffect } from "react";
import css from "./Tabs.module.css";

export default function Tabs({
  activeTab,
  onChange,
}: {
  activeTab: "features" | "reviews";
  onChange: (tab: "features" | "reviews") => void;
}) {
  const featuresRef = useRef<HTMLButtonElement>(null);
  const reviewsRef = useRef<HTMLButtonElement>(null);
  const [sliderStyle, setSliderStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });

  useEffect(() => {
    const currentRef = activeTab === "features" ? featuresRef.current : reviewsRef.current;
    if (currentRef) {
      setSliderStyle({
        left: currentRef.offsetLeft,
        width: currentRef.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <div className={css.tabsSection}>
      <div className={css.tabsWrapper}>
        <button
          ref={featuresRef}
          className={activeTab === "features" ? css.active : ""}
          onClick={() => onChange("features")}
        >
          Features
        </button>
        <button
          ref={reviewsRef}
          className={activeTab === "reviews" ? css.active : ""}
          onClick={() => onChange("reviews")}
        >
          Reviews
        </button>

        <span
          className={css.slider}
          style={{
            left: sliderStyle.left,
            width: sliderStyle.width,
          }}
        />
      </div>
      <div className={css.tabsLine} />
    </div>
  );
}
