import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <html>
      <head>
        <title>Spec Sources</title>
        <link rel="stylesheet" href="Style.css"></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
    </head>
    <body>
        <div>
            <img src="Spectator+Publishing+Logo.png" alt="Spec Logo" class="logo"/>
        </div>
        <div>
            <h1 class="header">Spectator's Sources</h1>
        </div>
        <div class="input-bar">
            <form class="input-content">
                <div>
                    <label for="source-name">Source Name:</label>
                    <input type="text" id="source-name" name="source-name" class="input-form"></input>
                </div>
                <div>
                    <label for="source-email">Source Email:</label>
                    <input type="text" id="source-email" name="source-email" class="input-form"></input>
                </div>
                <div>
                    <button type="submit" class="add-button">ADD</button>
                </div>
            </form>
        </div>
        <div class="response-column">
            <div class="response">
                <p class="info-1">1</p>
                <p class="info-1">Presbo</p>
                <p class="info-2">presbo@columbia.edu</p>
                <button type="submit" class="delete-button">DELETE</button>
            </div>
            <div class="response">
                <p class="info-1">2</p>
                <p class="info-1">John Jay Mouse</p>
                <p class="info-2">mouse@columbia.edu</p>
                <button type="submit" class="delete-button">DELETE</button>
            </div>
            <div class="response">
                <p class="info-1">1</p>
                <p class="info-1">Water Bottle Man</p>
                <p class="info-2">flipper@columbia.edu</p>
                <button type="submit" class="delete-button">DELETE</button>
            </div>
        </div>
    </body>
    </html>
    
  );
}

export default App;
