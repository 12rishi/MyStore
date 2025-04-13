import Buttons from "@/components/form/Buttons";
import CheckBoxInput from "@/components/form/CheckBoxInput";
import FormContainer from "@/components/form/FormContainer";
import { FormInput } from "@/components/form/FormInput";
import ImageInputContainer from "@/components/form/ImageInputContainer";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import { Input } from "@/components/ui/input";
import {
  fetchAdminProductDetail,
  updateProductAction,
  updateProductImageAction,
} from "@/utils/action";
import React from "react";

const EditProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await fetchAdminProductDetail(params.id);
  const { name, description, price, image, featured, company } = product;
  return (
    <div>
      <h1 className="text-2xl font-bold capitalize">Update Product</h1>
      <ImageInputContainer
        image={image}
        name="image"
        action={updateProductImageAction}
        text="Update Image"
      >
        <input type="hidden" name="id" value={params.id} />
        <input type="hidden" name="imageUrl" value={image} />
      </ImageInputContainer>
      <FormContainer action={updateProductAction}>
        <div className="grid md:grid-cols-2 gap-4">
          <input type="hidden" name="id" value={params.id} />
          <FormInput
            name="name"
            label=" Product Name"
            defaultValue={name}
            type="text"
          />
          <FormInput
            name="company"
            label="Company Name"
            defaultValue={company}
            type="text"
          />
          <PriceInput defaultValue={price.toNumber()} />
        </div>
        <TextAreaInput name="description" defaultValue={description} />
        <div className="mt-4">
          <CheckBoxInput
            name="featured"
            labelText="Featured"
            defaultChecked={featured}
          />
        </div>
        <div className="mt-4">
          <Buttons text="Update" />
        </div>
      </FormContainer>
    </div>
  );
};

export default EditProductPage;
