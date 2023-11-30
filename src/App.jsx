import { ThemeProvider } from 'styled-components'
import './styles/global'
import { GlobalStyle } from './styles/global'
import { defaultTheme} from './styles/themes/default'
import { Header } from './components/Header'
import { TodoInput } from './components/TodoInput'
import { TaskContainer } from './components/TaskContainer'
import { EmptyList } from './components/TaskContainer/components/EmptyList'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header/>
      <TodoInput/>
      <TaskContainer/>
      <EmptyList />
      <GlobalStyle/>

    </ThemeProvider>
  )
}

