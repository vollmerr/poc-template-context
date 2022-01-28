import { useTemplateContext } from "../context/TemplateContext";
import { useRenderCount } from "../hooks";

const Purchase = ({ name }) => {
  const { template } = useTemplateContext();
  const renderCount = useRenderCount();

  return (
    <pre>
      {name} ({renderCount}) - purchaseProps:{" "}
      {JSON.stringify(template.purchase)}
    </pre>
  );
};

export default Purchase;
