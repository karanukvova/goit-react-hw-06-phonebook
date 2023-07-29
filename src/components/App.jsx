import ContactList from './contactList/contactList';
import ContactForm from './contactForm/contactForm';
import Filter from './filter/filter';
import { addContact, deleteContact } from 'redux/contactsSlice';
import { setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
export function App() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();
  
  const formSubmitHandler = data => {
    repeatControl(data);
  };

  const repeatControl = data => {
    let nameArray = [];
    nameArray = contacts.map(cur => cur.name);
    if (!nameArray.includes(data.name)) {
      dispatch(addContact(data));
    } else {
      alert(' Контакт вже є у телефонній книзі!!!');
    }
  };

  const deleteContactFromContactList = idContact => {
    dispatch(deleteContact(idContact));
  };

  const setFilterToState = filterData => {
    dispatch(setFilter(filterData));
  };

  const filterArr = fArr => {
    let newArr = []
    if (filter === '') {
      newArr = fArr
    }else {newArr = fArr.filter(cur => cur.name.toUpperCase().includes(filter));}
    
    return newArr;
  };
    

  
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmitData={formSubmitHandler} />
        <h1>Contacts</h1>
        <Filter setFilterToState={setFilterToState} />
        <ContactList
          contacts={filterArr(contacts)}
          del={deleteContactFromContactList}
        />
      </div>
    );
  
  }
