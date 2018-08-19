import React from 'react';
import styled from 'styled-components';

export const Dialog = styled.div`
    position: relative;
    width: auto;
    margin: .5rem;
    pointer-events: none;

    @media (min-width: 576px) {
        max-width: 500px;
        margin: 1.75rem auto;
    }

    &.fade {
        transition: transform .3s ease-out;
        transform: translate(0,-25%);
    }
`;

export const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: .3rem;
    outline: 0;
`;

export const Body = styled.div`
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
`;

export const Title = styled.h5`
    margin: 0;
    line-height: 1.5;
    font-size: 1.25rem;
    font-family: inherit;
    font-weight: 500;
    color: inherit;
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
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.25;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .5;
    padding: 0;
    background-color: transparent;
    border: 0;
    -webkit-appearance: none;
    padding: 1rem;
    text-transform: none;
    font-family: inherit;

    &:not(:disabled) {
        cursor: pointer;
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #e9ecef;
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem;

    ${CloseButton} {
        margin: -1rem -1rem -1rem auto;
    }
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
    border-top: 1px solid #e9ecef;
`;

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000;

    &.fade {
        transition: opacity .15s linear;
        opacity: 0;
        &.open {
            opacity: .5;
        }
    }
`;