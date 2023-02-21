import propTypes from 'prop-types';
import { InputStyled, DivStyled, LabelStyled } from './Filter.styled';

export const Filter = ({ filter, handleChange }) => (
  <DivStyled>
    <LabelStyled>Find contacts by Name </LabelStyled>
    <InputStyled
      type="text"
      name="filter"
      placeholder="Filter"
      value={filter}
      onChange={handleChange}
    />
  </DivStyled>
);

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};