import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Tab = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
  background: rgba(250, 250, 250, 0.95);
  position: absolute;
  bottom: 0;
  left: 0;
`;

const TabItem = styled.div`
  height: 50px;
  width: 25%;
  display: flex;
  flex-direction: column;
  height: 50px;
  align-items: center;
  justify-items: center;
  position: relative;
  > div:first-child:before {
    font-size: 20px;
  }
  > div:last-child {
    width: 100%;
    text-align: center;
    font-size: 14px;
    margin-top: 5px;
  }
  ${props =>
    props.isTip &&
    css`
      &:after {
        position: absolute;
        content: '';
        top: 5px;
        right: 15px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #fb3d3d;
      }
    `}
  .num-tip {
    position: absolute;
    top: 0;
    right: 15px;
    text-align: center;
    width: 16px;
    height: 16px;
    line-height: 16px;
    font-size: 8px;
    color: #fff;
    background-color: #fb3d3d;
    display: inline-block;
    border-radius: 50%;
  }
`;

function Index(props) {
  const { listData, selectIndex } = props;
  return (
    <Tab>
      {listData.map((item, index) => (
        <TabItem key={`listData${index + 1}`} isTip={item.isTip}>
          <div
            className={`lockinu ${
              index === selectIndex ? item.selectedIconName : item.iconName
            }`}
            style={{ color: `${index === selectIndex ? 'blue' : '#ccc'}` }}
          />
          <div style={{ color: `${index === selectIndex ? 'blue' : '#ccc'}` }}>
            {item.name}
          </div>
          {item.unReadNum && <span className="num-tip">{item.unReadNum}</span>}
        </TabItem>
      ))}
    </Tab>
  );
}

export default Index;

Index.defaultProps = {
  listData: [
    {
      name: '雇主邀约',
      iconName: 'iconshipin',
      selectedIconName: 'iconxinxi',
      unReadNum: 10,
    },
    { name: '找工作', iconName: 'iconshipin', selectedIconName: 'iconxinxi' },
    { name: '活动', iconName: 'iconshipin', selectedIconName: 'iconxinxi' },
    {
      name: '我的',
      iconName: 'iconshipin',
      selectedIconName: 'iconxinxi',
      isTip: true,
    },
  ],
};

Index.propTypes = {
  listData: PropTypes.array,
  selectIndex: PropTypes.number,
};
