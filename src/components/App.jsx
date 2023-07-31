import ContactList from './contactList/contactList';
import ContactForm from './contactForm/contactForm';
import Filter from './filter/filter';
export function App() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm/>
        <h1>Contacts</h1>
        <Filter/>
        <ContactList
        />
      </div>
    );
  
  }
