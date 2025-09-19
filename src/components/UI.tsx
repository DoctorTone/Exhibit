import Title from "./Title";
import HotspotDialog from "./HotspotDialog";
import useStore from "../state/store";

const UI = () => {
  const showInfoDialog = useStore((state) => state.showInfoDialog);

  return (
    <>
      {/* <Controls /> */}
      <Title />
      <HotspotDialog showDialog={showInfoDialog} />
    </>
  );
};

export default UI;
