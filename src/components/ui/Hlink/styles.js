import * as palette from '../../Variables';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    color: ${palette.FONT_COLOR_TEXT};
    padding: 5px 0;
    text-decoration: none;
    transition: ${palette.TRANSITION_DEFAULT};

    &:hover {
      color: ${palette.LINK_COLOR__HOVER};
    }
`;

export default StyledLink;