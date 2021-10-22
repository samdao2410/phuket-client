import styled from 'styled-components';

export const Header = styled.div`
  background: #fffdf9;
  width: 100%;
  /* header control */
  .header-controls {
    border-bottom: 1px solid #e5e5e5;
    .container {
      min-height: 70px;
      padding: 0.8rem auto;
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
    .login {
      font-weight: 600;
      cursor: pointer;
      color: #4f4f4f;
    }
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
        width: 20px;
        height: 20px;
      }
    }
  }
  /* header control */
  /* top-header */
  .top-header {
    box-shadow: 0 4px 5px rgb(0 0 0 / 16%);
    transition: .3s ease-in-out;
    position: relative;
    .main-menu {
      min-height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        list-style: none;
        display: flex;
        align-items: center;
        span {
            display: inline-block;
            margin-left: 5px;
          }
        a {
          font-size: 14px;
          text-decoration: none;
          display: inline-block;
          font-weight: 600;
          transition: color 0.2s ease;
         
          &.active {
            color: #f12f19;
          }
          &:hover {
            color: #f12f19;
          }
        }
      }
    }
  }
  /* top-header */
`;
