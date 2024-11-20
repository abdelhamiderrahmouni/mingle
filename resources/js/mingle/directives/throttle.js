// throttle.js
export default {
    mounted(el, binding) {
        const delay = parseInt(binding.arg, 10) || 300; // Default throttle delay is 300ms
        let lastExecution = 0;

        el.addEventListener('input', (event) => {
            const now = Date.now();
            if (now - lastExecution >= delay) {
                binding.value(event);
                lastExecution = now;
            }
        });
    },
};
