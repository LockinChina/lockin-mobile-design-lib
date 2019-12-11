import styled from 'styled-components';

const ImageContainer = styled.div`
  display: inline-block;
  position: relative;
  .im {
    cursor: pointer;
    position: relative;
    background-size: cover !important;
    background-position: center center;
    .imc {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      overflow: hidden;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & > img {
        display: block;
        max-height: 100%;
        max-width: 100%;
      }
    }
    .uploadbox {
      /* display: none; */
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      bottom: -5px;
      right: -5px;
      background: #fff;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      z-index: 1;
      .iconfont {
        position: relative;
        font-family: 'lockinu' !important;
        color: #13b5b0;
        font-size: 14px;
        z-index: 1;
      }
      .fileBtn {
        position: absolute;
        cursor: pointer;
        z-index: 2;
        background: #ddd;
        width: 100%;
        height: 140%;
        opacity: 0;
      }
    }
  }
`;

export default ImageContainer;
