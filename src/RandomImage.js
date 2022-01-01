import React from "react";

let counter = 0;

export default class RandomImage extends React.Component {
	constructor(props) {
		super(props);
		this.photo_size = 500;
	}

	render() {
		return (
			<div className="col p-0 m-2 bg-secondary">
				<img
					onClick={() => this.setState({})}
					className="w-100"
					alt=""
					src={`https://picsum.photos/${
						this.photo_size
					}?random=${++counter}`}
					// src={process.env.PUBLIC_URL + "/logo.svg"}
				/>
			</div>
		);
	}
}
