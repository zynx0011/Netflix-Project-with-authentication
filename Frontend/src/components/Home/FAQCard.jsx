import React, { useState } from "react";

const FAQCard = (props) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswerVisibility = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <div className="cards mt-[1%]">
      <div className="bg-[#2d2d2d] w-[66vw] m-auto">
        <h1
          className="text-left font-bold text-2xl p-4 sm:p-[1.4rem]"
          onClick={toggleAnswerVisibility}
        >
          {props.title}
          <i
            className={`fa-solid fa-plus float-right p-1 ${
              isAnswerVisible ? "show" : ""
            }`}
          ></i>
        </h1>

        <div
          id="hide"
          className={`bg-[#484848] p-5 w-[66vw] m-auto  overflow-hidden   ${
            isAnswerVisible ? "visible" : "hidden"
          }`}
        >
          <h1 className="font-semibold text-xl block">{props.answer}</h1>
        </div>
      </div>
    </div>
  );
};

export default FAQCard;
