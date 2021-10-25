import styled from 'styled-components';

export const HoverBtn = styled.div`
  position: relative;
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 6px;
  margin-right: 30px;
  a {
    &.active {
      &::before {
        width: 100%;
        opacity: 1;
      }
    }

    &:hover {
      color: #f12f19;
      &::before {
        width: 100%;
        opacity: 1;
      }
    }
    &::before {
      content: '';
      opacity: 0;
      bottom: 0;
      height: 2px;
      width: 0%;
      background: #f12f19;
      position: absolute;
      transition: all ease-in-out 0.25s;
    }
  }
`;
