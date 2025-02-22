import ProfileDetailsAndLinksHeader from "@/components/Header/ProfileDetailsAndLinksHeader";
import PhoneMainContainer from "@/components/ProfileDetails/Phone/PhoneMainContainer/PhoneMainContainer";
import ProfileDetails from "@/components/ProfileDetails/Profile Details/ProfileDetailsContainer/ProfileDetails";
import ProfileDetailsContainer from "@/components/ProfileDetails/ProfileDetailsContainer/ProfileDetailsContainer";
import React from "react";

export default function ProfileDetailsPage() {
  return (
    <>
      <ProfileDetailsAndLinksHeader />
      <ProfileDetailsContainer>
        <PhoneMainContainer />
        <ProfileDetails />
      </ProfileDetailsContainer>
    </>
  );
}
