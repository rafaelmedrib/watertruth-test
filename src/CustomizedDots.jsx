import React from "react";

export class CustomizedProdDot extends React.Component {
    render() {
        const { cx, cy } = this.props;

        return (
            <circle cx={cx} cy={cy} r={2} fill="rgb(0, 35, 102, 0.5)" />
        );
    }
}
;
export class CustomizedGddDot extends React.Component {
    render() {
        const { cx, cy } = this.props;

        return (
            <circle cx={cx} cy={cy} r={2} fill="rgb(255, 76, 41, 0.5)" />
        );
    }
}
;
