import React, { FC } from 'react';
import cx from 'classnames';
import './button.style.module.scss';
// import '../styles/button.scss';

export interface IButtonProps {
  backgroundColor?: string;
  color?: string;
  label: string;
  type: string;
  loading?: boolean;
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
  const { label, type, loading } = props;
  const btnCls = cx('asr-btn', `asr-btn__${type}`, { loading: loading });
  // let _style: React.CSSProperties = style || {};

  // if (backgroundColor && _style) _style.backgroundColor = backgroundColor;
  // if (color && _style) _style.color = color;
  return <button className={btnCls}>{label}</button>;
};
