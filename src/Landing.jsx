import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const Landing = () => {
    const { scrollY } = useScroll();
    const lastNumber = window.innerWidth < 984 ? 150 : 50;
    const mappedValue = useTransform(scrollY, [0, 888], [1, lastNumber]);

    const [disY, setDisY] = useState(0);
    const [disX, setDisX] = useState(0);
    

    useEffect(() => {
        const updateDisYAndDisX = () => {
            const heightOf = document.querySelector(".front h1").offsetHeight;
            const widthOf = document.querySelector(".front h1 span").offsetWidth;
            const leftPadding = parseFloat(window.getComputedStyle(document.querySelector('.front h1'), null).getPropertyValue('padding-left'));
            const newDisY = ((window.innerHeight - heightOf) + heightOf * (4.4/10.6))/window.innerHeight;
            const newDisX = (leftPadding + (widthOf/2))/window.innerWidth + 0.015;
            console.log(newDisX, newDisY)
            setDisY(newDisY);
            setDisX(newDisX);
        };
    
        updateDisYAndDisX(); // Initial call
    
        window.addEventListener('resize', updateDisYAndDisX);
    
        return () => {
            window.removeEventListener('resize', updateDisYAndDisX);
        };
    }, []);
    
    
    return (
        
        <div className="container-landing">
            
            <div className="front">
                <motion.div
                    // initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    // transition={{ duration: 1 }}
                    className="landing-header"
                    style ={{ scale: mappedValue, originX: disX, originY: disY }}
                    
                >
                    <div className="headerlandcont">
                        <h1><span>S</span>an Diego</h1>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Landing