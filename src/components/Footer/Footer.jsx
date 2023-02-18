import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Feel free to contact <br />
            me if you have any questions.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:fabio.gongomonte@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <a href="https://www.linkedin.com/in/fabio-gong-omonte/">LinkedIn</a>
            <a href="https://github.com/FabioGongOmonte">GitHub</a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;