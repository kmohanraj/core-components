import React from 'react';
// export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
//   label: string;
//   disabled?: boolean;
//   type: string;
//   loading?: boolean;
//   onClick: () => void;
//   style: any;
// };
export const Button = (props) => {
    const { label, color, backgroundColor, style } = props;
    // const btnCls = cx('asr-btn', `asr-btn__${type}`, { loading: loading });
    let _style = style || {};
    if (backgroundColor && _style)
        _style.backgroundColor = backgroundColor;
    if (color && _style)
        _style.color = color;
    return (React.createElement("button", Object.assign({ style: _style }, props), label));
};
//# sourceMappingURL=Button.js.map