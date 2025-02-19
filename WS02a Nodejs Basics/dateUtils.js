// dateUtils.js
function getCurrentDate() {
    return new Date().toLocaleDateString();
}

function formatDate(date) {
    return date.toISOString().split('T')[0]; // YYYY-MM-DD format
}

module.exports = { getCurrentDate, formatDate };
