export function applySystemClasses(root = document) {
    const rules = [
        { prefix: 'w-', cssVar: '--w', unit: 'px', classBase: 'w' },
        { prefix: 'h-', cssVar: '--h', unit: 'px', classBase: 'h' },
        { prefix: 'min-w-', cssVar: '--min-w', unit: 'px', classBase: 'min-w' },
        { prefix: 'max-w-', cssVar: '--max-w', unit: 'px', classBase: 'max-w' },
        { prefix: 'min-h-', cssVar: '--min-h', unit: 'px', classBase: 'min-h' },
        { prefix: 'max-h-', cssVar: '--max-h', unit: 'px', classBase: 'max-h' },
    ];

    root.querySelectorAll('[class]').forEach(el => {
        el.classList.forEach(className => {
            rules.forEach(rule => {
                if (className.startsWith(rule.prefix)) {
                    const value = className.replace(rule.prefix, '');
                    if (!isNaN(value)) {
                        el.style.setProperty(rule.cssVar, `${value}${rule.unit}`);
                        el.classList.add(rule.classBase);
                    }
                }
            });
        });
    });
}

export function initSystemObserver() {
    const observer = new MutationObserver(() => {
        applySystemClasses();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
}