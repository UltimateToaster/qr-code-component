function App() {
	return (
		<>
			<body className="bg-neutral-100">
				<section className="section" data-type="full-screen">
					<div className="container">
						<div className="card | mx-auto" data-type="qr-code">
							<img src="./image-qr-code.png" alt="QR-Code leading to frontendmentor.io" />
							<div className="text-center flow padding-block-end-6">
								<h1  className="card__heading">Improve your front-end skills by building projects</h1>
								<p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
							</div>
						</div>
					</div>
				</section>
			</body>
		</>
  )
}

export default App
