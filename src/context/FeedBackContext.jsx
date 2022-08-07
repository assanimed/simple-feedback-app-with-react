import { createContext, useState } from "react";
import FeedbacksData from "../data/feedbackData";

const FeedBackContext = createContext();

export const FeedBackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState(FeedbacksData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedback = (id) => {
    if (window.confirm("do you Really want to delete task id " + id))
      setFeedbacks(feedbacks.filter((fd) => fd.id !== id));
  };

  const editFeedback = (feedback) => {
    setFeedbackEdit({ item: feedback, edit: true });
  };

  const addFeedBack = (feed) => {
    setFeedbacks([...feedbacks, feed]);
  };

  const updateFeedBack = (id, feedBack) => {
    setFeedbacks(
      feedbacks.map((fb) => (fb.id === id ? { ...feedBack, id } : fb))
    );
  };

  return (
    <FeedBackContext.Provider
      value={{
        feedbacks,
        feedbackEdit,
        deleteFeedback,
        addFeedBack,
        editFeedback,
        updateFeedBack,
      }}
    >
      {children}
    </FeedBackContext.Provider>
  );
};

export default FeedBackContext;
