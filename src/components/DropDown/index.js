function DropDown(props) {
  const { items } = props;
  const { className } = props;
  const { selectref } = props;
  return (
    <select className={className} ref={selectref} {...props}>
      {items.map((elem) => {
        return (
          <option key={elem.value} value={elem.name}>
            {elem.value}
          </option>
        );
      })}
    </select>
  );
}

export default DropDown;
