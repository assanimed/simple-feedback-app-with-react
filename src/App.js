import React, { useState } from "react";

import Header from "./Components/Header";
import FeedbacksData from "./data/feedbackData";

import FeedBackList from "./Components/FeedBackList";

function App() {
  const [feedback, setFeedback] = useState(FeedbacksData);

  return (
    <>
      <Header />

      <div className="container">
        <FeedBackList feedbacks={feedback} />
      </div>
    </>
  );
}

export default App;
