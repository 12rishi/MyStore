import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string
);
export const uploadImage = async (file: File) => {
  const bucketName = process.env.SUPABASE_BUCKET_NAME as string;
  const timeStamp = Date.now();
  const newName = `${timeStamp}-${file.name}`;
  const { data, error } = (await supabase.storage
    .from(bucketName)
    .upload(newName, file, { cacheControl: "3600" })) as {
    data: { id: string; path: string; fullPath: string };
    error: null | { name: string; message: string; status: number };
  };
  if (error) {
    throw new Error(error?.message);
  }
  console.log("data", data);
  console.log("error", error);
  return supabase.storage.from(bucketName).getPublicUrl(newName).data.publicUrl;
};
export const deleteProductImage = async (path: string) => {
  const imageName = path.split("/").pop();
  const { data, error } = await supabase.storage
    .from(process.env.SUPABASE_BUCKET_NAME as string)
    .remove([imageName as string]);
  if (error) {
    throw new Error(error?.message);
  }
  return;
};
