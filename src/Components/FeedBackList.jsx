import FeedBackItem from "./FeedBackItem";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedBackContext from "../context/FeedBackContext";

function FeedBackList() {
  const { feedbacks } = useContext(FeedBackContext);

  if (!feedbacks || !feedbacks.length) return <h2> No feedbacks </h2>;
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedbacks.map((feedback) => (
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedBackItem feedback={feedback} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

FeedBackList.propTypes = {
  deleteTask: PropTypes.func,
};
export default FeedBackList;
