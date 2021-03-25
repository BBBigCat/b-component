import { Icon, Input } from 'antd';
import moment from 'moment';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import './index.less';

interface QuarterPickerProps {
    className?: string;
    style?: React.CSSProperties;
    value?: string;
    defaultValue?: string;
    startValue?: string;
    endValue?: string;
    open?: boolean;
    disabled?: boolean;
    onOk?: Function;
    showOk?: boolean;
    onChange?: Function;
}

const quarterData = [
    {
        value: 'Q1',
        label: '第一季度',
    },
    {
        value: 'Q2',
        label: '第二季度',
    },
    {
        value: 'Q3',
        label: '第三季度',
    },
    {
        value: 'Q4',
        label: '第四季度',
    },
];

const QuarterPicker: React.FC<QuarterPickerProps> = props => {
    const {
        onChange,
        style,
        className = '',
        value,
        defaultValue,
        startValue,
        endValue,
        open,
        disabled,
        onOk,
        showOk,
    } = props;
    console.log('value: ', value);
    const [stateOpen, setStateOpen] = useState(false);
    const [year, setYear] = useState('');
    const [selectTime, setSelectTime] = useState(
        `${moment().format('YYYY')}-${moment().quarter()}`,
    );
    const [selectionTime, setSelectionTime] = useState('');
    const [oneDisplay, setOneDisPlay] = useState('block');
    const [twoDisplay, setTwoDisplay] = useState('block');
    const toggleContainer = useRef(null);

    const handleClickOutside = useCallback(
        (ev: MouseEvent) => {
            if (!(toggleContainer && toggleContainer.current)) {
                return;
            }
            if (
                stateOpen &&
                !toggleContainer.current.contains(ev.target as Node)
            ) {
                setStateOpen(false);
            }
        },
        [stateOpen],
    );

    useEffect(() => {
        const newYear = value ? value.split('-')[0] : selectTime.split('-')[0];
        setSelectTime(value || selectTime);
        setSelectionTime(value || '');
        setYear(newYear);
        // this.idBlock(year);
        if (open === undefined) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, [handleClickOutside, open, selectTime, value]);

    const onclick = (ev: any) => {
        setStateOpen(pre => !pre);
    };

    const iconLeftClick = () => {
        const newYear = parseInt(year, 10);
        setYear((newYear - 1).toString());
    };

    const iconRightClick = () => {
        const newYear = parseInt(year, 10);
        setYear((newYear + 1).toString());
    };

    const changeQuarter = (item: any) => {
        onChange && onChange(`${year}-${item.value}`);
        setStateOpen(false);
    };

    const textChange = () => {
        // ...
    };

    return (
        <>
            <div
                className={`QuarterlyPicker ${className}`}
                id="QuarterlyPicker"
                style={style}
                ref={toggleContainer}
            >
                <div className="begin">
                    <Input
                        className={
                            selectionTime
                                ? 'zjl-input'
                                : 'zjl-input default_input'
                        }
                        value={selectionTime || defaultValue}
                        disabled={disabled}
                        onClick={ev => {
                            disabled ? null : onclick(ev);
                        }}
                        onChange={() => textChange()}
                        placeholder={placeholder}
                        suffix={<Icon type="close" className="img" />}
                    />
                </div>
                <div
                    className="child"
                    style={{ display: stateOpen ? 'block' : 'none' }}
                >
                    <div className="con">
                        <ul className="content-one">
                            <li
                                className="lefticon"
                                onClick={iconLeftClick}
                                style={{ display: oneDisplay }}
                            >
                                <Icon type="double-left" />
                            </li>
                            <li
                                className="righticon"
                                onClick={iconRightClick}
                                style={{ display: twoDisplay }}
                            >
                                <Icon type="double-right" />
                            </li>
                            <li>{year}年</li>
                        </ul>
                    </div>
                    <div className="TimerXhlleft">
                        <ul className="quaterleft">
                            {quarterData &&
                                quarterData.map(item => {
                                    const aa = `${year}-${item.value}`;
                                    return (
                                        <li
                                            key={item.value}
                                            className={`quaterleftli ${
                                                value === aa ? 'active' : ''
                                            }`}
                                            onClick={() => changeQuarter(item)}
                                        >
                                            {item.value}
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                    {showOk ? (
                        <div className="zjl-but">
                            <span onClick={() => {}}>确定</span>
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default QuarterPicker;
