export default {
    mounted(el, binding) {
        const delay = parseInt(binding.arg, 10) || 300; // Default delay to 300ms if not provided
        let timeout;

        el.addEventListener('input', (event) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                binding.value(event);
            }, delay);
        });
    },
};
