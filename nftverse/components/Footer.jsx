'use client';

import { motion } from "framer-motion";
import { socials } from "@/constants";

import styles from "@/app";
import { footerVariants } from "@/utils/motion";

const Footer = () => (
    <motion.footer
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative`}
    >
        <div className="footer-gradient" />
        <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
            <h4 className="flex items-center justify-between flex-wrap gap-5">
                Enter the NFTVerse
            </h4>
            <button type="button" className="flex justify-center items-center lg:w-1/3 h-fit mx-auto py-4 px-6 bg-[#338aad] rounded-[32px] gap-[12px]">
                <img src="/btc.svg" alt="bitcoin" className="w-[24px] h-[24px] object-contain" />
                <span className="font-normal text-[16px] text-white">
                    Enter NFTVerse
                </span>
            </button>
        </div>

        <div className="flex flex-col">
            <div className="mb-[50px] h-[2px] bg-white opacity-10" />

            <div className="flex items-center justify-between flex-wrap gap-4">
                <h4 className="font-extrabold text-[24px] text-white">
                    NFTVERUS
                </h4>
                <p className="font-normal text-[14px] text-white opacity-50">
                    Copyright © 2021 - 2022 NFTVersus. All rights reserved.
                </p>

                <div className="flex gap-4">
                    {socials.map((social) => (
                        <img
                            key={social.name}
                            src={social.url}
                            alt={social.name}
                            className="w-[24px] h-[24px] object-contain cursor-pointer"
                        />
                    ))}
                </div>
            </div>
        </div>
    </motion.footer>
);

export default Footer;