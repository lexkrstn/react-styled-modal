import React, { DOMAttributes, ReactElement } from 'react';
import * as S from './styles';

export default function CloseButton(
  { children, ...rest }: DOMAttributes<HTMLButtonElement>,
): ReactElement {
  return (
    <S.CloseButton {...rest}>
      {children || (
        <span aria-hidden="true">×</span>
      )}
    </S.CloseButton>
  );
}
