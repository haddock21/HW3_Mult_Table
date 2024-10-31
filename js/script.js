/*
    File: script.js
    GUI Assignment: HW3 Creating an Interactive Dynamic Table   
    Nikolas Haddock, UMass Lowell Computer Science, 
    nikolas_haddock@student.uml.edu 
    Copyright (c) 2024 by Nikolas Haddock.  All rights reserved.
    This JavaScript file gathers input from an HTML form, validates
    the input, and then dynamically builds a multiplication table. 
*/
document.getElementById('multiplication-form').onsubmit = function(e) {
    e.preventDefault(); // Prevent page refresh

    // Clear existing table
    const tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML = '';
    
    // Clear any error messages
    document.getElementById('hStartError').style.display = 'none';
    document.getElementById('hEndError').style.display = 'none';
    document.getElementById('vStartError').style.display = 'none';
    document.getElementById('vEndError').style.display = 'none';

    // Get input values
    const hStart = +document.getElementById('hStart').value;
    const hEnd = +document.getElementById('hEnd').value;
    const vStart = +document.getElementById('vStart').value;
    const vEnd = +document.getElementById('vEnd').value;
    
    // Validate input
    var isValid = true;
    if(hStart > hEnd) {
        document.getElementById('hStartError').textContent = 'Value must be less than Row End'; // Set error message
        document.getElementById('hStartError').style.display = 'flex'; // Show error message
        isValid = false;
    }
    if(vStart > vEnd) {
        document.getElementById('vStartError').textContent = 'Value must be less than Column End';
        document.getElementById('vStartError').style.display = 'flex';
        isValid = false;
    }
    if(hStart < -100 || hStart > 100) {
        document.getElementById('hStartError').textContent = 'Value out of expected range (-100 - 100)';
        document.getElementById('hStartError').style.display = 'flex';
        isValid = false;
    }
    if(hEnd < -100 || hEnd > 100) {
        document.getElementById('hEndError').textContent = 'Value out of expected range (-100 - 100)';
        document.getElementById('hEndError').style.display = 'flex';
        isValid = false;
    }
    if(vStart < -100 || vStart > 100) {
        document.getElementById('vStartError').textContent = 'Value out of expected range (-100 - 100)';
        document.getElementById('vStartError').style.display = 'flex';
        isValid = false;
    }
    if(vEnd < -100 || vEnd > 100) {
        document.getElementById('vEndError').textContent = 'Value out of expected range (-100 - 100)';
        document.getElementById('vEndError').style.display = 'flex';
        isValid = false;
    }
    if (!isValid)
        return; // Don't continue if invalid

    // Create the table
    const table = '<table>' + createTable(hStart, hEnd, vStart, vEnd) + '</table>';

    // Add the table to the container
    tableContainer.innerHTML = table;
};

// Helper function to generate the table HTML
function createTable(hStart, hEnd, vStart, vEnd) {
    let html = '<tr><th></th>';
    
    // Header row
    for (let h = hStart; h <= hEnd; h++) {
        html += `<th>${h}</th>`;
    }
    html += '</tr>';
    
    // Rows for each value in the vertical range
    for (let v = vStart; v <= vEnd; v++) {
        html += `<tr><th>${v}</th>`;
        for (let h = hStart; h <= hEnd; h++) {
            html += `<td>${h * v}</td>`;
        }
        html += '</tr>';
    }
    return html;
}
