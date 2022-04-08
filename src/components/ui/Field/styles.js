import * as palette from '../../Variables';

import styled, { css } from 'styled-components';
import InputMask from 'react-input-mask';

const FIELD_PADDING = '5px';
const VISIBILITY_ICON_SIZE = '20px';
const MIN_WIDTH_INPUT = '210px';

const Input = styled(InputMask)`
    border: 1px solid ${palette.NON_IMPORTANT_COLOR};
    border-radius: 3px;
    min-width: ${MIN_WIDTH_INPUT};
    outline: none;
    padding: ${FIELD_PADDING};
    transition: ${palette.TRANSITION_DEFAULT};

    &::placeholder {
        color: ${palette.NON_IMPORTANT_COLOR};
        transition: ${palette.TRANSITION_DEFAULT};
    }
`;

const ToggleVisibility = styled.label`
    input {
        display: none;

        &+img {
            cursor: pointer;
            height: ${VISIBILITY_ICON_SIZE};
            position: absolute;
            right: ${FIELD_PADDING};
            top: 50%;
            transform: translateY(-50%);
            width: ${VISIBILITY_ICON_SIZE};
        }
    }
`;

const InputWrapper = styled.div`
    position: relative;
`;

const Title = styled.span`
    color: ${palette.NON_IMPORTANT_COLOR};
    font-size: 12px;
    font-weight: 700;
    transition: ${palette.TRANSITION_DEFAULT};
`;

const Label = styled.label`
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    width: min-content;
`;

const Field = styled.div`
    width: fit-content;

    &:not(:last-child) {
        margin-bottom: 10px;
    }

    ${props => props.error && css`
        ${Input} {
            border-color: red;
        }
    `}

    ${props => props.protected && css`
        ${Input} {
            padding-right: calc(${FIELD_PADDING}*2 + ${VISIBILITY_ICON_SIZE});
        }
    `}

    &:hover {
        ${Title} {
            color: ${palette.NON_IMPORTANT_COLOR__HOVER};
        }

        ${Input} {
            border-color: ${palette.NON_IMPORTANT_COLOR__HOVER};

            &::placeholder {
                color: ${palette.NON_IMPORTANT_COLOR__HOVER};
            }
        }
    }
`;

export {
    Field,
    Label,
    Title,
    InputWrapper,
    Input,
    ToggleVisibility
};