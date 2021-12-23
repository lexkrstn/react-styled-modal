import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
  }
  html {
    height: 100%;
    font-size: 16px;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  }
  body {
    color: #333;
    min-height: 100%;
    height: 100%;
  }
  #app-root {
    height: 100%;
    padding: 0 15px;
    display: flex;
    align-items: center;
  }
`;

export const Container = styled.div`
  box-sizing: border-box;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 260px;
  margin: 0 auto;
`;

const btnTheme = (propName: string, defaultValue: any) => (props: any) => {
  const prop = props.theme && props.theme.button && props.theme.button[propName];
  return prop !== undefined ? prop : defaultValue;
};

interface ButtonProps {
  expanded?: boolean;
}

export const Button = styled.button.attrs<ButtonProps>({ type: 'button' })`
  box-sizing: border-box;
  background: ${btnTheme('color', '#3b71aa')};
  margin: 0 0 15px;
  line-height: 1.3;
  padding: 7px 16px;
  font-size: 16px;
  color: ${btnTheme('textColor', '#fff')};
  border: 1px solid ${btnTheme('borderColor', '#3b6592')};
  border-radius: 2px;
  cursor: pointer;
  outline: none;

  &:hover {
    background: ${btnTheme('colorHover', '#356190')};
    color: ${btnTheme('textColorHover', '#fff')};
    border-color: ${btnTheme('borderColorHover', '#3b6592')};
  }

  &:last-child {
    margin-bottom: 0;
  }

  ${(props: ButtonProps) =>  props.expanded && css`
    display: block;
    width: 100%;
  `}
`;