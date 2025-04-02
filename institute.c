#include <stdio.h>
#include <stdlib.h>
#include <mysql/mysql.h>

void printJSON() {
    MYSQL *conn;
    MYSQL_RES *res;
    MYSQL_ROW row;

    // Print HTTP header
    printf("Content-Type: application/json\n\n");

    // Initialize MySQL connection
    conn = mysql_init(NULL);
    if (!conn) {
        printf("{\"error\": \"MySQL initialization failed\"}");
        return;
    }

    // Connect to database
    if (!mysql_real_connect(conn, "localhost", "root", "password", "routine_db", 3306, NULL, 0)) {
        printf("{\"error\": \"Database connection failed\"}");
        return;
    }

    // Query the database
    if (mysql_query(conn, "SELECT institute_name, contact FROM institutes")) {
        printf("{\"error\": \"Query execution failed\"}");
        return;
    }

    // Store result
    res = mysql_store_result(conn);
    printf("[");
    int first = 1;
    while ((row = mysql_fetch_row(res))) {
        if (!first) printf(",");
        printf("{\"institute_name\": \"%s\", \"contact\": \"%s\"}", row[0], row[1]);
        first = 0;
    }
    printf("]");

    // Cleanup
    mysql_free_result(res);
    mysql_close(conn);
}

int main() {
    printJSON();
    return 0;
}
