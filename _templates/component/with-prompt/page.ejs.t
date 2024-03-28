---
to: "<%= file_type === 'page' ? `src/app${dir}/${name}.tsx` : null %>"
---
console.log("<%= file_type %>, <%= dir %>, <%= name %>")
