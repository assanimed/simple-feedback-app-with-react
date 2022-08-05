import { useParams } from "react-router-dom";

function Success(props) {
  const { subject } = useParams();

  return (
    <div>
      Success on <b>{subject}</b>
    </div>
  );
}

export default Success;
