const Banner = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 h-svh grid place-items-center">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:px-10 md:py-32 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          Hi my name is
          <span className="ml-4 text-violet-600">Samyam Katwal</span>
        </h1>
        <p className="mb-12 mt-8 px-8 text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
          officiis reprehenderit corporis officia. Alias, fugiat dolore delectus
          repellendus pariatur vitae.
        </p>
        <div className="flex flex-wrap justify-center">
          <button className="m-2 rounded px-8 py-3 text-lg font-semibold dark:bg-violet-600 dark:text-gray-50">
            Get started
          </button>
          <button className="m-2 rounded border px-8 py-3 text-lg dark:border-gray-300 dark:text-gray-900">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
