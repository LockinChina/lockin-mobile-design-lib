import React, { useState } from 'react';

import { storiesOf } from "@storybook/react";
import { H1, H2, H3, H4, H5, H6 } from "../src/lib/H";
import Llabel from '../src/lib/LLable';
import LSearch from '../src/lib/LSearch';
import LEditableLabel from '../src/lib/LEditableLabel';
import LCheckBox from '../src/lib/LCheckbox';
import LA from '../src/lib/LA';
import LTab from '../src/lib/LTab';
import Modal from '../src/lib/Modal';
import SearchBarMobile from '../src/lib/SearchBarMobile';
import ItemList from '../src/lib/ItemList';
import MenuItemList from '../src/lib/MenuItemList';
import BottomTab from '../src/lib/BottomTab';

import GlobelStyle from '../src/globalStyle';
import ButtonDemo from '../src/containers/buttonDemo/ButtonDemo';
import InputDemo from '../src/containers/inputDemo/InputDemo';
import TextAreaDemo from '../src/containers/textAreaDemo/textAreaDemo';
import CascadeSelectDemo from '../src/containers/cascadeSelectDemo/CascadeSelectDemo';
import DatePickerDemo from '../src/containers/datePickerDemo/datePickerDemo';
import SkillSliderDemo from '../src/containers/skillSliderDemo/SkillSliderDemo';
import Image from '../src/containers/imageDemo/ImageDemo';
import Loading from '../src/containers/loadingDemo/LoadingDemo';
import EmptyDemo from '../src/containers/emptyDemo/EmptyDemo'
import BackTopDemo from '../src/containers/backTopDemo/BackTopDemo'
import SchoolSelectDemo from '../src/containers/schoolSelectDemo/SchoolSelectDemo';
import Pagination from '../src/containers/pagination';

import '../src/static/iconfont/iconfont.css';
import '../src/static/css/border.css';

storiesOf('BottomTab', module).add('BottomTab', () =>
  <div>
    <BottomTab
      selectIndex={2}
    />
  </div>
);

storiesOf('MenuItemList', module).add('MenuItemList', () =>
  <div><MenuItemList
    contentNode={<div><p>详细内容</p><p>详细内容</p><p>详细内容</p></div>}
    leftIconClick={() => alert(123)}
    rightIconClick={() => alert(123)}
  />
  </div>
);

storiesOf('ItemList', module).add('ItemList', () =>
  <div><ItemList leftContent={<span></span>} text="测试列表" /><ItemList text="测试列表" iconName="iconshoucang" onClick={() => alert(1)} noBorder rightArrow /></div>
);
storiesOf('SearchBarMobile', module).add('SearchBarMobile', () =>
  <SearchBarMobile placeholder="请输入" />
);

storiesOf('H', module).add('H1', () =>
  <H1 style={{ color: '#f00' }}>H1</H1>
).add('H2', () =>
  <H2>H2</H2>
).add('H3', () =>
  <H3>H3</H3>
).add('H4', () =>
  <H4>H4</H4>
);

storiesOf('搜索框', module).add('大搜索框', () =>
  <div>
    <LSearch placeholder={'search'} btnText={'btn'} onClick={() => alert('123')} onChange={(e) => alert(e)} />
    <GlobelStyle />
  </div>
).add('小搜索框', () =>
  <div>
    <LSearch big={false} placeholder={'search'} btnText={'btn'} onClick={() => alert('123')} onChange={(e) => alert(e)} />
    <GlobelStyle />
  </div>
);

storiesOf('表单label', module).add('label', () =>
  <Llabel text={'姓名'} htmlFor={'name'} />
);

storiesOf('表单ErrorText', module).add('ErrorText', () =>
  <LError text={'error'} />
);

storiesOf('标签', module).add('不可编辑', () =>
  <LEditableLabel text={'标签标签'} />
).add('可编辑', () =>
  <LEditableLabel text={'标签标签'} removable />
);

storiesOf('复选框', module).add('checkbox', () => {
  return (
    <div>
      <LCheckBox checked={true} onChange={() => { }} />
      <LCheckBox text={'复选框'} checked={false} onChange={() => { }} />
    </div>
  )
}).add('radio', () => {
  return (
    <div>
      <LCheckBox type={'radio'} text={'单选框'} checked={true} onChange={() => { }} />
      <LCheckBox type={'radio'} text={'单选框'} checked={false} onChange={() => { }} />
    </div>
  )
});


storiesOf('文字点击域', module).add('a', () => {
  return (
    <LA>文字点击域</LA>
  )
});

storiesOf('Tab', module).add('a', () => {
  return (
    <LTab data={[{ name: '1' }, { name: '2' }, { name: '3' }]} selectIndex={2} onClick={() => alert('1')} />
  )
});
let show = true;

storiesOf('Modal', module).add('Modal1一个按钮', () => {
  return (
    <div>
      {/* <Button type={1} titleName="1" hollow onClick={action('btnclick')}>1</Button> */}
      <Modal visible={true} contentNode={(<div><p>恭喜你</p><p>完成了</p></div>)} okText={'确定'} cancelText={'取消'} />
      <GlobelStyle />
    </div>
  )
}).add('Modal2按钮1', () => {
  return (
    <div>
      <Modal visible={true} type={2} btnStyle={1} title={'title'} contentNode={(<div><p>恭喜你</p><p>完成了</p></div>)} okText={'确定'} cancelText={'取消'} />
      <GlobelStyle />
    </div>
  )
}).add('Modal3按钮2', () => {
  return (
    <div>
      <Modal visible={show} onCancel={() => show = false} type={2} btnStyle={2} contentNode={(<div><p>恭喜你</p><p>完成了</p></div>)} title={'tip'} okText={'确定'} cancelText={'取消'} />
      <GlobelStyle />
    </div>
  )
}).add('Modal4最高高度到屏幕80%', () => {
  return (
    <Modal visible={true} type={3} btnStyle={1} title={'tip'} contentNode={<div>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
        </div>} okText={'确定'} cancelText={'取消'} />
  )
});


storiesOf('DatePicker', module).add('DatePicker', () =>
  <div><DatePickerDemo /><GlobelStyle /></div>
);
storiesOf('Button', module).add('Button', () =>
  <div><ButtonDemo /><GlobelStyle /></div>
);
storiesOf('Input', module).add('Input', () =>
  <div><InputDemo /><GlobelStyle /></div>
);
storiesOf('TextArea', module).add('TextArea', () =>
  <div><TextAreaDemo /><GlobelStyle /></div>
);
storiesOf('CascadeSelect', module).add('CascadeSelect', () =>
  <div><CascadeSelectDemo /><GlobelStyle /></div>
);

storiesOf('Image', module).add('Image', () =>
  <div><Image /><GlobelStyle /></div>
);
storiesOf('Loading', module).add('Loading', () =>
  <div><Loading /><GlobelStyle /></div>
);
storiesOf('Empty', module).add('Empty', () =>
  <div><EmptyDemo /><GlobelStyle /></div>
);
storiesOf('BackTop', module).add('BackTop', () =>
  <div><BackTopDemo /><GlobelStyle /></div>
);
storiesOf('SchoolSelect', module).add('SchoolSelect', () =>
  <div><SchoolSelectDemo /><GlobelStyle /></div>
);
storiesOf('SkillSlider', module).add('SkillSliderDemo', () =>
  <div><SkillSliderDemo /><GlobelStyle /></div>
);

storiesOf('分页组件', module).add('paginatoin', () =>
  <div><Pagination /><GlobelStyle /></div>
);



