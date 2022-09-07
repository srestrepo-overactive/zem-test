import { useRef } from 'react';
import DropDown from '../../components/DropDown';
import { useDispatch } from 'react-redux';
import { changeType } from '../../models/redux/chooseView/reducer';

function ChooseView() {
  const getDefaultItems = () => [
    { name: 'List', value: 'list' },
    { name: 'Grid', value: 'grid' }
  ];
  const dispatch = useDispatch();
  const selectRef = useRef('');

  const setDefaultView = () => {
    dispatch(changeType(selectRef.current.value));
  };

  return (
    <DropDown selectref={selectRef} onChange={() => setDefaultView()} items={getDefaultItems()} />
  );
}

export default ChooseView;
