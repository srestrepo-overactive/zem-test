function GrayButton(props) {
  return (
    <button {...props} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default GrayButton;
