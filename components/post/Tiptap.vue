<template>
  <section>
    <v-toolbar v-if="editor" dense outlined elevation="0">
      <v-btn icon :class="{ 'v-btn--active': editor.isActive('heading', { level: 1 }) }" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()">
        <v-icon>mdi-format-header-1</v-icon>
      </v-btn>
      <v-btn icon :class="{ 'v-btn--active': editor.isActive('heading', { level: 2 }) }" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()">
        <v-icon>mdi-format-header-2</v-icon>
      </v-btn>
      <v-btn icon :class="{ 'v-btn--active': editor.isActive('heading', { level: 3 }) }" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()">
        <v-icon>mdi-format-header-3</v-icon>
      </v-btn>
      <v-btn icon :class="{ 'v-btn--active': editor.isActive('heading', { level: 4 }) }" @click="editor.chain().focus().toggleHeading({ level: 4 }).run()">
        <v-icon>mdi-format-header-4</v-icon>
      </v-btn>
      <v-divider inset vertical></v-divider>
      <v-btn icon :class="{ 'v-btn--active': editor.isActive('bold') }" @click="editor.chain().focus().toggleBold().run()">
        <v-icon>mdi-format-bold</v-icon>
      </v-btn>
      <v-btn icon :class="{ 'v-btn--active': editor.isActive('italic') }" @click="editor.chain().focus().toggleItalic().run()">
        <v-icon>mdi-format-italic</v-icon>
      </v-btn>
      <v-btn icon :class="{ 'v-btn--active': editor.isActive('strike') }" @click="editor.chain().focus().toggleStrike().run()">
        <v-icon>mdi-format-strikethrough</v-icon>
      </v-btn>
      <v-divider inset vertical></v-divider>
      <v-btn icon :class="{ 'v-btn--active': editor.isActive('blockquote') }" @click="editor.chain().focus().toggleBlockquote().run()">
        <v-icon>mdi-format-quote-close</v-icon>
      </v-btn>
      <v-btn icon :class="{ 'v-btn--active': editor.isActive('link') }" @click="setLink">
        <v-icon>mdi-link</v-icon>
      </v-btn>
      <v-btn icon @click="sorry">
        <v-icon>mdi-image</v-icon>
      </v-btn>
      <v-btn icon :class="{ 'v-btn--active': editor.isActive('codeBlock') }" @click="editor.chain().focus().toggleCodeBlock().run()">
        <v-icon>mdi-code-tags</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card>
      <v-card-actions>
        <editor-content id="editor" :editor="editor" />
      </v-card-actions>
    </v-card>
  </section>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'

export default {
  components: {
    EditorContent,
  },

  props: {
    value: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      editor: null,
    }
  },

  watch: {
    value(value) {
      const isSame = this.editor.getHTML() === value
      if (isSame) return
      this.editor.commands.setContent(this.value, false)
    },
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit, Link
      ],
      content: this.value,
      onUpdate: () => {
        this.$emit('input', this.editor.getHTML())
      },
    })
  },

  beforeDestroy() {
    this.editor.destroy()
  },
  
  methods: {
    setLink() {
      const url = window.prompt('URL')

      this.editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url })
        .run()
    },

    sorry() {
      alert('빠른 시일내에 구현하도록 하겠습니다.. ㅜㅜ');
    }
  },
}
</script>

<style lang="scss" scoped>
::v-deep {
  #editor {
    width: 100%
  }
  .ProseMirror {

    > * + * {
      margin-top: 0.75em;
      font-family: 'Noto Sans KR', 'JetBrainsMono', sans-serif;
    }

    ul,
    ol {
      padding: 0 1rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.1;
    }

    h1 {
      font-size: 2.0em;
    }

    code {
      background-color: rgba(#616161, 0.1);
      color: #616161;
    }

    pre {
      background: #292d3e;
      color: #FFF;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;

      code {
        color: inherit;
        padding: 0;
        background: none;
        font-size: 0.8rem;
      }
    }

    img {
      max-width: 100%;
      height: auto;
    }

    blockquote {
      padding-left: 1rem;
      border-left: 2px solid rgba(#0D0D0D, 0.1);
    }

    hr {
      border: none;
      border-top: 2px solid rgba(#0D0D0D, 0.1);
      margin: 2rem 0;
    }

    display: block;
    width: 100%;
    min-height: 60vh;
    border: tomato;
  }

  .ProseMirror:focus {
      outline: none;
  }
}

</style>