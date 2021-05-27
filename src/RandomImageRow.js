import React from "react";
import RandomImage from "./RandomImage";

export default class RandomImageRow extends React.Component {
	render() {
		return (
			<>
				{[...Array(this.props.no_of_col)].map((value, index) => {
					return <RandomImage key={index} />;
				})}
			</>
		);
	}
}
