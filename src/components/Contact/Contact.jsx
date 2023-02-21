
import { LiStyled, BtnStyled } from './Contact.styled'
import propTypes from 'prop-types';

export function Contact({ id, name, number, contactDelete }) {
  return (
    <LiStyled key={id}>
      {name} : {number}
      <BtnStyled
        type="button"
        onClick={() => contactDelete(id)}> Delete </BtnStyled>
    </LiStyled>
  )
}

Contact.propTypes = {
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
  
  contactDelete: propTypes.func.isRequired,

};