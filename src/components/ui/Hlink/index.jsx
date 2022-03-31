import './hlink.scss';

import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

const Hlink = props => {
    const mProps = JSON.parse(JSON.stringify(props));
    const { to, external } = mProps;

    if(!external && !to.match(/^#/)) {
        return <Link className={cn('hlink')} {...props}></Link>
    } else {
        mProps.href = to;
        delete mProps.to;

        return <a className={cn('hlink')} {...mProps}></a>;
    }
};

export default Hlink;