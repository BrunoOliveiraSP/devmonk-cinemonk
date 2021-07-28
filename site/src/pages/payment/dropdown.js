import styled from 'styled-components'

const Dropdown = styled.select`
  padding: .2em .5em;
  border-radius: 20px;

  outline: none;
  border: 1px solid #000;
`



export default function DropdownElement(props) {
  return (
    <Dropdown onChange={props.onChange} value={props.value}>
      <option> Selecione </option>
      <option> Inteira </option>
      <option> Meia </option>
    </Dropdown>
  )
}