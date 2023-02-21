import propTypes from 'prop-types';
import { Contact } from '../Contact/Contact'
import { WraperStyled } from './ContactList.styled'

export const ContactList = ({ contacts, contactDelete }) => (
  <WraperStyled>
    <ul>
      {contacts.map((contact, id) => {
        return (
          <Contact 
        key={contact.id}
        contact={contact}
        contactDelete={contactDelete}
        />
        )
      })}
    </ul>
  </WraperStyled>
);

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  contactDelete: propTypes.func.isRequired,
};