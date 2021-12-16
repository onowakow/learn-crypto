const HasherComplexInput = ({
  buttonAlert,
  data,
  handleHashData,
  resetSim,
}) => {
  return (
    <>
      <div className="hasherForm">
        <div className="hasherInput">{data}</div>
        <button onClick={handleHashData} className="hasherButton">
          {buttonAlert ? buttonAlert : "generate hash"}
        </button>
      </div>
      <button
        onClick={resetSim}
        id="resetHasherButton"
        className="hasherButton"
      >
        reset simulation
      </button>
    </>
  );
};

export default HasherComplexInput;
