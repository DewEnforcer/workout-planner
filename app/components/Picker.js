import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  Text
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import PickerItem from "./PickerItem";
import Screen from "./Screen";
import ListEmptyComponent from "./lists/ListEmptyComponent";

import defaultStyles from "../config/styles";

function AppPicker({
  icon,
  items,
  numberOfColumns = 1,
  onSelectItem,
  PickerItemComponent = PickerItem,
  placeholder,
  selectedItem,
  width = "100%",
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? <Text style={styles.text}>{selectedItem.label}</Text> : <Text style={styles.placeholder}>{placeholder}</Text>}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          {items.map(item => <PickerItemComponent key={item.id} item={item} label={item.label} onPress={() => {setModalVisible(false); onSelectItem(item)}}/>)}
          {items.length === 0 && <ListEmptyComponent/>}
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
    color: defaultStyles.colors.dark,
  },
});

export default AppPicker;
