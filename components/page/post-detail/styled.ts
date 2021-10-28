import styled from 'styled-components';
export const SavePost = styled.div`
  padding: 4px 0px;
  border: 1px solid #929291;
  display: flex;
  border-radius: 5px;
  min-width: 86px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.25s;
  &:hover {
    svg {
      path {
        stroke: #2b89cc;
        fill: #2b89cc;
      }
    }
  }
  span {
    margin-left: 5px;
    display: inline-block;
    font-size: 15px;
  }
`;
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
    background: #2b89cc;
    border-color: #2b89cc;
    svg {
      fill: #fff;
    }
  }
`;

export const ListIconShare = styled.div`
  p {
    margin: 0 6px;
    transition: all 0.25s;
    &:hover {
      cursor: pointer;
      path {
        stroke: #2b89cc;
        fill: #2b89cc;
      }
    }
  }
  .face {
    svg {
      width: 19px;
    }
  }
  .link {
    svg {
      font-size: 20px;
    }
  }
`;

export const ListIcon = styled.div`
  p {
    margin-bottom: 15px;
    transition: all 0.25s;
    &:hover {
      cursor: pointer;
      path {
        stroke: #2b89cc;
        fill: #2b89cc;
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
