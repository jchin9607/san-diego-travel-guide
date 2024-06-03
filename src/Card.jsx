import { motion, useScroll, useTransform } from "framer-motion";

const Card = (props) => {

    const { scrollYProgress } = useScroll();

    const mappedValue = useTransform(scrollYProgress, [0, 1], [0, -90]);
    const mappedValue2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const mappedValue3 = useTransform(scrollYProgress, [0, 1], [0, 100]);


    return (
        <div className="card" >
            <motion.img src={props.img} alt="" style={{ y: mappedValue3 }}/>
            <motion.div className="cardText" style={{ y: mappedValue }}>
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
            </motion.div>
            <motion.img src={props.img2} alt="" style={{ y: mappedValue2 }}/>
        </div>
    )
}

export default Card