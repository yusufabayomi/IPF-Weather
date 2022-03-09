import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { City } from '../helpers/interfaces';

const UL = styled.ul`
  padding-left: 0;
  margin-left: 0;
`;

const List = styled.li`
  list-style-type: none;

  a {
    display: block;
    text-decoration: none;
    border-bottom: 1px solid rgb(209, 208, 207);
    color: #000000;
    font-weight: 600;
    padding: 10px;
  }

  a:hover {
    color: rgb(251, 182, 21);
    background-color: rgba(209, 208, 207, 0.1);
  }
`;

type Props = {
  cities: City[];
};

const CitiesList: FC<Props> = ({ cities }) => {
  return (
    <>
      <h1>Cities Near Me</h1>
      <UL>
        {cities.map((city) => (
          <List key={city.woeid}>
            <Link to={`/city/${city.woeid}`}>{city.title}</Link>
          </List>
        ))}
      </UL>
    </>
  );
};

export default CitiesList;
