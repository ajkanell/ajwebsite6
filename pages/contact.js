import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import PageLayout from "../components/PageLayout";

const ContactForm = () => {
  const { register, errors, handleSubmit, reset } = useForm();

  const toastifySuccess = () => {
    toast.dark("Contact Form sent!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "dark",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data) => {
    // Send form email
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        message: data.message,
      };

      await emailjs.send(
        "service_a552r78",
        "template_y4vw0lz",
        templateParams,
        "user_BvQFVj7d8htumC1sGdxFz"
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <PageLayout title="CONTACT | A.J. KANELL">
      <h1 className="text-7xl font-sans lg:mb-8">CONTACT ME</h1>

      <div className="pb-12 lg:max-w-3xl w-full  sm:px-6 lg:px-8">
        <div className="relative bg-white shadow-xl ">
          <h2 className="sr-only">Contact us</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-10">
              {/* <h3 className="text-lg font-medium text-gray-900">
                Send me a message
              </h3> */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    html-for="first_name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="given-name"
                      placeholder="John Doe"
                      ref={register({
                        required: {
                          value: true,
                          message: "Please enter your name",
                        },
                        maxLength: {
                          value: 30,
                          message: "Please use 30 characters or less",
                        },
                      })}
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    ></input>
                    {errors.name && (
                      <span className="text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    html-for="email"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Your Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="me@example.com"
                      ref={register({
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    ></input>
                    {errors.email && (
                      <span className="text-red-500">
                        Please enter a valid email address
                      </span>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      html-for="message"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Message
                    </label>
                    <span id="message-max" className="text-sm text-gray-500">
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      ref={register({
                        required: true,
                      })}
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="My message to A.J..."
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      aria-describedby="message-max"
                    ></textarea>
                    {errors.message && (
                      <span className="errorMessage">
                        Please enter a message
                      </span>
                    )}
                  </div>
                </div>

                <div class="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="submit"
                    class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto"
                  >
                    Send
                  </button>
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="">
        <div className="text-center ">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="col-6 pb-6">
              <input
                type="text"
                name="name"
                ref={register({
                  required: {
                    value: true,
                    message: "Please enter your name",
                  },
                  maxLength: {
                    value: 30,
                    message: "Please use 30 characters or less",
                  },
                })}
                className="border-4 border-black rounded-none placeholder-black"
                placeholder="Name"
              ></input>
              {errors.name && (
                <span className="errorMessage">{errors.name.message}</span>
              )}
            </div>
            <div className="pb-6">
              <input
                type="email"
                name="email"
                ref={register({
                  required: true,
                  pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
                className="border-4 border-black rounded-none placeholder-black"
                placeholder="Email address"
              ></input>
              {errors.email && (
                <span className="text-red-500">
                  Please enter a valid email address
                </span>
              )}
            </div>

           
            <div className="row formRow">
              <div className="pb-6">
                <textarea
                  rows={3}
                  name="message"
                  ref={register({
                    required: true,
                  })}
                  className="border-4 border-black rounded-none placeholder-black"
                  placeholder="Message"
                ></textarea>
                {errors.message && (
                  <span className="errorMessage">Please enter a message</span>
                )}
              </div>
            </div>
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
          <ToastContainer />
        </div>
      </div> */}
    </PageLayout>
  );
};

export default ContactForm;
