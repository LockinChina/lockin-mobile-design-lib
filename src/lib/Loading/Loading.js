import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import loading from '../../static/images/loading.png';

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99999999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: rgba(0, 0, 0, .3); */
  .mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .loadbox {
    position: absolute;
    .load {
      background: url(${loading}) no-repeat;
      margin: 0 auto;
      background-size: 100%;
      width: 30px;
      height: 30px;
      overflow: hidden;
      display: block;
      animation: loading 2s linear infinite;
      @keyframes loading {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
    .loadtext {
      font-size: 18px;
      text-align: center;
      margin-top: 20px;
    }
  }
`;

function Loading(props) {
  const { transparent, message, opacity } = props;
  return (
    <LoadingContainer>
      {!transparent && (
        <div
          className="mask"
          style={{
            background: opacity
              ? `rgba(255, 255, 255, ${opacity})`
              : 'rgba(255, 255, 255, .3)',
          }}
        />
      )}
      <div className="loadbox">
        <div className="load" />
        <p className="loadtext">{message}</p>
      </div>
    </LoadingContainer>
  );
}

Loading.propTypes = {
  transparent: PropTypes.bool,
  message: PropTypes.string,
  opacity: PropTypes.number,
};

export default Loading;
