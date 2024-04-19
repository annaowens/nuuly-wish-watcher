import * as dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}`, debug: true });

const server = process.env.AZURE_SQL_SERVER;
const database = process.env.AZURE_SQL_DATABASE;
const port = process.env.AZURE_SQL_PORT ? parseInt(process.env.AZURE_SQL_PORT) : 1433;
const type = process.env.AZURE_SQL_AUTHENTICATIONTYPE;

// Passwordless configuration
export const config = {
    server,
    port,
    database,
    authentication: {
        type: process.env.AZURE_SQL_AUTHENTICATIONTYPE
    },
    options: {
        encrypt: true,
        trustServerCertificate: false
        // clientId: process.env.AZURE_CLIENT_ID  // <----- user-assigned managed identity        
    }
};