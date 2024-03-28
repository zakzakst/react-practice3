---
to: "<%= file_type === 'component' ? `src/components/${dir}/${h.capitalize(name)}.tsx` : null %>"
---
console.log("<%= file_type %>, <%= dir %>, <%= h.changeCase.upper(name) %>")
