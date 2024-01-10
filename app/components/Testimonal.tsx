export default function Testimonial() {
  return (
    <div className="grid mb-8 mt-8 border border-gray-200 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 bg-white ">
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
          <h3 className="text-lg font-semibold text-gray-900 ">
            Culinary Exploration
          </h3>
          <p className="my-4">
            "Uncovered a treasure trove of diverse recipes on this cookbook web
            app. The user-friendly interface and curated selections made my
            cooking journey exciting and delicious!""
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
          <img
            className="rounded-full w-9 h-9"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
            alt="profile picture"
          />
          <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div>Emma Johnson</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 ">
              Local Mom
            </div>
          </div>
        </figcaption>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Effortless Cooking Companion
          </h3>
          <p className="my-4">
            "Navigating this cookbook app is a joy! The simplicity of finding
            recipes, clear instructions, and stunning visuals create a seamless
            experience for both beginners and seasoned cooks.""
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
          <img
            className="rounded-full w-9 h-9"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
            alt="profile picture"
          />
          <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div>Michael Anderson</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Student in School
            </div>
          </div>
        </figcaption>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Creative Cooking Hub
          </h3>
          <p className="my-4">
            "Connected with friends on this cookbook app, sharing our favorite
            recipes. The collaborative aspect adds a social touch to cooking.
            It's a delightful way to exchange culinary creativity!""
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
          <img
            className="rounded-full w-9 h-9"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
            alt="profile picture"
          />
          <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div>Alice Turner</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Amateur Chef
            </div>
          </div>
        </figcaption>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Efficient Collaborating
          </h3>
          <p className="my-4">
            "This cookbook web app sparks inspiration! From innovative recipes
            to creative twists on classics, it's a hub for culinary creativity.
            A must-visit for any cooking enthusiast.""
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
          <img
            className="rounded-full w-9 h-9"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
            alt="profile picture"
          />
          <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div>Sarah Williams</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Home Cook
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
