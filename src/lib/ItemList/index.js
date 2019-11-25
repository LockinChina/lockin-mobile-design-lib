/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-return-assign */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const List = styled.div`
  margin: 0 auto;
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  position: relative;
  .leftIcon {
    width: 34px;
    color: #ccc;
  }
  .rightIcon{
    width: 28px;
    display: flex;
    justify-content: flex-end;
  }
  .rightIcon::before {
    font-family: 'lockinu' !important;
    content: '\\e6a3';
    color: #ccc;
    font-size: 16px;
  }
  .text1 {
    font-size: 16px;
    flex: 1;
    color: #757575;
    position: relative;
    /* padding-left: ${props => (props.iconName ? '20px' : 0)}; */
  }
  
`;

function Index(props) {
  const { text, iconName, iconSize, rightArrow, onClick } = props;
  return (
    <List onClick={() => onClick()}>
      {iconName && (
        <div
          style={{ fontSize: iconSize }}
          className={`leftIcon ${iconName ? `lockinu ${iconName}` : ''}`}
        />
      )}
      <p className="text1">{text}</p>
      {rightArrow && <div className="rightIcon" />}
    </List>
  );
}

export default Index;

Index.defaultProps = {
  text: '',
  iconSize: '20px',
  onClick: () => {},
};

Index.propTypes = {
  text: PropTypes.string,
  iconSize: PropTypes.string,
  iconName: PropTypes.string,
  rightArrow: PropTypes.bool,
  onClick: PropTypes.func,
};
