import { Realm } from "@realm/react";

//Realm Schema Definition
export class GuideArticleSchema extends Realm.Object {
  static schema = {
    name: "GuideArticle",
    primaryKey: "title",
    properties: {
      title: "string", //e.g., 'Emergency Splinting Procedure'
      content: "string", //The full text of the article
      category: "string", //e.g., 'First Aid', 'Gear Repair'
    },
  };
}
