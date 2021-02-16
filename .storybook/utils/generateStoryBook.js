import { storiesOf } from '@storybook/vue'
import { specs } from 'storybook-addon-specifications'

/**
 * you must not use this without my explicit permission...
 * i have expensive lawyers and will sue you
 * ...
 * ...
 * baaaah, just messin. Steal away! (be nice to get a credit mind...)
 */
const generateStoryBook = (storyBookName, stories = []) => {
  let storiesToGenerate = storiesOf(storyBookName, module)

  stories.forEach((story => {
    storiesToGenerate.add(story.name, () => {

      // same old, but pre-wrapped in specs()
      story.tests && specs(() => story.tests)

      return {
        ...story.component
      }
    })
  }))
}

export { generateStoryBook }