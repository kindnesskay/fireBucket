import { HourglassEmpty } from "@mui/icons-material";
export default function Loading() {
  return (
    <div className="loading_container">
      {/* <div className={"bluredDiv"}></div> */}
      <div className={"loadingBox"}>
        <HourglassEmpty />
      </div>
    </div>
  );
}
