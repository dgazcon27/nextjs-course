export const Modal = (props) => {
  return (
    <div className="modal">
      <p>Are you sure about that?</p>
      <button className="btn btn--all" onClick={props.onCancel}>
        Cancel
      </button>
      <button className="btn" onClick={props.onConfirm}>
        Confirm
      </button>
    </div>
  );
};
