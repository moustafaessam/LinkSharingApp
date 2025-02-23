import ProfileDetailsAndLinksHeader from "@/components/Header/ProfileDetailsAndLinksHeader";
import CustomizsLinksContainer from "@/components/ProfileDetails/Customize Links/CustomizeLinksContainer/CustomizsLinksContainer";
import PhoneMainContainer from "@/components/ProfileDetails/Phone/PhoneMainContainer/PhoneMainContainer";
import ProfileDetailsContainer from "@/components/ProfileDetails/ProfileDetailsContainer/ProfileDetailsContainer";

export default function LinksPage() {
  return (
    <>
      <ProfileDetailsAndLinksHeader />
      <ProfileDetailsContainer>
        <PhoneMainContainer />
        <CustomizsLinksContainer />
      </ProfileDetailsContainer>
    </>
  );
}
