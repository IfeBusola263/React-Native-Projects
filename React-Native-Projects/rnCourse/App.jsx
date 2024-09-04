/* eslint-disable react/react-in-jsx-scope */

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Button,
  RefreshControl,
} from "react-native";

import GoalItem from "./components/GoalItem.jsx";
import GoalInput from "./components/GoalInput.jsx";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => (
    <GoalItem id={item.id} text={item.text} onDelete={handleDeleteGoal} />
  );
  const extractor = (item) => {
    return item.id;
  };

  function handleGoalAddition(enteredGoal) {
    setGoals((prevGoals) => [
      ...prevGoals,
      { text: enteredGoal, id: `${Math.random()} ${enteredGoal}` },
    ]);
  }

  function handleDeleteGoal(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  function handleModalVisibility() {
    setModalVisible(true);
  }

  function handleModalClose() {
    setModalVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add a Goal"
        accessibilityLabel="Add a Goal"
        onPress={handleModalVisibility}
      />
      <GoalInput
        visible={modalVisible}
        onPress={handleGoalAddition}
        placeHolder="Add a goal"
        onDelete={handleDeleteGoal}
        onCancel={handleModalClose}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={renderItem}
          keyExtractor={extractor}
          directionalLockEnabled
          refreshControl={<RefreshControl refreshing={false} />}
          keyboardDismissMode="on-drag"
          showsVerticalScrollIndicator={false}
        />
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
