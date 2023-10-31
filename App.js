import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [goalsList, setGoalsList] = useState([]);
	const [isModelOpen, setIsModalOpen] = useState(false);

	const handleGoalDelete = (key) => {
		const filteredGoals = goalsList.filter((goal) => {
			return goal.key !== key;
		});
		setGoalsList(filteredGoals);
	};

	const addGoal = (goal) => {
		setGoalsList((currentGoalsList) => [
			...currentGoalsList,
			{ text: goal, key: Math.random().toString() },
		]);
		closeModal();
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<StatusBar style="light" />
			<View style={styles.appContainer}>
				<Button
					title="Add New Goal"
					color="#5e0acc"
					onPress={setIsModalOpen.bind(this, true)}
				/>
				<GoalInput
					addGoal={addGoal}
					isModalOpen={isModelOpen}
					onCloseModal={closeModal}
				/>
				<View style={styles.goalsContainer}>
					<FlatList
						data={goalsList}
						renderItem={(itemData) => {
							return (
								<GoalItem
									goal={itemData.item}
									onGoalDelete={handleGoalDelete}
								/>
							);
						}}
					/>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		marginTop: 50,
		paddingHorizontal: 16,
	},
	goalsContainer: {
		flex: 4,
	},
});
