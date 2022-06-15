import React from "react";
import PageBase from "./PageBase";

const Contact = () => {
  const contact = [
    {
      name: "contact",
    },
  ];
  return (
    <div className="contact">
      <PageBase name={contact.name}></PageBase>
      {/* <>はエンティティコードを使う */}
      <h2 class="mt-20">/* ----- I like to connect!! ----- */</h2>
      <h1 class="mb-20">Contact</h1>
    </div>
  );
};

export default Contact;
