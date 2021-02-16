import Button from './button.vue'

/**
 * simply assign to a const and export!
 * jest will read the describe as is inside this file
 * the export is used in the stories.js file!
 */
const ButtonTests = describe('Button', function() {
  it('should contain btn class', function() {
    const wrapper = shallowMount(Button)
    expect(wrapper.classes()).toContain('btn')
  })
})

export { ButtonTests }