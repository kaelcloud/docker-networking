const express = require('express');
const mysql = require('mysql2/promise');

const app = express();

// 1️⃣ FIRST: CORS (before everything)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// 2️⃣ SECOND: Body parser
app.use(express.json());

// 3️⃣ THIRD: Database config
const dbConfig = {
  host: 'database',
  user: 'root',
  password: 'secret123',
  database: 'myapp'
};

// 4️⃣ FOURTH: Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello from Docker!',
    timestamp: new Date().toISOString(),
    hostname: require('os').hostname()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'backend' });
});

app.get('/api/users', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT * FROM users');
    await connection.end();
    
    res.json({
      success: true,
      data: rows
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

app.get('/api/users/:id', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute(
      'SELECT * FROM users WHERE id = ?',
      [req.params.id]
    );
    await connection.end();
    
    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }
    
    res.json({
      success: true,
      data: rows[0]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// 5️⃣ LAST: Start server
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend API running on port ${PORT}`);
  console.log(`Connecting to database at: ${dbConfig.host}`);
});