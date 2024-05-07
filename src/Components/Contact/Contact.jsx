import React from "react";
import Title from "../SectionTitles/Title";
import Form from "./Form/Form";

export default function Contact(data) {
  return (
    <div className="px-5 md:px-10 xl:px-28 2xl:px-36 space-y-16">
      <div>
        <Title {...data} />
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110263.63876708367!2d57.1486513852906!3d30.273025152252185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f021851dbb1d0d1%3A0xcd1f7455f5d78eb6!2z2qnYsdmF2KfZhtiMINin2LPYqtin2YYg2qnYsdmF2KfZhtiMINin24zYsdin2YY!5e0!3m2!1sfa!2s!4v1710841822839!5m2!1sfa!2s"
          width="100%"
          height="250"
          style={{ border: 0 }}
        ></iframe>
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
}
