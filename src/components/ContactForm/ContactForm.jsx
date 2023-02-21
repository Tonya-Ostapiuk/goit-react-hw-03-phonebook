import propTypes from 'prop-types';
import { Component } from "react";
import { FormStyled, LabelStyled, InputStyled, BtnStyled } from './ContactForm.styled'

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({name: "", number: ""});
  };

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <FormStyled onSubmit={this.handleSubmit}>
        <LabelStyled>
          Name
          <InputStyled
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </LabelStyled>
        <LabelStyled>
          Number
          <InputStyled
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Phone number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </LabelStyled>

        <BtnStyled type="submit">Add contact</BtnStyled>
      </FormStyled>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
};