/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-return-assign */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const List = styled.div`
  width: 100%;
  border-bottom: 1px solid #ccc;
  .icon-item {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    & > div {
      width: 50%;
      height: 50px;
      position: relative;
    }
    & > div.iconshanchu:before {
      color: #ccc;
      font-size: 16px;
      position: absolute;
      top: 20px;
      left: 50%;
      margin-left: -8px;
    }
    & > div.iconbianji:before {
      color: #ccc;
      font-size: 16px;
      position: absolute;
      top: 20px;
      left: 50%;
      margin-left: -8px;
    }
  }
`;

function Index(props) {
  const { contentNode, leftIconClick, rightIconClick } = props;
  return (
    <List>
      <div>{contentNode}</div>
      <div className="icon-item">
        <div className="lockinu iconshanchu" onClick={() => leftIconClick()} />
        <div className="lockinu iconbianji" onClick={() => rightIconClick()} />
      </div>
    </List>
  );
}

export default Index;

// Index.defaultProps = {
// };

Index.propTypes = {
  contentNode: PropTypes.node,
  leftIconClick: PropTypes.func,
  rightIconClick: PropTypes.func,
};
