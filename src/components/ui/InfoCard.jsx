import React, { useState } from "react";
import { Heading, Button } from "../common/common";
import { TRICK_ICON } from "../../svg/DashboardIconsGrabbar";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import {
  FACEBOOK_ICON,
  INSTAGRAM_ICON,
  TWITTER_ICON,
  YOUTUBE_ICON,
  LINKDIN_ICON,
} from "../../svg/SocialAccountIconsGrabbar";

const InfoCard = ({ title, description, buttonText }) => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const SocialAccountsLinks = [
    { icon: FACEBOOK_ICON, text: "Facebook" },
    { icon: INSTAGRAM_ICON, text: "Instagram" },
    { icon: TWITTER_ICON, text: "Twitter" },
    { icon: LINKDIN_ICON, text: "Linkdin" },
    { icon: YOUTUBE_ICON, text: "Youtube" },
  ];

  const SocialLinks = ({ icon, SocialName }) => {
    const Icon = icon;
    return (
      <div className="flex justify-center items-center">
        <div className="p-4 w-[8rem] h-[6rem] border border-[#A7B1CE33]">
          <Icon />
          <p className="text-xs font-semibold text-center text-[#272B41]">
            {SocialName}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
      <div className="flex justify-between">
        <Heading level={2} text={title} />
        <div className="p-3 rounded-full bg-[#C7C7C7]">
          <TRICK_ICON />
        </div>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>

      <Button onClick={onOpenModal} customClass="!text-white" gradient>
        {buttonText}
      </Button>

      <Modal open={open} onClose={onCloseModal} center>
        <div className="p-4 w-[30rem] h-[28rem]">
          <Heading level={2} text="Add an account to Social Medias" />
          <p>
            Choose each social network you want to connect and then authorize
            Social Medias to access your accounts.
          </p>
          <span>
            Add to:
            <Button customClass="!text-white" gradient>
              {buttonText}
            </Button>
          </span>
          <div className="mb-[30px] grid grid-cols-3 gap-4">
            {SocialAccountsLinks.map((item, index) => {
              return (
                <SocialLinks
                  key={index}
                  icon={item.icon}
                  SocialName={item.text}
                />
              );
            })}
          </div>
          <div className="flex justify-center gap-4">
            <Button text="Skip" customClass="border" />
            <Button gradient text="Confirm" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default InfoCard;
