import { useRef } from "react";

const RenderCount = ({ name }) => {
  const renderCounter = useRef(0);
  renderCounter.current = renderCounter.current + 1;

  return (
    <pre>
      {name} - renders: {renderCounter.current}
    </pre>
  );
};

export default RenderCount;
