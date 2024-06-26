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

const skills = [
    {
        title:"Three Js / React Three Fiber",
        level:40,
    },
    {
        title:"React JS",
        level:80,
    },
    {
        title:"Node JS",
        level:60,
    },
    {
        title:"JAVA",
        level:50,
    },
]

const languages = [
    {
        title:"English",
        level:75,
    },
    {
        title:"Sinhala",
        level:100,
    },
]

const Skills = () => {
    return (
        <Section>
        <motion.div whileInView={"visible"}>
          <h2 className="text-5xl font-bold">Skills</h2>
          <div className=" mt-8 space-y-4">
            {skills.map((skill, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-xl font-bold text-gray-800"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                >
                  {skill.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full "
                    style={{ width: `${skill.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 1 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-5xl font-bold mt-10">Languages</h2>
            <div className=" mt-8 space-y-4">
              {languages.map((lng, index) => (
                <div className="w-64" key={index}>
                  <motion.h3
                    className="text-xl font-bold text-gray-800"
                    initial={{
                      opacity: 0,
                    }}
                    variants={{
                      visible: {
                        opacity: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  >
                    {lng.title}
                  </motion.h3>
                  <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                    <motion.div
                      className="h-full bg-indigo-500 rounded-full "
                      style={{ width: `${lng.level}%` }}
                      initial={{
                        scaleX: 0,
                        originX: 0,
                      }}
                      variants={{
                        visible: {
                          scaleX: 1,
                          transition: {
                            duration: 1,
                            delay: 2 + index * 0.2,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>
    );
  };

export default Skills