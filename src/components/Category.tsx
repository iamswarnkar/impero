import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CategoryType } from "../utils/types";
import SubCategory from "./SubCategory";
import { useContext, useState } from "react";
import { Context } from "../utils/AppContext";
import { getCategory } from "../utils/apis/postApis";

export default function Category() {
  const {
    categoryState,
    subCategoryState,
    setSubCategoryState,
    setCategoryId,
    categoryId,
  } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);

  function handlePress(item: CategoryType) {
    setCategoryId(item?.Id);
    setLoading(true);
    getCategory(item?.Id, pageIndex)
      .then((data) => data.json())
      .then((res) => {
        const { SubCategories } = res?.Result?.Category?.[0];
        setSubCategoryState(SubCategories);
        // setPageIndex(pageIndex + 1);
      })
      .finally(() => setLoading(false));
  }

  return (
    <View>
      <ScrollView
        horizontal
        style={{
          top: 0,
          height: 28,
          position: "absolute",
          zIndex: 2,
        }}
      >
        {categoryState?.map((item, idx) => (
          <View key={idx}>
            <TouchableOpacity
              disabled={loading}
              onPress={() => handlePress(item)}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  paddingRight: 12,
                  opacity: item.Id === categoryId ? 1 : 0.5,
                }}
              >
                {item.Name}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      {subCategoryState &&
        (!loading ? (
          <SubCategory />
        ) : (
          <ActivityIndicator style={{ marginTop: 120 }} size="large" />
        ))}
    </View>
  );
}
