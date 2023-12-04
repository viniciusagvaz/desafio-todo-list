import { ThemeProvider } from "styled-components";
import "./styles/global";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Header } from "./components/Header";
import { TodoInput } from "./components/TodoInput";
import { TaskContainer } from "./components/TaskContainer";
import { EmptyList } from "./components/TaskContainer/components/EmptyList";
import { TaskList } from "./components/TaskContainer/components/TaskList";

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Header />
			<TodoInput />
			<TaskContainer />
			{/* <EmptyList /> */}
			<TaskList />
			<GlobalStyle />
		</ThemeProvider>
	);
}
