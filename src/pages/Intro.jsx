import { Link } from "react-router-dom";
import "../../public/css/intro.css";
import { useEffect, useState } from "react";
import { motion,AnimatePresence } from "framer-motion"
import Alert from "../components/Alert";

const spring = {
  type: "spring",
  damping: 10,
  stiffness: 100
}

export default function Intro() {
  const [alert,setAlert]= useState(true)
  
  useEffect(() => {
    document.title = "Intro to Catify";
  });

  return (
    <>
   

      <div className="intro">
        <div className="column left">
          <motion.h1 
          transition={spring}
          initial={{y:"100%",opacity:0}}
          
          animate={{y:0,opacity:1}}
          >Catify</motion.h1>
        </div>
        <div className="column right">
          <Link to="/pet" className="btn btn--primary">
            Search now
          </Link>
          <motion.div 
           initial={{ opacity: 0 }}
           transition={{delay:0.5}}
          animate={{opacity:1}}>
          <div className="cat">
            <div className="inner">
              <div className="face">
                <div className="whiskers"></div>
                <div className="whiskers whiskers--1"></div>
                <div className="whiskers whiskers--2"></div>
                <div className="whiskers whiskers--left whiskers--3"></div>
                <div className="whiskers whiskers--left whiskers--4"></div>
                <div className="whiskers whiskers--left  whiskers--5"></div>
                <div className="ear ear--left"></div>
                <div className="ear ear--right"></div>
                <div className="eye eye--left"></div>
                <div className="eye eye--right"></div>
                <div className="nose"></div>
              </div>

              <div className="cat__body"></div>
            </div>
            <div className="hand-wrapper">
              <div className="hand">
                <div className="finger finger--1">
                  <div className="nail"></div>
                </div>
                <div className="finger finger--2">
                  <div className="nail"></div>
                </div>
                <div className="finger finger--3">
                  <div className="nail"></div>
                </div>
              </div>
            </div>
          </div>
          </motion.div>
          <AnimatePresence mode="sync">
       {alert &&  <Alert toggle={setAlert}/>}
       </AnimatePresence>
      {!alert && <motion.footer 
      id="page-footer"
      transition={{ease:"easeOut"}}
      initial={{y:100,opacity:0}}
      animate={{opacity:1,y:0}}
      >&copy; 2024, Designed by Miguel Ortiz</motion.footer>}
     
        </div>
      </div>

    </>
  );
}
