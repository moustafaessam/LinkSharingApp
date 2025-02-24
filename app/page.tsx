import ProfileDetailsAndLinksHeader from "@/components/Header/ProfileDetailsAndLinksHeader";
import CustomizsLinksContainer from "@/components/ProfileDetails/Customize Links/CustomizeLinksContainer/CustomizsLinksContainer";
import PhoneMainContainer from "@/components/ProfileDetails/Phone/PhoneMainContainer/PhoneMainContainer";
import ProfileDetailsContainer from "@/components/ProfileDetails/ProfileDetailsContainer/ProfileDetailsContainer";
import { redirect } from "next/navigation";

export default function LinksPage() {
  redirect("/links");
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
