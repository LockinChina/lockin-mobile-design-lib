import React from 'react';
import styled from 'styled-components';
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
  .tab-item {
    height: 50px;
    width: 25%;
    display: flex;
    flex-direction: column;
    height: 50px;
    align-items: center;
    justify-items: center;
    > div:first-child:before {
      font-size: 20px;
    }
    > div:last-child {
      width: 100%;
      text-align: center;
      font-size: 14px;
      margin-top: 5px;
    }
  }
`;

function Index(props) {
  const { listData, selectIndex } = props;
  return (
    <Tab>
      {listData.map((item, index) => (
        <div key={`listData${index + 1}`} className="tab-item">
          <div
            className={`lockinu ${
              index === selectIndex ? item.selectedIconName : item.iconName
            }`}
            style={{ color: `${index === selectIndex ? 'blue' : '#ccc'}` }}
          />
          <div style={{ color: `${index === selectIndex ? 'blue' : '#ccc'}` }}>
            {item.name}
          </div>
        </div>
      ))}
    </Tab>
  );
}

export default Index;

Index.defaultProps = {
  listData: [
    { name: '雇主邀约', iconName: 'iconshipin', selectedIconName: 'iconxinxi' },
    { name: '找工作', iconName: 'iconshipin', selectedIconName: 'iconxinxi' },
    { name: '活动', iconName: 'iconshipin', selectedIconName: 'iconxinxi' },
    { name: '我的', iconName: 'iconshipin', selectedIconName: 'iconxinxi' },
  ],
};

Index.propTypes = {
  listData: PropTypes.array,
  selectIndex: PropTypes.number,
};
