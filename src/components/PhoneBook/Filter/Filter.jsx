import { StyledInput, StyledForm } from './Filter.styled';
import { setFilter } from 'redux/slice';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  // достаем из store значение фильтра
  const filter = useSelector(getFilter);

  //инициализируем доставщика экшОна
  const dispatch = useDispatch();

  //обработчик ввода в инпут
  const onChangeHenler = e => {
    const { value } = e.target;

    // диспатчим экшОн с вэлью в сторэ ;)
    dispatch(setFilter(value));
  };

  return (
    <StyledForm action="#">
      <StyledInput
        onChange={onChangeHenler}
        value={filter}
        name="filter"
        type="text"
      />
    </StyledForm>
  );
};

export default Filter;
