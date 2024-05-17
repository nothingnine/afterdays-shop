import { Access, CollectionConfig } from "payload/types";
import { isAdmin } from "./Media";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  access: {
    read: isAdmin(),
    create: () => true,
  },
  fields: [
    {
      name: "role",
      defaultValue: "user",
      required: true,
      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
      ],
    },
  ],
};
