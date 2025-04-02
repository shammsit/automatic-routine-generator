#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_INPUT 1024

int main() {
    char inputData[MAX_INPUT];
    printf("Content-Type: application/json\n\n"); // Send JSON response

    // Read input from the form
    if (fgets(inputData, MAX_INPUT, stdin) == NULL) {
        printf("{\"status\": \"error\", \"message\": \"Failed to read input\"}\n");
        return 1;
    }

    // Print received data for debugging
    printf("{\"status\": \"success\", \"received_data\": \"%s\"}\n", inputData);

    return 0;
}


int main() {
    printJSON();
    return 0;
}
