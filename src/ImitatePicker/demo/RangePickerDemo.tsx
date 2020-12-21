import React from 'react';
import ImitatePicker from '../index';
const { RangePicker } = ImitatePicker;
const PickerDemo = () => {
    return (
        <>
            <RangePicker
                picker="quarter"
                placeholder={['季度（起）', '季度（止）']}
            />
        </>
    );
};
export default PickerDemo;
