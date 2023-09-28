export const menuOptionsCms = [
  {
    type: "subMenu",
    label: "SITE MANAGMENT",
    options: [
      { name: "Manage pages & navigation", disabledOption: true },
      { name: "Manage images & files", disabledOption: true },
    ],
  },
  {
    type: "subMenu",
    label: "DATA MANAGMENT",
    options: [
      { name: "Manage Users", disabledOption: true, routeElement: "" },
      { name: "Manage Orders", disabledOption: true, routeElement: "" },
      { name: "Manage Package Orders", disabledOption: true, routeElement: "" },
      {
        name: "Batch Upload users - Add New",
        disabledOption: true,
        routeElement: "",
      },
      {
        name: "Batch Upload users - Update",
        disabledOption: true,
        routeElement: "",
      },
      { name: "Download Users Data", disabledOption: true, routeElement: "" },
      {
        name: "Manage Content",
        disabledOption: false,
        routeElement: "/cms-content",
      },
      {
        name: "Manage Template Colors",
        disabledOption: true,
        routeElement: "",
      },
      { name: "Manage Specification", disabledOption: true, routeElement: "" },
      { name: "Manage Template Types", disabledOption: true, routeElement: "" },
      { name: "Manage MLS properties", disabledOption: true, routeElement: "" },
      { name: "Manage Discounts", disabledOption: true, routeElement: "" },
      {
        name: "Manage Categories",
        disabledOption: false,
        routeElement: "/cms-categories",
      },
      {
        name: "Manage Delivery options",
        disabledOption: true,
        routeElement: "",
      },
      { name: "Cron Summary", disabledOption: true, routeElement: "" },
    ],
  },
  {
    type: "subMenu",
    label: "SITE ADMINISTRATION",
    options: [
      {
        name: "Manage Control Panel Access",
        disabledOption: true,
        routeElement: "",
      },
    ],
  },
];
