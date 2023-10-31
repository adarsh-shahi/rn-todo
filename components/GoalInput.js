import {
	View,
	TextInput,
	Button,
	StyleSheet,
	Modal,
	Image,
} from "react-native";
import { useState } from "react";

export default function GoalInput({ addGoal, isModalOpen, onCloseModal }) {
	const [goalTextInput, setGoalTextInput] = useState("");
	const handleAddGoal = () => {
		addGoal(goalTextInput);
		setGoalTextInput("");
	};
	return (
		<Modal visible={isModalOpen} animationType="slide">
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require("../assets/images/splash.png")}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Whats your goal"
					value={goalTextInput}
					onChangeText={(enteredText) => setGoalTextInput(enteredText)}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Add Goal" onPress={handleAddGoal} color="#5e0acc" />
					</View>
					<View style={styles.button}>
						<Button title="Cancel" onPress={onCloseModal} color="#f31282" />
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		backgroundColor: "#311b6b",
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#e4d0ff",
		backgroundColor: "#e4d0ff",
		color: "#120438",
		width: "100%",
		borderRadius: 6,
		padding: 16,
	},
	buttonContainer: {
		marginTop: 16,
		flexDirection: "row",
		gap: 20,
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
});
