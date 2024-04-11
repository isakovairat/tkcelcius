"use client"

import { useEffect } from "react"
import { motion, stagger, useAnimate } from "framer-motion"

import { cn } from "../lib/utils"

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string
  className?: string
}) => {
  let wordsArray = words.split(" ")
  const [scope, animate] = useAnimate()
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    )
  }, [scope.current])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="relative z-20 text-center text-xl text-muted-foreground opacity-0 "
            >
              {word}{" "}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div className={cn(className)}>
      <div className="text-2xl">{renderWords()}</div>
    </div>
  )
}
