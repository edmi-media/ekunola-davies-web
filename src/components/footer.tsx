import { LogoLight } from "assets/images"

const Footer = () => {
	return (
		<footer className="flex w-full flex-col items-center bg-dark-200 px-5 py-10 text-light lg:px-20">
			<div className="flex w-full flex-col items-center py-20">
				<img
					src={LogoLight}
					alt=""
					className="w-[150px] object-cover lg:w-[300px]"
				/>
			</div>
			<div className="flex w-full items-center justify-between text-sm">
				<p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
				<p>Ekunola Davies Ministry Intl</p>
			</div>
		</footer>
	)
}

export default Footer
