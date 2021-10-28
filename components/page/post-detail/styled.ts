import styled from 'styled-components';

export const BackBtn = styled.div`
    width: 32px;
    height: 32px;
    border: 1px solid #929291;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.25s;
    svg {
      color: #929291;
    }
    &:hover {
      background: #076db6;
      border-color: #076db6;
      svg {
      fill: #fff;
    }
    }
`;

export const ListIcon = styled.div`
  p{
    margin-bottom: 15px;
    &:hover {
      cursor: pointer;
      svg {
        fill: #076db6;
      }
    }
  }
  .face {
    svg {
      font-size: 20px;
    }
  }
  .link {
    border-bottom: 1px solid #929291;
    padding-bottom: 10px;
    width: 38px;
    text-align: center;
    svg {
      font-size: 20px;
    }
  }
`;
