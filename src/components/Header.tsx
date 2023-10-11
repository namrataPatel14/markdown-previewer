
import styled from 'styled-components';

const HeaderContainer = styled.header`
  margin:30px;
  display: flex;
  justify-content: space-between;
`
const Title = styled.h1`
  font-size: 25px;

`
const Button = styled.button`
  font-size:15px;
  color:#000;
  background:#4db4aa;
  border-radius:5px;
  font-weight:700;
  padding: 5px 50px;
  transition:.5s linear;
  height:50px;
  &:hover{
    background:#17ddca;
    border-color:transparent
  }
`

interface HeaderProps{
    onToggleGuide: () => void;
}

const Header = (props:HeaderProps) => {
   
  return (
    <HeaderContainer>
        <Title>
          Wellcome
        </Title>
        <Button onClick={props.onToggleGuide}>
            Button
        </Button>
    </HeaderContainer>
  )
}

export default Header