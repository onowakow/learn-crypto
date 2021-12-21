// very simple component

const ResetButton = ({ handleReset }) => {
  return (
    <button onClick={handleReset} id="resetHasherButton" className="hasherButton">
      reset all
    </button>
  );
};

export default ResetButton
