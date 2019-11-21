import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyleInput = styled.input`
  width: 100%;
  border-radius: 20px;
  background: #fff;
  color: #bdbdbd;
  font-size: 14px;
  padding: 10px 12px 8px;
  border: 1px solid #f4f4f4;
  position: relative;
  &:focus {
    outline: none;
  }
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${props => (props.width ? `${props.width}px` : '100%')};
  > .iconsousuo:before {
    font-size: 16px;
    position: absolute;
    top: 20px;
    right: 20px;
    color: #ccc;
  }
`;

const LSearch = ({
  type = 'text',
  value,
  big = true,
  onChange,
  width,
  placeholder,
  inputBgColor,
}) => (
  <InputDiv width={width}>
    <StyleInput
      type={type}
      value={value}
      placeholder={placeholder}
      big={big}
      inputBgColor={inputBgColor}
      onChange={e => onChange && onChange(e.target.value)}
    />
    {/*<span className="delete">&times;</span>*/}
    <span className="lockinu iconsousuo" />
  </InputDiv>
);

LSearch.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  big: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  width: PropTypes.number,
  inputBgColor: PropTypes.string,
};

export default LSearch;
