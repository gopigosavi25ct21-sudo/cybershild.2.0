function generateWaveform(containerId, numBars) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const bars = [];

    for (let i = 0; i < numBars; i++) {
        const bar = document.createElement('div');
        bar.classList.add('wave-bar');
        
        // Set initial random height
        const height = Math.random() * 80 + 10; // 10% to 90%
        bar.style.height = `${height}%`;
        
        // Random opacity for depth
        bar.style.opacity = Math.random() * 0.5 + 0.5;
        
        container.appendChild(bar);
        bars.push(bar);
    }

    // Animate bars to simulate fluctuating network traffic
    setInterval(() => {
        bars.forEach(bar => {
            // Randomly decide whether to fluctuate this bar
            if (Math.random() > 0.5) {
                const currentHeight = parseFloat(bar.style.height);
                let newHeight = currentHeight + (Math.random() * 20 - 10); // +/- 10%
                
                // Keep within bounds
                if (newHeight < 5) newHeight = 5;
                if (newHeight > 95) newHeight = 95;
                
                bar.style.height = `${newHeight}%`;
            }
        });
    }, 150); // Update every 150ms for a lively feel
}

document.addEventListener('DOMContentLoaded', () => {
    // Generate bars for both charts
    generateWaveform('waveformContainer', 80);
    generateWaveform('miniWaveformContainer', 40);
});
