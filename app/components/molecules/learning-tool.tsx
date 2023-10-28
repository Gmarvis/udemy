import React from "react";
import {BsPlusCircleFill} from "react-icons/bs"

type Props = {};

const LearningTool = (props: Props) => {
  return (
    <div className="w-full p-8 mx-auto">
      <h1>Learning reminders</h1>
      <br></br>
      <h2>Calendar events</h2>
      <br></br>
      <p>Learning a little each day adds up. Research shows that students who make learning a habit are more likely to reach their goals. Set time aside to learn and get reminders using your learning scheduler.</p>
      <p className="text-sm text-gray">Requires Google Calendar, Apple Calendar, or Outlook</p>
      <button className="p-3 bg-violet w-full md:w-[300px] flex ">
        Schedule learning time <BsPlusCircleFill/>
      </button>
      <br></br>
      <h2>Push notifications</h2>
      <p>Don’t want to schedule time blocks? Set a learning reminder to get push notifications from the Udemy mobile app.</p>
      <p className="font-semibold text-gray ">Text me a link to download the app</p>
      <p className="text-sm text-gray ">By providing your phone number, you agree to receive a one-time automated text message with a link to get app. Standard messaging rates may apply.</p>
    </div>
  );
};

export default LearningTool;
