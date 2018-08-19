import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Backdrop extends React.Component {
    static propTypes = {

    };

    static defaultProps = {

    };

    render() {
        const {className} = this.props;
        return <div className={className} />;
    }
}

export default styled(Backdrop)`
`;