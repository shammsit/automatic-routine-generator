#include <stdio.h>
#include <mysql/mysql.h>

void fetchData() {
    MYSQL *conn;
    MYSQL_RES *res;
    MYSQL_ROW row;

    // Initialize MySQL connection
    conn = mysql_init(NULL);
    if (!conn) {
        printf("MySQL Initialization Failed\n");
        return;
    }

    // Connect to MySQL
    if (!mysql_real_connect(conn, "localhost", "root", "password", "routine_db", 3306, NULL, 0)) {
        printf("Connection Failed: %s\n", mysql_error(conn));
        return;
    }

    // Query to fetch data
    if (mysql_query(conn, "SELECT * FROM institutes")) {
        printf("Query Failed: %s\n", mysql_error(conn));
        return;
    }

    // Store result
    res = mysql_store_result(conn);
    while ((row = mysql_fetch_row(res))) {
        printf("Institute Name: %s, Contact: %s\n", row[1], row[6]);
    }

    // Clean up
    mysql_free_result(res);
    mysql_close(conn);
}

int main() {
    fetchData();
    return 0;
}
