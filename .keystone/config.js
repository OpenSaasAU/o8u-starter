"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core2 = require("@keystone-6/core");

// src/keystone/schema.ts
var import_core = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");
var import_fields = require("@keystone-6/core/fields");
var lists = {
  Author: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      name: (0, import_fields.text)(),
      email: (0, import_fields.text)(),
      posts: (0, import_fields.relationship)({ ref: "Post.author", many: true })
    }
  }),
  Post: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      title: (0, import_fields.text)(),
      content: (0, import_fields.text)(),
      author: (0, import_fields.relationship)({ ref: "Author.posts" })
    }
  })
};

// keystone.ts
var keystone_default = (0, import_core2.config)({
  db: {
    provider: "postgresql",
    url: process.env.DATABASE_URL,
    extendPrismaSchema: (schema) => {
      return schema.replace(
        /(generator [^}]+)}/g,
        ["$1", 'previewFeatures = ["driverAdapters"]\n', "}"].join("")
      );
    }
  },
  ui: {
    isAccessAllowed: ({ session }) => session.allowAdminUI,
    basePath: "/admin"
  },
  lists
});
//# sourceMappingURL=config.js.map
