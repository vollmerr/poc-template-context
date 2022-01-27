import Params from "../../../components/Params";
import Plans from "../../../components/Plans";
import Purchase from "../../../components/Purchase";
import Steps from "../../../components/Steps";

const StepA = () => {
  return (
    <div>
      <Params name="StepA" />
      <Purchase name="StepA" />
      <Plans name="StepA" />
      <Steps name="StepA" />
    </div>
  );
};

export default StepA;
