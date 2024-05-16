const HomeForm = () => {
  return (
    <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
      <div className="container mx-auto grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5">
        <div className="w-full rounded-md px-6 py-16 sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
          <span className="mb-2 block dark:text-violet-600">
            Harikul Stem Class
          </span>
          <h1 className="text-5xl font-extrabold dark:text-gray-900">
            Learn with Samyam
          </h1>
          <p className="my-8">
            <span className="font-medium dark:text-gray-900">
              Lorem ipsum dolor sit
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet
            labore nisi!
          </p>
          <form action="" className="space-y-3 self-stretch">
            <div>
              <label htmlFor="name" className="sr-only text-sm">
                Your name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-md focus:ring dark:border-gray-300 focus:dark:ring-violet-600"
              />
            </div>
            <div>
              <label htmlFor="lastname" className="sr-only text-sm">
                Email address
              </label>
              <input
                id="lastname"
                type="text"
                placeholder="Email address"
                className="w-full rounded-md focus:ring dark:border-gray-300 focus:dark:ring-violet-600"
              />
            </div>
            <button
              type="button"
              className="w-full rounded py-2 font-semibold dark:bg-violet-600 dark:text-gray-50"
            >
              Join the waitlist
            </button>
          </form>
        </div>
        <img
          src="https://source.unsplash.com/random/480x360"
          alt=""
          className="w-full rounded-md object-cover xl:col-span-3"
        />
      </div>
    </section>
  );
};

export default HomeForm;
