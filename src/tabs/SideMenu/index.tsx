import React from "react";

import { DecretosSvg } from "../../assets/DecretosSvg";
import { FerramentasSvg } from "../../assets/FerramentasSvg";
import { MenuSvg } from "../../assets/MenuSvg";
import { PortaisSvg } from "../../assets/PortaisSvg";
import { ProfileSvg } from "../../assets/ProfileSvg";

import { MenuLink } from "../../components/MenuLink";
import { useAuth } from "../../hooks/useAuth";
import { PrivateComponent } from "../../components/PrivateComponent";
import { AddSvg } from "../../assets/AddSvg";
import { DownloadSvg } from "../../assets/dowloadSvg";

const SideMenu: React.FC = (props) => {

  const {user} = useAuth();

  return (
    <PrivateComponent>
      <menu>
        <MenuSvg />      
        <MenuLink to="/portais" >
          <PortaisSvg />
        </MenuLink>
        <MenuLink to="/ferramentas" >
          <FerramentasSvg />
        </MenuLink>
        <MenuLink to="/decretos" >
          <DecretosSvg />
        </MenuLink>
        <MenuLink to="/profile" >
          <ProfileSvg />
        </MenuLink>
        <MenuLink to='/profile/newclient'>
          <AddSvg />
        </MenuLink>
        <MenuLink to="/profile/selectfile">
          <DownloadSvg />
        </MenuLink>
      </menu>
    </PrivateComponent>
  );
}

export default SideMenu;