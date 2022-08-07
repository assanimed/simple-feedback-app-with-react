import { Link } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import FeedBackList from "../Components/FeedBackList";
import FeedBackStats from "../Components/FeedBackStats";
import FeedBackForm from "../Components/FeedBackForm";

function Home() {
  return (
    <div className="container">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FeedBackForm />
        </motion.div>
      </AnimatePresence>
      <FeedBackStats />
      <FeedBackList />

      <div className="about-link">
        <Link to="/about">
          <FaQuestion />
        </Link>
      </div>
    </div>
  );
}

export default Home;
