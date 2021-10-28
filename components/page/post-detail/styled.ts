import styled from 'styled-components';
export const SavePost = styled.div`
  padding: 4px 0px;
  border: 1px solid #929291;
  display: flex;
  border-radius: 5px;
  min-width: 100px;
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
    font-size: 14px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  @media only screen and (max-width: 767px) {
    position: fixed;
    opacity: 0;
    visibility: hidden;
    z-index: -1;
    &.active {
      visibility: visible;
      opacity: 1;
      flex-direction: row !important;
      background: #fff;
      width: 100%;
      box-shadow: 1px -3px 10px #bfbebe;
      bottom: 0;
      left: 0;
      z-index: 2;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
      .back {
        margin-left: 8px;
      }
      p {
        width: 32px;
        height: 32px;
        border: 1px solid #929291;
        margin: 0 10px !important;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        &.link {
          width: 32px;
          height: 32px;
          padding-bottom: 0;
        }

        &.save {
          svg {
            position: relative;
            right: -1px;
          }
        }
        svg {
          width: 18px;
        }
      }
    }
  }
`;

export const InputForm = styled.div`
  .ant-form-item {
    flex-direction: column;
    .ant-form-item-label {
      text-align: left;
      label {
        font-size: 17px;
        font-weight: bold;
        margin-bottom: 20px;
        span {
          font-weight: normal;
          font-size: 15px;
          display: inline-block;
          margin-left: 3px;
        }
        &:after {
          display: none !important;
        }
      }
    }
    .ant-input {
      height: 58px;
      border-radius: 3px;
      padding-top: 8px;
      border: 1px solid #bdbdbd !important;
    }
  }
`;
