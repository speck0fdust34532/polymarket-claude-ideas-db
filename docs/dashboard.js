// Dashboard functionality
let strategies = [];
let filteredStrategies = [];

// Fetch strategies from JSON file
async function fetchStrategies() {
    try {
        const response = await fetch("strategies.json");
        strategies = await response.json();
        filteredStrategies = [...strategies]; // Initialize filtered strategies
        renderStrategies(strategies);
        updateLastUpdated();
        setupFilterListeners();
    } catch (error) {
        console.error("Error fetching strategies:", error);
    }
}

// Initialize dashboard on page load
document.addEventListener("DOMContentLoaded", fetchStrategies);

// Setup filter event listeners
function setupFilterListeners() {
    document.getElementById('platform-filter').addEventListener('change', applyFilters);
    document.getElementById('volume-filter').addEventListener('change', applyFilters);
    document.getElementById('tax-filter').addEventListener('change', applyFilters);
    document.getElementById('durability-filter').addEventListener('change', applyFilters);
    document.getElementById('claude-filter').addEventListener('change', applyFilters);
    document.getElementById('reset-filters').addEventListener('click', resetFilters);
}

// Apply all active filters
function applyFilters() {
    const platformFilter = document.getElementById('platform-filter').value;
    const volumeFilter = document.getElementById('volume-filter').value;
    const taxFilter = document.getElementById('tax-filter').value;
    const durabilityFilter = document.getElementById('durability-filter').value;
    const claudeFilter = document.getElementById('claude-filter').value;

    filteredStrategies = strategies.filter(strategy => {
        let matches = true;

        if (platformFilter && strategy.platform !== platformFilter) {
            matches = false;
        }

        if (volumeFilter && strategy.transactionVolume !== volumeFilter) {
            matches = false;
        }

        if (taxFilter && strategy.taxComplexity !== taxFilter) {
            matches = false;
        }

        if (durabilityFilter && strategy.durability !== durabilityFilter) {
            matches = false;
        }

        if (claudeFilter) {
            if (claudeFilter === 'research' && strategy.claudeRole !== 'research') {
                matches = false;
            } else if (claudeFilter === 'execution' && strategy.claudeRole !== 'execution') {
                matches = false;
            } else if (claudeFilter === 'both' && strategy.claudeRole === 'both') {
                matches = true;
            }
        }

        return matches;
    });

    renderStrategies(filteredStrategies);
}

// Reset all filters
function resetFilters() {
    document.getElementById('platform-filter').value = '';
    document.getElementById('volume-filter').value = '';
    document.getElementById('tax-filter').value = '';
    document.getElementById('durability-filter').value = '';
    document.getElementById('claude-filter').value = '';
    filteredStrategies = [...strategies];
    renderStrategies(strategies);
}

// Render strategy cards
function renderStrategies(strategiesToRender) {
    const container = document.getElementById('strategies-container');
    const count = document.getElementById('strategy-count');

    count.textContent = strategiesToRender.length;

    if (strategiesToRender.length === 0) {
        container.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1;">
                <h3>No strategies found</h3>
                <p>Try adjusting your filters to see more results.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = strategiesToRender.map(strategy => createStrategyCard(strategy)).join('');
}

// Create a strategy card HTML element
function createStrategyCard(strategy) {
    const platformLabel = getPlatformLabel(strategy.platform);
    const volumeLabel = strategy.transactionVolume.charAt(0).toUpperCase() + strategy.transactionVolume.slice(1);
    const taxLabel = strategy.taxComplexity.charAt(0).toUpperCase() + strategy.taxComplexity.slice(1);
    const durabilityLabel = strategy.durability.charAt(0).toUpperCase() + strategy.durability.slice(1);

    const sourcesHTML = strategy.sources.map(source => 
        `<a href="${source.url}" target="_blank" class="source-link">${source.title}</a>`
    ).join('');

    return `
        <div class="strategy-card">
            <h3>${strategy.name}</h3>
            <span class="platform-badge">${platformLabel}</span>
            <p class="edge-type"><strong>Edge:</strong> ${strategy.edgeType}</p>
            <p>${strategy.description}</p>
            
            <div class="strategy-details">
                <div class="detail-row">
                    <span class="detail-label">Durability:</span>
                    <span class="badge durability-${strategy.durability}">${durabilityLabel}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Transaction Volume:</span>
                    <span class="badge ${strategy.transactionVolume}">${volumeLabel}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Tax Complexity:</span>
                    <span class="badge ${strategy.taxComplexity}">${taxLabel}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Claude Role:</span>
                    <span class="detail-value">${strategy.claudeRole.charAt(0).toUpperCase() + strategy.claudeRole.slice(1)}</span>
                </div>
            </div>

            <div class="tax-notes">
                <strong>Tax Notes:</strong> ${strategy.taxNotes}
            </div>

            <div class="sources-section">
                <h4>Sources:</h4>
                ${sourcesHTML}
            </div>
        </div>
    `;
}

// Get platform label
function getPlatformLabel(platform) {
    const labels = {
        'polymarket': 'Polymarket',
        'kalshi': 'Kalshi',
        'stocks': 'Stocks/Options/Futures',
        'saas': 'SaaS/Business'
    };
    return labels[platform] || platform;
}

// Update last updated timestamp
function updateLastUpdated() {
    document.getElementById('last-updated').textContent = lastUpdated;
}
