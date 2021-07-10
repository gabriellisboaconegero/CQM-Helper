import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

import styles from "./styles.module.scss";

export const MenuLink: React.FC<NavLinkProps> = ({children, to, ...props}) => {
  return (
    <NavLink
      {...props}
      exact
      activeClassName={styles.currentRoute}
      to={to}
    >
      {children}
    </NavLink>
  );
}