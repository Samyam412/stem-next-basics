const BannerTwo = () => {
  return (
    <section>
      <div className="dark:bg-violet-600 flex items-center">
      
          <div className="container mx-auto flex flex-col items-center px-4 py-16 pb-24 text-center md:px-10 md:py-32 lg:px-32 lg:pb-56 dark:text-gray-50">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">
              This is an example of a banner with an image
            </h1>
            <p className="mb-8 mt-6 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quia
              animi non corrupti explicabo odit soluta hic exercitationem
              voluptas assumenda! Cupiditate veniam aliquid, et dolores aut
              voluptas excepturi quam atque?
            </p>
            <div className="flex flex-wrap justify-center">
              <button
                type="button"
                className="m-2 rounded px-8 py-3 text-lg font-semibold dark:bg-gray-100 dark:text-gray-900"
              >
                Get started
              </button>
              <button
                type="button"
                className="m-2 rounded border px-8 py-3 text-lg dark:border-gray-300 dark:text-gray-50"
              >
                Learn more
              </button>
            </div>
          </div>
          
            <img
              src="https://source.unsplash.com/random/480x320"
              alt=""
              className="size-96 object-contain"
            />
        </div>
     
    </section>
  );
};

export default BannerTwo;
