import { Container } from './styles';

import { Stars } from '../../components/Stars';
import { Tag } from '../../components/Tag';

export function MovieTag({data, onClick, ...rest}) {
  return (
    <Container onClick={onClick} {...rest}>
      <h3>{data.movieTitle}</h3>
      <Stars rating={data.rating} />
      <p>{data.description}</p>
      {
        data.tags &&
        <div id="tagsContainer">
          {
            data.tags.map((tag) => {
              return <Tag key={tag.id} title={tag.name} />
            })
          }
        </div>
      }
    </Container>
  );
};