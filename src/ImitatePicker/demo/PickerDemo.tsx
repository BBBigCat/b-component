/**
 * title: 季度选择器
 * desc: 这里算是完全还原了 antd4 的时间组件，为了可以在 antd3 的项目中使用新的季度组件
 */

import React from 'react';
import ImitatePicker from '../index';
const { Picker } = ImitatePicker;
const PickerDemo = () => {
    return (
        <>
            <Picker picker="quarter" placeholder="请选择季度" />
        </>
    );
};
export default PickerDemo;
