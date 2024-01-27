import React from "react";
import FAQCard from "./FAQCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const { currentUser } = useSelector((state) => state.auth);
  return (
    <>
      <div className="bg-[url(https://miro.medium.com/v2/resize:fit:1400/1*5lyavS59mazOFnb55Z6znQ.png)] bg-no-repeat  bg-cover h-[85vh] relative  z-0">
        <div className="bg-black/[0.6] h-[90vh] z-10  text-white ">
          <div className=" absolute top-[28%] left-[23%] space-y-4   ">
            <h1 className="text-5xl font-bold">
              Unlimited movies, TV shows and more
            </h1>
            <h2 className="text-2xl  text-center font-bold">
              Watch anywhere. Cancel anytime.
            </h2>
            <h4 className="text-xl text-center font-bold">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h4>
          </div>
          {currentUser ? (
            <Link to="/Home" className="flex justify-center">
              <button className=" bg-red-600 p-2 rounded-lg w-[15%] font-bold  border hover:bg-red-700 absolute top-[61%] left-[ 41%]  ">
                Explore
              </button>
            </Link>
          ) : (
            <div className=" absolute top-[61%] left-[ 41%]  w-full flex justify-center items-center ">
              <input
                className="input input-primary rounded-r-none "
                placeholder="enter your email"
              />
              <Link to="/api/v1/users/Signup">
                <button className=" red-8 bg-red-600 p-2  rounded-l-lg rounded-r-lg size-auto">
                  <span>Get</span> Started
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className=" flex items-center justify-center gap-4 space-x-5 space-y-2 min-h-[89vh] bg-black border-t-4 border-gray-400 relative">
        <div className="w-[40%] space-y-5 ml-[10%]">
          <h1 className="text-5xl   font-bold">Enjoy on your TV</h1>

          <p className="font-semibold text-xl w-[80%]">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="second  relative ">
          <video
            className="w-[70%]"
            src="https://vod-progressive.akamaized.net/exp=1706029609~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2280%2F16%2F411404032%2F1766817809.mp4~hmac=6cd66f8283fb04bbad025c69072476a442cebfab42e1121b46dc46895e662879/vimeo-prod-skyfire-std-us/01/2280/16/411404032/1766817809.mp4"
            loop
            autoPlay
            muted
          ></video>
          <img
            className=" absolute w-[79%]  top-[-26%] left-[-1%]"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 space-x-5 space-y-2 min-h-[89vh] bg-black border-t-4 border-gray-400 relative">
        <div className="first relative ">
          <img
            className="h-auto"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt=""
          />
          <div className=" w-[50%] absolute left-[25%] top-[75%] flex ">
            <div className="card-body bg-black border  h-[5rem] flex justify-evenly items-center  rounded-xl">
              <div className="flex items-center ">
                <div>
                  <img
                    className="w-[30%] ml-[-8%]   "
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                    alt=""
                  />{" "}
                </div>
                <div className="ml-[-30%] w-[50%]">
                  {" "}
                  <h1>
                    Stranger Things{" "}
                    <span className="text-blue-600">Downloading...</span>
                  </h1>
                </div>
                <div className="">
                  {" "}
                  <i className="fa-solid fa-download ml-[30px]"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second  w-[35%]  space-y-6">
          <h1 className="text-5xl font-bold ">
            Download your shows to watch offline
          </h1>
          <p className="text-xl font-semibold">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
      </div>

      <div className=" flex items-center justify-center gap-4 space-x-5 space-y-2 min-h-[89vh] bg-black border-t-4 border-gray-400 relative">
        <div className="w-[40%] space-y-5 ml-[10%]">
          <h1 className="text-5xl   font-bold">Watch everywhere</h1>

          <p className="font-semibold text-xl w-[80%]">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="second  relative ">
          <video
            className="w-[55%]"
            src="https://player.vimeo.com/external/411404032.sd.mp4?s=6239acdd572e64c5fced057b9fb2574a2236c1d4&profile_id=164&oauth2_token_id=57447761"
            loop
            autoPlay
            muted
          ></video>
          <img
            className=" absolute w-[89%]  top-[-26%] left-[-17%]"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 space-x-5 space-y-2 min-h-[89vh] bg-black border-t-4 border-gray-400 relative">
        <div className="first relative ">
          <img
            className="h-auto"
            src="https://occ-0-3216-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
            alt=""
          />
        </div>
        <div className="second  w-[35%]  space-y-6">
          <h1 className="text-5xl font-bold ">Create profiles for kids </h1>
          <p className="text-xl font-semibold">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>
      <div className=" bg-black border-t-4 h-[auto] border-gray-400">
        <h1 className="text-center font-bold text-5xl mt-[7%] mb-[4%]">
          Frequently Asked Questions
        </h1>

        <FAQCard
          title="What is Netflix?"
          answer=" Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more – on
            thousands of internet-connected devices.
            You can watch as much as you want, whenever you want, without a
            single ad – all for one low monthly price. There's always something
            new to discover, and new TV shows and movies are added every week!"
        />
        <FAQCard
          title="How much does Netflix cost"
          answer="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
        />
        <FAQCard
          title="Where can I watch ?"
          answer="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
        />
        <FAQCard
          title="How do I Cancel"
          answer="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        />
        <FAQCard
          title="What can i watch on Netflix"
          answer="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
        />
        <h1 className="font-bold text-2xl text-center mt-[4%]">
          Ready to watch? Enter your email to create or restart your membership.
        </h1>
        <div className=" mt-7 p-11  w-full flex justify-center items-center ">
          <input
            className="input input-primary rounded-r-none "
            placeholder="enter your email"
          />
          <Link to="/Signup">
            <button className="  bg-red-600 p-2  rounded-l-lg rounded-r-lg size-auto">
              <span>Get</span> Started
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
