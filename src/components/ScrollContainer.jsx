import { motion } from 'framer-motion'

const ScrollContainer = ({ children }) => {
  return (
    <motion.div
      style={{
        position: 'sticky',
        top: 0,
        height: '200vh',
        overflowY: 'scroll',
      }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollContainer
