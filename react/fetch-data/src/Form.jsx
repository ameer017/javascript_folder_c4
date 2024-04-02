import Button from "./Button";

const Form = ({ reqType, setReqType }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Button buttonText="users" reqType={reqType} setReqType={setReqType} />
      <Button buttonText="posts" reqType={reqType} setReqType={setReqType} />
      <Button buttonText="comments" reqType={reqType} setReqType={setReqType} />
    </form>
  );
};

export default Form;

// Inside the form, it renders three instances of the Button component with different buttonText props ("users", "posts", "comments").
// Each Button component is passed the reqType and setReqType props, allowing them to interact with the state managed by the parent component.
