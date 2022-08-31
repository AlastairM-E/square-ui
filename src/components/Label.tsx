import React from "react";

type InputProps = React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;

function Input(props: InputProps) {
    return <label {...props} />
}

export default Input;