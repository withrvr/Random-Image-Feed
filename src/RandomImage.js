import React from "react";

let counter = 0;

export default class ImageFeed extends React.Component {
	constructor(props) {
		super(props);
		this.photo_size = 500;
	}

	render() {
		return (
			<>
				{[...Array(this.props.no_of_col)].map((value, index) => {
					return (
						<div className="col p-0 m-2 bg-secondary" key={index}>
							<img
								className="w-100"
								alt=""
								src={`https://picsum.photos/${
									this.photo_size
								}?random=${++counter}`}
								// src="image.svg"
							/>
						</div>
					);
				})}
			</>
		);
	}
}
