import { HeaderContainer } from './styled'

export default function Header(props) {
  return (
    <HeaderContainer descriptionOnTop={props.descriptionOnTop}>
      <div className="header">
        <div className="logo">
          <img src="/assets/images/logo.png" alt="" />
        </div>
        <div className="title">
          CineMonk
        </div>
      </div>
      <div className="description">
        {props.description}
      </div>
    </HeaderContainer>
  )
}