"use client";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Lottie from "react-lottie-player";
import { useRouter } from "next/navigation";
import ResumeRequest from "@/components/shared/ResumeRequest";
import { useDispatch, useSelector } from "react-redux";
import { contactMeActions } from "@/store/contactMe-slice";
import animationData from "@/lotties/ContactMe.json";
import Heading from "@/components/shared/Heading";
import contactMeHeadingAnimationData from "@/lotties/contact-me-heading.json";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const ContactMeContent = () => {
	const dispatch = useDispatch();
	const contactFormState = useSelector((state) => state.contactMe);
	const form = useRef();
	const { push } = useRouter();

	const lottieDimensions = 400;

	const onSubmitHandler = (event) => {
		event.preventDefault();

		dispatch(contactMeActions.errorHandler({ isError: false }));

		const formData = {
			from_name: form.current.from_name.value,
			company: form.current.company.value,
			comments: form.current.comments.value,
			reply_to: form.current.reply_to.value,
		};

		if (
			!contactFormState.formHasErrors &&
			contactFormState.from_name &&
			contactFormState.reply_to
		) {
			dispatch(
				contactMeActions.mailIsSendingStateHandler({ isMailSending: true })
			);

			emailjs
				.send(
					"ezdev_smtp_service",
					"ezdev_contact_me",
					formData,
					process.env.NEXT_PUBLIC_EMAIL_JS_SECURE_TOKEN
				)
				.then(
					(result) => {
						console.log(result.text);
						dispatch(
							contactMeActions.mailIsSendingStateHandler({
								isMailSending: false,
							})
						);
						push("/thank-you");
					},
					(error) => {
						dispatch(contactMeActions.errorHandler({ isError: true }));
						console.log(error.text);
						dispatch(
							contactMeActions.mailIsSendingStateHandler({
								isMailSending: false,
							})
						);
					}
				);
		} else if (
			contactFormState.from_name === "" ||
			contactFormState.inputHasError.nameHasError ||
			contactFormState.reply_to === "" ||
			contactFormState.inputHasError.emailHasError
		) {
			dispatch(contactMeActions.formErrorHandler({ formHasErrors: true }));
		} else {
			dispatch(contactMeActions.formErrorHandler({ formHasErrors: true }));
		}
	};

	const inputChangeHandler = (event) => {
		dispatch(
			contactMeActions.inputChangeHandler({
				value: event.target.value,
				name: event.target.name,
			})
		);
	};

	const inputContainerClasses =
		"flex items-center p-2 border border-primary-blue focus:border-primary-gold rounded-md";
	const inputClasses = "w-full p-1 ml-3  outline-none bg-transparent";

	const WarningBanner = () => {
		return (
			<div
				className={`sticky top-40 z-50 mx-auto flex w-[80%] md:w-[60%] max-w-full flex-col overflow-hidden rounded bg-red-50 px-4 py-3 text-sm text-red-500 shadow-lg shadow-red-100 ring-1 ring-inset ring-red-100 `}
				role="status"
			>
				<div className="mb-2 flex items-center gap-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 shrink-0"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2"
						role="graphics-symbol"
						aria-labelledby="title-29 desc-29"
					>
						<title id="title-29">error</title>
						<desc id="desc-29">
							There is an error with the form input fields
						</desc>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M13 10V3L4 14h7v7l9-11h-7z"
						/>
					</svg>
					<h3 className="flex-1 font-semibold">Input Error!</h3>
					<p>
						There is an error with one or more of the input fields, please make
						sure you have entered valid information.
					</p>
				</div>
			</div>
		);
	};

	const ErrorBanner = () => {
		return (
			<div
				className={`sticky top-40 z-50 mx-auto flex w-[80%] md:w-[60%] max-w-full flex-col overflow-hidden rounded bg-red-50 px-4 py-3 text-sm text-red-500 shadow-lg shadow-red-100 ring-1 ring-inset ring-red-100 `}
				role="status"
			>
				<div className="mb-2 flex items-center gap-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 shrink-0"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2"
						role="graphics-symbol"
						aria-labelledby="title-29 desc-29"
					>
						<title id="title-29">error</title>
						<desc id="desc-29">
							There was an error that occurred while submitting the form, please
							try again
						</desc>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M13 10V3L4 14h7v7l9-11h-7z"
						/>
					</svg>
					<h3 className="flex-1 font-semibold">Error!</h3>
					<p>
						There was an error that occurred while submitting the form, please
						try again.
					</p>
				</div>
			</div>
		);
	};
	return (
		<>
			<Heading
				animationData={contactMeHeadingAnimationData}
				content={"Fill In The Form Below To Contact Me"}
				subtitle={"Let's Build Something Together!"}
			/>
			{contactFormState.error && <ErrorBanner />}
			{contactFormState.formHasErrors && <WarningBanner />}
			<div className={`py-20 grid grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto`}>
				<div className={`col-span-2  self-center`}>
					<Lottie
						loop
						play
						style={{
							width: lottieDimensions,
							height: lottieDimensions,
							marginLeft: "auto",
							marginRight: "auto",
						}}
						animationData={animationData}
						className=""
					/>
				</div>
				<div className={`col-span-2 lg:pr-24`}>
					<article className={""}>
						<form
							ref={form}
							method="POST"
							onSubmit={onSubmitHandler}
							acceptCharset="utf-8"
						>
							<fieldset id="contact_me" className=" b--transparent ph0 mh0">
								{/* <legend className="py-0 my-0 text-xl clip">Contact Me</legend> */}

								<label htmlFor="name" className="block py-3 ">
									Your Name
								</label>
								<div
									className={`${inputContainerClasses} ${
										contactFormState.inputHasError.nameHasError
											? "border-red-500"
											: ""
									}  `}
								>
									<input
										type="text"
										id="name"
										name="from_name"
										className={`${inputClasses}  `}
										required
										onChange={inputChangeHandler}
									/>
								</div>

								<label htmlFor="email" className="block py-3 ">
									Your Email
								</label>
								<div
									className={`${inputContainerClasses} ${
										contactFormState.inputHasError.emailHasError
											? "border-red-500"
											: ""
									} `}
								>
									<input
										type="email"
										id="email"
										name="reply_to"
										className={`${inputClasses}   `}
										required
										onChange={inputChangeHandler}
									/>
								</div>

								<label htmlFor="company" className="block py-3 ">
									Your Company
								</label>
								<div
									className={`${inputContainerClasses}  ${
										contactFormState.inputHasError.companyHasError
											? "border-red-500"
											: ""
									} `}
								>
									<input
										type="text"
										id="company"
										name="company"
										className={`${inputClasses}  `}
										required
										onChange={inputChangeHandler}
									/>
								</div>

								<label htmlFor="comments" className="block py-3 ">
									Additional Information
								</label>
								<div
									className={`${inputContainerClasses} ${
										contactFormState.inputHasError.commentsHasError
											? "border-red-500"
											: ""
									} `}
								>
									<textarea
										id="comments"
										name="comments"
										className={`${inputClasses}   `}
										onChange={inputChangeHandler}
									/>
								</div>
							</fieldset>

							{!contactFormState.mailSending && (
								<div className="mt-3">
									<input
										className={` mx-auto text-center font-base border-2 border-alternative-gold hover:border-primary-blue rounded-xl px-5 py-3  pointer bg-primary-blue hover:bg-white text-[#f1d6b0] hover:text-primary-blue transition-all duration-500"`}
										type="submit"
										value="Send"
									/>
								</div>
							)}

							{contactFormState.mailSending && (
								<svg
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									aria-labelledby="title-04a desc-04a"
									aria-live="polite"
									aria-busy="true"
									className="w-10 h-10 animate animate-spin mt-5"
								>
									<title id="title-04a">Loading</title>
									<desc id="desc-04a">Loading</desc>
									<circle
										cx="12"
										cy="12"
										r="10"
										className="stroke-slate-200"
										strokeWidth="4"
									/>
									<path
										d="M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2"
										className="stroke-primary-blue"
										strokeWidth="4"
									/>
								</svg>
							)}
						</form>
					</article>
					<ResumeRequest />
					<h2 className={`text-xl `}>
						You can also reach me through the below platforms:
					</h2>
					<div className="mt-5 flex flex-wrap items-center gap-4 text-sm 2xl:text-xl sm:text-base  ">
						<AiFillLinkedin className="hover:text-primary-gold transition-all duration-300 text-5xl text-primary-blue duration-500" />
						<AiFillGithub className="hover:text-primary-gold transition-all duration-300 text-5xl text-primary-blue duration-500" />
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactMeContent;
