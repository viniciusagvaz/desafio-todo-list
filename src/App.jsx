import { ThemeProvider } from "styled-components";
import "./styles/global";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { Header } from "./components/Header";

import { TaskInput } from "./components/TaskInput";
import { TaskInfo } from "./components/TaskInfo";
import { EmptyList } from "./components/EmptyList";
import { TaskList } from "./components/TaskList";

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Header />
			<TaskInput />
			<TaskInfo />
			<EmptyList />
			<TaskList />
			<GlobalStyle />
		</ThemeProvider>
	);
}
