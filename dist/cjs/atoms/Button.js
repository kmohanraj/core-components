"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
// export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
//   label: string;
//   disabled?: boolean;
//   type: string;
//   loading?: boolean;
//   onClick: () => void;
//   style: any;
// };
const Button = (props) => {
    const { label, color, backgroundColor, style } = props;
    // const btnCls = cx('asr-btn', `asr-btn__${type}`, { loading: loading });
    let _style = style || {};
    if (backgroundColor && _style)
        _style.backgroundColor = backgroundColor;
    if (color && _style)
        _style.color = color;
    return (react_1.default.createElement("button", Object.assign({ style: _style }, props), label));
};
exports.Button = Button;
//# sourceMappingURL=Button.js.map