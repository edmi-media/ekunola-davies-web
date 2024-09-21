import { HeadingNode, HeadingTagType, $createHeadingNode } from "@lexical/rich-text"
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import { $generateHtmlFromNodes, $generateNodesFromDOM } from "@lexical/html"
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary"
import { ContentEditable } from "@lexical/react/LexicalContentEditable"
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin"
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin"
import { LexicalComposer } from "@lexical/react/LexicalComposer"
import { $setBlocksType } from "@lexical/selection"
import { Redo, Undo } from "lucide-react"
import {} from "@lexical/link"
import React from "react"
import { ListItemNode, ListNode, ListType, $createListNode } from "@lexical/list"
import {
	FORMAT_ELEMENT_COMMAND,
	FORMAT_TEXT_COMMAND,
	REDO_COMMAND,
	UNDO_COMMAND,
	EditorThemeClasses,
	ElementFormatType,
	TextFormatType,
	$insertNodes,
	$getSelection,
	$isRangeSelection,
} from "lexical"

import { alignment_types, format_types, heading_types, list_types } from "@/config"
import { cn } from "@/lib"

interface Props {
	onValueChange: (text: string) => void
	className?: string
	defaultValue?: string
}
const theme: EditorThemeClasses = {
	heading: {
		h1: "heading-1",
		h2: "heading-2",
		h3: "heading-3",
		h4: "heading-4",
		h5: "heading-5",
	},
	list: {
		ul: "list-bullet",
		ol: "list-number",
		listitem: "list-item",
	},
	text: {
		bold: "text-bold",
		italic: "text-italic",
		underline: "text-underline",
		strikethrough: "text-line-through",
		subscript: "text-subscript",
		superscript: "text-superscript",
		code: "text-code",
		highlight: "text-highlight",
	},
}

export const Editor = ({ onValueChange, className, defaultValue }: Props) => {
	return (
		<LexicalComposer
			initialConfig={{
				namespace: "Editor",
				nodes: [HeadingNode, ListItemNode, ListNode],
				theme,
				onError: (error) => console.error("editor error: ", error),
			}}>
			<div className="flex w-full items-center gap-1 py-1">
				<CustomHeadingActions />
				<CustomTextActions />
				<CustomAlignmentActions />
				<CustomListActions />
				<CustomHistoryActions />
			</div>
			<RichTextPlugin
				contentEditable={<ContentEditable className={cn("editor", className)} />}
				ErrorBoundary={LexicalErrorBoundary}
			/>
			<HtmlPlugin initialHtml={defaultValue} onHtmlChanged={onValueChange} />
			<HistoryPlugin />
		</LexicalComposer>
	)
}

const CustomHistoryActions = () => {
	const [editor] = useLexicalComposerContext()

	React.useEffect(() => {
		editor.focus()
	}, [editor])

	return (
		<div className="flex items-center gap-1">
			<button
				className="grid size-7 place-items-center rounded-md bg-neutral-400 text-neutral-900 transition-colors hover:bg-neutral-500"
				onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)}>
				<Undo size={16} />
			</button>
			<button
				className="grid size-7 place-items-center rounded-md bg-neutral-400 text-neutral-900 transition-colors hover:bg-neutral-500"
				onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)}>
				<Redo size={16} />
			</button>
		</div>
	)
}

const CustomTextActions = () => {
	const [editor] = useLexicalComposerContext()

	const handleClick = (format: TextFormatType) => {
		editor.dispatchCommand(FORMAT_TEXT_COMMAND, format)
	}

	return (
		<div className="flex items-center gap-1">
			{format_types.map(({ icon: Icon, label }) => (
				<button
					key={label}
					onClick={() => handleClick(label.toLowerCase() as TextFormatType)}
					className="grid size-7 place-items-center rounded-md bg-neutral-400 text-neutral-900 transition-colors hover:bg-neutral-500">
					<Icon size={16} />
				</button>
			))}
		</div>
	)
}

const CustomAlignmentActions = () => {
	const [editor] = useLexicalComposerContext()

	const handleClick = (format: ElementFormatType) => {
		editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, format)
	}

	return (
		<div className="flex items-center gap-1">
			{alignment_types.map(({ icon: Icon, label }) => (
				<button
					key={label}
					onClick={() => handleClick(label.toLowerCase() as ElementFormatType)}
					className="grid size-7 place-items-center rounded-md bg-neutral-400 text-neutral-900 transition-colors hover:bg-neutral-500">
					<Icon size={16} />
				</button>
			))}
		</div>
	)
}

const CustomHeadingActions = () => {
	const [editor] = useLexicalComposerContext()

	const handleClick = (tag: HeadingTagType) => {
		editor.update(() => {
			const selection = $getSelection()
			if ($isRangeSelection(selection)) {
				$setBlocksType(selection, () => $createHeadingNode(tag))
			}
		})
	}

	return (
		<div className="flex items-center gap-1">
			{heading_types.map(({ icon: Icon, label }) => (
				<button
					key={label}
					onClick={() => handleClick(label.toLowerCase() as HeadingTagType)}
					className="grid size-7 place-items-center rounded-md bg-neutral-400 text-neutral-900 transition-colors hover:bg-neutral-500">
					<Icon size={16} />
				</button>
			))}
		</div>
	)
}

const CustomListActions = () => {
	const [editor] = useLexicalComposerContext()

	const handleClick = (list: ListType) => {
		editor.update(() => {
			const selection = $getSelection()
			if ($isRangeSelection(selection)) {
				$setBlocksType(selection, () => $createListNode(list))
			}
		})
	}

	return (
		<div className="flex items-center gap-1">
			{list_types.map(({ icon: Icon, label }) => (
				<button
					key={label}
					onClick={() => handleClick(label.toLowerCase() as ListType)}
					className="grid size-7 place-items-center rounded-md bg-neutral-400 text-neutral-900 transition-colors hover:bg-neutral-500">
					<Icon size={16} />
				</button>
			))}
		</div>
	)
}

interface HtmlPluginProps {
	initialHtml?: string
	onHtmlChanged: (html: string) => void
}

const HtmlPlugin = ({ initialHtml, onHtmlChanged }: HtmlPluginProps) => {
	const [editor] = useLexicalComposerContext()
	const [isFirstRender, setIsFirstRender] = React.useState(true)

	React.useEffect(() => {
		if (!initialHtml || isFirstRender) return
		setIsFirstRender(false)

		editor.update(() => {
			const parser = new DOMParser()
			const dom = parser.parseFromString(initialHtml, "text/html")
			const nodes = $generateNodesFromDOM(editor, dom)
			$insertNodes(nodes)
		})
	}, [editor, initialHtml, isFirstRender])

	return (
		<OnChangePlugin
			onChange={(editorState) => {
				editorState.read(() => {
					onHtmlChanged($generateHtmlFromNodes(editor, null))
				})
			}}
		/>
	)
}
