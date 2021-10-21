import styled from 'styled-components';

export const Header = styled.div`
  background: #999;
  width: 100%;

  .header-controls {
    border-bottom: 1px solid #e5e5e5;
    .container {
      min-height: 70px;
      padding: 0.8rem 0;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .banner {
      position: absolute;
      left: 240px;
      top: 0px;
    }
  }
  .header-auth-provider {
    display: flex;
    align-items: center;
    font-size: 14px;
    .language-active {
      display: flex;
      align-items: center;
      span {
         display: inline-block;
         margin-right: 5px;
      }
      &:after {
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #4f4f4f;
        content: '';
        margin-left: 0.4rem;
        display: inline-block;
      }
      img {
        min-width: 22px;
        width: 22px;
        height: 22px;
      }
    }
  }
  .search {
    margin: 0 15px;
    position: relative;
    input {
      height: 32px;
      border-radius: 16px;
      border: 1px solid #e5e5e5;
      padding: 0 3rem 0 1.4rem;
    }
    .anticon-search {
      position: absolute;
      right: 7px;
      top: 5px;
      cursor: pointer;
      svg {
        width: 22px;
        height: 22px;
      }
    }
  }
`;
