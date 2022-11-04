import { useSelector, useDispatch } from 'react-redux';
// import { removeContact } from 'redux/slice';
import { getFilter, getContacts } from 'redux/selectors';
import { StyledList, StyledItem, StyledIconSpan } from './Contacts.styled';
import { FaRegTrashAlt, FaRegUser } from 'react-icons/fa';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/contacts-operations';

export default function Contacts() {
  // достаем из store массив контактов
  const contacts = useSelector(getContacts);
  //достаем из сторе значение фильтра
  const filter = useSelector(getFilter);
  //инициализируем доставщика экшОна
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  //нормализуем к нижнему регистру значение фильтра
  let normalizeFilter = filter.toLowerCase();

  // фильтруем контакты по фильтру
  let filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <StyledList>
      {filteredContacts.map(({ name, phone, id }) => {
        return (
          <StyledItem key={id}>
            <FaRegUser />
            {name} : {phone}
            <StyledIconSpan onClick={() => dispatch(deleteContact(id))}>
              <FaRegTrashAlt />
            </StyledIconSpan>
          </StyledItem>
        );
      })}
    </StyledList>
  );
}
