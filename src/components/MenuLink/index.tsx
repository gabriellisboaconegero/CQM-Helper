import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

export const MenuLink: React.FC<NavLinkProps> = ({children, to, ...props}) => {
  return (
    <NavLink
      {...props}
      exact
      activeClassName="current-route"
      to={to}
    >
      {children}
    </NavLink>
  );
}