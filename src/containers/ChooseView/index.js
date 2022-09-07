import { useRef } from "react";
import DropDown from "../../components/DropDown";

function ChooseView() {
  const getDefaultItems = () => [
    { name: "List", value: "list" },
    { name: "Grid", value: "grid" },
  ];
  const selectRef = useRef("");

  const setDefaultView = () => {
    console.log(selectRef.current.value);
  };

  return (
    <DropDown
      selectref={selectRef}
      onChange={() => setDefaultView()}
      items={getDefaultItems()}
    />
  );
}

export default ChooseView;
