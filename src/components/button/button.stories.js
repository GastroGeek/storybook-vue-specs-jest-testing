import { generateStoryBook } from '@/utils/generateStoryBook'

import MyButton from './button.vue'
import { ButtonTests } from './button.tests.js'

const ButtonTemplate = `
  <my-button>Hello World</my-button>
`

generateStoryBook('Button', [
  {
    name: 'Basic',
    // this is my magic, see .storybook/utils/generateStoryBook.js
    component: {
      components: { MyButton },
      template: ButtonTemplate
    },
    tests: ButtonTests // simples
  }
])