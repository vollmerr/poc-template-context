import { usePurchase } from "../services/template";

const Purchase = ({ name }) => {
  const purchase = usePurchase();

  return (
    <pre>
      {name} - purchase: {JSON.stringify(purchase)}
    </pre>
  );
};

export default Purchase;
