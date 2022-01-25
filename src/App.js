import './App.css';
import Login from './components/login';
import styled from 'styled-components';
import { AccountBox } from './components/accountBox';

const AppContainer = styled.div`
	margin-top: 5rem;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

function App() {
	return (
		<div className="App">
			<AppContainer>
				<Login />
				<AccountBox />
			</AppContainer>
		</div>
	);
}

export default App;
