import React from "react";

import { MenuLink } from "../../components/MenuLink";
import { PrivateComponent } from "../../components/PrivateComponent";

import {
  BsBullseye,
  BsTools,
  BsFileEarmarkText,
  BsPersonFill,
  BsPlusSquare,
  BsCloudDownload
  } from 'react-icons/bs';

  import styles from './styles.module.scss';

const SideMenu: React.FC = (props) => {
  return (
    <PrivateComponent>
      <menu className={styles.menu}>
        <MenuLink to="/portais" aria-label="Portais">
          <BsBullseye />
        </MenuLink>
        <MenuLink to="/ferramentas" aria-label="Ferramentas">
          <BsTools />
        </MenuLink>
        <MenuLink to="/decretos" aria-label="Decretos">
          <BsFileEarmarkText />
        </MenuLink>
        <MenuLink to="/profile" aria-label="Perfil">
          <BsPersonFill />
        </MenuLink>
        <MenuLink to='/profile/newclient' aria-label="Cadastrar novo consulente">
          <BsPlusSquare />
        </MenuLink>
        <MenuLink to="/profile/selectfile" aria-label="Selecionar documento">
          <BsCloudDownload />
        </MenuLink>
      </menu>
    </PrivateComponent>
  );
}

export default SideMenu;