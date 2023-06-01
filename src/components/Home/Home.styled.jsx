import styled from 'styled-components';

export const HomeContainer = styled.div`
  margin: 30px;
`;

export const TrendTitle = styled.h1``;

export const TrendList = styled.ul`
  margin-left: 0;
  list-style: none;
  counter-reset: li;
`;

export const TrendMovie = styled.li`
  position: relative;
  margin-bottom: 5px;
  border: 3px solid #c6c3e9;
  padding: 0.6em;
  border-radius: 4px;
  background: #fefefe;
  color: #231f20;
  font-family: 'Trebuchet MS', 'Lucida Sans';

  &::before {
    position: absolute;
    top: -0.7em;
    padding-left: 0.4em;
    padding-right: 0.4em;
    font-size: 16px;
    font-weight: bold;
    color: #dcc24b;
    background: #fefefe;
    border-radius: 50%;
    counter-increment: li;
    content: counter(li);
  }
`;
