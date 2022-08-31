import React from "react";

type LabelProps = 
    React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
    | { children: string; };

function Label(props: LabelProps) {
    return <label {...props}>{props.children}</label>
}

export default Label;