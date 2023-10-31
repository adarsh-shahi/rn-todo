import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem({ goal, onGoalDelete }) {
	return (
		<View style={styles.goalItem}>
			<Pressable
				android_ripple={{ color: "#ddd" }}
				style={({ pressed }) => pressed && styles.pressedItem}
				onPress={onGoalDelete.bind(this, goal.key)}
			>
				<Text style={styles.goalText}>{goal.text}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: "#5e0acc",
	},
	goalText: {
		padding: 8,
		color: "#fff",
	},
	pressedItem: {
		opacity: 0.5,
	},
});
