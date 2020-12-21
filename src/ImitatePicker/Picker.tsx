import React, { useRef } from 'react';
import { Moment } from 'moment';
import RCPicker, { PickerProps } from 'rc-picker';
import momentGenerateConfig from 'rc-picker/lib/generate/moment';
import zh_CN from 'rc-picker/lib/locale/zh_CN';

import './index.less';

const Pickers: React.FC<Omit<
    PickerProps<Moment>,
    'locale' | 'generateConfig'
>> = props => {
    const ref = useRef(null);
    const sharedProps = {
        generateConfig: momentGenerateConfig,
    };

    return (
        <RCPicker
            {...sharedProps}
            ref={ref}
            prefixCls="b-picker"
            {...props}
            locale={zh_CN}
        />
    );
};
export default Pickers;
