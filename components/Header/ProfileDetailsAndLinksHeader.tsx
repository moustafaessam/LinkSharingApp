import CenterLinkContainer from "@/components/Header/CenterLinkContainer/CenterLinkContainer";
import HeaderLogo from "@/components/Header/HeaderLogo/HeaderLogo";
import InnerHeaderContainer from "@/components/Header/InnerHeaderContainer/InnerHeaderContainer";
import MainHeaderContainer from "@/components/Header/MainHeaderContainer/MainHeaderContainer";
import PreviewNav from "@/components/Header/PreviewNav/PreviewNav";

export default function ProfileDetailsAndLinksHeader() {
  return (
    <>
      <MainHeaderContainer>
        <InnerHeaderContainer>
          <HeaderLogo />
          <CenterLinkContainer />
          <PreviewNav />
        </InnerHeaderContainer>
      </MainHeaderContainer>
    </>
  );
}
