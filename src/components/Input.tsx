import React from "react";

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

function Input(props: InputProps) {
    return <input {...props} />
}

export default Input;