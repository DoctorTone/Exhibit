import Title from "./Title";
import HotspotDialog from "./HotspotDialog";
import Info from "./Info";
import useStore from "../state/store";

const UI = () => {
  const showPinDialog = useStore((state) => state.showPinDialog);

  return (
    <>
      {/* <Controls /> */}
      <Title />
      <Info />
      <HotspotDialog showDialog={showPinDialog} />
    </>
  );
};

export default UI;
