import propTypes from 'prop-types';
import { Contact } from '../Contact/Contact'
import { WraperStyled } from './ContactList.styled'

export const ContactList = ({ contacts, contactDelete }) => (
  <WraperStyled>
    <ul>
      {contacts.map(({ name, number, id}) => {
        return (
          <Contact 
        key={id}
        id={id}
        name={name}
        number={number}
        contactDelete={contactDelete}
        />
        )
      })}
    </ul>
  </WraperStyled>
);

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
      
    })
  ),
  contactDelete: propTypes.func.isRequired,
 
};