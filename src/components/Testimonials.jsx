import React from "react";
import img1 from "../img/avatar-anisha.png";
import img2 from "../img/avatar-ali.png";
import img3 from "../img/avatar-richard.png";

const Testimonials = () => {
  return (
    <div>
      {/* Container to heading and testimonials blocks*/}
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          What's Different about Manage?
        </h2>
        {/* Testimonial Container */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* Testimonial 1 */}
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src={img1} alt="img-1" className="w-16 -mt-14" />
            <h5 className="text-lg font-bold">Anisha Li</h5>
            <p className="text-sm text-darkGrayishBlue">
              “Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
            <img src={img2} alt="img-2" className="w-16 -mt-14" />
            <h5 className="text-lg font-bold">Ali Bravo</h5>
            <p className="text-sm text-darkGrayishBlue">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="hidden  flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
            <img src={img3} alt="img-3" className="w-16 -mt-14" />
            <h5 className="text-lg font-bold">Richard Watts</h5>
            <p className="text-sm text-darkGrayishBlue">
              “Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
