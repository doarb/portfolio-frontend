export default function About() {
  return (
    <>
      <div className="flex justify-center items-center py-6">
        <div className="flex -space-x-2 ">
          <img
            className="inline-block h-60 w-60 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center items-center py-6">
        <h1 className="text-3xl font-bold hover:text-gray-700 pb-4">
          Dfkdsjfkljsd dfeslfjliezfj
        </h1>
      </div>
      <div className="flex justify-center items-center py-6">
        <dd className="mt-1 text-sm leading-6 text-gray-700 px-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellat
          pariatur animi ut in, facilis, tenetur harum velit minus quisquam
          nesciunt explicabo commodi natus, recusandae sed nulla vitae
          similique. Natus. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quam repellat pariatur animi ut in, facilis, tenetur harum velit
          minus quisquam nesciunt explicabo commodi natus, recusandae sed nulla
          vitae similique. Natus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quam repellat pariatur animi ut in, facilis, tenetur
          harum velit minus quisquam nesciunt explicabo commodi natus,
          recusandae sed nulla vitae similique. Natus. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quam repellat pariatur animi ut in,
          facilis, tenetur harum velit minus quisquam nesciunt explicabo commodi
          natus, recusandae sed nulla vitae similique. Natus. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quam repellat pariatur animi ut
          in, facilis, tenetur harum velit minus quisquam nesciunt explicabo
          commodi natus, recusandae sed nulla vitae similique. Natus.
        </dd>
      </div>

      <div className=" justify-center items-center mx-auto container p-20">
        <form
          action="mailto:damienboucher25@gmail.com"
          method="post"
          enctype="text/plain"
        >
          <div className="space-y-1">
            <div className="pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Information personnelle
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Utilisez une adresse e-mail que vous consultez régulièrement.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Prénom
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Nom
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Ecrire votre demande.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
