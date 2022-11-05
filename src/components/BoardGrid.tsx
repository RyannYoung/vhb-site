import BoardLayoutItem from "./BoardLayoutItem";

// Board items
import three3 from "../assets/boardlayouts/3x3.png";
import borders from "../assets/boardlayouts/borders.png";
import cross from "../assets/boardlayouts/cross.png";
import crosshair from "../assets/boardlayouts/crosshair.png";
import def from "../assets/boardlayouts/default.png";
import fourCornersSimple from "../assets/boardlayouts/four-corners-simple.png";
import fourCorners from "../assets/boardlayouts/four-corners.png";
import insane from "../assets/boardlayouts/insane.png";
import largeCircle from "../assets/boardlayouts/large-circle.png";
import smallCircle from "../assets/boardlayouts/small-circle.png";

interface Props {
  children: React.ReactNode;
}

const BoardGrid = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      <BoardLayoutItem img={three3} title="3x3" />
      <BoardLayoutItem img={borders} title="Borders" />
      <BoardLayoutItem img={cross} title="Cross" />
      <BoardLayoutItem img={crosshair} title="Crosshair" />
      <BoardLayoutItem img={def} title="Default" />
      <BoardLayoutItem img={fourCornersSimple} title="Four Corners (Simple)" />
      <BoardLayoutItem img={fourCorners} title="Four Corners" />
      <BoardLayoutItem img={insane} title="Insane" />
      <BoardLayoutItem img={largeCircle} title="Large Circle" />
      <BoardLayoutItem img={smallCircle} title="Small Circle" />
    </div>
  );
};

export default BoardGrid;
