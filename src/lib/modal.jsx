import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Modal extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        open: PropTypes.bool,
        closable: PropTypes.bool,
        backdropColor: PropTypes.string
    };

    static defaultProps = {
        open: false,
        closable: false
    };

    render() {
        const {className, children} = this.props;
        return <div className={className}>
            <Box>
                {children}
            </Box>
        </div>;
    }
}

export default styled(Modal)`
`;

const Box = styled.div`
`;
