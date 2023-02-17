import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hey There,
            <br />
            I'm Fabio.
          </motion.span>
          <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
            Third-culture kid from Montreal, Canada
            <br />
            Comp. Sci. student at McGill University{" "}
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./me.png" alt="" />
        </motion.div>

        <a className={css.email} href="mailto:fabio.gongomonte@gmail.com">
          fabio.gongomonte@gmail.com
        </a>

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="secondaryText">
              <div>Languages spoken: French, English</div>
              <div>Spanish, Chinese Mandarin, Korean</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <img style= {{ width: 200, height: 200}} src="./mcgill.png" alt="" />
            <span>Expected Graduation date</span>
            <span>June 2024</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;