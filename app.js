const express = require("express");
const { Pool } = require("pg");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./node_modules/swagger/package.json");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "1234root",
  port: 1234,
});

const app = express();

app.use(express.json());
app.use("/node_modules", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// GET запрос для главной страницы
app.get("/", (req, res) => {
  res.send("Привет! Это главная страница вашего приложения.");
});

// Получение доступных номеров
app.get("/room", async (req, res) => {
  try {
    const availableRooms = await pool.query("SELECT * FROM room WHERE available = true");
    res.json(availableRooms.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

app.get("/booker", async (req, res) => {
  try {
    const bookers = await pool.query("SELECT * FROM booker");
    res.json(bookers.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// Получение пользователя по ID
app.get("/booker/:booker_id", async (req, res) => {
  try {
    const { booker_id } = req.params;
    const booker = await pool.query(
      "SELECT * FROM booker WHERE id = $1",
      [booker_id]
    );
    if (booker.rows.length > 0) {
      res.json(booker.rows[0]);
    } else {
      res.status(404).json({ error: "Booker not found" });
    }
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// Создание нового пользователя
app.post("/booker", async (req, res) => {
  try {
    const {
      id,
      first_name,
      second_name,
      last_name,
      email,
      room_id,
      tel_num,
      passport,
    } = req.body;
    const newBooker = await pool.query(
      "INSERT INTO booker (id, first_name, second_name, last_name, email, room_id, tel_num, passport) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        id,
        first_name,
        second_name,
        last_name,
        email,
        room_id,
        tel_num,
        passport,
      ]
    );
    res.json(newBooker.rows[0]);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// Удаление пользователя
app.delete("/booker/:booker_id", async (req, res) => {
  try {
    const { booker_id } = req.params;
    await pool.query("DELETE FROM booker WHERE id = $1", [booker_id]);
    res.json({ message: "Booker deleted successfully" });
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// Получение всех заказов
app.get("/order", async (req, res) => {
  try {
    const orders = await pool.query('SELECT * FROM "order"');
    res.json(orders.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// Создание нового заказа
app.post("/order", async (req, res) => {
  try {
    const { booker_id, room_id, check_in, check_out } = req.body;
    
    // Создаем новый заказ
    const newOrder = await pool.query(
      'INSERT INTO "order" (booker_id, room_id, check_in, check_out) VALUES ($1, $2, $3, $4) RETURNING *',
      [booker_id, room_id, check_in, check_out]
    );

    // Обновляем доступность номера
    await pool.query("UPDATE room SET available = false WHERE room_id = $1", [room_id]);

    // Получаем цену номера
    const roomPrice = await pool.query("SELECT price FROM room WHERE room_id = $1", [room_id]);

    res.json(newOrder.rows[0]);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// Удаление заказа по ID
app.delete("/order/:order_id", async (req, res) => {
    try {
      const { order_id } = req.params;
  
      // Получаем информацию о номере, связанном с заказом
      const order = await pool.query("SELECT * FROM \"order\" WHERE order_id = $1", [order_id]);
      const room_id = order.rows[0].room_id;
  
      // Удаляем заказ
      await pool.query("DELETE FROM \"order\" WHERE order_id = $1", [order_id]);
      
      // Обновляем статус доступности номера
      await pool.query("UPDATE room SET available = true WHERE room_id = $1", [room_id]);
  
      res.json({ message: "Order deleted successfully" });
    } catch (error) {
      console.error("Error executing query", error);
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  });

// Получение данных о платеже
app.get("/payment", async (req, res) => {
  try {
    const payments = await pool.query(`
    SELECT payment.*, room.price
    FROM payment
    INNER JOIN room ON payment.room_id = room.id
    INNER JOIN booker ON payment.booker_id = booker.id
    `);
    res.json(payments.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// Создание нового платежа
app.post("/payment", async (req, res) => {
  try {
    const { booker_id, room_id, sum } = req.body;

    // Создаем новую запись о платеже
    const newPayment = await pool.query(
      "INSERT INTO payment (booker_id, room_id, sum) VALUES ($1, $2, $3) RETURNING *",
      [booker_id, room_id, sum]
    );

    res.json(newPayment.rows[0]);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// Обновление информации о платеже по ID
app.put("/payment/:payment_id", async (req, res) => {
    try {
      const { payment_id } = req.params;
      const { booker_id, room_id, sum } = req.body;
  
      // Обновляем информацию о платеже
      const updatedPayment = await pool.query(
        "UPDATE payment SET booker_id = $1, room_id = $2, sum = $3 WHERE id = $4 RETURNING *",
        [booker_id, room_id, sum, payment_id]
      );
  
      if (updatedPayment.rowCount === 0) {
        return res.status(404).json({ error: "Payment not found" });
      }
  
      res.json(updatedPayment.rows[0]);
    } catch (error) {
      console.error("Error executing query", error);
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  });

// Удаление информации о платеже по ID
app.delete("/payment/:payment_id", async (req, res) => {
    try {
      const { payment_id } = req.params;
      await pool.query("DELETE FROM payment WHERE id = $1", [payment_id]);
      res.json({ message: "Payment deleted successfully" });
    } catch (error) {
      console.error("Error executing query", error);
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});