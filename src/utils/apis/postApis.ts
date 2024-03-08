const url = "http://esptiles.imperoserver.in/api/API/Product";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const getCategory = async (categoryId: number, pageIndex: number) => {
  return await fetch(`${url}/DashBoard`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      CategoryId: categoryId,
      DeviceManufacturer: "Google",
      DeviceModel: "Android SDK built for x86",
      DeviceToken: " ",
      PageIndex: pageIndex,
    }),
  });
};

export const getSubCategoryProducts = async (
  SubCategoryId: number,
  PageIndex: number
) => {
  return await fetch(`${url}/ProductList`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      SubCategoryId: SubCategoryId,
      PageIndex: PageIndex,
    }),
  });
};
