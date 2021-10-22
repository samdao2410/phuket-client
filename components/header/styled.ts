import styled from 'styled-components';

export const Header = styled.div`
  background: #fffdf9;
  width: 100%;
  position: relative;
  .logo {
    max-width: 104px;
  }
  .ant-affix {
    background: #fffdf9;
  }
  .button-mobile {
    width: 22px;
    height: 16px;
    cursor: pointer;
    display: block;
    position: relative;
    top: 0;
    left: 12px;
    z-index: 9999;
    &.active {
      span {
        &:nth-child(1) {
          transform: rotate(135deg);
          top: 7px;
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          top: 7px;
          transform: rotate(-135deg);
        }
      }
    }
    span {
      &:nth-child(1) {
        top: 0px;
      }
      &:nth-child(2) {
        top: 8px;
      }
      &:nth-child(3) {
        top: 16px;
      }
      display: block;
      position: absolute;
      height: 2px;
      width: 100%;
      background: #081224;
      transform: rotate(0);
      opacity: 1;
      transform: rotate(0);
      transition: 0.25s ease-in-out;
      border-radius: 1rem;
    }
  }
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
    transition: 0.3s ease-in-out;
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
  @media only screen and (max-width: 1024px) {
    z-index: 2;
    .header-controls {
      position: fixed;
      top: 0;
      z-index: 1;
      width: 100%;
      background: #fffdf9;
      .container {
        justify-content: center;
      }
      .login {
        position: absolute;
        right: 15px;
      }
      .button-mobile {
        position: absolute;
        left: 15px;
        top: 26px;
      }
    }
    .over {
      position: fixed;
      visibility: hidden;
      opacity: 0;
    }
    .languages-box {
      position: absolute;
      left: 50px;
      &:after {
        display: none !important;
      }
      .country {
        display: none !important;
      }
    }
    .top-header {
      .top-mobile {
        position: absolute;
        width: 280px;
        left: -280px;
        height: 100vh;
        z-index: 1;
        transition: 0.25s ease-in-out;
      }
      .search {
        margin: 0;
        margin-top: 15px;
        input {
          width: 100%;
        }
        .anticon-search {
          right: 10px;
        }
      }
      .main-menu {
        flex-direction: column;
        align-items: flex-start;
        margin-top: 30px;
        
        li {
          margin-bottom: 15px;
        }
      }
      &.active {
        .over {
          visibility: visible;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000;
          opacity: 0.6;
          z-index: 1;
        }
        .top-mobile {
          z-index: 2;
          left: 0px;
          background: #fffdf9;
          top: 0px;
          padding-top: 40px;
        }

        .button-mobile {
          position: absolute;
          right: 15px;
          top: 15px;
          left: auto;
        }
        
      }
    }
  }
`;
