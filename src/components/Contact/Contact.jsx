
import { LiStyled, BtnStyled } from './Contact.styled'

export function Contact({ contact, contactDelete }) {
  return (
    <LiStyled key={contact.id}>
      {contact.name} : {contact.number}
      <BtnStyled
        type="button"
        onClick={() => contactDelete(contact.id)}> Delete </BtnStyled>
    </LiStyled>
  )
}