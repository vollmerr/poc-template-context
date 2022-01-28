import { useStore, selectPurchaseProps } from "../store";

const Purchase = ({ name }) => {
  const purchaseProps = useStore(selectPurchaseProps);

  return (
    <pre>
      {name} - purchaseProps: {JSON.stringify(purchaseProps)}
    </pre>
  );
};

export default Purchase;
