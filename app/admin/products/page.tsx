import { IconButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteProduct, fetchAdminProducts } from "@/utils/action";
import { formatCurrency } from "@/utils/format";
import Link from "next/link";
import React from "react";

const ProductsPage = async () => {
  const products = await fetchAdminProducts();
  return (
    <Table className=" border  border-gray-300">
      <TableCaption>Total Products: {products.length}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>

          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <Link href={`/products/${product.id}`} className="underline">
              <TableCell>{product.name}</TableCell>
            </Link>
            <TableCell>{formatCurrency(Number(product.price))}</TableCell>

            <TableCell className="flex gap-4">
              <Link href={`/admin/edit/${product.id}`}>
                <IconButton actionType="edit" />
              </Link>
              <DeletProduct productId={product.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={1}>Total Price:</TableCell>
          <TableCell>
            {formatCurrency(
              products.reduce((acc, product) => acc + Number(product.price), 0)
            )}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default ProductsPage;

const DeletProduct = async ({ productId }: { productId: string }) => {
  const deleteProductId = deleteProduct.bind(null, { productId });
  return (
    <div>
      <FormContainer action={deleteProductId}>
        <IconButton actionType="delete" />
      </FormContainer>
    </div>
  );
};
