import Theme from './Theme';
import { FavoriteJokesProvider } from './contexts/FavoriteJokesContext';

function App() {

    return (
        <Theme>
            <FavoriteJokesProvider>
                <p>Hello World</p>
            </FavoriteJokesProvider>
        </Theme>
    );
}

export default App;
