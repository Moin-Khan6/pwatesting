const icon = () => {
  return ` <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewbox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>`;
};

export const menuItem = [
  {
    name: "Home",
    link: "/",
    icon: icon,
  },
];
