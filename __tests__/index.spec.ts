import { mount } from '@vue/test-utils'
import VueDiff from '../src/index'

describe('Plugin and component', () => {
  it('Install plugin', () => {
    const wrapper = mount({
      template: `
        <Diff />
      `
    }, {
      global: {
        plugins: [
          [VueDiff]
        ]
      }
    })
    expect(wrapper.find('.vue-diff-wrapper')).toBeTruthy()
    expect(wrapper.find('.vue-diff-mode-split')).toBeTruthy()
    expect(wrapper.find('.vue-diff-theme-dark')).toBeTruthy()
  })

  it('Set plugin options', () => {
    const wrapper = mount({
      template: `
        <VueDiff />
      `
    }, {
      global: {
        plugins: [
          [VueDiff, {
            componentName: 'VueDiff'
          }]
        ]
      }
    })
    expect(wrapper.find('.vue-diff-wrapper')).toBeTruthy()
    expect(wrapper.find('.vue-diff-mode-split')).toBeTruthy()
    expect(wrapper.find('.vue-diff-theme-dark')).toBeTruthy()
  })

  it('Set component property', () => {
    const wrapper = mount({
      template: `
        <Diff
          mode="unified"
          theme="light"
        />
      `
    }, {
      global: {
        plugins: [
          [VueDiff]
        ]
      }
    })
    expect(wrapper.find('.vue-diff-wrapper')).toBeTruthy()
    expect(wrapper.find('.vue-diff-mode-unified')).toBeTruthy()
    expect(wrapper.find('.vue-diff-theme-light')).toBeTruthy()
  })
})
