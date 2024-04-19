import * as sql from 'mssql';
import { config } from './config'
import Database from './database';

// Function to execute SQL query
export async function executeQuery(query: string): Promise<any> {
  try {
    const database = new Database(config);

    // const result = await pool.request()
    // .input('user_id', sql.Int, user.user_id)
    // .input('name', sql.NVarChar(255), user.name)
    // .input('email', sql.NVarChar(255), user.email)
    // .query('INSERT INTO [User] (user_id, name, email) VALUES (@user_id, @name, @email)');

    query = "INSERT INTO [User] (user_id, name, email) VALUES (2, 'john', 'johndoe@gmail.com');";

    // Execute the query
    const result = await database.executeQuery(query);

    database
    .executeQuery(query)
    .then(() => {
      return result;
    })
    .catch((err: any) => {
      // Table may already exist
      console.error(`Error creating table: ${err}`);
      throw err;
    });
  }
  catch (e: any) {
    // do nothing
  }
}

// export async function insertUser(user: { user_id: number; name: string; email: string }): Promise<void> {
//   try {
//     console.log(dbConfig);
//     console.log('Attemmpting insert', user.email, user.name)
//     // Connect to the database
//     const pool = await sql.connect(dbConfig);

//     // Insert user into the User table
//     const result = await pool.request()
//       .input('user_id', sql.Int, user.user_id)
//       .input('name', sql.NVarChar(255), user.name)
//       .input('email', sql.NVarChar(255), user.email)
//       .query('INSERT INTO [User] (user_id, name, email) VALUES (@user_id, @name, @email)');

//     console.log('Rows affected:', result.rowsAffected);

//     // Close the connection
//     await pool.close();
//   } catch (err: any) {
//     console.error('Error inserting user:', err.message);
//   }
// }