'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';

export default function Banner(): JSX.Element {
  return (
    <div className="flex justify-center mb-8">
      <Link aria-label="jooncco.com" href="/">
        <motion.div
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          transition={{type: 'spring'}}>
          <Image
            src="/img/banner.png"
            alt="banner image"
            width={1170}
            height={180}
          />
        </motion.div>
      </Link>
    </div>
  );
}