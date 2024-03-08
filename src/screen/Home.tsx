import { View, Alert, ActivityIndicator } from "react-native";
import React, { useContext, useEffect } from "react";
import { getCategory } from "../utils/apis/postApis";
import Category from "../components/Category";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context } from "../utils/AppContext";

export default function Home() {
  const {
    categoryState,
    setCategoryState,
    setSubCategoryState,
    categoryId,
    setCategoryId,
  } = useContext(Context);

  async function getAppCategory() {
    try {
      const res = await getCategory(0, 1);
      const result = await res.json();
      setCategoryState(result?.Result?.Category);
      setSubCategoryState(result?.Result?.Category[0]?.SubCategories);
      setCategoryId((prevId) => (prevId = result?.Result?.Category[0]?.Id));
    } catch (e) {
      Alert.alert("Error", "Something want to wrong try after some time");
    }
  }

  useEffect(() => {
    getAppCategory();
  }, []);
  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 8 }}>
        {categoryState ? <Category /> : <ActivityIndicator size="large" />}
      </View>
    </SafeAreaView>
  );
}
