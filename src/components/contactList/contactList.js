
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const filterArr = fArr => {
    let newArr = [];
    if (filter === '') {
      newArr = fArr;
    } else {
      newArr = fArr.filter(cur => cur.name.toUpperCase().includes(filter));
    }

    return newArr;
  };

  const deleteId = Id => {
    dispatch(deleteContact(Id));
  };
  const createList = () => {
    const arr = filterArr(contacts)
    return arr.map(contact => {
      return (
        <li key={contact.id} id={contact.id}>
          {`${contact.name}: ${contact.number}`}
          <button data-id={contact.id} onClick={() => deleteId(contact.id)}>
            Delete
          </button>
        </li>
      );
    });
  };


    return <ul>{createList()}</ul>;
  
}
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
export default ContactList;