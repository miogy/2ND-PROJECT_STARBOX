import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { AiOutlinePlus } from 'react-icons/ai';

import MainBoxOffice from '../../components/Main/MainBoxOffice';
import MainSearchLink from '../../components/Main/MainSearchLink';

function Main() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:10010/movie/list').then(response => {
      setMovieList(response.data.data);
    });
  }, []);

  return (
    <MainPage>
      <Div>
        <Title>
          <span>박스오피스</span>
        </Title>
        <More to='/movie'>
          더 많은 영화 보기
          <AiOutlinePlus className='icon' />
        </More>
        <section>
          <MainBoxOffice movieList={movieList} />
        </section>
        <MainSearchLink />
      </Div>
    </MainPage>
  );
}

const MainPage = styled.div`
  position: relative;
  background-color: #002533;
`;

const Div = styled.div`
  width: 1100px;
  height: auto;
  margin: 0 auto;
  padding: 200px 0;

  section {
    margin: 0 -15px;
  }
`;

const Title = styled.button`
  width: 100%;

  border: none;
  outline: none;
  background-color: transparent;
  font-size: 18px;
  color: #fff;

  span {
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -7px;
      left: 2.5%;
      width: 95%;
      height: 2px;
      align-items: center;
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;

const More = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  vertical-align: middle;

  margin-right: -5px;
  margin-bottom: 10px;

  font-size: 15px;
  color: #aaa;
  line-height: 16px;
  text-decoration: none;

  .icon {
    margin-left: 4px;
    font-size: 25px;
  }
`;

export default Main;
