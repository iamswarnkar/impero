import { Alert, FlatList, Pressable, Text, View } from "react-native";
import { SubCategoryType } from "../utils/types";
import Product from "./Product";
import { useContext } from "react";
import { Context } from "../utils/AppContext";
import { getCategory } from "../utils/apis/postApis";

export default function SubCategory() {
  const {
    subCategoryState,
    categoryId,
    pageIndex,
    setSubCategoryState,
    setSubCategoryId,
  } = useContext(Context);

  function handlePress(item: SubCategoryType) {
    setSubCategoryId((prevId) => (prevId = item?.Id));
  }
  async function loadMoreSubCategory() {
    try {
      const data = await getCategory(
        categoryId as number,
        (pageIndex as number) + 1
      );

      const result = await data.json();
      if (result) {
        if (subCategoryState) {
          setSubCategoryState([
            ...subCategoryState,
            ...result?.Result?.Category[0]?.SubCategories,
          ]);
        }
      }
    } catch (error) {
      Alert.alert("Error", "Something want to wrong try after some time");
    }
  }
  const renderItem = ({ item }: { item: SubCategoryType }) => {
    return (
      <Pressable onPressIn={() => handlePress(item)}>
        <View>
          <Text style={{ fontSize: 12, fontWeight: "700" }}>{item?.Name}</Text>
          <Product productData={item?.Product} />
        </View>
      </Pressable>
    );
  };
  return (
    <View style={{ marginTop: 40, marginBottom: 20 }}>
      {subCategoryState && (
        <FlatList
          data={subCategoryState}
          keyExtractor={(_, idx) => idx.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          onEndReached={loadMoreSubCategory}
          onEndReachedThreshold={0.7}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        />
      )}
    </View>
  );
}
