'use client';

import { motion } from "framer-motion";

import styles from "@/app";
import { navVariants } from "../utils/motion";

const Navbar = () => (
    <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative`}
    >
        <div />
        <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
            <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
                NFTVerdus
            </h2>
            <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain cursor-pointer" />
        </div>
    </motion.nav>
);

export default Navbar;