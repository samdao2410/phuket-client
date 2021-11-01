import { EditFilled } from '@ant-design/icons';
import styled from 'styled-components';

export const HomePage = styled.div`
  padding: 0 15rem;
  .back-to-top-box {
    position: fixed;
    bottom: 100px;
    right: 100px;
    opacity: 0.2;
    cursor: pointer;
  }
  .others {
    width: 99%;
    height: 480px;
  }
  .block-guess {
    padding: 32px 15rem 12px 15rem;
    background: #223453;
    margin-bottom: 20px;
    height: 400px;
    width: 100vw;
    margin-left: -15rem;
    .block__title {
      a {
        background-color: #223453;
      }
    }
    a {
      color: white;
      font-weight: normal;
      font-size: 16px;
    }
   }
  .pad-right-10 {
    padding-right: 10px;
  }
  .content-box {
    height: 60px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: center;
    flex-direction: row;
    background-color: black;
    a {
      color: #fff;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    text-decoration: none;
    padding: 17px 0;
    }
  }
  .card-title-wrapper {
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 12px;
    margin-bottom: 12px;
  }
  .title {
    color: #333;
    font-weight: bold;
    font-size: 16px;
  }
  .block__title {
    margin: 20px 0;
    position: relative;
    padding-left: 10px;
    &::after {
      content: "";
      display: block;
      background: #f12f19;
      position: absolute;
      left: 0;
      top: 2px;
      width: 3px;
      height: 20px;
      z-index: 0;
    }
    a {
      font-weight: bold;
      font-size: 20px;
      line-height: 27px;
      color: #f12f19;
      text-decoration: none;
      text-transform: uppercase;
      background-color: #fffdf9;
      position: relative;
      z-index: 9;
      padding-right: 10px
    }
  }
  .card-vertical {
    background-color: #e8eaef;
    width: 99%;
    height: 480px;
  }
  .card-vertical__title {
    color: #333;
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;
    transition: color .3s ease;
    display: initial;
    padding: 0 16px;
  }
  .football-card-vertical__title {
    color: #333;
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;
    transition: color .3s ease;
    display: initial;
  }
  .card-vertical-video {
    width: 99%;
    height: 512px;
    overflow: scroll;
  }
  .card-vertical__image {
    height: 255px;
  }
  .card-vertical__description {
    margin: 3px 0;
    padding: 0 16px;
  }
  .card-horizontal__image {
    width: 200px;
    height: 120px;
  }
`;
export const Banner = styled.div`
  width: 100%;
  margin: 20px 0;
`
export const RightBody = styled.div`
  display: flex;
  a {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 200px;
  }
  .sub-content {
    margin-left: 10px;
  }
`
export const GuessRow = styled.div`
  display: flex;
  justify-content: space-between;
`