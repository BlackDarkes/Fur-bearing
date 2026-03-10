"use client";

import { Container } from "@/shared/ui";
import { Form } from "./form/Form";

export const FormEntry = () => {
  return (
    <section id="tickets" className="pb-section-padding-bottom scroll-mt-50">
      <Container>
        <Form />
      </Container>
    </section>
  );
};
