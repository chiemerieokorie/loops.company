import { TaskItem, TaskList } from "@tiptap/extension-list";

// Checkbox to-do lists (the `/todo` slash command inserts one) — for underwriting
// checklists. `not-prose` opts the list out of prose bullet styling; the row is a
// flex of [checkbox, text]. The checkbox tint lives in index.css
// (`.astor-doc-editor ul[data-type="taskList"] input`) so it matches the brand.
export const DocumentTaskList = TaskList.configure({
	HTMLAttributes: { class: "not-prose pl-0.5" },
});

export const DocumentTaskItem = TaskItem.configure({
	// Allow nesting a sub-checklist under an item.
	nested: true,
	HTMLAttributes: { class: "my-1 flex items-start gap-2" },
});
