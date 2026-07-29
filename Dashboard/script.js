// ==========================
// Line Chart - Claims Overview
// ==========================

const lineCtx = document.getElementById('claimsChart');

new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Claims',
            data: [820, 950, 1100, 980, 1350, 1480],
            borderColor: '#16a34a',
            backgroundColor: 'rgba(22,163,74,0.15)',
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointHoverRadius: 6
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: '#f1f5f9'
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});


// ==========================
// Doughnut Chart - Claims Status
// ==========================

const doughnutCtx = document.getElementById('statusChart');

new Chart(doughnutCtx, {
    type: 'doughnut',
    data: {
        labels: [
            'Approved',
            'Pending',
            'Rejected'
        ],
        datasets: [{
            data: [
                9842,
                1230,
                408
            ],
            backgroundColor: [
                '#16a34a',
                '#EAB308',
                '#ef4444'
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    padding: 20
                }
            }
        }
    }
});