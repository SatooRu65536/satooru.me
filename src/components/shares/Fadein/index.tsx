'use client';

import type { ComponentPropsWithoutRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import React, { createContext, useContext, useMemo } from 'react';

const StaggerContext = createContext(false);
const viewport = { once: true, margin: '0px 0px -120px' };

interface FadeInProps extends ComponentPropsWithoutRef<'div'> {
  direction?: 'left' | 'up';
}

export function FadeIn({ direction, ...props }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  const isStagger = useContext(StaggerContext);

  const variants = useMemo(() => {
    if (direction === 'left') {
      return {
        hidden: {
          opacity: 0,
          x: shouldReduceMotion === true ? 0 : 20,
        },
        visible: {
          opacity: 1,
          x: 0,
        },
      };
    }

    return {
      hidden: {
        opacity: 0,
        y: shouldReduceMotion === true ? 0 : 20,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    };
  }, [direction, shouldReduceMotion]);

  return (
    <motion.div
      transition={{ duration: 0.5 }}
      variants={variants}
      {...(isStagger
        ? {}
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport,
          })}
      {...props}
    />
  );
}

export function FadeInWithStagger({
  slow = false,
  speed,
  ...props
}: ComponentPropsWithoutRef<typeof motion.div> & {
  slow?: boolean;
  speed?: number;
}) {
  return (
    <StaggerContext.Provider value>
      <motion.div
        initial="hidden"
        transition={{
          staggerChildren: speed ?? (slow ? 0.2 : 0.1),
        }}
        viewport={viewport}
        whileInView="visible"
        {...props}
      />
    </StaggerContext.Provider>
  );
}
