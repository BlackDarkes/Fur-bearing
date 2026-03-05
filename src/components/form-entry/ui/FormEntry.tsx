"use client";

import { Container } from "@/shared/ui";
import { Form } from "./form/Form";


export const FormEntry = () => {
  return (
    <section className="pb-section-padding-bottom">
      <Container>
        <Form />
      </Container>
    </section>
  );
}