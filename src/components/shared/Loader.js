import { TailSpin } from "react-loader-spinner";

function Loader() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        paddingTop: "30px" 
      }}
    >
      <TailSpin width={100} height={100} ariaLabel="loading" />
    </div>
  );
}

export default Loader;
