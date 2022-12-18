// Write your solution in this file!
    const employee = {
        name: "Chelsea",
        streetAddress: {
          line1: "11 Broadway",
          line2: "2nd Floor", 
      },

    };

    function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
        const copyEmployee = {...employeeObj}
        console.log("copyEmployee", copyEmployee)
        copyEmployee[key] = value
        return copyEmployee
    }

    function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
        obj[key] = value
        return obj
    }

    function deleteFromEmployeeByKey(employeeObj, key, value) {
        const copyEmployee = {...employeeObj}
        delete copyEmployee[key]
        return copyEmployee
    }

    function destructivelyDeleteFromEmployeeByKey(employeeObj, key, value) {
        delete employeeObj[key]
        return employeeObj
    }
    
