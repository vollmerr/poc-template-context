import { useTemplateContext } from "../context/TemplateContext";

const Purchase = ({ name }) => {
  const { template } = useTemplateContext();

  return (
    <pre>
      {name} - purchaseProps: {JSON.stringify(template.purchase)}
    </pre>
  );
};

export default Purchase;
