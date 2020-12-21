import React, { useRef } from 'react';
import { Moment } from 'moment';
import { RangePicker as RCRangePicker, RangePickerProps } from 'rc-picker';
import zh_CN from 'rc-picker/lib/locale/zh_CN';
import momentGenerateConfig from 'rc-picker/lib/generate/moment';

import './index.less';

const RangePicker: React.FC<Omit<
    RangePickerProps<Moment>,
    'locale' | 'generateConfig'
>> = props => {
    const ref = useRef(null);
    const sharedProps = {
        generateConfig: momentGenerateConfig,
    };
    return (
        <RCRangePicker
            {...sharedProps}
            ref={ref}
            prefixCls="b-picker"
            {...props}
            locale={zh_CN}
        />
    );
};

export default RangePicker;
