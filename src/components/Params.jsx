import { useParams } from "react-router-dom";

const Params = ({ name }) => {
  const params = useParams();

  return (
    <pre>
      {name} - params: {JSON.stringify(params)}
    </pre>
  );
};

export default Params;
