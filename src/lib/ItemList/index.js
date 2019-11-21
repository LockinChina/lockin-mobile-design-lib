/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-return-assign */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const List = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 15px 10px;
  border-bottom: 1px solid #ccc;
  position: relative;
  &:after {
    position: absolute;
    font-family: 'lockinu' !important;
    content: '\\e6a3';
    color: #ccc;
    font-size: 16px;
    top: 18px;
    right: 5px;
  }
  .text {
    font-size: 14px;
    color: #757575;
    position: relative;
    padding-left: ${props => (props.iconName ? '20px' : 0)};
  }
  .text:before {
    position: absolute;
    top: 3px;
    left: 0;
  }
`;

function Index(props) {
  const { text, iconName } = props;
  return (
    <List iconName={iconName}>
      <div className={`text ${iconName ? `lockinu ${iconName}` : ''}`}>
        {text}
      </div>
    </List>
  );
}

export default Index;

Index.defaultProps = {
  text: '',
};

Index.propTypes = {
  text: PropTypes.string,
  iconName: PropTypes.string,
};
