import { Alert, FlatList, Image, Text, View } from "react-native";
import { ProductType, SubCategoryType } from "../utils/types";
import { useContext } from "react";
import { Context } from "../utils/AppContext";
import { getSubCategoryProducts } from "../utils/apis/postApis";

interface Props {
  productData: ProductType[];
}

export default function Product({ productData }: Props) {
  const { subCategoryId, subPageIndex, setSubCategoryState } =
    useContext(Context);
  async function loadMoreProducts() {
    try {
      if (subCategoryId && subPageIndex) {
        const data = await getSubCategoryProducts(subCategoryId, subPageIndex);
        const result = await data.json();

        setSubCategoryState((prevCategory) => {
          return prevCategory?.map((item) => {
            if (item.Id === subCategoryId) {
              const updatedProducts = [...item.Product, ...result?.Result];
              return { ...item, Product: updatedProducts };
            } else {
              return item;
            }
          });
        });
      }
    } catch (error) {
      Alert.alert("Error", "Something want to wrong try after some time");
    }
  }
  function renderItem({ item }: { item: ProductType }) {
    return (
      <View>
        <Image
          source={{ uri: item?.ImageName }}
          style={{ height: 100, width: 200 }}
        />
        <Text>{item?.Name}</Text>
        <Text
          style={{
            position: "absolute",
            left: 8,
            top: 8,
            backgroundColor: "skyblue",
            paddingVertical: 4,
            paddingHorizontal: 8,
            borderRadius: 4,
            color: "#fff",
          }}
        >
          {item?.PriceCode}
        </Text>
      </View>
    );
  }
  return (
    <View>
      <FlatList
        style={{ paddingBottom: 16 }}
        horizontal
        data={productData}
        renderItem={renderItem}
        onEndReached={loadMoreProducts}
        onEndReachedThreshold={1}
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
      />
    </View>
  );
}
