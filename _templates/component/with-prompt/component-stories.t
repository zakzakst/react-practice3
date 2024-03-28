---
to: "<%= file_type === 'component' ? `src/stories/components/${dir}/${h.capitalize(name)}.stories.tsx` : null %>"
---
console.log("<%= file_type %>, <%= dir %>, <%= h.changeCase.upper(name) %>")
