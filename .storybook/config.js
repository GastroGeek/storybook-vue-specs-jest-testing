import { configure } from '@storybook/vue'

import { loadComponents } from '@/utils/loadComponents'
import { loadStories } from '@/utils/loadStories'

loadComponents()

configure(loadStories, module)