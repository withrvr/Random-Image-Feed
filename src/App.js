import React from "react";
import ImageFeed from "./ImageFeed";

export default class App extends React.Component {
	render() {
		return (
			<div className="container text-center col-md-6">
				<h1 className="p-2 m-2">Random Image Feed</h1>

				{/* <!-- MAIN: image feed wrapper --> */}
				<ImageFeed />

				<footer className="row row-cols mb-5">
					<div className="col">
						<a
							href="https://github.com/withrvr/Random-Image-Feed"
							className="w-100 btn btn-outline-secondary"
							target="_blank"
							rel="noopener noreferrer"
						>
							Source Code
						</a>
					</div>
					<div className="col">
						{/* <!-- href="" ... this also works --> */}
						<button
							onClick={() => this.setState({})}
							className="w-100 btn btn-success"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-arrow-repeat"
								viewBox="0 0 16 16"
							>
								<path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
								<path
									fillRule="evenodd"
									d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
								/>
							</svg>
							Reload
						</button>
					</div>
				</footer>
			</div>
		);
	}
}
