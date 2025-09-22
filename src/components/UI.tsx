import Title from "./Title";
import HotspotDialog from "./HotspotDialog";
import Info from "./Info";
import useStore from "../state/store";

const UI = () => {
  const showInfoDialog = useStore((state) => state.showInfoDialog);

  return (
    <>
      {/* <Controls /> */}
      <Title />
      <Info />
      <HotspotDialog showDialog={showInfoDialog} />
    </>
  );
};

export default UI;
