declare module 'slate-react' {
  import * as Slate from 'slate';
  import * as Immutable from 'immutable';
  import { ReactNode } from 'react';

  // Values prefixed with "data-..." (Used for spellchecking according to docs)
  type RenderAttributes = { [key: string]: any };

  type RenderMarkProps = {
    attributes: RenderAttributes;
    children: ReactNode;
    editor: Editor;
    mark: Slate.Mark;
    marks: Immutable.Set<Slate.Mark>;
    node: Slate.Node;
    offset: number;
    text: string;
  };

  type RenderNodeProps = {
    attributes: RenderAttributes;
    children: ReactNode;
    editor: Editor;
    isSelected: boolean;
    key: string;
    node: Slate.Block;
    parent: Slate.Node;
  };

  interface Plugin {
    onBeforeInput?: (event: Event, change: any, editor: Editor) => any | void;
    onBlur?: (event: Event, change: any, editor: Editor) => any | void;
    onFocus?: (event: Event, change: any, editor: Editor) => any | void;
    onClick?: (event: Event, change: any, editor: Editor) => any | void;
    onCopy?: (event: Event, change: any, editor: Editor) => any | void;
    onCut?: (event: Event, change: any, editor: Editor) => any | void;
    onDrop?: (event: Event, change: any, editor: Editor) => any | void;
    onKeyDown?: (event: Event, change: any, editor: Editor) => any | void;
    onKeyUp?: (event: Event, change: any, editor: Editor) => any | void;
    onPaste?: (event: Event, change: any, editor: Editor) => any | void;
    onSelect?: (event: Event, change: any, editor: Editor) => any | void;
    onChange?: (change: any) => any | void;
    renderEditor?: (props: { [key: string]: any }, editor: Editor) => any | void;
    schema?: Slate.Schema;
    decorateNode?: (node: Slate.Node) => Slate.Range[] | void;
    renderMark?: (props: RenderMarkProps) => any;
    renderNode?: (props: RenderNodeProps) => any;
    renderPlaceholder?: (props: { [key: string]: any }) => any;
    renderPortal?: (props: { [key: string]: any }) => any;
    validateNode?: (node: Node) => any;
  }

  type BasicEditorProps = {
    value: Slate.Value;
    autoCorrect?: boolean;
    autoFocus?: boolean;
    className?: string;
    onChange?: (change: any) => void;
    placeholder?: any;
    plugins?: Plugin[];
    readOnly?: boolean;
    role?: string;
    schema?: Slate.Schema;
    spellCheck?: boolean;
    style?: { [key: string]: string };
    tabIndex?: number;
  };

  type EditorProps = BasicEditorProps & Plugin;

  type EditorState = {
    schema: Slate.Schema;
    value: Slate.Value;
    stack: Slate.Stack; // [TODO] define stack
  };

  export class Editor extends React.Component<EditorProps, EditorState> {
    schema: Slate.Schema;
    value: Slate.Value;
    stack: Slate.Stack;

    // Instance Methods
    blur(): void;
    change(fn: (change: any) => any | void): void;
    change(...args: any[]): void;
    focus(): void;
  }

  type SlateType = 'fragment' | 'html' | 'node' | 'rich' | 'text' | 'files';

  export function findDOMNode(node: Slate.Node): Element;
  export function findDOMRange(range: Slate.Range): Range;
  export function findNode(element: Element, value: Slate.Value): Slate.Node;
  export function findRange(selection: Selection, value: Slate.Value): Slate.Range;
  export function getEventRange(event: Event, value: Slate.Value): Slate.Range;
  export function getEventTransfer(event: Event): { type: SlateType; node: Slate.Node };
  export function setEventTransfer(event: Event, type: SlateType, data: any): void;
}
