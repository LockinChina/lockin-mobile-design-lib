import styled from 'styled-components';

const CascadeSelectContainer = styled.div`
  .title {
    height: 20px;
    font-size: 14px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 20px;
    margin-bottom: 5px;
  }
  .box {
    position: relative;
  }
  .inputBody {
    display: flex;
    flex-direction: row;
    border: 1px solid #a0a0a0;
    background: #fff;
    height: 42px;
    border-radius: 2px;
    width: 100%;
    align-items: center;
    cursor: pointer;
    :hover {
      cursor: pointer;
    }
    &.textWrong {
      border: 1px solid #ff5252;
    }
    &.readOnlyOpacity {
      opacity: 0.6;
    }
    &.openActive {
      border: 1px solid rgb(0, 94, 212);
    }
    &.invalid {
      opacity: 0.4;
      -webkit-filter: grayscale(100%);
      filter: gray;
      cursor: default;
      .text,
      .arrow::before {
        cursor: default !important;
      }
    }
    .arrow {
      position: relative;
      top: 1px;
      font-family: 'iconfont', 'lockinu' !important;
      color: #a0a0a0;
      transform: scale(0.5);
      ::before {
        margin: 0 10px 0 0;
        cursor: pointer;
      }
    }
    .text {
      flex: 1;
      box-sizing: border-box;
      padding: 10px 10px;
      line-height: 22px;
      background: none;
      border: none;
      cursor: pointer;
      color: #444;
      font-size: 14px;
    }
    .select-box {
      background: #fff;
      position: fixed;
      z-index: 9;
      /* top: 38px; */
      bottom: 0;
      left: 0;
      width: 100%;
      border: 1px solid rgba(213, 213, 213, 1);
      box-shadow: -10px 0px 10px rgba(136, 136, 136, 0.4);
      .maxSelectBox {
        padding: 20px;
      }
      .rowbox {
        display: flex;
        min-width: 100%;
        flex-direction: row;
        background: rgba(255, 255, 255, 1);
        border-top: 1px solid #e8e8e8;
        border-bottom: 1px solid #e8e8e8;
        /* border-radius: 0px 0px 3px 3px; */
      }
      ul {
        max-height: 256px;
        min-height: 200px;
        overflow-y: auto;
        &.col1 {
          width: 100%;
          text-align: center;
          /* display: flex;
          flex-direction: column;
          justify-content: center; */
        }
        &.col2 {
          width: 50%;
        }
        &.col3 {
          width: 33.333333%;
        }
      }
      ul:nth-child(1) {
        border-right: 1px solid #e8e8e8;
      }
      li {
        font-size: 12px;
        font-weight: 400;
        color: #333;
        line-height: 17px;
        padding: 10px 14px;
        &.actived,
        &.actived:hover {
          color: rgba(0, 0, 153, 1);
          background: #e7f1ff;
        }
        :hover {
          background: #f9f9f9;
        }
      }
    }
  }
  .wrongText {
    margin-top: 5px;
    color: #ff5252;
    font-size: 12px;
    line-height: 17px;
  }
`;

export default CascadeSelectContainer;
