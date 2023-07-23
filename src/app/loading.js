export default () => {
  return (
    <section className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black z-50">
      <div className="w-10 h-10 animate-spin">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="title-04a desc-04a"
          aria-live="polite"
          aria-busy="true"
          className="w-full h-full"
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
      </div>
    </section>
  );
};
