import { useParams } from "react-router-dom";

import { useRenderCount } from '../hooks'

const Params = ({ name }) => {
  const params = useParams();
  const renderCount = useRenderCount();

  return (
    <pre>
      {name} ({renderCount}) - params: {JSON.stringify(params)}
    </pre>
  );
};

export default Params;
