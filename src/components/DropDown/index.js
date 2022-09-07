function DropDown(props) {
  const { items } = props;
  const { className } = props;
  const { selectref } = props;
  return (
    <select className={className} ref={selectref} {...props}>
      {items.map((elem) => {
        return (
          <option key={elem.name} value={elem.value}>
            {elem.name}
          </option>
        );
      })}
    </select>
  );
}

export default DropDown;
