import Title from "./Title";
import HotspotDialog from "./HotspotDialog";
import Info from "./Info";
import Copyright from "../UI/Copyright";
import Options from "../UI/Options";
import useStore from "../state/store";

const UI = () => {
  const showPinDialog = useStore((state) => state.showPinDialog);

  return (
    <>
      {/* <Controls /> */}
      <Title />
      <Info />
      <Copyright />
      <Options />
      <HotspotDialog showDialog={showPinDialog} />
    </>
  );
};

export default UI;
