import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'lockin-web-components';

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 200;
  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    margin-left: -40%;
    height: 180px;
    margin-top: -90px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    text-align: center;
    padding: 20px 25px 0;
  }
  .modal-title-content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    margin-left: -40%;
    height: 215px;
    margin-top: -108px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    padding: 20px 20px 10px;
  }
  .modal-title-content > div:first-child,
  .modal-content > div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .modal-title-content > div:first-child > div:first-child,
  .modal-content > div:first-child > div:first-child {
    font-size: 18px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 22px;
  }
  .modal-title-content div:first-child > div:last-child,
  .modal-content div:first-child > div:last-child {
    font-size: 18px;
    color: rgba(102, 102, 102, 1);
    cursor: pointer;
  }
  .modal-title-content > div.btn-item {
    position: absolute;
    text-align: center;
    left: 0;
    bottom: 10px;
    width: 100%;
  }
`;

const ModalNodeContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow-y: auto;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  padding: 10px 0;
  & > div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 10px 15px;
  }

  & > div:first-child > div:first-child {
    font-size: 18px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 22px;
  }

  & > div:first-child > div:last-child {
    font-size: 18px;
    color: rgba(102, 102, 102, 1);
    cursor: pointer;
  }
`;

const Modal = ({
  width,
  visible,
  type = 1,
  okText = '确定',
  onOk,
  cancelText = '取消',
  onCancel,
  title,
  contentNode,
  btnStyle = 1,
  isHaveButton = true,
}) => (
  <ModalBg style={{ display: visible ? 'block' : 'none' }}>
    {type === 1 && (
      <div className="modal-content">
        <div>
          <div>{title}</div>
          <div role="button" tabIndex="0" onClick={() => onCancel()}>
            &times;
          </div>
        </div>
        <div>{contentNode}</div>
        <Button solid onClick={() => onOk()}>
          {okText}
        </Button>
      </div>
    )}
    {type === 2 && (
      <div className="modal-title-content">
        <div>
          <div>{title}</div>
          <div role="button" tabIndex="0" onClick={() => onCancel()}>
            &times;
          </div>
        </div>

        <div>{contentNode}</div>
        {isHaveButton && (
          <div className="btn-item">
            {btnStyle === 1 ? (
              <div>
                <Button hollow type={2} onClick={() => onCancel()}>
                  {cancelText}
                </Button>
                <Button solid style={{ marginLeft: 10 }} onClick={() => onOk()}>
                  {okText}
                </Button>
              </div>
            ) : (
              <div>
                <Button type={4} onClick={() => onCancel()}>
                  {cancelText}
                </Button>
                <Button
                  hollow
                  type={2}
                  style={{ marginLeft: 10 }}
                  onClick={() => onOk()}
                >
                  {okText}
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    )}
    {type === 3 && (
      <ModalNodeContent width={width}>
        <div>
          <div>{title}</div>
          <div role="button" tabIndex="0" onClick={onCancel}>
            &times;
          </div>
        </div>

        <div>{contentNode}</div>
        {isHaveButton && (
          <div>
            {btnStyle === 1 ? (
              <div style={{ marginTop: 10 }}>
                <Button type={2} onClick={() => onCancel()}>
                  {cancelText}
                </Button>
                <Button
                  hollow
                  style={{ marginLeft: 10 }}
                  onClick={() => onOk()}
                >
                  {okText}
                </Button>
              </div>
            ) : (
              <div style={{ marginTop: 10 }}>
                <Button hollow type={4} onClick={() => onCancel()}>
                  {cancelText}
                </Button>
                <Button
                  solid
                  type={2}
                  style={{ marginLeft: 10 }}
                  onClick={() => onOk()}
                >
                  {okText}
                </Button>
              </div>
            )}
          </div>
        )}
      </ModalNodeContent>
    )}
  </ModalBg>
);

Modal.propTypes = {
  width: PropTypes.number,
  visible: PropTypes.bool,
  type: PropTypes.number,
  okText: PropTypes.string,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  cancelText: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  contentNode: PropTypes.node,
  btnStyle: PropTypes.number,
  isHaveButton: PropTypes.bool,
};

export default Modal;
