import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>🚀 DevOps Demo</h1>
        <p>My First React Application on AWS EC2</p>
      </header>

      {/* Status Cards */}
      <main className="container">
        <div className="cards">

          <div className="card">
            <div className="icon">🟢</div>
            <h2>Application</h2>
            <p>Running</p>
          </div> 

          <div className="card">
            <div className="icon">🖥️</div>
            <h2>Server</h2>
            <p>AWS EC2</p>
          </div>

          <div className="card">
            <div className="icon">⚛️</div>
            <h2>Frontend</h2>
            <p>React</p>
          </div>

          <div className="card">
            <div className="icon">🌐</div>
            <h2>Web Server</h2>
            <p>Nginx</p>
          </div>

        </div>

        {/* Deployment Section */}
        <section className="deployment">
          <h2>🚀 Deployment</h2>

          <div className="flow">
            <span>GitHub</span>
            <span>→</span>
            <span>AWS EC2</span>
            <span>→</span>
            <span>Nginx</span>
            <span>→</span>
            <span>React</span>
          </div>

          <button onClick={() => alert("Server is running! 🚀")}>
            Check Server
          </button>
        </section>

        {/* Project Information */}
        <section className="info">
          <h2>📦 Project Information</h2>

          <div className="info-row">
            <span>Version</span>
            <strong>1.0.0</strong>
          </div>

          <div className="info-row">
            <span>Environment</span>
            <strong>Production</strong>
          </div>

          <div className="info-row">
            <span>Platform</span>
            <strong>AWS EC2</strong>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>Built while learning DevOps ❤️</p>
      </footer>
    </div>
  );
}

export default App;