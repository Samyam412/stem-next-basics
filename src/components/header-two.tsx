export const HeaderTwo = () => {
  return (
    <div className="relative flex flex-col py-16 lg:flex-col lg:pb-0 lg:pt-0">
      <div className="mx-auto flex w-full max-w-xl flex-col items-start px-4 lg:max-w-screen-xl lg:px-8">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="mb-6 max-w-xl">
            <div>
              <p className="bg-teal-accent-400 mb-4 inline-block rounded-full px-3 py-px text-xs font-semibold uppercase tracking-wider text-teal-900">
                New Colaboration
              </p>
            </div>
            <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              The quick, brown fox
              <br className="hidden md:block" />
              jumps over{" "}
              <span className="text-deep-purple-accent-400 inline-block">
                a lazy dog
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <a
              href="/"
              className="focus:shadow-outline mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-purple-400 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-purple-700 focus:outline-none md:mb-0 md:mr-4 md:w-auto"
            >
              Apply Now
            </a>
            <a
              href="/"
              aria-label=""
              className="hover:text-deep-purple-accent-700 inline-flex items-center font-semibold text-gray-800 transition-colors duration-200"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
      <div className="inset-y-0 right-0 mx-auto w-full max-w-xl px-4 lg:absolute lg:mx-0 lg:mb-0 lg:w-1/2 lg:max-w-full lg:pl-8 lg:pr-0 xl:px-0">
        <img
          className="h-56 w-full rounded object-cover shadow-lg sm:h-96 lg:h-full lg:rounded-none lg:shadow-none"
          src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
    </div>
  );
};
