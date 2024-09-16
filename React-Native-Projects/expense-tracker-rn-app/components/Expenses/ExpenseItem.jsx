import { Pressable, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../utils/colors.js";
import getFormattedDate from "../../utils/date.js";
import { useNavigation } from "@react-navigation/native";

export default function ExpensesItem({ id, description, amount, date }) {
  const navigation = useNavigation();

  function expenseHandler() {
    navigation.navigate("ManageExpense", { expenseId: id });
  }

  return (
    <Pressable
      onPress={expenseHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expensesItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{date}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expensesItem: {
    marginVertical: 8,
    padding: 12,
    backgroundColor: Colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
  },
  textBase: {
    color: Colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontFamily: "cooper-hewitt-bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: Colors.primaryWhite,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 80,
  },
  amount: {
    color: Colors.primary500,
    fontFamily: "poppins-reg",
  },
});
