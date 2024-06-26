import React from 'react'
import { motion } from 'framer-motion';

const Section = (props)=>{
    const {children} = props;

    return <motion.section className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}
    initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    
    > {children} </motion.section>
}

const About = () => {
    return (
        <Section>
        <h1 className="text-6xl font-extrabold leading-snug">
          Hi, I'm
          <br />
          <span className="bg-white px-1 italic">Hiran Kaushalya</span>
        </h1>
        <motion.p
          className="text-lg text-gray-600 mt-4"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
        >
          I make 3d websites
          <br />
          using Three Js and React Js
        </motion.p>
        <motion.button
          className={`bg-indigo-600 text-white py-4 px-8 
        rounded-lg font-bold text-lg mt-16`}
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 2,
          }}
        >
          Contact me
        </motion.button>
      </Section>
    );
  };

export default About