import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Tab = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
  background: rgba(250, 250, 250, 0.95);
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #ccc;
`;

const TabItem = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  position: relative;
  > div:first-child:before {
    font-size: 20px;
  }
  .nav-title {
    width: 100%;
    text-align: center;
    font-size: 12px;
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
  const { listData, selectIndex, navClick } = props;
  return (
    <Tab>
      {listData.map((item, index) => (
        <TabItem
          key={`listData${index + 1}`}
          isTip={item.isTip}
          onClick={() => navClick()}
        >
          <div
            className={`lockinu ${
              index === selectIndex ? item.selectedIconName : item.iconName
            }`}
            style={{
              color: `${index === selectIndex ? '#013370' : '#959595'}`,
            }}
          />
          <div
            className="nav-title"
            style={{
              color: `${index === selectIndex ? '#013370' : '#959595'}`,
            }}
          >
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
      iconName: 'iconicons_circle1',
      selectedIconName: 'iconicons_circle',
      unReadNum: '',
    },
    {
      name: '找工作',
      iconName: 'iconicons_jobs1',
      selectedIconName: 'iconicons_jobs',
    },
    {
      name: '活动',
      iconName: 'iconicons_activity1',
      selectedIconName: 'iconicons_activity',
    },
    {
      name: '我的',
      iconName: 'iconicons_mine1',
      selectedIconName: 'iconicons_mine',
      isTip: false,
    },
  ],
};

Index.propTypes = {
  listData: PropTypes.array,
  selectIndex: PropTypes.number,
  navClick: PropTypes.func,
};
