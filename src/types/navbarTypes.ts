enum MOBILE_NAVBAR_SELECT {
  HOME,
  SEARCH,
  DASHBOARD,
  PROFILE,
  MORE,
}

interface mobileNavbarSelect {
  selected: MOBILE_NAVBAR_SELECT;
}

export { MOBILE_NAVBAR_SELECT };
export type { mobileNavbarSelect };
