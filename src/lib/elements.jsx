import React from 'react';
import styled from 'styled-components';
import {theme} from './helpers';

export const Dialog = styled.div`
    position: relative;
    width: auto;
    margin: .5rem;
    pointer-events: none;
    color: ${theme('textColor', 'inherit')};

    @media (min-width: 576px) {
        max-width: ${theme('mediumWidth', '500px')};
        margin: 1.75rem auto;
    }
`;

export const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: ${theme('backgroundColor', '#fff')};
    background-clip: padding-box;
    border: ${theme('borderWidth', '1px')} solid ${theme('borderColor', 'rgba(0,0,0,.2)')};
    border-radius: ${theme('borderRadius', '.3rem')};
    box-shadow: ${theme('boxShadow', 'none')};
    outline: ${theme('outline', 0)};
`;

export const Body = styled.div`
    position: relative;
    flex: 1 1 auto;
    padding: ${theme('bodyPadding', '1rem')};
    background-color: ${theme('bodyColor', 'transparent')};
`;

export const Title = styled.h5`
    margin: 0;
    line-height: ${theme('titleLineHeight', 1.5)};
    font-size: ${theme('titleFontSize', '1.25rem')};
    font-family: ${theme('titleFontFamily', 'inherit')};
    font-weight: ${theme('titleFontWeight', 500)};
    color: ${theme('titleTextColor', 'inherit')};
`;

const UnstyledCloseButton = ({...props}) => <button
    type="button"
    aria-label="Close"
    data-dismiss="modal"
    {...props}
>
    <span aria-hidden="true">×</span>
</button>;

export const CloseButton = styled(UnstyledCloseButton)`
    float: right;
    font-size: ${theme('closeButtonFontSize', '1.5rem')};
    font-weight: ${theme('closeButtonFontWeight', 700)};
    line-height: ${theme('closeButtonLineHeight', 1.25)};
    color: ${theme('closeButtonTextColor', '#000')};
    text-shadow: ${theme('closeButtonTextShadow', '0 1px 0 #fff')};
    opacity: ${theme('closeButtonOpacity', .5)};
    background: ${theme('closeButtonBackground', 'transparent')};
    border: ${theme('closeButtonBorder', 0)};
    -webkit-appearance: none;
    padding: ${theme('closeButtonPadding', '1rem')};
    text-transform: none;
    font-family: inherit;
    transition: opacity 200ms ease;
    outline: none;

    &:hover {
        opacity: ${theme('closeButtonHoverOpacity', .6)};
    }

    &:not(:disabled) {
        cursor: pointer;
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: ${theme('headerPadding', '1rem')};
    border-bottom: ${theme('headerBorderBottom', '1px solid #e9ecef')};;
    border-top-left-radius: ${theme('borderRadius', '.3rem')};
    border-top-right-radius: ${theme('borderRadius', '.3rem')};
    background-color: ${theme('headerColor', 'transparent')};

    ${CloseButton} {
        margin:
            -${theme('headerPadding', '1rem')}
            -${theme('headerPadding', '1rem')}
            -${theme('headerPadding', '1rem')}
            auto;
    }
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: ${theme('footerPadding', '1rem')};
    border-top: ${theme('footerBorderTop', '1px solid #e9ecef')};
    background-color: ${theme('footerColor', 'transparent')};
`;

export const Backdrop = styled.div`
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${theme('backdropZIndex', 1040)};
    background-color: ${theme('backdropColor', '#000')};

    &.fade {
        transition: opacity .15s linear;
        opacity: 0;
        &.open {
            opacity: ${theme('backdropOpacity', .5)};
        }
    }
`;