import { Container } from './styles';
import { VscStarFull, VscStarEmpty } from "react-icons/vsc";

export function Stars({ rating }) {
  let stars = [];

  for(let i = 1; i <= 5; i++) {
    if(i <= rating) {
      stars.push(<VscStarFull size={16} key={i} />)
    } else {
      stars.push(<VscStarEmpty size={16} key={i} />)
    }
  }

  return (
    <Container>
      {stars}
    </Container>
  ) 
};