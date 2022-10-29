import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/slice';
import { getFilter, getContacts } from 'redux/selectors';
import { StyledList, StyledItem, StyledIconSpan } from './Contacts.styled';
import { FaRegTrashAlt } from 'react-icons/fa';

export default function Contacts() {
  // достаем из store массив контактов
  const contacts = useSelector(getContacts);

  //достаем из сторе значение фильтра
  const filter = useSelector(getFilter);

  //инициализируем доставщика экшОна
  const dispatch = useDispatch();

  //нормализуем к нижнему регистру значение фильтра
  let normalizeFilter = filter.toLowerCase();

  // фильтруем контакты по фильтру
  let filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  //рисуем... но это не точно)))
  return (
    <StyledList>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <StyledItem key={id}>
            {name} : {number}
            <StyledIconSpan onClick={() => dispatch(removeContact(id))}>
              <FaRegTrashAlt />
            </StyledIconSpan>
          </StyledItem>
        );
      })}
    </StyledList>
  );
}
