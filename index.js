const sql = require('mssql');
const config = {
    user: 'monitor',
    password: 'VjYbR784',
    server: 'db05',
    database: 'skat.register',
 
    options: {
//        encrypt: true // Use this if you're on Windows Azure
    }
};
const db = require('./dataprovider.js');  

getData2();

async function getData2() {
    try {
      let cmp = await db.getCompanyList('0da2ed73-b073-46e6-9a66-9450a1fc4989');
      console.log(cmp);
    } catch (err) {
      console.log('Opps, an error occurred', err);
    }
  }


async function getData1() {
    try {
        let pool = await sql.connect(config);
    
        // Stored procedure
        let result2 = await pool.request()
            .input('OrganizationID', sql.UniqueIdentifier, '0da2ed73-b073-46e6-9a66-9450a1fc4989')
            .input('PageIndex', sql.Int, 1)
            .input('PageSize', sql.Int, 20)
            .output('PageCount', sql.Int)
            .output('RowCount', sql.Int)
            .execute('dbo.Company_List');
        
        console.dir(result2);
    } catch (err) {
        console.log(err);
    }
}

sql.on('error', err => {
    console.log(err);
});
