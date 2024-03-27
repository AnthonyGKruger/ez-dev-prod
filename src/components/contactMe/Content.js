"use client";
// Import required libraries and components
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Lottie from "react-lottie-player";
import { useRouter } from "next/navigation";
import ResumeRequest from "@/components/shared/ResumeRequest";
import { useDispatch, useSelector } from "react-redux";
import { contactMeActions } from "@/store/contactMe-slice";
import animationData from "@/lotties/ContactMe.json";
import Heading from "@/components/shared/Heading";
import contactMeHeadingAnimationData from "@/lotties/contact-me-heading.json";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsPhoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import Link from "next/link";

const ContactMeContent = () => {
  const dispatch = useDispatch();
  const contactFormState = useSelector((state) => state.contactMe);
  const form = useRef();
  const { push } = useRouter();

  const lottieDimensions = 400;

  // Handler for form submission
  const onSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(contactMeActions.errorHandler({ isError: false }));

    // Extract form data from the form fields
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
        contactMeActions.mailIsSendingStateHandler({ isMailSending: true }),
      );

      // Send the email using the emailjs package
      emailjs
        .send(
          "ezdev_smtp_service",
          "ezdev_contact_me",
          formData,
          process.env.NEXT_PUBLIC_EMAIL_JS_SECURE_TOKEN,
        )
        .then(
          (result) => {
            console.log(result.text);
            dispatch(
              contactMeActions.mailIsSendingStateHandler({
                isMailSending: false,
              }),
            );
            push("/thank-you");
          },
          (error) => {
            dispatch(contactMeActions.errorHandler({ isError: true }));
            console.log(error.text);
            dispatch(
              contactMeActions.mailIsSendingStateHandler({
                isMailSending: false,
              }),
            );
          },
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

  // Handler for input changes in the form fields
  const inputChangeHandler = (event) => {
    dispatch(
      contactMeActions.inputChangeHandler({
        value: event.target.value,
        name: event.target.name,
      }),
    );
  };

  // Banner to display a warning when there are errors in the form inputs
  const WarningBanner = () => {
    return (
      <div
        className={`sticky top-10 z-50 mx-auto flex w-[80%] md:w-[60%] max-w-full flex-col overflow-hidden 
      rounded bg-red-50 dark:bg-black px-4 py-3 text-sm text-red-500 shadow-lg dark:shadow-none
       shadow-red-100 ring-1 ring-inset dark:ring-red-500  
       ring-red-100 `}
        role="status"
      >
        <div className="mb-2 flex items-center gap-4">
          {/* Warning icon */}
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
          <div className="flex-1 font-semibold">
            <h3 className="text-xl">Input Error!</h3>
            <p>
              There is an error with one or more of the input fields, please
              make sure you have entered valid information.
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Banner to display an error that occurred while submitting the form
  const ErrorBanner = () => {
    return (
      <div
        className={`sticky top-10 z-50 mx-auto flex w-[80%] md:w-[60%] max-w-full flex-col overflow-hidden 
      rounded bg-red-50 dark:bg-black px-4 py-3 text-sm text-red-500 shadow-lg dark:shadow-none
       shadow-red-100 ring-1 ring-inset dark:ring-red-500
       ring-red-100 `}
        role="status"
      >
        <div className="mb-2 flex items-center gap-4">
          {/* Error icon */}
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
          <div className="flex-1 font-semibold">
            <h3 className={`text-xl`}>Error!</h3>
            <p>
              There was an error that occurred while submitting the form, please
              try again.
            </p>
          </div>
        </div>
      </div>
    );
  };

  const inputClasses = `flex items-center p-2  rounded-md 
    border border-primary-blue dark:border-primary-gold 
    focus:border-primary-gold dark:focus:border-primary-blue
		 active:border-primary-blue dark:active:border-primary-blue
		w-full p-1  outline-none bg-transparent`;

  const inputErrorClasses = `border-red-500 dark:border-red-500 
    focus:border-red-500 dark:focus:border-red-500
		 active:border-red-500 dark:active:border-red-500`;

  // Render the component
  return (
    <>
      {/* Heading with animation */}
      <Heading
        animationData={contactMeHeadingAnimationData}
        content={"Fill In The Form Below To Contact Me"}
        subtitle={"Let's Build Something Together!"}
        ID="contact-form"
      />
      {/* Display the error banner if there was an error */}
      {contactFormState.error && <ErrorBanner />}
      {/* Display the warning banner if there are form input errors */}
      {contactFormState.formHasErrors && <WarningBanner />}
      {/* Contact form and other elements */}
      <div className={`py-20 grid grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto`}>
        <div className={`col-span-2  self-center`}>
          {/* Lottie animation */}
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
            {/* Contact form */}
            <form
              ref={form}
              method="POST"
              onSubmit={onSubmitHandler}
              acceptCharset="utf-8"
            >
              <fieldset id="contact_me" className="b--transparent ph0 mh0">
                {/* Form inputs */}

                <label htmlFor="name" className="block py-3 ">
                  Your Name
                </label>

                <div>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    className={`${inputClasses} ${
                      contactFormState.inputHasError.nameHasError
                        ? inputErrorClasses
                        : ""
                    }`}
                    required
                    onChange={inputChangeHandler}
                  />
                </div>

                <label htmlFor="email" className="block py-3 ">
                  Your Email
                </label>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="reply_to"
                    className={`${inputClasses} ${
                      contactFormState.inputHasError.emailHasError
                        ? inputErrorClasses
                        : ""
                    }`}
                    required
                    onChange={inputChangeHandler}
                  />
                </div>

                <label htmlFor="company" className="block py-3 ">
                  Your Company
                </label>
                <div>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className={`${inputClasses} ${
                      contactFormState.inputHasError.companyHasError
                        ? inputErrorClasses
                        : ""
                    }`}
                    required
                    onChange={inputChangeHandler}
                  />
                </div>
                <label htmlFor="comments" className="block py-3 ">
                  Additional Information
                </label>
                <div>
                  <textarea
                    id="comments"
                    name="comments"
                    className={`${inputClasses} ${
                      contactFormState.inputHasError.commentsHasError
                        ? inputErrorClasses
                        : ""
                    }`}
                    onChange={inputChangeHandler}
                  />
                </div>
              </fieldset>

              {/* Submit button */}
              {!contactFormState.mailSending && (
                <div className="mt-3">
                  <input
                    className={`cursor-pointer mx-auto text-center font-base border-2 border-alternative-gold
                     dark:border-light-gold hover:border-primary-blue rounded-xl px-5 py-3 bg-primary-blue
                     dark:bg-transparent hover:bg-white dark:hover:bg-light-gold text-[#f1d6b0] dark:text-white
                     hover:text-primary-blue dark:hover:text-black transition-all duration-500`}
                    type="submit"
                    value="Send"
                  />
                </div>
              )}

              {/* Loading spinner while the mail is being sent */}
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
                    className="stroke-primary-blue dark:stroke-primary-gold"
                    strokeWidth="4"
                  />
                </svg>
              )}
            </form>
          </article>

          <h2 className={`text-xl mt-5`}>
            You can also reach me through these platforms:
          </h2>
          {/* Links to social media platforms */}
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm 2xl:text-xl sm:text-base  ">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/anthony-gordon-kruger-ezdev/"
            >
              <AiFillLinkedin className="hover:text-primary-gold transition-all text-5xl text-primary-blue duration-500 dark:text-white dark:hover:text-primary-gold" />
            </Link>
            <Link target="_blank" href="https://github.com/AnthonyGKruger">
              <AiFillGithub className="hover:text-primary-gold transition-all text-5xl text-primary-blue duration-500 dark:text-white dark:hover:text-primary-gold" />
            </Link>
            <Link target="_blank" href="tel:+27610340820">
              <BsPhoneFill className="hover:text-primary-gold transition-all text-4xl text-primary-blue duration-500 dark:text-white dark:hover:text-primary-gold" />
            </Link>
            <Link target="_blank" href="mailto:anthony@ezdev.solutions">
              <HiMail className="hover:text-primary-gold transition-all text-6xl text-primary-blue duration-500 dark:text-white dark:hover:text-primary-gold" />
            </Link>
          </div>
          {/* Component to request a resume */}
          <ResumeRequest />
        </div>
      </div>
    </>
  );
};

export default ContactMeContent;
