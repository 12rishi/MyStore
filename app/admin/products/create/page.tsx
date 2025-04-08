import { FormInput } from "@/components/form/FormInput";
import React from "react";
import { faker } from "@faker-js/faker";
const CreateProductPage = () => {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });
  return (
    <section>
      <h1 className="text-2xl font-semibold capitalize mb-4">Create Product</h1>
      <div className="border p-8 rounded-md">
        <form>
          <FormInput
            name="name"
            type="text"
            label="product name"
            defaultValue={name}
          />
        </form>
      </div>
    </section>
  );
};

export default CreateProductPage;
