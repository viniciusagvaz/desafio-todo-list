import { ThemeProvider } from "styled-components";
import "./styles/global";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { Header } from "./components/Header";

import { TaskInput } from "./components/TaskInput";
import { TaskInfo } from "./components/TaskInfo";

import { EmptyList } from "./components/EmptyList";
import { TaskList } from "./components/TaskList";
import { useState } from "react";

export function App() {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("");

	const handleNewTask = e => {
		e.preventDefault();

		setNewTask(e.target.value);
	};

	const handleSubmitTask = e => {
		e.preventDefault();

		setTasks(old => [
			...old,
			{
				id: Math.random().toFixed(3) * 1000,
				content: newTask.toString(),
			},
		]);
		setNewTask("");
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<Header />
			<TaskInfo   taskQuantity={tasks.length} tasksDone={0} tasksTotal={0}/>

			<TaskInput 
        handleNewTask={handleNewTask}
				newTask={newTask}
				handleSubmitTask={handleSubmitTask}
			/>
			{!tasks.length && <EmptyList />}

			{tasks.length &&
				tasks.map(task => {
					return (
						<TaskList
							key={task.id}
							id={task.id}
							taskContent={task.content}
						/>
					);
				})}

			{/* {!tasks.length ? (
				<EmptyList />
			) : (
				tasks.length &&
				tasks.map(task => {
					return (
						<TaskList
							key={task.id}
							id={task.id}
							taskContent={task.content}
						/>
					);
				})
			)} */}
			<GlobalStyle />
		</ThemeProvider>
	);
}
