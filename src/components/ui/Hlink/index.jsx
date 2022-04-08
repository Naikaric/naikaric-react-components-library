import StyledLink from './styles';

import React from 'react';

const Hlink = props => {
    const mProps = JSON.parse(JSON.stringify(props));
    const { to, external } = mProps;

    if(!external && !to.match(/^#/)) {
        return <StyledLink {...props}></StyledLink>
    } else {
        mProps.href = to;
        delete mProps.to;

        return <StyledLink as='a' {...mProps}></StyledLink>;
    }
};

export default Hlink;