import styled from 'styled-components';
import { Form, Modal, Radio, Checkbox } from 'antd';
import { Spin as SpinAntd, Slider } from 'antd';

export const Spin = styled(SpinAntd)`
  .ant-spin-dot-item {
    background-color: white;
  }
`;

export const Item = styled(Form.Item)`
  .no-label {
    .ant-form-item-label {
      display: none;
    }
  }
  .ant-form-item-label {
    padding: 0;
  }
  label {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors['brown-200']};
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    height: auto !important;
  }
  input {
    height: 42px;
  }
  .ant-input {
    line-height: 42px !important;
    font-size: 0.875rem !important;
    font-weight: 300 !important;
    letter-spacing: 0.08rem !important;
    color: ${({ theme }) => theme.colors['brown-200']} !important;
    padding: 0 1.5rem !important;

    &:placeholder-shown {
      font-style: italic !important;
    }
  }
  .ant-select-selector {
    height: 42px !important;
    padding: 0 1.5rem !important;
    input {
      height: 42px !important;
    }
    .ant-select-selection-item,
    .ant-select-selection-placeholder {
      line-height: 42px !important;
      font-size: 0.875rem !important;
      font-weight: 300 !important;
      letter-spacing: 0.08rem !important;
      color: ${({ theme }) => theme.colors['brown-200']} !important;
    }
    .ant-select-selection-placeholder {
      font-style: italic;
      color: ${({ theme }) => theme.colors['primary']} !important;
    }
  }
  .ant-select-arrow {
    right: 1.5rem !important;
    top: 43% !important;
  }
  .ant-input-number {
    width: 100%;
  }
  .custom-button {
    min-width: 20.5rem !important;
  }
  @media only screen and (max-width: 767px) {
    margin-bottom: 20px;
    .custom-button {
      min-width: inherit !important;
      width: 100% !important;
    }
    label {
      font-size: 0.8rem;
      height: auto !important;
    }
    input {
      height: 42px;
    }
    .ant-input {
      padding: 0 15px !important;
      line-height: 42px !important;
    }
    .ant-select-selector {
      height: 42px !important;
      input {
        height: 42px !important;
      }
      .ant-select-selection-placeholder,
      .ant-select-selection-item {
        line-height: 42px !important;
      }
    }
  }
`;

export const ItemHalf = styled(Item)`
  display: inline-block;
  width: calc(50% - 8px);
  &:nth-child(1) {
    margin-right: 8px;
  }
  &:nth-child(2) {
    margin-left: 8px;
  }
  @media only screen and (max-width: 767px) {
    display: block;
    width: 100%;
    &:nth-child(1) {
      margin-right: 0;
    }
    &:nth-child(2) {
      margin-left: 0;
    }
  }
`;

export const ItemOneThird = styled(Item)`
  display: inline-block;
  width: calc(33% - 8px);
  &:nth-child(1) {
    margin-right: 8px;
  }
  &:nth-child(2) {
    margin-right: 4px;
    margin-left: 4px;
  }
  &:nth-child(3) {
    margin-left: 8px;
  }
  @media only screen and (max-width: 767px) {
    display: block;
    width: 100%;
    &:nth-child(1) {
      margin-right: 0;
    }
    &:nth-child(2) {
      margin-right: 0;
      margin-left: 0;
    }
    &:nth-child(3) {
      margin-left: 0;
    }
  }
`;

export const Footer = styled.div`
  background-color: #081224;
  border-top: 4px solid #f12f19;
  padding: 3.6rem 0;
  position: relative;
  margin-top: auto;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0 15rem;
.footer-text {
  font-size: 12px;
  line-height: 18px;
}
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    .social-group {
    }

    .navigations {
      display: flex;
      flex-direction: row;
    }

    @media only screen and (max-width: 768px) {
      .navigations {
        flex-direction: column;
      }

      .copyright {
        margin-top: 1rem;
      }
    }

    @media only screen and (max-width: 1700px) {
      flex-direction: column;
      text-align: center;

      .social-group {
        margin-left: 0;
        margin-bottom: 24px;
        margin-right: 0;
        order: 1;
      }

      .navigations {
        margin-bottom: 24px;
        justify-content: center;
        order: 2;
      }

      .copyright {
        order: 3;
        text-align: center;
      }
    }
  }
  a {
    font-size: 0.875rem;
  }
`;

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    background-color: ${({ theme }) => theme.colors['light']};
    border-radius: 12px;
  }
`;

export const RadioGroupWrapper = styled(Radio.Group)`
  display: flex !important;

  .ant-radio-wrapper {
    width: 20% !important;
    margin-right: 0 !important;
  }

  .ant-radio {
    margin: 0 auto;
  }

  .ant-radio .ant-radio-inner,
  .ant-radio-checked .ant-radio-inner {
    border-color: ${({ theme }) => theme.colors['brown-200']} !important;
    border-width: 2px;
    width: 20px;
    height: 20px;
    box-sizing: content-box !important;

    &:after {
      background-color: ${({ theme }) => theme.colors['brown-200']} !important;
      top: 50% !important;
      left: 50% !important;
      transform: translate(-50%, -50%);
      width: 70% !important;
      height: 70% !important;
    }
  }

  @media only screen and (max-width: 767px) {
    .ant-radio .ant-radio-inner,
    .ant-radio-checked .ant-radio-inner {
      border-color: ${({ theme }) => theme.colors['brown-200']} !important;
      border-width: 2px;
      width: 15px;
      height: 15px;
    }
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  width: 100%;
  margin-left: 0;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors['brown-200']} !important;
  font-weight: 300;

  .ant-checkbox {
    outline: none;
    .ant-checkbox-inner {
      border-width: 2px !important;
      border-color: ${({ theme }) => theme.colors['brown-200']} !important;
    }

    .ant-checkbox-inner:hover,
    .ant-checkbox-inner:focus,
    &.ant-checkbox-checked .ant-checkbox-inner {
      background-color: ${({ theme }) => theme.colors['brown-200']} !important;
    }

    &.ant-checkbox-checked::after,
    .ant-checkbox-wrapper:hover .ant-checkbox-inner,
    &:hover .ant-checkbox-inner,
    .ant-checkbox-input:focus + .ant-checkbox-inner {
      border: 2px solid ${({ theme }) => theme.colors['brown-200']} !important;
    }
}
`

export const StyledSlider = styled(Slider)`
margin: 0 !important;

.ant-slider-rail{
  height: 0.5rem;
  background-color: white;
  border-radius: 0.5rem;
}

.ant-slider-track,
&:hover .ant-slider-track {
  height: 0.5rem;
  background-color: ${({ theme }) => theme.colors['brown']};
  border-radius: 8px;
}

.ant-slider-step {
  height: 8px;
  background-color: transparent;

  .ant-slider-dot {
    background-color: ${({ theme }) => theme.colors['primary']};
    width: 0.25rem;
    height: 0.25rem;
    top: 0.150rem;
    margin-left: 0;
    border: none;

    &:first-child {
      margin-left: 0.125rem;
    }

    &:last-child {
      margin-left: -0.25rem;
    }

    &.ant-slider-dot-active {
      border-color: transparent;
    }
  }
}

.ant-slider-handle {
    border: none;
    height: 1.25rem;
    width: 1.25rem;
    background-color: ${({ theme }) => theme.colors['primary']};

    &:focus {
      box-shadow: none;
    }
}
`
export const LeftInfor = styled.div`

`
export const RightInfor = styled.div`
  svg {
    margin-top: -3px
  }
`