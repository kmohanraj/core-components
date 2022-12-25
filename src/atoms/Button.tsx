import React, { FC } from 'react';
// import cx from 'classnames';
// import '../styles/button.scss';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  backgroundColor?: string;
  color?: string;
  label: string;
}

// export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
//   label: string;
//   disabled?: boolean;
//   type: string;
//   loading?: boolean;
//   onClick: () => void;
//   style: any;
// };

export const Button: FC<IButtonProps> = (props) => {
  const { label, color, backgroundColor, style } = props;
  // const btnCls = cx('asr-btn', `asr-btn__${type}`, { loading: loading });
  let _style: React.CSSProperties = style || {};

  if (backgroundColor && _style) _style.backgroundColor = backgroundColor;
  if (color && _style) _style.color = color;
  return (
    <button style={_style} {...props}>
      {label}
    </button>
  );
};
