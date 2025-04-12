import { FormInput } from "@/components/form/FormInput";
import React from "react";
import { faker } from "@faker-js/faker";
import FormContainer from "@/components/form/FormContainer";
import { createProductAction } from "@/utils/action";
import PriceInput from "@/components/form/PriceInput";
import ImageInput from "@/components/form/ImageInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import CheckBoxInput from "@/components/form/CheckBoxInput";
import Buttons from "@/components/form/Buttons";
const CreateProductPage = () => {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const price = faker.commerce.price();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });
  return (
    <section>
      <h1 className="text-2xl font-semibold capitalize mb-4">Create Product</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProductAction}>
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              name="name"
              type="text"
              label="product name"
              defaultValue={name}
            />
            <FormInput
              name="company"
              type="text"
              label="product company"
              defaultValue={company}
            />
            <PriceInput defaultValue={Number(price)} />
            <ImageInput />
          </div>
          <div className="mt-2">
            <TextAreaInput
              name="description"
              labelText="product description"
              defaultValue={description}
            />
          </div>

          <CheckBoxInput name="featured" labelText="featured" />
          <Buttons text="Create Product" className="mt-4" />
        </FormContainer>
      </div>
    </section>
  );
};

export default CreateProductPage;
