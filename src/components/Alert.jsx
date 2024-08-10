import {motion} from "framer-motion"
import { IoMdCloseCircleOutline } from "react-icons/io";
import "../../public/css/alert.css"
export default function Alert({toggle}){
    return (
        <motion.div 
        className="alert"
        transition={{ease:"ease",type: "spring", bounce: 0.25,delay:1
            }}
        initial={{x:"1000%"}}
        animate={{x:0}}
        exit={{ x: -300, opacity: 0,transition:{delay:0} }}
        >
        <IoMdCloseCircleOutline  role="button" className="alert-btn" onClick={()=> toggle(false)}/>

          <h3>
            An API call will be made on every reload since API caching is not set up.
          </h3>
        </motion.div>
    )
}