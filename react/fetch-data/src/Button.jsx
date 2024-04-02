const Button = ({ buttonText, reqType, setReqType }) => {
  return (
    <button
      className={buttonText === reqType ? "selected" : null}
      type="button"
      onClick={() => setReqType(buttonText)} //end point set to the button Text
    >
      {buttonText}
    </button>
  );
};

export default Button;

// buttonText: This prop represents the text content of the button.
// reqType: This prop represents the currently selected request type.
// setReqType: This prop is a function used to update the selected request type.
