import type { ReactNode } from "react";

import clsx from "clsx";
import { useState } from "react";

const TABS = {
  BALL: "ball",
  WINE: "wine",
} as const;

interface ButtonProps {
  emoji: string;
  isSelected?: boolean;
  label: string;
  onClick: () => void;
  shrink?: boolean;
}

export default function DetailsPanel({
  ballContent,
  wineContent,
  ...rest
}: {
  ballContent?: ReactNode;
  wineContent?: ReactNode;
}) {
  // https://stackoverflow.com/a/60148768
  const [selectedTab, setSelectedTab] =
    useState<(typeof TABS)[keyof typeof TABS]>();
  const isDeterminate = !!selectedTab;

  return (
    <div {...rest} className="mt-8">
      <div
        className={clsx([
          "flex flex-row justify-center transition-[gap] duration-500 ease-out",
          isDeterminate ? "gap-4 sm:gap-8" : "gap-4 sm:gap-4",
        ])}
      >
        <Button
          emoji="🏀"
          isSelected={selectedTab === TABS.BALL}
          label="Ball"
          onClick={() => setSelectedTab(TABS.BALL)}
          shrink={isDeterminate}
        />
        <div
          className={clsx([
            // min width required to prevent divider from collapsing / disappearing on mobile
            // unclear why, tho, i assume something about flex layout I'm missing, maybe from tailwind?
            "min-w-1 self-center bg-yellow-100 transition-[height] duration-500 ease-out",
            isDeterminate ? "h-40 md:h-64" : "h-64 md:h-80",
          ])}
        ></div>
        <Button
          emoji="🍷"
          isSelected={selectedTab === TABS.WINE}
          label="Wine"
          onClick={() => setSelectedTab(TABS.WINE)}
          shrink={isDeterminate}
        />
      </div>
      {selectedTab && (
        <section className="-mx-16 my-8 -mb-24 bg-yellow-50 p-8">
          {selectedTab === TABS.BALL && ballContent}
          {selectedTab === TABS.WINE && wineContent}
        </section>
      )}
    </div>
  );
}

function Button({
  emoji,
  isSelected = false,
  label,
  onClick,
  shrink,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx([
        "space-y-4 font-emoji leading-[initial] text-yellow-100 transition-[font-size,padding] duration-500 ease-out hover:text-rose-300", // leading-initial to override line height built in to text
        shrink
          ? "p-4 text-4xl md:p-12 lg:text-6xl"
          : "p-4 text-4xl md:p-16 lg:text-8xl",
        { "[&&]:text-rose-300": isSelected },
      ])}
      onClick={onClick}
      type="button"
      {...rest}
    >
      <div>{emoji}</div>
      <div className="font-title uppercase tracking-widest">{label}</div>
    </button>
  );
}
