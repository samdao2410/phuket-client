import styled from 'styled-components';

export const Header = styled.div`
  background: red;
  width: 100%;
  
  .header-controls {
    min-height: 70px;
    padding: 0.8rem 0;
    border-bottom: 1px solid #e5e5e5;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .banner {
      position: absolute;
      left: 240px;
      top: 0px;
    }
  }
  .header-auth-provider {
    display: flex;
    .language-active {
      display: flex;
      align-items: center;
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
`;
