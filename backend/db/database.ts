import sql, { ConnectionPool } from 'mssql';

interface PersonData {
  firstName: string;
  lastName: string;
}

export default class Database {
  config: any;
  poolconnection: ConnectionPool | null = null;
  connected = false;

  constructor(config: any) {
    this.config = config;
    console.log(`Database: config: ${JSON.stringify(config)}`);
  }

  async connect() {
    try {
      console.log(`Database connecting...${this.connected}`);
      if (!this.connected) {
        this.poolconnection = await sql.connect(this.config);
        this.connected = true;
        console.log('Database connection successful');
      } else {
        console.log('Database already connected');
      }
    } catch (error) {
      console.error(`Error connecting to database: ${JSON.stringify(error)}`);
    }
  }

  async disconnect() {
    try {
      if (this.poolconnection) {
        await this.poolconnection.close();
        console.log('Database connection closed');
      }
    } catch (error) {
      console.error(`Error closing database connection: ${error}`);
    }
  }

  async executeQuery(query: string) {
    await this.connect();
    if (!this.poolconnection) {
      throw new Error('Database connection not established');
    }
    const request = this.poolconnection.request();
    const result = await request.query(query);
    return result.rowsAffected[0];
  }

  async create(data: PersonData) {
    await this.connect();
    if (!this.poolconnection) {
      throw new Error('Database connection not established');
    }
    const request = this.poolconnection.request();

    request.input('firstName', sql.NVarChar(255), data.firstName);
    request.input('lastName', sql.NVarChar(255), data.lastName);

    const result = await request.query(
      `INSERT INTO Person (firstName, lastName) VALUES (@firstName, @lastName)`
    );

    return result.rowsAffected[0];
  }

  async readAll() {
    await this.connect();
    if (!this.poolconnection) {
      throw new Error('Database connection not established');
    }
    const request = this.poolconnection.request();
    const result = await request.query(`SELECT * FROM Person`);
    return result.recordset;
  }

  async read(id: number) {
    await this.connect();
    if (!this.poolconnection) {
      throw new Error('Database connection not established');
    }
    const request = this.poolconnection.request();
    const result = await request
      .input('id', sql.Int, id)
      .query(`SELECT * FROM Person WHERE id = @id`);

    return result.recordset[0];
  }

  async update(id: number, data: PersonData) {
    await this.connect();
    if (!this.poolconnection) {
      throw new Error('Database connection not established');
    }
    const request = this.poolconnection.request();

    request.input('id', sql.Int, id);
    request.input('firstName', sql.NVarChar(255), data.firstName);
    request.input('lastName', sql.NVarChar(255), data.lastName);

    const result = await request.query(
      `UPDATE Person SET firstName=@firstName, lastName=@lastName WHERE id = @id`
    );

    return result.rowsAffected[0];
  }

  async delete(id: number) {
    await this.connect();
    if (!this.poolconnection) {
      throw new Error('Database connection not established');
    }
    const request = this.poolconnection.request();
    const result = await request
      .input('id', sql.Int, id)
      .query(`DELETE FROM Person WHERE id = @id`);

    return result.rowsAffected[0];
  }
}
