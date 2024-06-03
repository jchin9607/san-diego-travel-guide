import { motion, useScroll, useTransform} from "framer-motion";


function Header() {
    const { scrollYProgress } = useScroll();

    const mappedValue = useTransform(scrollYProgress, [0, 1], [0, 6]);

    return (
        <motion.div
            style={{opacity: mappedValue}}
        >
            <header>
                <img src="https://images.unsplash.com/photo-1583274283821-4c3a9be97d1a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </header>
        </motion.div>
    )
}

export default Header