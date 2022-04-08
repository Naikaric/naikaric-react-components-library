import * as palette from '../../Variables';

import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${palette.HIGHLIGHT_COLOR};
    border: none;
    border-radius: 5px;
    color: ${palette.MAIN_BACKGROUND_COLOR};
    cursor: pointer;
    outline: none;
    padding: 10px 20px;
    transition: ${palette.TRANSITION_DEFAULT};

    &:hover {
        background-color: ${palette.HIGHLIGHT_COLOR__HOVER};
    }

    &:active {
        background-color: ${palette.HIGHLIGHT_COLOR__ACTIVE};
    }

    &[disabled] {
        background-color: ${palette.DISABLE_COLOR};
        pointer-events: none;
    }
`;

export default StyledButton;